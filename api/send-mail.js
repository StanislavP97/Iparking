import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ ok: false });

    try {
        const { name, email, phone, message, captchaToken } = req.body;

        const secretKey = process.env.TURNSTILE_SECRET_KEY;

        const verifyResponse = await fetch(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    secret: secretKey,
                    response: captchaToken,
                }),
            }
        );

        const verifyResult = await verifyResponse.json();

        if (!verifyResult.success) {
            return res.status(400).json({ ok: false, error: 'Captcha validation failed.' });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Parkane Parking" <${process.env.GMAIL_USER}>`,
            to: "landing.request@parkane.app",
            subject: `New Lead: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage: ${message}`,
            replyTo: email,
        });

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ ok: false, error: "Server error" });
    }
}
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background px-8 py-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="mb-8 inline-block text-sm text-primary transition-colors hover:text-primary/80">
          {t("legal.back")}
        </Link>
        <h1 className="mb-8 text-3xl font-bold">{t("legal.privacy.title")}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>This Privacy Policy describes how we collect, use, and protect your personal information when you use our mobile application and related services.</p>
          <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, and location data when you register and use the application.</p>
          <h2 className="text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>Your information is used to provide and improve our services, process transactions, send notifications, and ensure the security of our platform.</p>
          <h2 className="text-lg font-semibold text-foreground">3. Data Storage and Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>
          <h2 className="text-lg font-semibold text-foreground">4. Third-Party Services</h2>
          <p>We may use third-party services for analytics and payment processing. These services have their own privacy policies governing the use of your information.</p>
          <h2 className="text-lg font-semibold text-foreground">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You may also withdraw consent for data processing at any time.</p>
          <h2 className="text-lg font-semibold text-foreground">6. Changes to This Policy</h2>
          <p>We reserve the right to update this Privacy Policy. Any changes will be communicated through the application or via email.</p>
          <p className="pt-4 text-xs text-muted-foreground/60">Last updated: March 2025. This is a draft document intended for customization.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

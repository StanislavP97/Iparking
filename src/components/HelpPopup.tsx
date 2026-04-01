import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface HelpPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HelpPopup({ open, onOpenChange }: HelpPopupProps) {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the security check.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.ok) {
          toast.success(t("help.success") || "Message sent successfully!");
          onOpenChange(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          setCaptchaToken("");
        } else {
          toast.error(result.error || "Something went wrong.");
        }
      } else {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        toast.error(`Server error: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("help.title") || "How can we help?"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Input
              name="name"
              placeholder={t("help.name") || "Your Name"}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder={t("help.email") || "Your Email"}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Input
              type="tel"
              name="phone"
              placeholder={t("help.phone") || "Your Phone (Optional)"}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder={t("help.message") || "How can we help you?"}
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-center my-2">
            <Turnstile
              siteKey="0x4AAAAAACy9873FszIdbu4n"
              onSuccess={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken("")}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading || !captchaToken}
          >
            {loading ? "Sending..." : t("help.submit") || "Send Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
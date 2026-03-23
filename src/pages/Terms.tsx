import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

const Terms = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background px-8 py-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="mb-8 inline-block text-sm text-primary transition-colors hover:text-primary/80">
          {t("legal.back")}
        </Link>
        <h1 className="mb-8 text-3xl font-bold">{t("legal.terms.title")}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>These Terms and Conditions govern your use of our mobile application and related services. By using the application, you agree to these terms.</p>
          <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing or using the application, you confirm that you accept these terms and agree to comply with them.</p>
          <h2 className="text-lg font-semibold text-foreground">2. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          <h2 className="text-lg font-semibold text-foreground">3. Use of Service</h2>
          <p>The application provides a platform for sharing parking spaces. You agree to use the service only for lawful purposes and in accordance with these terms.</p>
          <h2 className="text-lg font-semibold text-foreground">4. Payments and Rewards</h2>
          <p>All transactions are processed through secure payment systems. Reward amounts and fees are subject to change and will be communicated in advance.</p>
          <h2 className="text-lg font-semibold text-foreground">5. Limitation of Liability</h2>
          <p>We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
          <h2 className="text-lg font-semibold text-foreground">6. Termination</h2>
          <p>We may suspend or terminate your access to the service at any time for violation of these terms or for any other reason.</p>
          <p className="pt-4 text-xs text-muted-foreground/60">Last updated: March 2025. This is a draft document intended for customization.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

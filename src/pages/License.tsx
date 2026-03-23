import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

const License = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background px-8 py-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="mb-8 inline-block text-sm text-primary transition-colors hover:text-primary/80">
          {t("legal.back")}
        </Link>
        <h1 className="mb-8 text-3xl font-bold">{t("legal.license.title")}</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>This License Agreement establishes the terms under which the mobile application is provided to end users.</p>
          <h2 className="text-lg font-semibold text-foreground">1. Grant of License</h2>
          <p>We grant you a limited, non-exclusive, non-transferable license to use the application for personal, non-commercial purposes.</p>
          <h2 className="text-lg font-semibold text-foreground">2. Restrictions</h2>
          <p>You may not copy, modify, distribute, sell, or lease any part of the application. You may not reverse-engineer or attempt to extract the source code.</p>
          <h2 className="text-lg font-semibold text-foreground">3. Intellectual Property</h2>
          <p>All intellectual property rights in the application and its content remain with us. This agreement does not transfer any ownership rights to you.</p>
          <h2 className="text-lg font-semibold text-foreground">4. Updates</h2>
          <p>We may release updates to the application from time to time. Continued use of the application constitutes acceptance of any updated terms.</p>
          <h2 className="text-lg font-semibold text-foreground">5. Termination</h2>
          <p>This license is effective until terminated. We may terminate it at any time if you fail to comply with any term of this agreement.</p>
          <p className="pt-4 text-xs text-muted-foreground/60">Last updated: March 2025. This is a draft document intended for customization.</p>
        </div>
      </div>
    </div>
  );
};

export default License;

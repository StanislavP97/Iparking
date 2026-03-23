import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-background px-8 py-12 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.about")}
          </h4>
          <a
            href="#contact"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            {t("nav.contacts")}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">© 2021-2025 iParkU Technology</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.download")}
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-xs font-medium text-foreground transition-colors hover:border-primary"
            >
              Google Play
            </a>
            <a
              href="#"
              className="flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-xs font-medium text-foreground transition-colors hover:border-primary"
            >
              App Store
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.payments")}
          </h4>
          <div className="mb-4 flex gap-2">
            <div className="flex h-8 w-12 items-center justify-center rounded bg-secondary text-[10px] font-bold text-foreground/60">VISA</div>
            <div className="flex h-8 w-12 items-center justify-center rounded bg-secondary text-[10px] font-bold text-foreground/60">MC</div>
            <div className="flex h-8 w-12 items-center justify-center rounded bg-secondary text-[10px] font-bold text-foreground/60">MIR</div>
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/license" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              {t("footer.license")}
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              {t("footer.rules")}
            </Link>
            <Link to="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import visa from "@/assets/visa-card.png"
import matserCard from "@/assets/master-card.jpg"


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
          <p className="mt-4 text-xs text-muted-foreground">© 2025 Iparking Technology</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-center text-muted-foreground">
            {t("footer.download")}
          </h4>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="flex h-12 items-center gap-2 rounded-lg border border-foreground/30 px-5 transition-all hover:border-primary"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-foreground" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.38l2.545 1.474c.5.29.5 1.108 0 1.398l-2.545 1.474-2.542-2.673 2.542-2.673zM5.864 3.465l10.937 6.333-2.302 2.302-8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none text-foreground/60">
                  {t("store.google.label")}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {t("store.google.name")}
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex h-12 items-center gap-2 rounded-lg border border-foreground/30 px-5 transition-all hover:border-primary"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-foreground" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none text-foreground/60">
                  {t("store.apple.label")}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {t("store.apple.name")}
                </div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.payments")}
          </h4>
          <div className="mb-4 flex gap-2 justify-center md:justify-start">
            <div className="flex h-8 w-14 items-center justify-center rounded-sm bg-white shadow-sm border border-gray-100">
              <img src={visa} alt="" className="max-h-full object-contain" />
            </div>

            <div className="flex h-8 w-14 items-center justify-center rounded-sm bg-white shadow-sm border border-gray-100">
              <img src={matserCard} alt="" className="max-h-full object-contain" />
            </div>

            <div className="flex h-8 w-14 items-center justify-center rounded-sm bg-white shadow-sm border border-gray-100">
              <svg viewBox="0 0 45 14" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path fill="#00A1D4" d="M4.6 0c-2.5 0-4.6 2.1-4.6 4.6v9.4h4.1V4.6c0-0.3 0.2-0.5 0.5-0.5h0.1c0.3 0 0.5 0.2 0.5 0.5v9.4h4.1V4.6c0-2.5-2.1-4.6-4.7-4.6z" />
                <path fill="#0055A5" d="M15.5 0h-4.1v14h4.1V0zM31.2 0h-7.6v14h4.1V8.5h3.5L34.7 14h4.5L35.6 7.8c1.8-0.6 3.1-2.3 3.1-4.3 0-2.4-1.9-3.5-7.5-3.5zm-3.5 5h3.5c0.4 0 0.8 0.4 0.8 0.8 0 0.4-0.4 0.8-0.8 0.8h-3.5V5z" />
                <path fill="#84BD00" d="M44.4 0h-4.1v14h4.1V0z" />
              </svg>
            </div>
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

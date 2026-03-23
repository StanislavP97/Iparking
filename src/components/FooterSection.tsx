import { useI18n } from "@/lib/i18n";

const FooterSection = () => {
  const { t, lang } = useI18n();

  const licenseUrl =
    lang === "en" ? "https://iparku.info/license_en" :
    lang === "de" ? "https://iparku.info/license_de" :
    "https://iparku.info/license";

  const rulesUrl =
    lang === "en" ? "https://iparku.info/eng/#" :
    lang === "de" ? "https://iparku.info/rules_de" :
    "https://iparku.info/rules";

  const privacyUrl =
    lang === "en" ? "https://iparku.info/policy_en" :
    lang === "de" ? "https://iparku.info/policy_de" :
    "https://iparku.info/policy";

  return (
    <footer className="border-t border-border bg-background px-8 py-12 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Company info */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.about")}
          </h4>
          <a
            href="mailto:support@thewebproduction.com"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            {t("nav.contacts")}
          </a>
          <p className="mt-4 text-xs text-muted-foreground">© 2021-2024 iParkU Technology</p>
        </div>

        {/* Download */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("footer.download")}
          </h4>
          <div className="flex gap-3">
            <a
              href="https://iparku.onelink.me/QmfW/745f913a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-xs font-medium text-foreground transition-colors hover:border-primary"
            >
              Google Play
            </a>
            <a
              href="https://iparku.onelink.me/UwDo/d272b729"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-xs font-medium text-foreground transition-colors hover:border-primary"
            >
              App Store
            </a>
          </div>
        </div>

        {/* Legal & Payments */}
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
            <a href={licenseUrl} className="text-xs text-muted-foreground transition-colors hover:text-primary">
              {t("footer.license")}
            </a>
            <a href={rulesUrl} className="text-xs text-muted-foreground transition-colors hover:text-primary">
              {t("footer.rules")}
            </a>
            <a href={privacyUrl} className="text-xs text-muted-foreground transition-colors hover:text-primary">
              {t("footer.privacy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

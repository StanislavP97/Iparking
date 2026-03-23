import { useI18n } from "@/lib/i18n";
import type { Language } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg-second.jpg";
import { useState } from "react";
import HelpPopup from "@/components/HelpPopup";

const HeroSection = () => {
  const { t, lang, setLang } = useI18n();
  const [helpOpen, setHelpOpen] = useState(false);

  const headlineLines = t("hero.headline").split("\n");

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-full md:w-[65%]">
          <img
            src={heroBg}
            alt="Driver with phone"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
        </div>
      </div>

      <nav className="relative z-20 flex items-center justify-end gap-6 px-8 py-6 md:px-16">
        <a
          href="#contact"
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {t("nav.contacts")}
        </a>
        <button
          onClick={() => setHelpOpen(true)}
          className="flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          {t("nav.help")}
        </button>
        <div className="flex items-center gap-1 text-sm text-foreground/60">
          {(["en", "ru", "ro"] as Language[]).map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span>/</span>}
              <button
                onClick={() => setLang(l)}
                className={`transition-colors hover:text-primary ${lang === l ? "font-semibold text-foreground" : "text-foreground/60"
                  }`}
              >
                {l === "en" ? "En" : l === "ru" ? "Ru" : "Ro"}
              </button>
            </span>
          ))}
        </div>
      </nav>

      <div className="absolute left-1/2 xl:top-[250px] z-20 -translate-x-1/2 md:left-[40%]">
        <div className="rounded-[2rem] border-2 border-dashed border-foreground/40 px-8 py-5 max-sm:px-2 max-sm:py-2 text-center">
          {t("hero.promo.line1").split("\n").map((line, i) => (
            <p key={i} className="text-sm text-foreground/80">{line}</p>
          ))}
          <p className="text-lg font-bold text-foreground">
            <span className="text-primary">{t("hero.promo.count")}</span>{" "}
            {t("hero.promo.line2")}
          </p>
          <p className="font-bold text-primary">{t("hero.promo.line3")}</p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl m-auto flex min-h-[calc(100vh-80px)] flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="mb-6">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Iparkin<span className="text-primary">G</span>
          </h2>
        </div>

        <h1
          className="mb-2 text-3xl font-bold leading-tight md:text-5xl lg:text-[3.2rem]"
          style={{ lineHeight: 1.15 }}
        >
          {headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <div className="mt-10 flex md:flex-row flex-col items-center gap-4">
          <span className="text-sm text-foreground/70">{t("hero.download")}</span>
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

      <HelpPopup open={helpOpen} onOpenChange={setHelpOpen} />
    </section>
  );
};

export default HeroSection;

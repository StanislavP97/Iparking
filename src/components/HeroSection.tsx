import { useI18n } from "@/lib/i18n";
import type { Language } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg-second.jpg";
import { useState } from "react";
import { HelpPopup } from "@/components/HelpPopup";

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

      <div className="absolute left-1/2 xl:top-[230px] z-20 -translate-x-1/2 md:left-[40%]">
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
            Parkan<span className="text-primary">E</span>
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

        <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
            <span className="text-[13px] font-medium tracking-widest uppercase text-white/40">
              {t("hero.download")}
            </span>

            <div className="flex items-center gap-3">
              {[
                {
                  id: "apple",
                  label: t("store.apple.label"),
                  name: t("store.apple.name"),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 22.773 22.773">
                      <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                    </svg>
                  ),
                },
                {
                  id: "google",
                  label: t("store.google.label"),
                  name: t("store.google.name"),
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 64 64">
                      <path fill="#57cef3" d="M7 3v58l33-29z" />
                      <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                      <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                      <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                    </svg>
                  ),
                },
              ].map((store) => (
                <button
                  key={store.id}
                  type="button"
                  className="group flex items-center h-12 gap-3 pl-5 pr-6 rounded-lg border border-white/10 bg-black text-white transition-all duration-300 hover:bg-zinc-900 active:scale-95"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {store.icon}
                  </div>

                  <div className="text-left font-sans relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-white/50 leading-none">
                      {store.label}
                    </p>
                    <p className="text-base font-semibold tracking-tight leading-tight mt-0.5">
                      {store.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <HelpPopup open={helpOpen} onOpenChange={setHelpOpen} />
    </section>
  );
};

export default HeroSection;
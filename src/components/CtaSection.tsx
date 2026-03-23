import { useI18n } from "@/lib/i18n";
import ImageMockup from "@/assets/Mockup.png";

const CtaSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-[#f0f0f0] pt-48 pb-12 px-4 md:py-20 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">

        <div className="w-full md:w-1/2 relative">
          <img
            src={ImageMockup}
            alt="App Mockup"
            className="mx-auto h-auto max-w-full object-contain absolute top-[-320px]"
          />
        </div>

        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="mb-2 text-2xl font-bold text-black md:text-4xl">
            {t("cta.title")}
          </h2>
          <h3 className="mb-4 text-xl font-bold text-primary md:text-3xl">
            {t("cta.subtitle")}
          </h3>
          <p className="mb-10 max-w-md text-sm text-black opacity-80 md:mx-0">
            {t("cta.text")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            {/* Google Play */}
            <a
              href="#"
              className="flex h-14 items-center gap-3 rounded-xl bg-black px-6 text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.38l2.545 1.474c.5.29.5 1.108 0 1.398l-2.545 1.474-2.542-2.673 2.542-2.673zM5.864 3.465l10.937 6.333-2.302 2.302-8.635-8.635z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none text-white/70">
                  {t("store.google.label")}
                </div>
                <div className="text-base font-semibold">
                  {t("store.google.name")}
                </div>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex h-14 items-center gap-3 rounded-xl bg-black px-6 text-white transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none text-white/70">
                  {t("store.apple.label")}
                </div>
                <div className="text-base font-semibold">
                  {t("store.apple.name")}
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
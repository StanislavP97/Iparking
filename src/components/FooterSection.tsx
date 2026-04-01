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
          <p className="mt-4 text-xs text-muted-foreground">© 2025 Parkane Technology</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-center text-muted-foreground">
            {t("footer.download")}
          </h4>
          <div className="flex items-center max-sm:justify-center gap-3">
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

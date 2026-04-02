import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import visa from "@/assets/visa-card.png"
import matserCard from "@/assets/master-card.jpg"

const spring = { type: "spring" as const, stiffness: 120, damping: 20 };
const storeHoverEffects = {
  apple: {
    scale: 1.05,
    boxShadow: "0px 0px 20px 0px rgba(0, 122, 255, 0.4)",
  },
  google: {
    scale: 1.05,
    boxShadow: "0px 0px 20px 0px rgba(52, 168, 83, 0.4)",
  },
} as const;

const FooterSection = () => {
  const { t } = useI18n();

  return (
    <footer id="contacts" className="border-t border-border bg-background px-8 py-12 md:px-16 lg:px-24">
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
          <div className="flex flex-wrap justify-center items-center gap-2">
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
              <motion.button
                key={store.id}
                type="button"
                className="group relative flex h-14 min-w-[198px] items-center gap-3 rounded-xl border-[0.5px] border-white/30 bg-gradient-to-b from-white/[0.22] via-black/55 to-black/75 px-6 text-white backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.26),inset_0_-8px_14px_rgba(0,0,0,0.24),0_14px_32px_rgba(0,0,0,0.40)] transition-all duration-200 active:scale-95"
                whileHover={storeHoverEffects[store.id]}
                whileTap={{ scale: 0.98 }}
                transition={{ ...spring, stiffness: 190, damping: 22 }}
              >
                <div className="flex h-6 w-6 items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  {store.icon}
                </div>

                <div className="relative z-10 text-left font-sans">
                  <p className="text-[10px] uppercase tracking-[0.11em] leading-none text-white/70">
                    {store.label}
                  </p>
                  <p className="mt-0.5 text-[17px] font-bold leading-tight tracking-tight text-white">
                    {store.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
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

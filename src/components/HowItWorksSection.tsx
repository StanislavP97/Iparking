import { useI18n } from "@/lib/i18n";
import { Car, MapPin, Coins } from "lucide-react";

const HowItWorksSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-background px-8 py-20 md:px-16 lg:px-24">
      {/* Section header */}
      <div className="mb-16 text-center">
        <p className="mb-2 text-sm text-muted-foreground md:text-base">
          {t("how.subtitle")}
        </p>
        <h2 className="text-2xl font-bold md:text-4xl">{t("how.title")}</h2>
      </div>

      {/* Finding a spot flow */}
      <div className="mx-auto mb-20 max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">1</span>
            </div>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-foreground/80">{t("how.find.step1")}</p>
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-primary md:block">→</div>
          </div>

          <div className="relative rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">2</span>
            </div>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-foreground/80">{t("how.find.step2")}</p>
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-primary md:block">→</div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">3</span>
            </div>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Coins className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-foreground/80">{t("how.find.step3")}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mb-20 flex max-w-xs items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-lg font-semibold text-muted-foreground">{t("how.or")}</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Leaving a spot flow */}
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">1</span>
            </div>
            <p className="text-sm text-foreground/80">{t("how.leave.step1")}</p>
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-primary md:block">→</div>
          </div>

          <div className="relative rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">2</span>
            </div>
            <p className="text-sm text-foreground/80">{t("how.leave.step2")}</p>
            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-primary md:block">→</div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">3</span>
            </div>
            <p className="text-sm text-foreground/80">{t("how.leave.step3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

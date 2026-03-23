import { useI18n } from "@/lib/i18n";
import { MousePointerClick, Wallet, Fuel, Clock, Leaf, Smile } from "lucide-react";
import type { TranslationKey } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

const benefits: { icon: LucideIcon; titleKey: TranslationKey; textKey: TranslationKey }[] = [
  { icon: MousePointerClick, titleKey: "why.1.title", textKey: "why.1.text" },
  { icon: Wallet, titleKey: "why.2.title", textKey: "why.2.text" },
  { icon: Fuel, titleKey: "why.3.title", textKey: "why.3.text" },
  { icon: Clock, titleKey: "why.4.title", textKey: "why.4.text" },
  { icon: Leaf, titleKey: "why.5.title", textKey: "why.5.text" },
  { icon: Smile, titleKey: "why.6.title", textKey: "why.6.text" },
];

const WhyIparkingSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white px-8 py-20 md:px-16 lg:px-24">
      <h2 className="mb-16 text-center text-2xl text-black font-bold md:text-4xl">{t("why.title")}</h2>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(76,217,100,0.08)]"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <benefit.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-black text-lg font-bold">{t(benefit.titleKey)}</h3>
            <p className="text-sm text-black leading-relaxed text-muted-foreground">{t(benefit.textKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyIparkingSection;

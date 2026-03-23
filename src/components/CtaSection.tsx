import { useI18n } from "@/lib/i18n";

const CtaSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-background px-8 py-20 text-center md:px-16">
      <h2 className="mb-2 text-2xl font-bold md:text-4xl">{t("cta.title")}</h2>
      <h3 className="mb-4 text-xl font-bold text-primary md:text-3xl">{t("cta.subtitle")}</h3>
      <p className="mx-auto max-w-md text-sm text-muted-foreground">{t("cta.text")}</p>
    </section>
  );
};

export default CtaSection;

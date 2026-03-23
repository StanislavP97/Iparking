import { useI18n } from "@/lib/i18n";

const mediaLogos = [
  { name: "BFM" },
  { name: "Вести FM" },
  { name: "VC.ru" },
  { name: "МК" },
  { name: "Коммерсантъ" },
  { name: "Нева24" },
];

const MediaSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-background px-8 py-20 md:px-16 lg:px-24">
      <h2 className="mb-12 text-center text-2xl font-bold md:text-4xl">{t("media.title")}</h2>

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 md:gap-12">
        {mediaLogos.map((media) => (
          <div
            key={media.name}
            className="flex h-10 items-center rounded bg-secondary px-5 text-sm font-semibold text-muted-foreground opacity-60 transition-opacity duration-300 hover:opacity-100"
          >
            {media.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;

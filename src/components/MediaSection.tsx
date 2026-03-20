const mediaLogos = [
  { name: "BFM", url: "https://www.bfm.ru/news/472278", imgUrl: "https://iparku.info/images/main_logo.png" },
  { name: "Вести FM", url: "https://radiovesti.ru/brand/61178/episode/2538604/", imgUrl: "https://iparku.info/images/vestifmlogo_white.svg" },
  { name: "VC.ru", url: "https://vc.ru/transport/247104", imgUrl: "https://iparku.info/images/vc.svg" },
  { name: "МК", url: "https://spb.mk.ru/social/2021/05/18/peterburzhcy-smogut-zarabatyvat-na-parkovkakh.html", imgUrl: "https://iparku.info/images/mk-logo.svg" },
  { name: "Коммерсантъ", url: "http://www.kommersant.ru/doc/4816250", imgUrl: "https://iparku.info/images/Logo_Kommersantsvg.png" },
  { name: "Нева24", url: "https://neva24.ru/biznes/3790", imgUrl: "https://iparku.info/images/neva24-logo.png" },
];

const MediaSection = () => {
  return (
    <section className="bg-background px-8 py-20 md:px-16 lg:px-24">
      <h2 className="mb-12 text-center text-2xl font-bold md:text-4xl">
        СМИ о нас
      </h2>

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 md:gap-12">
        {mediaLogos.map((media) => (
          <a
            key={media.name}
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 transition-opacity duration-300 hover:opacity-100"
          >
            <img
              src={media.imgUrl}
              alt={media.name}
              className="h-8 w-auto brightness-0 invert md:h-10"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;

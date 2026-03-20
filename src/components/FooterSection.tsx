const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background px-8 py-12 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Company info */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            О компании:
          </h4>
          <a
            href="mailto:support@thewebproduction.com"
            className="text-sm text-foreground/80 transition-colors hover:text-primary"
          >
            Контакты
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            © 2021-2024 iParkU Technology
          </p>
        </div>

        {/* Download */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Скачать приложение:
          </h4>
          <div className="flex gap-3">
            <a
              href="https://iparku.onelink.me/QmfW/745f913a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-xs font-medium text-foreground transition-colors hover:border-primary"
            >
              Google Play
            </a>
            <a
              href="https://iparku.onelink.me/UwDo/d272b729"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-xs font-medium text-foreground transition-colors hover:border-primary"
            >
              App Store
            </a>
          </div>
        </div>

        {/* Legal & Payments */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Платежные системы:
          </h4>
          <div className="mb-4 flex gap-2">
            <div className="flex h-8 w-12 items-center justify-center rounded bg-secondary text-[10px] font-bold text-foreground/60">VISA</div>
            <div className="flex h-8 w-12 items-center justify-center rounded bg-secondary text-[10px] font-bold text-foreground/60">MC</div>
            <div className="flex h-8 w-12 items-center justify-center rounded bg-secondary text-[10px] font-bold text-foreground/60">MIR</div>
          </div>
          <div className="flex flex-col gap-1">
            <a href="https://iparku.info/license" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Лицензионное соглашение
            </a>
            <a href="https://iparku.info/rules" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Правила пользования сервисом
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

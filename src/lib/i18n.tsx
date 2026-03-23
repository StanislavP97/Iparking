import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "ru" | "en" | "de";

const translations = {
  // Navigation
  "nav.contacts": { ru: "Контакты", en: "Contact us", de: "Kontaktiere uns" },
  "nav.help": { ru: "Помощь", en: "Help", de: "Help" },

  // Hero promo bubble
  "hero.promo.line1": {
    ru: "Установите приложение\nи получите",
    en: "Download the app and get",
    de: "Laden Sie die App herunter\nund erhalten Sie",
  },
  "hero.promo.count": { ru: "2", en: "2", de: "2" },
  "hero.promo.line2": {
    ru: "первые парковки",
    en: "free",
    de: "kostenlose",
  },
  "hero.promo.line3": { ru: "бесплатно!", en: "parkings!", de: "Parkplätze!" },

  // Hero headline
  "hero.headline": {
    ru: "Паркшеринг!\nПомогая с парковкой,\nполучай кэшбек.",
    en: "Parksharing\n- a new way of parking!",
    de: "Parksharing\n- die neue Art zu parken!",
  },

  // App store
  "hero.download": {
    ru: "Скачать приложение:",
    en: "Available on:",
    de: "Verfügbar auf:",
  },
  "store.google.label": {
    ru: "ДОСТУПНО В",
    en: "GET IT ON",
    de: "JETZT BEI",
  },
  "store.google.name": { ru: "Google Play", en: "Google Play", de: "Google Play" },
  "store.apple.label": {
    ru: "Доступно в",
    en: "Download on the",
    de: "Laden im",
  },
  "store.apple.name": { ru: "App Store", en: "App Store", de: "App Store" },

  // How it works
  "how.subtitle": {
    ru: "Ты указываешь куда тебе нужно ехать и просто начинаешь движение",
    en: "Indicate your destination and go",
    de: "Du gibst an wo Du hinfahren/parken möchtest und fährst einfach los",
  },
  "how.title": {
    ru: "Паркшеринг: как это работает?",
    en: "Parksharing: How does it work?",
    de: "Parksharing: wie funktioniert es?",
  },
  "how.find.step1": {
    ru: "Ты указываешь куда тебе нужно ехать и просто начинаешь движение",
    en: "Indicate your destination and go",
    de: "Du gibst an wo Du hinfahren/parken möchtest und fährst einfach los",
  },
  "how.find.step2": {
    ru: "Мы ищем того, кто готов освободить тебе место, когда ты подъедешь",
    en: "The app finds a car that's ready to leave and share a parking space near your destination",
    de: "Die App sucht jemanden für Dich der Dir seinen Parkplatz in Deiner Zielregion geben möchte",
  },
  "how.find.step3": {
    ru: "Ты подъезжаешь и тебе освобождают место за вознаграждение",
    en: "You arrive and get the space by giving a small reward to that parked driver",
    de: "Du fährst zu Deinem Ziel und bekommst den Parkplatz gegen eine kleine Gebühr",
  },
  "how.or": { ru: "или", en: "OR", de: "ODER" },
  "how.leave.step1": {
    ru: "Тебе скоро уезжать и ты можешь освободить своё парковочное место",
    en: "You're about to leave and are ready to share your parking space",
    de: "Du willst bald losfahren und möchtest Deinen Parkplatz zur Verfügung stellen",
  },
  "how.leave.step2": {
    ru: "Мы находим желающего припарковаться на твоём месте",
    en: "We find a driver who needs your parking space",
    de: "Wir finden jemanden für Dich der Deinen Parkplatz nutzen will",
  },
  "how.leave.step3": {
    ru: "Ты освобождаешь место в момент, когда желающий подъехал и получаешь за это вознаграждение",
    en: "When that driver arrives, you depart and get a reward",
    de: "Du verlässt Deinen Parkplatz wenn die Person die ihn haben möchte ankommt und dafür bekommst Du eine Prämie",
  },

  // CTA
  "cta.title": {
    ru: "Первый паркшеринг.",
    en: "1st parksharing.",
    de: "Die erste parksharing App.",
  },
  "cta.subtitle": {
    ru: "Парковка в 3 клика!",
    en: "Park in 3 clicks!",
    de: "Parken mit 3 Clicks!",
  },
  "cta.text": {
    ru: "Скачай приложение iParkU и парковаться станет проще и быстрее",
    en: "Download the iParkU app, and let parking become easier and quicker",
    de: "Laden Sie die iParkU App herunter und machen Sie das Parken einfacher und schneller.",
  },

  // Why iParkU
  "why.title": { ru: "Почему iParkU?", en: "Why iParkU?", de: "Warum iParkU?" },
  "why.1.title": { ru: "Легко и удобно", en: "Easy and convenient", de: "Leicht und unkompliziert" },
  "why.1.text": {
    ru: "Получить место можно всего за 3 клика. Приложение ищет того, кто готов поменяться с тобой местами в нужном районе.",
    en: "Find a parking space in just 3 clicks. iParkU looks for a driver who is ready to share a parking space near your destination.",
    de: "Du bekommst einen Parkplatz mit nur 3 Clicks. iParkU sucht jemanden der bereit ist Dir seinen Parkplatz in Deiner gewünschten Zielregion zu geben.",
  },
  "why.2.title": { ru: "Возможность заработать", en: "Earn money", de: "Eine Gelegenheit Geld zu verdienen" },
  "why.2.text": {
    ru: "Чем чаще ты пользуешься приложением и освобождаешь места, тем больше зарабатываешь.",
    en: "The more you use the app and offer your parking space, the more you earn.",
    de: "Je öfter Du die App nutzt und Deinen Parkplatz anbietest umso mehr Geld verdienst Du.",
  },
  "why.3.title": { ru: "Экономия денег", en: "Save money", de: "Geld sparen" },
  "why.3.text": {
    ru: "Тебе больше не надо тратить бензин, делая несколько кругов по району. А также оставлять машину на местах, где ее смогут эвакуировать или оштрафовать.",
    en: "You'll no longer waste gas driving in circles looking for a space. Also, iParkU helps to avoid potential parking fines.",
    de: "Du sparst Kraftstoff weil Du nich mehr auf der Suche nach einem Parkplatz durch die Gegend fährst. Und Du vermeidest Gebühren für falsches Parken wenn Du iParkU verwendest.",
  },
  "why.4.title": { ru: "Экономия времени", en: "Save time", de: "Zeit sparen" },
  "why.4.text": {
    ru: "Теперь не надо долго искать парковку — достаточно связаться с помощью приложения с тем, кто уезжает.",
    en: "Stop wasting time on finding a parking space. iParkU finds a car that will soon leave.",
    de: "Du verschwendest keine Zeit mehr einen Parkplatz zu suchen. Öffne einfach die App und finde jemanden der seinen Parkplatz verlässt.",
  },
  "why.5.title": { ru: "Забота об окружающей среде", en: "Green power", de: "Schutz der Umwelt" },
  "why.5.text": {
    ru: "Бережёшь бензин — бережёшь природу. И мы тебе в этом поможем с помощью приложения iParkU.",
    en: "By making city parking quick and efficient, iParkU helps to cut car emissions and pollution.",
    de: "Du sparst Kraftstoff und schonst damit die Umwelt. iParkU hilft Dir dabei.",
  },
  "why.6.title": { ru: "Всегда хорошее настроение", en: "Be confident and assured", de: "Immer gute Laune" },
  "why.6.text": {
    ru: "Ты не кружишь по району в поисках парковочного места, никуда не опаздываешь — ничто не испортит твое настроение!",
    en: "Knowing that a parking space awaits you means that you can relax and feel confident that you'll never be late.",
    de: "Du wirst niemals mehr auf Parkplatzsuch durch dien Gegend irren, bist nie mehr zu spät und nichts kann Dir mehr Deine gute Laune verderben.",
  },

  // Media
  "media.title": { ru: "СМИ о нас", en: "Media about us", de: "Medien über uns" },

  // Footer
  "footer.about": { ru: "О КОМПАНИИ:", en: "ABOUT US:", de: "Über uns:" },
  "footer.download": { ru: "СКАЧАТЬ ПРИЛОЖЕНИЕ:", en: "AVAILABLE ON:", de: "Verfügbar auf:" },
  "footer.payments": { ru: "ПЛАТЕЖНЫЕ СИСТЕМЫ:", en: "PAYMENT METHODS:", de: "Zahlungsmethoden:" },
  "footer.license": {
    ru: "Лицензионное соглашение",
    en: "License agreement",
    de: "Lizenzvereinbarung",
  },
  "footer.rules": {
    ru: "Правила пользования сервисом",
    en: "Terms of use",
    de: "Nutzungsbedingungen",
  },
  "footer.privacy": {
    ru: "Политика конфиденциальности",
    en: "Privacy policy",
    de: "Datenschutz Bestimmungen",
  },

  // Help popup
  "help.title": { ru: "Как мы можем помочь?", en: "How can we help?", de: "Wie können wir helfen?" },
  "help.submit": { ru: "Отправить", en: "Submit", de: "Einreichen" },
  "help.success": {
    ru: "Спасибо! Ваше сообщение отправлено, свяжемся с вами в ближайшее время.",
    en: "Thank you! Your message has been sent.",
    de: "Danke! Daten gesendet",
  },
  "help.name": { ru: "Имя", en: "Name", de: "Name" },
  "help.email": { ru: "Email", en: "Email", de: "Email" },
  "help.phone": { ru: "Телефон", en: "Phone", de: "Telefon" },
  "help.message": { ru: "Сообщение", en: "Message", de: "Nachricht" },
  "help.consent": {
    ru: "Нажимая кнопку Отправить вы соглашаетесь с политикой конфиденциальности",
    en: "By clicking Submit you agree to the privacy policy",
    de: "Mit dem Klick auf Einreichen stimmen Sie der Datenschutzrichtlinie zu",
  },
} as const;

export type TranslationKey = keyof typeof translations;

type I18nContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextType>({
  lang: "ru",
  setLang: () => {},
  t: (key) => key,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("ru");

  const t = useCallback(
    (key: TranslationKey): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] || entry["ru"] || key;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

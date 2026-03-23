import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "ru" | "en" | "ro";

const translations = {
  "nav.contacts": { ru: "Контакты", en: "Contact us", ro: "Contacte" },
  "nav.help": { ru: "Помощь", en: "Help", ro: "Ajutor" },

  "hero.promo.line1": {
    ru: "Установите приложение\nи получите",
    en: "Download the app and get",
    ro: "Descarcă aplicația\nși primește",
  },
  "hero.promo.count": { ru: "2", en: "2", ro: "2" },
  "hero.promo.line2": {
    ru: "первые парковки",
    en: "free",
    ro: "parcări",
  },
  "hero.promo.line3": { ru: "бесплатно!", en: "parkings!", ro: "gratuite!" },

  "hero.headline": {
    ru: "Паркшеринг!\nПомогая с парковкой,\nполучай кэшбек.",
    en: "Parksharing\n- a new way of parking!",
    ro: "Parksharing\n- un nou mod de parcare!",
  },

  "hero.download": {
    ru: "Скачать приложение:",
    en: "Available on:",
    ro: "Disponibil pe:",
  },
  "store.google.label": {
    ru: "ДОСТУПНО В",
    en: "GET IT ON",
    ro: "DISPONIBIL PE",
  },
  "store.google.name": { ru: "Google Play", en: "Google Play", ro: "Google Play" },
  "store.apple.label": {
    ru: "Доступно в",
    en: "Download on the",
    ro: "Descarcă din",
  },
  "store.apple.name": { ru: "App Store", en: "App Store", ro: "App Store" },

  "how.subtitle": {
    ru: "Ты указываешь куда тебе нужно ехать и просто начинаешь движение",
    en: "Indicate your destination and go",
    ro: "Indică destinația și pornește la drum",
  },
  "how.title": {
    ru: "Паркшеринг: как это работает?",
    en: "Parksharing: How does it work?",
    ro: "Parksharing: cum funcționează?",
  },
  "how.find.step1": {
    ru: "Ты указываешь куда тебе нужно ехать и просто начинаешь движение",
    en: "Indicate your destination and go",
    ro: "Indică destinația și pornește la drum",
  },
  "how.find.step2": {
    ru: "Мы ищем того, кто готов освободить тебе место, когда ты подъедешь",
    en: "The app finds a car that's ready to leave and share a parking space near your destination",
    ro: "Aplicația găsește o mașină care este gata să plece și să elibereze un loc de parcare lângă destinația ta",
  },
  "how.find.step3": {
    ru: "Ты подъезжаешь и тебе освобождают место за вознаграждение",
    en: "You arrive and get the space by giving a small reward to that parked driver",
    ro: "Ajungi și primești locul oferind o mică recompensă șoferului parcat",
  },
  "how.or": { ru: "или", en: "OR", ro: "SAU" },
  "how.leave.step1": {
    ru: "Тебе скоро уезжать и ты можешь освободить своё парковочное место",
    en: "You're about to leave and are ready to share your parking space",
    ro: "Ești pe punctul de a pleca și ești gata să împarți locul tău de parcare",
  },
  "how.leave.step2": {
    ru: "Мы находим желающего припарковаться на твоём месте",
    en: "We find a driver who needs your parking space",
    ro: "Găsim un șofer care are nevoie de locul tău de parcare",
  },
  "how.leave.step3": {
    ru: "Ты освобождаешь место в момент, когда желающий подъехал и получаешь за это вознаграждение",
    en: "When that driver arrives, you depart and get a reward",
    ro: "Când șoferul ajunge, tu pleci și primești o recompensă",
  },

  "cta.title": {
    ru: "Первый паркшеринг.",
    en: "1st parksharing.",
    ro: "Prima aplicație de parksharing.",
  },
  "cta.subtitle": {
    ru: "Парковка в 3 клика!",
    en: "Park in 3 clicks!",
    ro: "Parcarea în 3 clickuri!",
  },
  "cta.text": {
    ru: "Скачай приложение и парковаться станет проще и быстрее",
    en: "Download the app, and let parking become easier and quicker",
    ro: "Descarcă aplicația și parcarea va deveni mai ușoară și mai rapidă",
  },

  "why.title": { ru: "Почему выбрать нас?", en: "Why choose us?", ro: "De ce să ne alegi?" },
  "why.1.title": { ru: "Легко и удобно", en: "Easy and convenient", ro: "Ușor și comod" },
  "why.1.text": {
    ru: "Получить место можно всего за 3 клика. Приложение ищет того, кто готов поменяться с тобой местами в нужном районе.",
    en: "Find a parking space in just 3 clicks. The app looks for a driver who is ready to share a parking space near your destination.",
    ro: "Găsește un loc de parcare în doar 3 clickuri. Aplicația caută un șofer care este gata să împărtășească un loc de parcare lângă destinația ta.",
  },
  "why.2.title": { ru: "Возможность заработать", en: "Earn money", ro: "Câștigă bani" },
  "why.2.text": {
    ru: "Чем чаще ты пользуешься приложением и освобождаешь места, тем больше зарабатываешь.",
    en: "The more you use the app and offer your parking space, the more you earn.",
    ro: "Cu cât folosești mai mult aplicația și oferi locul tău de parcare, cu atât câștigi mai mult.",
  },
  "why.3.title": { ru: "Экономия денег", en: "Save money", ro: "Economisește bani" },
  "why.3.text": {
    ru: "Тебе больше не надо тратить бензин, делая несколько кругов по району. А также оставлять машину на местах, где ее смогут эвакуировать или оштрафовать.",
    en: "You'll no longer waste gas driving in circles looking for a space. Also helps to avoid potential parking fines.",
    ro: "Nu vei mai irosi combustibil conducând în cercuri căutând un loc. De asemenea, te ajută să eviți eventualele amenzi de parcare.",
  },
  "why.4.title": { ru: "Экономия времени", en: "Save time", ro: "Economisește timp" },
  "why.4.text": {
    ru: "Теперь не надо долго искать парковку — достаточно связаться с помощью приложения с тем, кто уезжает.",
    en: "Stop wasting time on finding a parking space. The app finds a car that will soon leave.",
    ro: "Nu mai pierzi timp căutând un loc de parcare. Aplicația găsește o mașină care va pleca în curând.",
  },
  "why.5.title": { ru: "Забота об окружающей среде", en: "Green power", ro: "Protejarea mediului" },
  "why.5.text": {
    ru: "Бережёшь бензин — бережёшь природу. И мы тебе в этом поможем с помощью приложения.",
    en: "By making city parking quick and efficient, the app helps to cut car emissions and pollution.",
    ro: "Făcând parcarea rapidă și eficientă, aplicația ajută la reducerea emisiilor și poluării.",
  },
  "why.6.title": { ru: "Всегда хорошее настроение", en: "Be confident and assured", ro: "Mereu bine dispus" },
  "why.6.text": {
    ru: "Ты не кружишь по району в поисках парковочного места, никуда не опаздываешь — ничто не испортит твое настроение!",
    en: "Knowing that a parking space awaits you means that you can relax and feel confident that you'll never be late.",
    ro: "Știind că un loc de parcare te așteaptă înseamnă că te poți relaxa și fi sigur că nu vei întârzia niciodată.",
  },

  "media.title": { ru: "СМИ о нас", en: "Media about us", ro: "Media despre noi" },

  "footer.about": { ru: "О КОМПАНИИ:", en: "ABOUT US:", ro: "DESPRE NOI:" },
  "footer.download": { ru: "СКАЧАТЬ ПРИЛОЖЕНИЕ:", en: "AVAILABLE ON:", ro: "DISPONIBIL PE:" },
  "footer.payments": { ru: "ПЛАТЕЖНЫЕ СИСТЕМЫ:", en: "PAYMENT METHODS:", ro: "METODE DE PLATĂ:" },
  "footer.license": {
    ru: "Лицензионное соглашение",
    en: "License agreement",
    ro: "Acord de licență",
  },
  "footer.rules": {
    ru: "Правила пользования сервисом",
    en: "Terms of use",
    ro: "Termeni de utilizare",
  },
  "footer.privacy": {
    ru: "Политика конфиденциальности",
    en: "Privacy policy",
    ro: "Politica de confidențialitate",
  },

  "help.title": { ru: "Как мы можем помочь?", en: "How can we help?", ro: "Cum vă putem ajuta?" },
  "help.submit": { ru: "Отправить", en: "Submit", ro: "Trimite" },
  "help.success": {
    ru: "Спасибо! Ваше сообщение отправлено, свяжемся с вами в ближайшее время.",
    en: "Thank you! Your message has been sent.",
    ro: "Mulțumim! Mesajul dvs. a fost trimis.",
  },
  "help.name": { ru: "Имя", en: "Name", ro: "Nume" },
  "help.email": { ru: "Email", en: "Email", ro: "Email" },
  "help.phone": { ru: "Телефон", en: "Phone", ro: "Telefon" },
  "help.message": { ru: "Сообщение", en: "Message", ro: "Mesaj" },
  "help.consent": {
    ru: "Нажимая кнопку Отправить вы соглашаетесь с политикой конфиденциальности",
    en: "By clicking Submit you agree to the privacy policy",
    ro: "Prin apăsarea butonului Trimite sunteți de acord cu politica de confidențialitate",
  },

  "legal.privacy.title": { ru: "Политика конфиденциальности", en: "Privacy Policy", ro: "Politica de confidențialitate" },
  "legal.terms.title": { ru: "Правила пользования сервисом", en: "Terms & Conditions", ro: "Termeni și condiții" },
  "legal.license.title": { ru: "Лицензионное соглашение", en: "License Agreement", ro: "Acord de licență" },
  "legal.back": { ru: "← Назад", en: "← Back", ro: "← Înapoi" },
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

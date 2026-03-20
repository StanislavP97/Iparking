import { MousePointerClick, Wallet, Fuel, Clock, Leaf, Smile } from "lucide-react";

const benefits = [
  {
    icon: MousePointerClick,
    title: "Легко и удобно",
    description: "Получить место можно всего за 3 клика. Приложение ищет того, кто готов поменяться с тобой местами в нужном районе.",
  },
  {
    icon: Wallet,
    title: "Возможность заработать",
    description: "Чем чаще ты пользуешься приложением и освобождаешь места, тем больше зарабатываешь.",
  },
  {
    icon: Fuel,
    title: "Экономия денег",
    description: "Тебе больше не надо тратить бензин, делая несколько кругов по району. А также оставлять машину на местах, где ее смогут эвакуировать или оштрафовать.",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Теперь не надо долго искать парковку — достаточно связаться с помощью приложения с тем, кто уезжает.",
  },
  {
    icon: Leaf,
    title: "Забота об окружающей среде",
    description: "Бережёшь бензин — бережёшь природу. И мы тебе в этом поможем с помощью приложения iParkU.",
  },
  {
    icon: Smile,
    title: "Всегда хорошее настроение",
    description: "Ты не кружишь по району в поисках парковочного места, никуда не опаздываешь — ничто не испортит твое настроение!",
  },
];

const WhyIParkUSection = () => {
  return (
    <section className="bg-background px-8 py-20 md:px-16 lg:px-24">
      <h2 className="mb-16 text-center text-2xl font-bold md:text-4xl">
        Почему iParkU?
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(76,217,100,0.08)]"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <benefit.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-lg font-bold">{benefit.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyIParkUSection;

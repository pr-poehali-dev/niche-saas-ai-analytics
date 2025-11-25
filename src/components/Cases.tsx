import Icon from "@/components/ui/icon";

const cases = [
  {
    company: "Сеть салонов красоты",
    industry: "Услуги",
    result: "+28% выручки",
    description: "Прогноз загрузки позволил оптимизировать расписание мастеров и снизить простои на 40%",
    metrics: [
      { label: "Рост выручки", value: "28%" },
      { label: "Снижение простоев", value: "40%" },
    ],
  },
  {
    company: "Локальная сеть магазинов",
    industry: "Ритейл",
    result: "-35% остатков",
    description: "ИИ-прогноз спроса помог сократить излишки товара и освободить складские площади",
    metrics: [
      { label: "Сокращение остатков", value: "35%" },
      { label: "Точность прогноза", value: "92%" },
    ],
  },
  {
    company: "Маркетинговое агентство",
    industry: "Маркетинг",
    result: "5 часов/неделю",
    description: "Автоматизация отчётов клиентам высвободила время на стратегическую работу",
    metrics: [
      { label: "Экономия времени", value: "5ч" },
      { label: "Клиенты на автоотчётах", value: "23" },
    ],
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Реальные <span className="gradient-text">кейсы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Истории клиентов, которые уже используют ИИ для роста бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.industry}</div>
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                  <Icon name="Sparkles" className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="text-3xl font-bold gradient-text">{item.result}</div>

              <p className="text-muted-foreground">{item.description}</p>

              <div className="pt-4 border-t border-border space-y-2">
                {item.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <span className="font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;

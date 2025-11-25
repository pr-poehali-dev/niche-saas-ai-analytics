import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовый",
    price: "2 990",
    period: "мес",
    description: "Для начала работы с ИИ-аналитикой",
    features: [
      "1 проект",
      "Автоматические отчёты",
      "3 источника данных",
      "Базовые прогнозы",
      "Email поддержка",
    ],
    highlighted: false,
  },
  {
    name: "Профи",
    price: "7 990",
    period: "мес",
    description: "Для растущего бизнеса",
    features: [
      "3 проекта",
      "Прогнозы + аналитика",
      "10 источников данных",
      "Кастомные дашборды",
      "Приоритетная поддержка",
      "API доступ",
    ],
    highlighted: true,
  },
  {
    name: "Энтерпрайз",
    price: "Договорная",
    period: "",
    description: "Для крупного бизнеса",
    features: [
      "Безлимитные проекты",
      "Кастомные ML-модели",
      "Интеграция с ERP/CRM",
      "Выделенный аналитик",
      "SLA 99.9%",
      "On-premise опция",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Прозрачные <span className="gradient-text">тарифы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Начните бесплатно, платите только за то, что используете
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-500/10 to-cyan-500/10 border-purple-500/50 shadow-lg shadow-purple-500/20 scale-105"
                  : "bg-card border-border hover:border-purple-500/50"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm mb-4">
                  <Icon name="Star" className="w-4 h-4" />
                  Популярный
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-2">₽/{plan.period}</span>}
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90"
                    : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.name === "Энтерпрайз" ? "Связаться" : "Начать"}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
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

export default Pricing;

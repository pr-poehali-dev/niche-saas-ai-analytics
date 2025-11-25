import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "TrendingUp",
    title: "Прогноз спроса",
    description: "ИИ анализирует исторические данные и предсказывает продажи на месяц вперёд",
  },
  {
    icon: "Users",
    title: "Анализ оттока",
    description: "Выявление клиентов с риском ухода и рекомендации по удержанию",
  },
  {
    icon: "BarChart3",
    title: "Визуальные отчёты",
    description: "Интерактивные дашборды с ключевыми метриками вашего бизнеса",
  },
  {
    icon: "Zap",
    title: "Автоматизация",
    description: "Еженедельные отчёты на почту без участия человека",
  },
  {
    icon: "Database",
    title: "Интеграции",
    description: "Подключение Excel, Google Sheets, Яндекс Метрики за 2 клика",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Ваши данные защищены шифрованием и хранятся в России",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Возможности <span className="gradient-text">платформы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё необходимое для аналитики малого и среднего бизнеса в одном сервисе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name={feature.icon as any} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

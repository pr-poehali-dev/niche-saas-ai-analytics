import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50">
            <Icon name="Zap" className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Новое поколение ИИ-аналитики для бизнеса</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Умная аналитика <br />
            <span className="gradient-text">без аналитиков</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прогнозируйте спрос, анализируйте метрики и принимайте решения на основе ИИ. 
            Для малого и среднего бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-opacity text-lg px-8">
              Начать бесплатно
              <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-border/50 hover:border-border">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            {[
              { value: "10к+", label: "Прогнозов" },
              { value: "95%", label: "Точность" },
              { value: "5 мин", label: "Настройка" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

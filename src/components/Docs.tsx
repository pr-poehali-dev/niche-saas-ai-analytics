import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const docSections = [
  {
    icon: "BookOpen",
    title: "Быстрый старт",
    description: "Подключите первый источник данных и получите отчёт за 5 минут",
    link: "#",
  },
  {
    icon: "Code",
    title: "API документация",
    description: "Интегрируйте платформу с вашими сервисами через REST API",
    link: "#",
  },
  {
    icon: "Video",
    title: "Видеоуроки",
    description: "Обучающие ролики по всем возможностям платформы",
    link: "#",
  },
  {
    icon: "MessageCircle",
    title: "FAQ",
    description: "Ответы на частые вопросы по настройке и использованию",
    link: "#",
  },
];

const Docs = () => {
  return (
    <section id="docs" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Документация</span> и поддержка
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё необходимое для быстрого старта и эффективной работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {docSections.map((section, index) => (
            <a
              key={index}
              href={section.link}
              className="p-6 rounded-xl bg-card border border-border hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={section.icon as any} className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {section.title}
                    <Icon name="ArrowRight" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Нужна помощь?</h3>
              <p className="text-muted-foreground">
                Наша команда поддержки готова помочь вам 24/7
              </p>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-opacity">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Написать в поддержку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;

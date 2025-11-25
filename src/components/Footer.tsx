import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                <Icon name="Sparkles" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AI Analytics</span>
            </div>
            <p className="text-muted-foreground text-sm">
              ИИ-аналитика нового поколения для малого и среднего бизнеса
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
              <li><a href="#cases" className="hover:text-foreground transition-colors">Кейсы</a></li>
              <li><a href="#docs" className="hover:text-foreground transition-colors">Документация</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Соцсети</h3>
            <div className="flex gap-3">
              {[
                { icon: "Github", link: "#" },
                { icon: "Twitter", link: "#" },
                { icon: "Linkedin", link: "#" },
                { icon: "MessageCircle", link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 flex items-center justify-center transition-all group"
                >
                  <Icon name={social.icon as any} className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} AI Analytics. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

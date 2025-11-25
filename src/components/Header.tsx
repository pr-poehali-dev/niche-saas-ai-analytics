import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
            <Icon name="Sparkles" className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">AI Analytics</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("hero")} className="text-foreground/80 hover:text-foreground transition-colors">
            Главная
          </button>
          <button onClick={() => scrollToSection("cases")} className="text-foreground/80 hover:text-foreground transition-colors">
            Кейсы
          </button>
          <button onClick={() => scrollToSection("features")} className="text-foreground/80 hover:text-foreground transition-colors">
            Возможности
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-foreground/80 hover:text-foreground transition-colors">
            Тарифы
          </button>
          <button onClick={() => scrollToSection("docs")} className="text-foreground/80 hover:text-foreground transition-colors">
            Документация
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-foreground transition-colors">
            Контакты
          </button>
        </nav>

        <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-opacity">
          Попробовать
        </Button>
      </div>
    </header>
  );
};

export default Header;

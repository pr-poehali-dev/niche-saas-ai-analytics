import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Свяжитесь <span className="gradient-text">с нами</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Напишите нам прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                    <Icon name="Mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">support@aianalytics.ru</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Офис</h3>
                    <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 p-6 rounded-xl bg-card border border-border">
              <div>
                <Input placeholder="Ваше имя" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-background" />
              </div>
              <div>
                <Input placeholder="Компания" className="bg-background" />
              </div>
              <div>
                <Textarea placeholder="Расскажите о вашем проекте" className="bg-background min-h-32" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-opacity">
                Отправить заявку
                <Icon name="Send" className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

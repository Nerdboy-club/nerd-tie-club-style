import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с тобой в ближайшее время. Спасибо за интерес к клубу!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="slide-in-left">
          <h1 className="font-logo text-4xl md:text-5xl text-primary text-center mb-8">
            Свяжись с нами
          </h1>
          <p className="font-nerd text-lg text-center text-muted-foreground mb-12">
            Есть вопросы? Хочешь обсудить индивидуальный заказ? А может, просто поговорить о галстуках?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="retro-card fade-in-up">
            <CardHeader>
              <CardTitle className="font-logo text-2xl text-primary flex items-center">
                <span className="mr-2">✉️</span>
                Напиши нам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-nerd font-semibold text-foreground block mb-2">
                    Как тебя зовут?
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Твое имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="font-nerd"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="font-nerd font-semibold text-foreground block mb-2">
                    Email для связи
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-nerd"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="font-nerd font-semibold text-foreground block mb-2">
                    Твое сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажи, что у тебя на уме..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="font-nerd resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="club" 
                  size="lg" 
                  className="w-full font-nerd"
                >
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Social Media */}
            <Card className="retro-card fade-in-up">
              <CardHeader>
                <CardTitle className="font-logo text-xl text-primary flex items-center">
                  <span className="mr-2">📱</span>
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-nerd-lavender to-nerd-mint rounded-lg">
                  <div>
                    <h3 className="font-nerd font-bold text-foreground">Instagram</h3>
                    <p className="font-nerd text-sm text-foreground/80">@nerdboy.club</p>
                  </div>
                  <a 
                    href="https://instagram.com/nerdboy.club" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    📸
                  </a>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-nerd-yellow to-nerd-burgundy rounded-lg">
                  <div>
                    <h3 className="font-nerd font-bold text-background">Email</h3>
                    <p className="font-nerd text-sm text-background/80">hello@nerdboy.club</p>
                  </div>
                  <a 
                    href="mailto:hello@nerdboy.club"
                    className="text-2xl text-background hover:scale-110 transition-transform"
                  >
                    📧
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="retro-card fade-in-up">
              <CardHeader>
                <CardTitle className="font-logo text-xl text-primary flex items-center">
                  <span className="mr-2">❓</span>
                  Частые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent className="font-nerd space-y-4">
                <div>
                  <h3 className="font-bold text-foreground mb-1">Можно ли заказать индивидуальный дизайн?</h3>
                  <p className="text-sm text-muted-foreground">
                    Конечно! Мы обожаем воплощать в жизнь самые странные идеи. 
                    Напиши нам, и обсудим детали.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-foreground mb-1">Сколько стоит доставка?</h3>
                  <p className="text-sm text-muted-foreground">
                    Зависит от региона: 300-800 ₽. При заказе от 5000 ₽ — бесплатно!
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-foreground mb-1">Как ухаживать за вязаными галстуками?</h3>
                  <p className="text-sm text-muted-foreground">
                    Деликатная стирка в прохладной воде, сушка в расправленном виде. 
                    Полная инструкция прилагается к заказу.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            <Card className="retro-card fade-in-up bg-gradient-to-r from-nerd-mint to-nerd-lavender">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 wobble">🤓</div>
                <h3 className="font-logo text-lg text-foreground mb-2">
                  Забавный факт
                </h3>
                <p className="font-nerd text-sm text-foreground/80">
                  Каждый галстук NERDBOY.CLUB проходит "тест на странность" — 
                  если прохожие не оборачиваются, значит, недостаточно нердовый!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 retro-card p-8">
          <h3 className="font-logo text-2xl text-primary mb-4">
            Присоединяйся к клубу прямо сейчас!
          </h3>
          <p className="font-nerd text-muted-foreground mb-6">
            Подпишись на наш Instagram и получи скидку 10% на первый заказ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://instagram.com/nerdboy.club" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="retro" size="lg" className="font-nerd">
                Подписаться
              </Button>
            </a>
            <Button variant="mint" size="lg" className="font-nerd">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
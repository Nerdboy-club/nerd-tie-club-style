import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Shipping = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="slide-in-left">
          <h1 className="font-logo text-4xl md:text-5xl text-primary text-center mb-8">
            Доставка и оплата
          </h1>
          <p className="font-nerd text-lg text-center text-muted-foreground mb-12">
            Всё просто, как завязывание галстука... если ты умеешь это делать
          </p>
        </div>

        <div className="space-y-8">
          {/* Delivery */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="retro-card fade-in-up">
              <CardHeader>
                <CardTitle className="font-logo text-xl text-primary flex items-center">
                  <span className="mr-2">📦</span>
                  Доставка по России
                </CardTitle>
              </CardHeader>
              <CardContent className="font-nerd space-y-4">
                <div className="flex justify-between items-center">
                  <span>Почта России</span>
                  <Badge variant="secondary">300-500 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>СДЭК</span>
                  <Badge variant="secondary">400-800 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Boxberry</span>
                  <Badge variant="secondary">350-600 ₽</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-4">
                  Сроки доставки: 3-14 дней в зависимости от региона
                </div>
              </CardContent>
            </Card>

            <Card className="retro-card fade-in-up">
              <CardHeader>
                <CardTitle className="font-logo text-xl text-primary flex items-center">
                  <span className="mr-2">🚚</span>
                  Москва и МО
                </CardTitle>
              </CardHeader>
              <CardContent className="font-nerd space-y-4">
                <div className="flex justify-between items-center">
                  <span>Курьер по Москве</span>
                  <Badge className="bg-nerd-yellow text-foreground">400 ₽</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Самовывоз</span>
                  <Badge className="bg-nerd-mint text-foreground">Бесплатно</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-4">
                  Доставка курьером: 1-2 дня<br/>
                  Самовывоз по договоренности
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment */}
          <Card className="retro-card fade-in-up">
            <CardHeader>
              <CardTitle className="font-logo text-2xl text-primary text-center flex items-center justify-center">
                <span className="mr-2">💳</span>
                Способы оплаты
              </CardTitle>
            </CardHeader>
            <CardContent className="font-nerd">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💸</div>
                  <h3 className="font-bold text-foreground mb-2">Наличными</h3>
                  <p className="text-sm text-muted-foreground">
                    При получении курьером или самовывозе
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💳</div>
                  <h3 className="font-bold text-foreground mb-2">Картой</h3>
                  <p className="text-sm text-muted-foreground">
                    Visa, Mastercard, МИР онлайн или при получении
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-bold text-foreground mb-2">СБП</h3>
                  <p className="text-sm text-muted-foreground">
                    Система быстрых платежей по номеру телефона
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Offers */}
          <Card className="retro-card fade-in-up bg-gradient-to-r from-nerd-lavender to-nerd-mint">
            <CardHeader>
              <CardTitle className="font-logo text-2xl text-foreground text-center flex items-center justify-center">
                <span className="mr-2">🎁</span>
                Особые предложения
              </CardTitle>
            </CardHeader>
            <CardContent className="font-nerd text-center space-y-4">
              <div className="bg-background/20 rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-2">Бесплатная доставка</h3>
                <p className="text-foreground/80">
                  При заказе от 5000 ₽ доставляем бесплатно по всей России
                </p>
              </div>
              <div className="bg-background/20 rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-2">Стикеры в подарок</h3>
                <p className="text-foreground/80">
                  К каждому заказу прилагаем набор авторских стикеров NERDBOY.CLUB
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Return Policy */}
          <Card className="retro-card fade-in-up">
            <CardHeader>
              <CardTitle className="font-logo text-xl text-primary flex items-center">
                <span className="mr-2">🔄</span>
                Возврат и обмен
              </CardTitle>
            </CardHeader>
            <CardContent className="font-nerd text-muted-foreground space-y-3">
              <p>
                • Возврат и обмен в течение 14 дней с момента получения
              </p>
              <p>
                • Товар должен быть в оригинальной упаковке и не иметь следов использования
              </p>
              <p>
                • Стоимость обратной доставки оплачивает покупатель
              </p>
              <p>
                • Возврат денег в течение 10 рабочих дней на тот же способ оплаты
              </p>
              <div className="bg-accent/20 rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Важно:</strong> Индивидуальные заказы и товары с персонализацией 
                  возврату и обмену не подлежат (если только с нашей стороны не было брака).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center retro-card p-6">
            <h3 className="font-logo text-xl text-primary mb-4">
              Остались вопросы?
            </h3>
            <p className="font-nerd text-muted-foreground mb-4">
              Пиши в Instagram @nerdboy.club или на почту hello@nerdboy.club
            </p>
            <p className="font-nerd text-sm text-muted-foreground">
              Отвечаем обычно в течение нескольких часов, но иногда можем залипнуть 
              в создании нового дизайна 🎨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
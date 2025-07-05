const About = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="slide-in-left">
          <h1 className="font-logo text-4xl md:text-5xl text-primary text-center mb-8">
            О клубе странных
          </h1>
        </div>

        <div className="space-y-8">
          {/* Main Story */}
          <div className="retro-card p-8 fade-in-up">
            <div className="text-center mb-6">
              <span className="text-6xl wobble inline-block">🤓</span>
            </div>
            <h2 className="font-logo text-2xl text-primary mb-4 text-center">
              NERDBOY.CLUB — это не про пол
            </h2>
            <p className="font-nerd text-lg leading-relaxed text-center text-muted-foreground mb-6">
              Это про узлы, странность и стиль. Мы создаем галстуки для тех, 
              кто не боится выделяться и понимает, что мода — это способ самовыражения, 
              а не следование правилам.
            </p>
          </div>

          {/* Philosophy */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="retro-card p-6 fade-in-up">
              <h3 className="font-logo text-xl text-primary mb-4">Наша философия</h3>
              <ul className="font-nerd space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">🎨</span>
                  <span>Каждый галстук — произведение искусства</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">🤪</span>
                  <span>Странность — это новая норма</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">✨</span>
                  <span>Стиль не зависит от пола и возраста</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">🎯</span>
                  <span>Качество важнее количества</span>
                </li>
              </ul>
            </div>

            <div className="retro-card p-6 fade-in-up">
              <h3 className="font-logo text-xl text-primary mb-4">Что мы делаем</h3>
              <div className="space-y-4 font-nerd text-muted-foreground">
                <div>
                  <h4 className="font-bold text-foreground mb-1">Вязаные галстуки</h4>
                  <p className="text-sm">Теплые, мягкие, уютные. Каждый связан вручную с особой любовью к деталям.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Принтованные дизайны</h4>
                  <p className="text-sm">От мемов до абстракции — печатаем всё, что делает галстук особенным.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Аксессуары</h4>
                  <p className="text-sm">Стикеры, открытки и другие мелочи для полного погружения в атмосферу.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="retro-card p-8 fade-in-up">
            <h3 className="font-logo text-2xl text-primary text-center mb-8">
              История клуба
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-nerd-yellow rounded-full p-2 mt-1">
                  <span className="text-sm font-bold">2023</span>
                </div>
                <div>
                  <h4 className="font-nerd font-bold text-foreground">Начало пути</h4>
                  <p className="font-nerd text-muted-foreground">
                    Первый вязаный галстук "Sad But Crisp" был создан в качестве эксперимента. 
                    Друзья сказали: "Это странно". Мы поняли: "Это идеально".
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-nerd-mint rounded-full p-2 mt-1">
                  <span className="text-sm font-bold">2024</span>
                </div>
                <div>
                  <h4 className="font-nerd font-bold text-foreground">Рождение клуба</h4>
                  <p className="font-nerd text-muted-foreground">
                    NERDBOY.CLUB официально открыл двери для всех любителей необычного стиля. 
                    Первые 100 членов клуба получили особые стикеры.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-nerd-lavender rounded-full p-2 mt-1">
                  <span className="text-sm font-bold">2025</span>
                </div>
                <div>
                  <h4 className="font-nerd font-bold text-foreground">Новые горизонты</h4>
                  <p className="font-nerd text-muted-foreground">
                    Расширяем коллекцию, ищем новых странных друзей и продолжаем доказывать, 
                    что стиль — это не правила, а свобода самовыражения.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Join CTA */}
          <div className="text-center retro-card p-8 bg-gradient-to-r from-nerd-burgundy to-nerd-yellow">
            <h3 className="font-logo text-2xl text-background mb-4">
              Присоединяйся к клубу!
            </h3>
            <p className="font-nerd text-background/90 mb-6">
              Следи за нами в Instagram @nerdboy.club и не пропускай новые поступления
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="https://instagram.com/nerdboy.club" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-nerd font-bold bg-background text-primary px-6 py-3 rounded-lg hover:bg-background/90 transition-colors"
              >
                Instagram
              </a>
              <a 
                href="mailto:hello@nerdboy.club"
                className="font-nerd font-bold bg-background/20 text-background border border-background px-6 py-3 rounded-lg hover:bg-background/30 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
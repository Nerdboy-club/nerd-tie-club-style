import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="slide-in-left">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-6xl wobble">🤓</span>
              <h1 className="font-logo text-5xl md:text-7xl text-primary">
                NERDBOY.CLUB
              </h1>
            </div>
            
            <h2 className="font-nerd text-2xl md:text-4xl font-bold text-foreground mb-4">
              Club for the <span className="text-primary">Weirdly Tied</span>
            </h2>
            
            <p className="font-nerd text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Это не про пол. Это про узлы, странность и стиль. 
              Добро пожаловать в ретро-клуб вязаных и принтованных галстуков.
            </p>
            
            <div className="fade-in-up">
              <Link to="/catalog">
                <Button 
                  variant="club" 
                  size="xl"
                  className="font-logo text-xl hover:animate-bounce-soft"
                >
                  Перейти в каталог
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="font-logo text-3xl md:text-4xl text-center text-primary mb-12">
            Почему мы странные?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="retro-card p-6 text-center">
              <div className="text-4xl mb-4">🧶</div>
              <h4 className="font-logo text-xl text-primary mb-3">Вязаные</h4>
              <p className="font-nerd text-muted-foreground">
                Каждый галстук связан с душой и долей безумия. 
                Теплые, мягкие, абсолютно непрактичные.
              </p>
            </div>
            
            <div className="retro-card p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-logo text-xl text-primary mb-3">Принтованные</h4>
              <p className="font-nerd text-muted-foreground">
                Персонажи, мемы, абстракция — всё, что делает галстук 
                предметом искусства, а не офисной скукоты.
              </p>
            </div>
            
            <div className="retro-card p-6 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="font-logo text-xl text-primary mb-3">Стикеры</h4>
              <p className="font-nerd text-muted-foreground">
                Открытки, стикеры и прочие мелочи для тех, 
                кто понимает эстетику странного.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-nerd-lavender to-nerd-mint">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="font-logo text-3xl md:text-4xl text-foreground mb-6">
            Готов стать частью клуба?
          </h3>
          <p className="font-nerd text-lg text-foreground/80 mb-8">
            Подпишись на @nerdboy.club в Instagram и узнавай о новинках первым!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button variant="retro" size="lg" className="font-nerd">
                Смотреть каталог
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="mint" size="lg" className="font-nerd">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
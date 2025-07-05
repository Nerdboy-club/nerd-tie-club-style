import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import tieSadImg from "@/assets/tie-sad-crisp.jpg";
import tieIdkImg from "@/assets/tie-idk.jpg";
import tieHomeworkImg from "@/assets/tie-homework.jpg";

const Catalog = () => {
  const [filter, setFilter] = useState<"all" | "knitted" | "printed">("all");

  const products = [
    {
      id: "1",
      name: "Sad But Crisp",
      description: "Грустный, но четкий галстук для тех дней, когда хочется выглядеть стильно, несмотря на внутреннюю пустоту.",
      price: "2,500 ₽",
      image: tieSadImg,
      type: "knitted" as const,
      isNew: true
    },
    {
      id: "2", 
      name: "IDK TIE",
      description: "Для тех моментов, когда не знаешь, что надеть, но знаешь, что это должно быть странно.",
      price: "2,200 ₽",
      image: tieIdkImg,
      type: "printed" as const
    },
    {
      id: "3",
      name: "Homework Eater",
      description: "Галстук с монстриком, который съел всю домашку. Идеально для студентов и вечных школьников.",
      price: "2,800 ₽",
      image: tieHomeworkImg,
      type: "knitted" as const,
      isNew: true
    }
  ];

  const filteredProducts = products.filter(product => 
    filter === "all" || product.type === filter
  );

  const filterButtons = [
    { key: "all", label: "Все", count: products.length },
    { key: "knitted", label: "Вязаные", count: products.filter(p => p.type === "knitted").length },
    { key: "printed", label: "Принтованные", count: products.filter(p => p.type === "printed").length }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 slide-in-left">
          <h1 className="font-logo text-4xl md:text-5xl text-primary mb-4">
            Каталог странностей
          </h1>
          <p className="font-nerd text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый галстук — это история. Выбери свою и стань частью клуба.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 fade-in-up">
          {filterButtons.map((btn) => (
            <Button
              key={btn.key}
              variant={filter === btn.key ? "retro" : "outline"}
              onClick={() => setFilter(btn.key as typeof filter)}
              className="font-nerd font-semibold relative"
            >
              {btn.label}
              <Badge 
                variant="secondary" 
                className="ml-2 bg-nerd-yellow text-foreground"
              >
                {btn.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤷‍♂️</div>
            <p className="font-nerd text-lg text-muted-foreground">
              Пока что таких галстуков у нас нет, но мы работаем над этим!
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center retro-card p-8">
          <h3 className="font-logo text-2xl text-primary mb-4">
            Не нашел свой странный галстук?
          </h3>
          <p className="font-nerd text-muted-foreground mb-6">
            Мы всегда рады обсудить индивидуальные заказы и новые идеи!
          </p>
          <Button variant="club" size="lg" className="font-nerd">
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
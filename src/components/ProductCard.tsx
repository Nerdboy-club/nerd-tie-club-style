import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  type: "knitted" | "printed";
  isNew?: boolean;
}

const ProductCard = ({ name, description, price, image, type, isNew }: ProductCardProps) => {
  const typeColors = {
    knitted: "bg-nerd-mint text-foreground",
    printed: "bg-nerd-yellow text-foreground"
  };

  const typeLabels = {
    knitted: "Вязаный",
    printed: "Принтованный"
  };

  return (
    <Card className="retro-card group overflow-hidden h-full">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <Badge className={typeColors[type]}>
              {typeLabels[type]}
            </Badge>
            {isNew && (
              <Badge className="bg-primary text-primary-foreground animate-pulse-glow">
                NEW!
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-logo text-lg mb-2 text-primary group-hover:text-primary-glow transition-colors">
          {name}
        </CardTitle>
        <p className="text-muted-foreground text-sm font-nerd leading-relaxed">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-xl font-bold text-primary font-nerd">
          {price}
        </div>
        <Button 
          variant="nerd" 
          size="sm"
          className="font-nerd font-bold hover:animate-wiggle"
        >
          Добавить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
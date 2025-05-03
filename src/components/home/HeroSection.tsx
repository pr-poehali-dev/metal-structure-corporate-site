
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center bg-gradient-to-r from-zinc-900 to-zinc-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
          alt="Производство металлоконструкций" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Производство <span className="text-yellow-500">металлоконструкций</span> любой сложности
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8">
            Полный комплекс услуг: от проектирования до монтажа. Современное оборудование и высококвалифицированные специалисты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900 font-medium px-8">
              Наши услуги <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

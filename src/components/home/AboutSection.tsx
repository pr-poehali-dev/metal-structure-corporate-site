
import { Button } from '@/components/ui/button';
import StatItem from './StatItem';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">О компании <span className="text-yellow-500">МеталлСтрой</span></h2>
            <p className="text-zinc-700 mb-4">
              Наша компания специализируется на производстве металлоконструкций любой сложности для промышленного и гражданского строительства.
            </p>
            <p className="text-zinc-700 mb-6">
              С 2005 года мы успешно реализовали более 500 проектов различной сложности. Собственное производство площадью 5000 м² и современное оборудование позволяют нам выполнять заказы качественно и в срок.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <StatItem icon="Clock" value="18+" label="лет опыта" />
              <StatItem icon="Users" value="150+" label="сотрудников" />
              <StatItem icon="CheckSquare" value="500+" label="проектов" />
              <StatItem icon="Building" value="5000" label="м² площадь" />
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900">
              Подробнее о компании
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1603066891964-e47e734d4db6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
              alt="Производство металлоконструкций" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

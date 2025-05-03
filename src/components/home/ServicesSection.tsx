
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши <span className="text-yellow-500">услуги</span></h2>
          <p className="text-zinc-700 max-w-3xl mx-auto">
            Предлагаем полный комплекс услуг по проектированию, изготовлению и монтажу металлоконструкций любой сложности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Проектирование" 
            description="Разработка проектной документации любой сложности с учетом всех требований и норм."
            icon="Pen"
          />
          <ServiceCard 
            title="Изготовление" 
            description="Производство металлоконструкций на современном оборудовании с соблюдением всех технологий."
            icon="Hammer"
          />
          <ServiceCard 
            title="Монтаж" 
            description="Профессиональный монтаж металлоконструкций любой сложности на объектах заказчика."
            icon="Wrench"
          />
          <ServiceCard 
            title="Обработка металла" 
            description="Резка, гибка, сварка и другие виды обработки металла с высокой точностью."
            icon="Scissors"
          />
          <ServiceCard 
            title="Покраска" 
            description="Нанесение защитных и декоративных покрытий на металлоконструкции."
            icon="Brush"
          />
          <ServiceCard 
            title="Доставка" 
            description="Организация доставки готовых металлоконструкций на объект заказчика."
            icon="Truck"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

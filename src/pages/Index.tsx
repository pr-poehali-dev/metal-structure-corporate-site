
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Устанавливаем заголовок документа
    document.title = 'МеталлСтрой - Производство металлоконструкций';
    // Устанавливаем мета-тег description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Производство металлоконструкций любой сложности для промышленных и гражданских объектов. Изготовление, проектирование и монтаж.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Производство металлоконструкций любой сложности для промышленных и гражданских объектов. Изготовление, проектирование и монтаж.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] flex items-center bg-gradient-to-r from-zinc-900 to-zinc-800 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
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

        {/* About Section */}
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
                  <div className="flex items-center">
                    <div className="mr-3 text-yellow-500">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">18+</div>
                      <div className="text-zinc-600">лет опыта</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 text-yellow-500">
                      <Icon name="Users" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">150+</div>
                      <div className="text-zinc-600">сотрудников</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 text-yellow-500">
                      <Icon name="CheckSquare" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">500+</div>
                      <div className="text-zinc-600">проектов</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 text-yellow-500">
                      <Icon name="Building" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">5000</div>
                      <div className="text-zinc-600">м² площадь</div>
                    </div>
                  </div>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900">
                  Подробнее о компании
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1603066891964-e47e734d4db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Производство металлоконструкций" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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

        {/* Projects Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши <span className="text-yellow-500">проекты</span></h2>
              <p className="text-zinc-700 max-w-3xl mx-auto">
                За время работы мы реализовали множество проектов различной сложности и масштаба.
              </p>
            </div>

            {isMounted && (
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {[1, 2, 3, 4].map((item) => (
                    <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2 h-full">
                        <div className="bg-zinc-100 rounded-lg overflow-hidden h-full border border-zinc-200 hover:shadow-md transition-shadow">
                          <img 
                            src={`https://images.unsplash.com/photo-151${6000 + item * 100}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                            alt={`Проект ${item}`}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">Промышленный комплекс</h3>
                            <p className="text-zinc-600 text-sm mb-3">Проектирование и изготовление металлоконструкций для промышленного здания.</p>
                            <Button variant="link" className="px-0 text-yellow-600 font-medium hover:text-yellow-700">
                              Подробнее
                              <Icon name="ArrowRight" className="ml-2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            )}
            
            <div className="text-center mt-8">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900">
                Все проекты
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900">Готовы обсудить ваш проект?</h2>
            <p className="text-zinc-800 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для получения консультации и расчета стоимости вашего проекта.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white">
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
                <Icon name="Phone" className="mr-2" size={16} />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

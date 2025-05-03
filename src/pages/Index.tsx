
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Импортируем вынесенные компоненты
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';

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
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

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

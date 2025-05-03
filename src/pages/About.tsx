
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  useEffect(() => {
    // Устанавливаем заголовок документа
    document.title = 'О компании МеталлСтрой - Производство металлоконструкций';
    // Устанавливаем мета-тег description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'История компании МеталлСтрой, наши ценности, миссия, команда и производственные мощности. Более 18 лет опыта в производстве металлоконструкций.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'История компании МеталлСтрой, наши ценности, миссия, команда и производственные мощности. Более 18 лет опыта в производстве металлоконструкций.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] flex items-center bg-gradient-to-r from-zinc-900 to-zinc-800 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="О компании МеталлСтрой" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                О компании <span className="text-yellow-500">МеталлСтрой</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-300">
                Мы создаем надежные металлоконструкции для строительства будущего
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">История и <span className="text-yellow-500">миссия</span> компании</h2>
                <p className="text-zinc-700 mb-4">
                  Компания <strong className="text-zinc-900">МеталлСтрой</strong> была основана в 2005 году группой инженеров-энтузиастов, увлеченных идеей создания качественных металлоконструкций для развития строительной отрасли России.
                </p>
                <p className="text-zinc-700 mb-4">
                  За годы работы мы выросли из небольшого производственного цеха в современное предприятие с полным циклом производства, собственной проектной группой и монтажными бригадами.
                </p>
                <p className="text-zinc-700 mb-6">
                  <strong className="text-zinc-900">Наша миссия</strong> — создавать надежные и долговечные металлоконструкции, которые станут прочным фундаментом для развития бизнеса наших клиентов и будут служить многие десятилетия.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <Icon name="Target" className="text-yellow-500" size={24} />
                  <p className="text-lg font-medium">Стремимся быть лидером отрасли, постоянно совершенствуя технологии и процессы.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Award" className="text-yellow-500" size={24} />
                  <p className="text-lg font-medium">Гарантируем высокое качество, надежность и долговечность нашей продукции.</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                  alt="История компании МеталлСтрой" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-yellow-100 rounded-full mb-4">
                  <Icon name="Clock" className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">18+</h3>
                <p className="text-zinc-600">лет успешной работы на рынке</p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-yellow-100 rounded-full mb-4">
                  <Icon name="Users" className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">150+</h3>
                <p className="text-zinc-600">квалифицированных сотрудников</p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-yellow-100 rounded-full mb-4">
                  <Icon name="CheckSquare" className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-zinc-600">успешно завершенных проектов</p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-yellow-100 rounded-full mb-4">
                  <Icon name="Building" className="text-yellow-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">5000 м²</h3>
                <p className="text-zinc-600">площадь производства</p>
              </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="values" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="values">Наши ценности</TabsTrigger>
                <TabsTrigger value="production">Производство</TabsTrigger>
                <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
              </TabsList>
              <TabsContent value="values" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-white rounded-lg border border-zinc-200 hover:shadow-md transition-shadow">
                    <div className="p-3 rounded-full w-16 h-16 flex items-center justify-center bg-yellow-100 mb-4">
                      <Icon name="Shield" className="text-yellow-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Качество</h3>
                    <p className="text-zinc-600">
                      Мы не идем на компромиссы в вопросах качества. Каждая конструкция проходит строгий контроль на всех этапах производства.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-zinc-200 hover:shadow-md transition-shadow">
                    <div className="p-3 rounded-full w-16 h-16 flex items-center justify-center bg-yellow-100 mb-4">
                      <Icon name="Clock" className="text-yellow-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Надежность</h3>
                    <p className="text-zinc-600">
                      Мы всегда выполняем свои обязательства точно в срок и несем полную ответственность за результат нашей работы.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-zinc-200 hover:shadow-md transition-shadow">
                    <div className="p-3 rounded-full w-16 h-16 flex items-center justify-center bg-yellow-100 mb-4">
                      <Icon name="Lightbulb" className="text-yellow-500" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Инновации</h3>
                    <p className="text-zinc-600">
                      Мы постоянно изучаем новые технологии и внедряем современные решения для улучшения качества нашей продукции.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="production" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Производственные мощности</h3>
                    <p className="text-zinc-700 mb-4">
                      Наше производство оснащено современным высокотехнологичным оборудованием, которое позволяет нам выполнять полный цикл работ по изготовлению металлоконструкций любой сложности.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="Check" className="text-yellow-500 mt-1 mr-2" size={18} />
                        <span className="text-zinc-700">Линия плазменной и газовой резки с ЧПУ</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-yellow-500 mt-1 mr-2" size={18} />
                        <span className="text-zinc-700">Листогибочные прессы и вальцы</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-yellow-500 mt-1 mr-2" size={18} />
                        <span className="text-zinc-700">Автоматизированные сварочные линии</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-yellow-500 mt-1 mr-2" size={18} />
                        <span className="text-zinc-700">Покрасочные камеры</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="text-yellow-500 mt-1 mr-2" size={18} />
                        <span className="text-zinc-700">Крановое оборудование грузоподъемностью до 20 тонн</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Производство металлоконструкций" 
                      className="rounded-lg shadow-md h-48 object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1624365169198-38255ba54160?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Оборудование завода" 
                      className="rounded-lg shadow-md h-48 object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1601055283742-8b27e81b5553?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Производственный цех" 
                      className="rounded-lg shadow-md h-48 object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Инженеры за работой" 
                      className="rounded-lg shadow-md h-48 object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="certificates" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Наши сертификаты и лицензии</h3>
                  <p className="text-zinc-700 max-w-3xl mx-auto">
                    Вся наша продукция сертифицирована и соответствует требованиям ГОСТ и международным стандартам качества.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <Icon name="FileText" className="text-yellow-500 mr-3" size={24} />
                      <h4 className="text-lg font-bold">ГОСТ Р ИСО 9001-2015</h4>
                    </div>
                    <p className="text-zinc-600 mb-4">Сертификат системы менеджмента качества</p>
                    <Button variant="link" className="px-0 text-yellow-600 font-medium hover:text-yellow-700">
                      Посмотреть сертификат
                      <Icon name="ExternalLink" className="ml-2" size={16} />
                    </Button>
                  </div>
                  <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <Icon name="FileText" className="text-yellow-500 mr-3" size={24} />
                      <h4 className="text-lg font-bold">СРО-П-065-02122009</h4>
                    </div>
                    <p className="text-zinc-600 mb-4">Свидетельство СРО о допуске к проектным работам</p>
                    <Button variant="link" className="px-0 text-yellow-600 font-medium hover:text-yellow-700">
                      Посмотреть свидетельство
                      <Icon name="ExternalLink" className="ml-2" size={16} />
                    </Button>
                  </div>
                  <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <Icon name="FileText" className="text-yellow-500 mr-3" size={24} />
                      <h4 className="text-lg font-bold">СРО-С-248-25062012</h4>
                    </div>
                    <p className="text-zinc-600 mb-4">Свидетельство СРО о допуске к строительным работам</p>
                    <Button variant="link" className="px-0 text-yellow-600 font-medium hover:text-yellow-700">
                      Посмотреть свидетельство
                      <Icon name="ExternalLink" className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наша <span className="text-yellow-500">команда</span></h2>
              <p className="text-zinc-700 max-w-3xl mx-auto">
                В нашей компании работают высококвалифицированные специалисты с большим опытом в проектировании и производстве металлоконструкций.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Директор компании" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Александр Иванов</h3>
                  <p className="text-yellow-600 mb-4">Генеральный директор</p>
                  <p className="text-zinc-600 text-sm">15+ лет опыта в управлении производственными предприятиями</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Технический директор" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Елена Петрова</h3>
                  <p className="text-yellow-600 mb-4">Технический директор</p>
                  <p className="text-zinc-600 text-sm">12+ лет опыта в проектировании металлоконструкций</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Главный инженер" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Сергей Смирнов</h3>
                  <p className="text-yellow-600 mb-4">Главный инженер</p>
                  <p className="text-zinc-600 text-sm">10+ лет опыта в производстве металлоконструкций</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Начальник производства" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Дмитрий Козлов</h3>
                  <p className="text-yellow-600 mb-4">Начальник производства</p>
                  <p className="text-zinc-600 text-sm">8+ лет опыта в организации производственных процессов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900">Готовы сотрудничать с нами?</h2>
            <p className="text-zinc-800 mb-8 max-w-2xl mx-auto">
              У нас большой опыт в реализации сложных проектов. Свяжитесь с нами, чтобы обсудить ваш проект.
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

export default About;

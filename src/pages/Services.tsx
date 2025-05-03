
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  useEffect(() => {
    // Устанавливаем заголовок документа
    document.title = 'Услуги МеталлСтрой - Производство металлоконструкций';
    // Устанавливаем мета-тег description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полный спектр услуг по производству металлоконструкций: проектирование, изготовление, монтаж, обработка металла, покраска, доставка.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Полный спектр услуг по производству металлоконструкций: проектирование, изготовление, монтаж, обработка металла, покраска, доставка.';
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
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="Услуги МеталлСтрой" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Наши <span className="text-yellow-500">услуги</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-300">
                Полный комплекс услуг по проектированию, изготовлению и монтажу металлоконструкций любой сложности
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Комплексный подход к <span className="text-yellow-500">производству</span></h2>
              <p className="text-zinc-700 max-w-3xl mx-auto">
                Мы предлагаем полный цикл работ по созданию металлоконструкций — от проектирования до монтажа на объекте заказчика.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Detailed Services */}
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="design" className="w-full">
              <TabsList className="grid w-full md:grid-cols-6 grid-cols-2 gap-2 mb-8">
                <TabsTrigger value="design">Проектирование</TabsTrigger>
                <TabsTrigger value="manufacturing">Изготовление</TabsTrigger>
                <TabsTrigger value="installation">Монтаж</TabsTrigger>
                <TabsTrigger value="processing">Обработка</TabsTrigger>
                <TabsTrigger value="painting">Покраска</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
              </TabsList>
              
              <TabsContent value="design" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Проектирование металлоконструкций</h3>
                    <p className="text-zinc-700 mb-4">
                      Наша проектная группа разрабатывает документацию на металлоконструкции любой сложности с учетом всех строительных норм и правил. Мы используем современные программные комплексы для 3D-моделирования и расчетов.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="FileText" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Рабочая документация КМ, КМД</h4>
                          <p className="text-zinc-600 text-sm">
                            Разработка чертежей стадий КМ (конструкции металлические) и КМД (конструкции металлические деталировочные).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Calculator" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Расчеты конструкций</h4>
                          <p className="text-zinc-600 text-sm">
                            Статические и динамические расчеты прочности, устойчивости и деформативности.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Layers" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">3D-моделирование</h4>
                          <p className="text-zinc-600 text-sm">
                            Создание трехмерных моделей конструкций для визуализации и выявления коллизий.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900">
                        Заказать проектирование
                      </Button>
                      <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                        Прайс-лист
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                      alt="Проектирование металлоконструкций" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="manufacturing" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Изготовление металлоконструкций</h3>
                    <p className="text-zinc-700 mb-4">
                      Производим металлоконструкции любой сложности на собственных производственных мощностях. Современное оборудование и квалифицированный персонал гарантируют высокое качество изделий.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Building" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Строительные металлоконструкции</h4>
                          <p className="text-zinc-600 text-sm">
                            Колонны, балки, фермы, связи, прогоны, лестницы, площадки обслуживания.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Factory" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Технологические металлоконструкции</h4>
                          <p className="text-zinc-600 text-sm">
                            Емкости, бункеры, силосы, опоры трубопроводов, эстакады.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Shield" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Контроль качества</h4>
                          <p className="text-zinc-600 text-sm">
                            Многоступенчатая система контроля на всех этапах производства.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900">
                        Заказать изготовление
                      </Button>
                      <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                        Прайс-лист
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                      alt="Изготовление металлоконструкций" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="installation" className="space-y-6">
                {/* Содержимое для вкладки Монтаж */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Монтаж металлоконструкций</h3>
                    <p className="text-zinc-700 mb-4">
                      Выполняем профессиональный монтаж металлоконструкций любой сложности на объектах заказчика. Бригады опытных монтажников оснащены всем необходимым оборудованием.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Users" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Квалифицированные монтажники</h4>
                          <p className="text-zinc-600 text-sm">
                            Опытные специалисты с допусками к высотным работам.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Wrench" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Современное оборудование</h4>
                          <p className="text-zinc-600 text-sm">
                            Автокраны, подъемники, сварочное оборудование.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-yellow-100 mr-4 mt-1">
                          <Icon name="Clock" className="text-yellow-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Соблюдение сроков</h4>
                          <p className="text-zinc-600 text-sm">
                            Строгое соблюдение графика выполнения работ.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-zinc-900">
                        Заказать монтаж
                      </Button>
                      <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                        Прайс-лист
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                      alt="Монтаж металлоконструкций" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="processing">
                {/* Заглушка для вкладки Обработка (будет создана позже) */}
                <div className="p-12 text-center">
                  <h3 className="text-2xl font-bold mb-4">Обработка металла</h3>
                  <p className="text-zinc-600 mb-4">Подробная информация об услугах обработки металла будет добавлена позднее.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="painting">
                {/* Заглушка для вкладки Покраска (будет создана позже) */}
                <div className="p-12 text-center">
                  <h3 className="text-2xl font-bold mb-4">Покраска металлоконструкций</h3>
                  <p className="text-zinc-600 mb-4">Подробная информация об услугах покраски будет добавлена позднее.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="delivery">
                {/* Заглушка для вкладки Доставка (будет создана позже) */}
                <div className="p-12 text-center">
                  <h3 className="text-2xl font-bold mb-4">Доставка металлоконструкций</h3>
                  <p className="text-zinc-600 mb-4">Подробная информация об услугах доставки будет добавлена позднее.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Как мы <span className="text-yellow-500">работаем</span></h2>
              <p className="text-zinc-700 max-w-3xl mx-auto">
                Процесс работы отлажен годами и позволяет нам выполнять проекты качественно и в срок.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200 mb-8 relative">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 text-zinc-900 flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="text-xl font-bold mb-3">Заявка</h3>
                  <p className="text-zinc-600">
                    Оставьте заявку на сайте или свяжитесь с нами по телефону для обсуждения проекта.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-2 bg-yellow-300 transform translate-x-3"></div>
              </div>
              <div className="relative">
                <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200 mb-8 relative">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 text-zinc-900 flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="text-xl font-bold mb-3">Проектирование</h3>
                  <p className="text-zinc-600">
                    Разрабатываем проектную документацию согласно технического задания.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-2 bg-yellow-300 transform translate-x-3"></div>
              </div>
              <div className="relative">
                <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200 mb-8 relative">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 text-zinc-900 flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="text-xl font-bold mb-3">Производство</h3>
                  <p className="text-zinc-600">
                    Изготавливаем металлоконструкции на собственном производстве.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-2 bg-yellow-300 transform translate-x-3"></div>
              </div>
              <div className="relative">
                <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-200 mb-8 relative">
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 text-zinc-900 flex items-center justify-center text-xl font-bold">4</div>
                  <h3 className="text-xl font-bold mb-3">Монтаж</h3>
                  <p className="text-zinc-600">
                    Доставляем и монтируем конструкции на объекте заказчика.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900">Нужна консультация специалиста?</h2>
            <p className="text-zinc-800 mb-8 max-w-2xl mx-auto">
              Оставьте заявку, и наш менеджер свяжется с вами для уточнения деталей и расчета стоимости.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white">
                Оставить заявку
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

export default Services;

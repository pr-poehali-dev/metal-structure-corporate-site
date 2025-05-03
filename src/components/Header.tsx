
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-zinc-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Icon name="Hammer" className="text-yellow-500" size={24} />
          <span className="text-xl font-bold">МеталлСтрой</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-500 transition-colors">Главная</Link>
          <Link to="/about" className="hover:text-yellow-500 transition-colors">О компании</Link>
          <Link to="/services" className="hover:text-yellow-500 transition-colors">Услуги</Link>
          <Link to="/projects" className="hover:text-yellow-500 transition-colors">Проекты</Link>
          <Link to="/contacts" className="hover:text-yellow-500 transition-colors">Контакты</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-zinc-900">
            Получить консультацию
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-900 text-white">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>Главная</Link>
              <Link to="/about" className="py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>О компании</Link>
              <Link to="/services" className="py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>Услуги</Link>
              <Link to="/projects" className="py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>Проекты</Link>
              <Link to="/contacts" className="py-2 hover:text-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>Контакты</Link>
              <Button className="bg-yellow-500 text-zinc-900 hover:bg-yellow-600 mt-4">
                Получить консультацию
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

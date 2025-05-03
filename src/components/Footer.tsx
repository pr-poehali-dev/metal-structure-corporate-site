
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Icon name="Hammer" className="text-yellow-500 mr-2" size={20} />
              МеталлСтрой
            </h3>
            <p className="text-zinc-400 mb-4">Производство качественных металлоконструкций для промышленных и гражданских объектов с 2005 года.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-yellow-500 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-yellow-500 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-yellow-500 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon name="MapPin" className="text-yellow-500 mt-1 mr-2" size={16} />
                <span className="text-zinc-400">Россия, г. Москва, ул. Промышленная 25, стр. 3</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="text-yellow-500 mr-2" size={16} />
                <span className="text-zinc-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="text-yellow-500 mr-2" size={16} />
                <span className="text-zinc-400">info@metall-stroy.ru</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zinc-400 hover:text-yellow-500 transition-colors">О компании</Link></li>
              <li><Link to="/services" className="text-zinc-400 hover:text-yellow-500 transition-colors">Услуги</Link></li>
              <li><Link to="/projects" className="text-zinc-400 hover:text-yellow-500 transition-colors">Проекты</Link></li>
              <li><Link to="/equipment" className="text-zinc-400 hover:text-yellow-500 transition-colors">Оборудование</Link></li>
              <li><Link to="/contacts" className="text-zinc-400 hover:text-yellow-500 transition-colors">Контакты</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-6 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} МеталлСтрой. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

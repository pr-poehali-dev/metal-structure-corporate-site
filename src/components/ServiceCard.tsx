
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  iconColor?: string;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  iconColor = "text-yellow-500",
  className 
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-zinc-100 p-6 rounded-lg transition-all hover:shadow-lg border border-zinc-200",
      className
    )}>
      <div className={cn("p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4", 
        iconColor === "text-yellow-500" ? "bg-yellow-100" : "bg-zinc-200"
      )}>
        <Icon name={icon} className={iconColor} size={32} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-600 mb-4">{description}</p>
      <Button variant="link" className="px-0 text-yellow-600 font-medium hover:text-yellow-700">
        Подробнее
        <Icon name="ArrowRight" className="ml-2" size={16} />
      </Button>
    </div>
  );
};

export default ServiceCard;

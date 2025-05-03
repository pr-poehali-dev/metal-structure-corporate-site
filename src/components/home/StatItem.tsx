
import Icon from '@/components/ui/icon';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <div className="flex items-center">
      <div className="mr-3 text-yellow-500">
        <Icon name={icon} size={24} />
      </div>
      <div>
        <div className="font-bold text-2xl">{value}</div>
        <div className="text-zinc-600">{label}</div>
      </div>
    </div>
  );
};

export default StatItem;

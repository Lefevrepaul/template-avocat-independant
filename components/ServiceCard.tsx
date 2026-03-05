import Card from './Card';
import Icon from './Icon';
import { Domain } from '@/lib/content';

interface ServiceCardProps {
  service: Domain;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col bg-white dark:bg-gray-800">
      <div className="text-primary-600 mb-5">
        <Icon name={service.icon} className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">{service.description}</p>
      {service.included && service.included.length > 0 && (
        <ul className="space-y-3 mb-6">
          {service.included.map((item, index) => (
            <li key={index} className="flex items-center text-base text-gray-800 dark:text-gray-200">
              <span className="text-primary-600 mr-3 flex-shrink-0">
                <Icon name="check" className="w-5 h-5" />
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

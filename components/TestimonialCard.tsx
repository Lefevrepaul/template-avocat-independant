import Card from './Card';
import { Testimonial } from '@/lib/content';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6 flex-grow">
        {/* Note avec étoiles */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          ))}
        </div>
        
        {/* Contenu du témoignage */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-6 flex-grow">
          {testimonial.content}
        </p>
      </div>
      
      {/* Informations client */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-auto">
        <p className="font-bold text-gray-900 dark:text-white text-lg mb-1">{testimonial.name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{testimonial.role}</p>
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{testimonial.company}</p>
      </div>
    </Card>
  );
}

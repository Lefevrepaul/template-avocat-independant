'use client';

import { useState } from 'react';
import { FAQ, FAQSpecialisation } from '@/lib/content';

interface FAQAccordionProps {
  faqs: FAQ[] | FAQSpecialisation[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(faq.id)}
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
            aria-expanded={openId === faq.id}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <span className="text-primary-600 text-xl flex-shrink-0" aria-hidden="true">
              {openId === faq.id ? '−' : '+'}
            </span>
          </button>
          <div
            id={`faq-answer-${faq.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openId === faq.id 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
            role="region"
            aria-hidden={openId !== faq.id}
          >
            <div className="px-6 py-4 bg-gray-50 text-gray-700">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

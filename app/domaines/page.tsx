'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import FAQAccordion from '@/components/FAQAccordion';
import Icon from '@/components/Icon';
import Card from '@/components/Card';
import { domains } from '@/lib/content';

// Mini FAQ par domaine
const domainFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  'droit-du-travail': [
    {
      question: 'Combien de temps dure une procédure prud\'homale ?',
      answer: 'La durée varie selon la complexité du dossier. En général, une procédure prud\'homale peut durer entre 6 mois et 2 ans. Je vous accompagne à chaque étape.'
    },
    {
      question: 'Puis-je négocier un départ amiable ?',
      answer: 'Oui, je privilégie toujours la négociation amiable quand c\'est possible. Cela permet souvent d\'obtenir un accord satisfaisant plus rapidement et à moindre coût.'
    }
  ],
  'droit-de-la-famille': [
    {
      question: 'Combien coûte un divorce ?',
      answer: 'Les honoraires dépendent de la complexité du dossier (divorce par consentement mutuel, contentieux, présence d\'enfants, etc.). Je vous propose un devis personnalisé lors du premier échange.'
    },
    {
      question: 'Combien de temps dure une procédure de divorce ?',
      answer: 'Un divorce par consentement mutuel peut être finalisé en 2-3 mois. Un divorce contentieux peut prendre 12 à 18 mois selon la complexité.'
    }
  ],
  'droit-penal': [
    {
      question: 'Dois-je répondre aux questions de la police ?',
      answer: 'Vous avez le droit de garder le silence et de demander la présence d\'un avocat. Je vous conseille de me contacter dès que possible pour vous accompagner.'
    },
    {
      question: 'Que se passe-t-il lors d\'une garde à vue ?',
      answer: 'Je peux vous assister lors de votre garde à vue. Mon rôle est de vous conseiller, de vérifier que vos droits sont respectés et de vous accompagner lors des auditions.'
    }
  ],
  'droit-des-affaires': [
    {
      question: 'Quelle structure juridique choisir pour mon entreprise ?',
      answer: 'Le choix dépend de votre activité, vos objectifs et votre situation. Je vous conseille lors d\'un premier échange pour identifier la structure la plus adaptée.'
    },
    {
      question: 'Puis-je rédiger mes contrats commerciaux moi-même ?',
      answer: 'Il est recommandé de faire relire vos contrats par un avocat pour éviter les clauses déséquilibrées ou les risques juridiques. Je peux réviser et optimiser vos contrats.'
    }
  ],
  'droit-immobilier': [
    {
      question: 'Dois-je faire relire mon compromis de vente ?',
      answer: 'Oui, je recommande fortement de faire relire le compromis avant signature. Je vérifie les clauses, les conditions suspensives et je vous conseille sur les points d\'attention.'
    },
    {
      question: 'Que faire en cas de litige avec mon locataire ?',
      answer: 'Je vous accompagne dans la résolution du litige, d\'abord par la négociation amiable, puis si nécessaire par la procédure judiciaire. Je vous conseille sur vos droits et obligations.'
    }
  ],
  'droit-des-etrangers': [
    {
      question: 'Combien de temps pour obtenir un titre de séjour ?',
      answer: 'Les délais varient selon le type de titre demandé et la préfecture. En général, comptez entre 2 et 6 mois. Je vous accompagne dans vos démarches et vous conseille sur les documents nécessaires.'
    },
    {
      question: 'Que faire si ma demande est refusée ?',
      answer: 'Vous pouvez faire un recours. Je vous accompagne dans cette démarche et je vous représente si nécessaire devant le tribunal administratif.'
    }
  ]
};

// Documents utiles par domaine
const domainDocuments: Record<string, string[]> = {
  'droit-du-travail': [
    'Contrat de travail',
    'Bulletins de paie',
    'Avenants au contrat',
    'Correspondances avec l\'employeur',
    'Convention collective applicable'
  ],
  'droit-de-la-famille': [
    'Acte de mariage ou PACS',
    'Livret de famille',
    'Revenus des deux parties',
    'Contrats de location ou actes de propriété',
    'Documents bancaires'
  ],
  'droit-penal': [
    'Convocation ou citation',
    'Procès-verbaux',
    'Correspondances avec les autorités',
    'Documents justificatifs',
    'Témoignages éventuels'
  ],
  'droit-des-affaires': [
    'Statuts de la société',
    'Contrats commerciaux',
    'Factures et devis',
    'Correspondances commerciales',
    'Documents financiers ou bilans si nécessaire'
  ],
  'droit-immobilier': [
    'Compromis ou promesse de vente',
    'Acte de propriété',
    'Bail ou contrat de location',
    'Diagnostics immobiliers',
    'Correspondances avec les parties'
  ],
  'droit-des-etrangers': [
    'Passeport',
    'Titre de séjour actuel',
    'Justificatifs de ressources',
    'Justificatifs de domicile',
    'Documents de l\'administration'
  ]
};

export default function DomainesPage() {
  const [activeDomain, setActiveDomain] = useState<string>(domains[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    domains.forEach((domain) => {
      const element = document.getElementById(domain.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveDomain(domain.id);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToDomain = (domainId: string) => {
    const element = document.getElementById(domainId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveDomain(domainId);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center py-20 md:py-28 overflow-hidden">
        {/* Image de fond Lyon */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Lille-background.jpg"
            alt="Lyon"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Domaines d'intervention
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              J'interviens dans plusieurs domaines du droit pour vous conseiller et vous représenter
            </p>
          </div>
        </Container>
      </section>

      {/* Menu de navigation sticky */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <Container>
          <div className="md:hidden py-4">
            <select
              value={activeDomain}
              onChange={(e) => scrollToDomain(e.target.value)}
              className="w-full px-4 py-3 pr-8 rounded-lg font-medium text-base bg-white border-2 border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              aria-label="Sélectionner un domaine"
            >
              {domains.map((domain) => (
                <option key={domain.id} value={domain.id}>
                  {domain.title}
                </option>
              ))}
            </select>
          </div>

          <nav className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4 py-4 overflow-x-auto" aria-label="Navigation des domaines">
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => scrollToDomain(domain.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-200 whitespace-nowrap ${
                  activeDomain === domain.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-current={activeDomain === domain.id ? 'page' : undefined}
              >
                {domain.title}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* Sections par domaine */}
      {domains.map((domain, index) => (
        <section
          key={domain.id}
          id={domain.id}
          className={`py-20 scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {domain.title}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* À qui ça s'adresse */}
                <Card>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="users" className="w-6 h-6 text-primary-600" />
                    <h3 className="text-2xl font-bold text-gray-900">À qui ça s'adresse</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 leading-relaxed">
                    {domain.idealFor ? (
                      domain.idealFor.split(',').map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block mr-2 text-primary-600">•</span>
                          <span>{item.trim()}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start">
                        <span className="inline-block mr-2 text-primary-600">•</span>
                        <span>Tous ceux qui ont besoin d'un accompagnement juridique dans ce domaine.</span>
                      </li>
                    )}
                  </ul>
                </Card>

                {/* Situations fréquentes */}
                <Card>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="document" className="w-6 h-6 text-primary-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Situations fréquentes</h3>
                  </div>
                  <ul className="space-y-2">
                    {domain.situations.map((situation, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-700">{situation}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Ce que je peux faire */}
                <Card>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="shield-check" className="w-6 h-6 text-primary-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Ce que je peux faire</h3>
                  </div>
                  <ul className="space-y-3">
                    {domain.included?.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="check" className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Documents utiles */}
                <Card>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="document" className="w-6 h-6 text-primary-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Documents utiles</h3>
                  </div>
                  <ul className="space-y-2">
                    {(domainDocuments[domain.id] || []).map((doc, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-primary-600 mr-2 flex-shrink-0">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Mini FAQ */}
              {domainFAQs[domain.id] && domainFAQs[domain.id].length > 0 && (
                <Card className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h3>
                  <FAQAccordion faqs={domainFAQs[domain.id].map((faq, i) => ({ id: `${domain.id}-faq-${i}`, ...faq }))} />
                </Card>
              )}

              {/* CTA */}
              <div className="text-center pt-8 border-t border-gray-200">
                <CTAButton 
                  href={`/contact?domaine=${domain.id}`} 
                  variant="primary" 
                  className="w-full sm:w-auto"
                >
                  Me contacter à propos de ce sujet
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Badge from '@/components/Badge';
import CTAButton from '@/components/CTAButton';
import FAQAccordion from '@/components/FAQAccordion';
import Icon from '@/components/Icon';
import { services, benefits, faqs } from '@/lib/content';

// Icône SVG Check
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Mapping des IDs de services vers les noms de fichiers d'images
const getServiceImage = (serviceId: string): string => {
  const imageMap: Record<string, string> = {
    'creation': 'image création d\'entreprise.jpg',
    'comptabilite': 'images comptabilité.jpg',
    'fiscalite': 'image fiscalité.jpg',
    'social-paie': 'image salaire.jpg',
    'conseil-pilotage': 'image conseil.jpg',
  };
  return imageMap[serviceId] || '';
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  // Observer pour détecter quelle section est visible
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveService(service.id);
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

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      const offset = 100; // Offset pour le menu sticky
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveService(serviceId);
    }
  };

  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center py-20 md:py-28 overflow-hidden">
        {/* Vidéo de fond */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Vidéo de fond"
          >
            <source src="/vidéo hero discussion expert comptable.mp4" type="video/mp4" />
          </video>
          {/* Overlay blanc pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        
        {/* Contenu */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Gagnez du temps, optimisez vos impôts, pilotez sereinement
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Comptabilité, fiscalité, social & paie pour entrepreneurs, indépendants et PME. 
              Un accompagnement sur mesure avec des outils simples et une équipe réactive.
            </p>
            
            {/* Badges de confiance */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="success">Cabinet inscrit à l'Ordre</Badge>
              <Badge variant="info">20 ans d'expérience</Badge>
              <Badge variant="default">Réponse sous 24h</Badge>
              <Badge variant="default">Outils simples</Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="https://calendly.com/votre-calendly" variant="primary" target="_blank" rel="noopener noreferrer">
                Prendre un RDV gratuit (30 min)
              </CTAButton>
              <CTAButton href="/prendre-rdv" variant="secondary">
                Demander un devis
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MENU DE NAVIGATION STICKY */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <Container>
          {/* Sélecteur déroulant sur mobile */}
          <div className="md:hidden py-4">
            <select
              value={activeService}
              onChange={(e) => scrollToService(e.target.value)}
              className="w-full px-4 py-3 pr-8 rounded-lg font-medium text-base bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%209L1%204h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_0.75rem_center] bg-no-repeat"
              style={{ backgroundPosition: 'right 0.5rem center' }}
              aria-label="Sélectionner un service"
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Boutons sur desktop */}
          <nav className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4 py-4 overflow-x-auto" aria-label="Navigation des services">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all duration-200 whitespace-nowrap ${
                  activeService === service.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-current={activeService === service.id ? 'page' : undefined}
              >
                {service.title}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* 3. SECTIONS DES SERVICES */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Layout avec image et contenu */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start mb-16`}>
                {/* Espace pour l'image */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {getServiceImage(service.id) ? (
                      <Image
                        src={`/images/services/${getServiceImage(service.id)}`}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <Icon name={service.icon} className="w-24 h-24 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Image pour {service.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contenu */}
                <div className="w-full lg:w-1/2 flex-1">
                  {/* En-tête du service */}
                  <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                      {service.title}
                    </h2>
                    {service.hook && (
                      <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-medium">
                        {service.hook}
                      </p>
                    )}
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenu détaillé */}
              <div className="max-w-4xl mx-auto space-y-8">
                {service.included && service.included.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Ce qui est inclus
                    </h3>
                    <ul className="space-y-4">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0">
                            <CheckIcon />
                          </span>
                          <span className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.idealFor && (
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border-l-4 border-primary-600">
                    <p className="text-gray-800 dark:text-gray-200">
                      <strong className="text-primary-700 dark:text-primary-300">Idéal pour :</strong>{' '}
                      {service.idealFor}
                    </p>
                  </div>
                )}

                {/* Bénéfices */}
                {service.benefits && service.benefits.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Les bénéfices pour vous
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center">
                          <span className="text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0">
                            <CheckIcon />
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA pour ce service */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                  <CTAButton href="/prendre-rdv" variant="primary" className="w-full sm:w-auto">
                    En parler en RDV gratuit
                  </CTAButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* 4. CE QUE VOUS OBTENEZ */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que vous obtenez
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des bénéfices concrets qui transforment votre quotidien d'entrepreneur
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. FAQ */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de nous confier votre comptabilité
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* 6. CTA FINAL */}
      <Section className="relative text-white overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image background contact bureau.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à retrouver votre sérénité ?
            </h2>
            <p className="text-xl mb-8 text-primary-50 leading-relaxed">
              Rejoignez les centaines d'entrepreneurs qui nous font confiance pour gérer leur comptabilité, 
              optimiser leur fiscalité et piloter leur activité en toute tranquillité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="https://calendly.com/votre-calendly" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50 border-white" target="_blank" rel="noopener noreferrer">
                Prendre un RDV gratuit (30 min)
              </CTAButton>
              <CTAButton href="/prendre-rdv" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white/30">
                Demander un devis
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

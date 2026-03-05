'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import CTAButton from '@/components/CTAButton';
import FAQAccordion from '@/components/FAQAccordion';
import { specialisations, miniTestimonials, faqSpecialisations } from '@/lib/content';

// Icône SVG Check
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Icône SVG Arrow
const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Mapping des IDs de spécialisations vers les noms de fichiers d'images
const getSpecialisationImage = (specialisationId: string): string => {
  const imageMap: Record<string, string> = {
    'entrepreneurs': 'image chef d\'entreprise.jpg',
    'liberales': 'image professions libérales.jpg',
    'pme': 'image pme.jpg',
  };
  return imageMap[specialisationId] || '';
};

export default function SpecialisationsPage() {
  useEffect(() => {
    // Gestion du scroll smooth pour les ancres
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
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
              Un expert-comptable adapté à votre réalité
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Entrepreneurs, indépendants, professions libérales et PME : un accompagnement clair, réactif et orienté pilotage.
            </p>
            
            {/* Badges de confiance */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="success">Cabinet inscrit à l'Ordre</Badge>
              <Badge variant="info">20 ans d'expérience</Badge>
              <Badge variant="default">Réponse sous 24h</Badge>
              <Badge variant="default">Explications claires</Badge>
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

      {/* 2. SÉLECTEUR DE PROFIL */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre profil
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous vous accompagnons selon votre situation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialisations.map((spec) => (
            <div
              key={spec.id}
              onClick={() => scrollToSection(spec.id)}
              className="cursor-pointer group"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image de fond */}
                <div className="absolute inset-0 bg-gray-200">
                  {getSpecialisationImage(spec.id) ? (
                    <Image
                      src={`/images/spécialisation/${getSpecialisationImage(spec.id)}`}
                      alt={spec.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                      <p className="text-gray-500 text-sm">
                        Image {spec.title}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Overlay avec gradient pour la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Titre par-dessus */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {spec.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. SECTIONS DÉTAILLÉES */}
      {specialisations.map((spec, index) => (
        <section
          key={spec.id}
          id={spec.id}
          className={`py-16 scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Titre + tagline */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {spec.title}
                </h2>
                <p className="text-xl text-primary-600 font-semibold">
                  {spec.tagline}
                </p>
              </div>

              {/* Colonnes A et B */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start">
                {/* Colonne A : Vos enjeux fréquents */}
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Vos enjeux fréquents
                  </h3>
                  <ul className="space-y-4 flex-grow">
                    {spec.pains.map((pain, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                        <span className="text-gray-700 leading-relaxed">{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colonne B : Ce qu'on met en place */}
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Ce qu'on met en place
                  </h3>
                  <ul className="space-y-4 flex-grow">
                    {spec.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-primary-600 mr-3 flex-shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-gray-700 leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inclus dans l'accompagnement */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Inclus dans l'accompagnement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {spec.included.map((item, i) => (
                    <div key={i} className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-600">
                      <div className="flex items-center">
                        <span className="text-primary-600 mr-3 flex-shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-gray-800 leading-relaxed">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Encadré Erreurs fréquentes */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Erreurs fréquentes à éviter
                </h3>
                <p className="text-gray-600 mb-6 text-sm italic">
                  (Ton pédagogique, pour vous aider, pas pour vous culpabiliser)
                </p>
                <ul className="space-y-3">
                  {spec.mistakes.map((mistake, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-yellow-600 mr-3 flex-shrink-0">⚠</span>
                      <span className="text-gray-800 leading-relaxed">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ligne preuve */}
              <div className="bg-primary-100 rounded-lg p-6 mb-8 text-center">
                <p className="text-lg text-gray-800 font-medium">
                  {spec.proofLine}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTAButton href="https://calendly.com/votre-calendly" variant="primary" target="_blank" rel="noopener noreferrer">
                  {spec.ctaText}
                </CTAButton>
                <CTAButton href="/prendre-rdv" variant="secondary">
                  Demander un devis
                </CTAButton>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* 4. COMMENT ON TRAVAILLE ENSEMBLE */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment on travaille ensemble
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnostic</h3>
            <p className="text-gray-700 leading-relaxed">
              Nous analysons votre situation actuelle, vos besoins et vos objectifs pour vous proposer un accompagnement sur mesure.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mise en place</h3>
            <p className="text-gray-700 leading-relaxed">
              Nous paramétrons vos outils, organisons la collecte de vos documents et mettons en place un suivi régulier.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pilotage & Optimisation</h3>
            <p className="text-gray-700 leading-relaxed">
              Nous vous fournissons des tableaux de bord mensuels et identifions les opportunités d'optimisation.
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-700 font-medium italic">
            Vous savez où vous en êtes, sans y passer vos soirées.
          </p>
        </div>
      </Section>

      {/* 5. PREUVES SOCIALES */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {miniTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-center flex flex-col h-full">
              <p className="text-gray-700 leading-relaxed italic flex-grow flex flex-col justify-center items-center">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4 mt-2.5">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6. FAQ */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de nous confier votre comptabilité
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqSpecialisations} />
        </div>
      </Section>

      {/* 7. CTA FINAL */}
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
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faisons le point en 30 minutes
            </h2>
            <p className="text-xl mb-8 text-primary-50 leading-relaxed">
              Entrepreneurs, indépendants, professions libérales ou PME : découvrez comment nous pouvons vous accompagner selon votre profil.
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

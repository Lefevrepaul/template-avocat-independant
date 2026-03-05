import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import CTAButton from '@/components/CTAButton';
import { methodSteps, commitments } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Ma méthode | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Découvrez ma méthode d\'accompagnement en 3 étapes : écoute, analyse & stratégie, et suivi.',
};

export default function MethodePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center py-20 md:py-28 overflow-hidden">
        {/* Image de fond Lyon */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lyon-background.jpg"
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
              Ma méthode
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Un accompagnement structuré pour vous faire gagner en sérénité et en protection juridique
            </p>
          </div>
        </Container>
      </section>

      {/* Les 3 étapes */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Un accompagnement en 3 étapes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'analyse de votre situation à l'accompagnement tout au long de la procédure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {methodSteps.map((step) => (
              <div key={step.id} className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <div className="text-4xl font-bold text-primary-600 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engagements */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes engagements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les valeurs qui guident mon action au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {commitments.map((commitment) => (
              <div key={commitment.id} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Icon name={commitment.icon} className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-700">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden bg-primary-600 text-white">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-background.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay pour lisibilité */}
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à échanger sur votre situation ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Prenez rendez-vous pour un premier échange et découvrez comment je peux vous accompagner.
            </p>
            <CTAButton href="/contact" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
              Contacter
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}

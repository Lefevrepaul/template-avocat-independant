import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import FAQAccordion from '@/components/FAQAccordion';
import Icon from '@/components/Icon';
import { domains, methodSteps, commitments, faqs } from '@/lib/content';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Accueil | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Maître Laurent Moreau, avocat à Lyon. Accompagnement juridique rigoureux, clair et humain. Conseil et représentation en droit du travail, droit de la famille, droit pénal, droit des affaires, droit immobilier et droit des étrangers.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Centré personne */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center py-20 md:py-28 overflow-hidden">
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
            {/* Nom et titre */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Maître Laurent Moreau
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-6">
              Avocat au Barreau de Lyon
            </p>
            
            {/* Positionnement */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Accompagnement rigoureux, clair et humain.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="primary">
                Prendre rendez-vous
              </CTAButton>
              <CTAButton href="tel:+33472123456" variant="secondary">
                Appeler
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Photo + Bio courte */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/team/image portrait pro homme.jpg"
                    alt="Maître Laurent Moreau"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  À propos
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Avocat depuis près de 20 ans, j'accompagne particuliers et professionnels dans leurs démarches juridiques avec rigueur et humanité. Mon approche privilégie l'écoute, la clarté et la transparence pour vous permettre de prendre les meilleures décisions. Spécialisé en droit des affaires et droit du travail, j'interviens également en droit de la famille, droit pénal, droit immobilier et droit des étrangers.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="shield-check" className="w-5 h-5 text-primary-600" />
                    <span>Inscrit au Barreau de Lyon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="clock" className="w-5 h-5 text-primary-600" />
                    <span>19 ans d'exercice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="users" className="w-5 h-5 text-primary-600" />
                    <span>Particuliers & Professionnels</span>
                  </div>
                </div>
                <CTAButton href="/avocat" variant="primary">
                  Découvrir l'avocat
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Domaines d'intervention */}
      <Section id="domaines" className="bg-white dark:bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Domaines d'intervention
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            J'interviens dans plusieurs domaines du droit pour vous conseiller et vous représenter
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {domains.map((domain) => (
            <Card key={domain.id} className="hover:shadow-lg transition-shadow">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                    <Icon name={domain.icon} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {domain.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {domain.description}
                </p>
                <CTAButton href={`/domaines#${domain.id}`} variant="secondary" className="w-full">
                  En savoir plus
                </CTAButton>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Notre méthode en 3 étapes */}
      <Section className="bg-gray-50" id="methode">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ma méthode de travail
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement structuré pour vous faire gagner en sérénité et en protection juridique
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methodSteps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Engagements du cabinet */}
      <Section id="engagements" className="bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi me faire confiance
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Les valeurs qui guident mon action au quotidien
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment) => (
            <Card key={commitment.id} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Icon name={commitment.icon} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {commitment.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {commitment.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>


      {/* FAQ */}
      <Section className="bg-gray-50" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>
        <div className="max-w-3xl mx-auto mb-12">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* Bandeau contact */}
      <section className="relative py-36 overflow-hidden bg-primary-600 text-white">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Besoin d'un conseil ou d'une urgence ?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <CTAButton href="/contact" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                Contacter
              </CTAButton>
              <div className="flex items-center gap-3">
                <Icon name="phone" className="w-6 h-6" />
                <a href="tel:+33472123456" className="text-xl hover:text-primary-200 transition-colors">
                  04 72 12 34 56
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

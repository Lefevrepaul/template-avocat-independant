import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'L\'avocat | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Découvrez le parcours, la formation et l\'approche de Maître Laurent Moreau, avocat à Lyon.',
};

export default function AvocatPage() {
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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/images/team/image portrait pro homme.jpg"
                    alt="Maître Laurent Moreau"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 256px"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Maître Laurent Moreau
                </h1>
                <p className="text-xl text-primary-600 font-semibold mb-6">
                  Avocat à Lyon
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Avocat depuis près de 20 ans, j'accompagne particuliers et professionnels dans leurs démarches juridiques avec rigueur et humanité. Mon approche privilégie l'écoute, la clarté et la transparence.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Parcours / Formation */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Parcours & Formation
            </h2>
            <div className="space-y-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="document" className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Formation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Master 2 en Droit des affaires, Université Jean Moulin Lyon 3 (2003). Certificat de spécialisation en droit du travail, École de formation du Barreau de Paris (2004).
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="shield-check" className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inscription au Barreau</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Inscrit au Barreau de Lyon depuis 2005
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon name="briefcase" className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expérience</h3>
                    <p className="text-gray-700 leading-relaxed">
                      19 ans d'exercice. Ancien collaborateur de cabinets d'affaires lyonnais, j'ai développé une expertise en droit des affaires et droit du travail. J'exerce aujourd'hui en indépendant, avec une approche personnalisée et accessible.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approche & Valeurs */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Mon approche & mes valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clarté</h3>
                <p className="text-gray-700 leading-relaxed">
                  Je vous explique vos droits et vos options en termes simples, sans jargon inutile. Vous comprenez ce qui se passe.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Réactivité</h3>
                <p className="text-gray-700 leading-relaxed">
                  Réponse sous 24h ouvrées. Pour les urgences, je privilégie la réactivité. Votre sérénité est ma priorité.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidentialité</h3>
                <p className="text-gray-700 leading-relaxed">
                  Respect strict du secret professionnel. Vos informations sont protégées et traitées avec la plus grande discrétion.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Honoraires clairs dès le premier échange. Pas de surprise, pas de frais cachés. La transparence est un engagement.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Public */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Mon public
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="users" className="w-8 h-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Particuliers</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  J'accompagne les particuliers dans leurs démarches juridiques : droit de la famille, droit pénal, droit immobilier, droit des étrangers.
                </p>
              </Card>
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="briefcase" className="w-8 h-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">Professionnels</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  J'accompagne les entreprises, dirigeants et professionnels en droit du travail, droit des affaires et contentieux commercial.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Comment se déroule le 1er échange */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Comment se déroule le premier échange ?
            </h2>
            <div className="space-y-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Prise de contact</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Vous me contactez par téléphone ou via le formulaire. Nous convenons d'un rendez-vous (en visioconférence ou au cabinet, 15 rue de la République à Lyon).
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Écoute & analyse</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Lors du rendez-vous, j'écoute votre situation, analyse vos besoins et vous explique vos droits et vos options.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Devis & stratégie</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Je vous propose un devis personnalisé et transparent, ainsi qu'une stratégie adaptée à votre situation. Vous décidez en toute connaissance de cause.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
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

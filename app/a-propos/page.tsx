import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import FAQAccordion from '@/components/FAQAccordion';
import Icon from '@/components/Icon';
import { about, team, faqAbout } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Le cabinet | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Découvrez notre cabinet, nos valeurs et notre engagement pour vous conseiller et vous représenter avec rigueur et humanité.',
};

// Icône SVG Check
const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AProposPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center py-20 md:py-28 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lyon-background.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        
        {/* Contenu */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Le cabinet
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {about.subheadline}
            </p>
            
            {/* Badges confiance */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="success">Inscrit au Barreau</Badge>
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

      {/* 2. NOTRE HISTOIRE */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Notre histoire
            </h2>
            <div className="space-y-6">
              {about.storyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-600">
              <p className="text-xl font-semibold text-gray-900 italic">
                Notre rôle : vous conseiller et vous représenter avec rigueur et clarté.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. NOS ENGAGEMENTS */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos engagements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que vous pouvez attendre de nous
            </p>
          </div>
          
          <div className="space-y-6 mb-12">
            {/* 3 premières cartes en grille */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {about.commitments.slice(0, 3).map((commitment, index) => (
                <Card key={index}>
                  <div className="flex items-start">
                    <span className="text-primary-600 mr-3 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* 2 dernières cartes en pleine largeur */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.commitments.slice(3).map((commitment, index) => (
                <Card key={index + 3}>
                  <div className="flex items-start">
                    <span className="text-primary-600 mr-3 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Ce que vous ne vivrez pas ici */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ce que vous ne vivrez pas ici
            </h3>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-400">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                  <span>Des réponses floues</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                  <span>Des dossiers traités avec retard</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-red-500 mr-3 flex-shrink-0">•</span>
                  <span>Un interlocuteur différent à chaque fois</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. NOS VALEURS */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.proof}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4.5. CE QUI NOUS DIFFÉRENCIE */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce qui nous différencie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des valeurs et une expertise qui font la différence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                  <Icon name="shield-check" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expertise reconnue
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cabinet inscrit au Barreau avec plus de 20 ans d'expérience dans l'accompagnement de particuliers et d'entreprises.
                </p>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                  <Icon name="users" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Proximité & réactivité
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Une équipe à votre écoute, disponible et réactive. Nous répondons à vos questions rapidement et vous accompagnons au quotidien.
                </p>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                  <Icon name="trending-up" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Conseil stratégique
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Au-delà du conseil ponctuel, nous vous accompagnons dans la durée : anticipation des risques, stratégie contentieuse et représentation devant les tribunaux.
                </p>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                  <Icon name="lock" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sécurité & conformité
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vos données sont sécurisées et nous garantissons une conformité totale avec la réglementation en vigueur. Vous pouvez nous faire confiance.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. QUI VOUS ACCOMPAGNE */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qui vous accompagne
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <div className="flex flex-col flex-grow">
                  <div className="w-full h-64 md:h-80 relative mb-6 -m-6 -mt-6">
                    {member.imagePath ? (
                      <Image
                        src={member.imagePath}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                        <Icon name="users" className="w-24 h-24 text-primary-700" />
                      </div>
                    )}
                  </div>
                  <div className="px-0 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3 text-sm md:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base flex-grow">
                      {member.bio}
                    </p>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-900 mb-2">
                        Domaines de prédilection :
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {member.focusAreas.map((area, i) => (
                          <Badge key={i} variant="default" className="text-xs md:text-sm px-2 py-0.5">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. NOS CHIFFRES (SOBRES) */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos chiffres
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {about.stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. CADRE & SÉCURITÉ */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Cadre & sécurité
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {about.credentials.map((credential, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary-600 mr-3 flex-shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-600">
              <p className="text-gray-800 leading-relaxed">
                <strong className="text-primary-700">Changer d'avocat est possible, nous vous guidons.</strong> Nous gérons la reprise de votre dossier de A à Z avec votre ancien avocat, sans stress ni complication. Vous n'avez qu'à nous donner votre accord, nous nous chargeons du reste.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. FAQ */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur notre cabinet
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqAbout} />
          </div>
        </Container>
      </Section>

      {/* 9. GOOGLE MAPS */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nous trouver
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Retrouvez-nous au cabinet ou contactez-nous pour un rendez-vous
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674234!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Localisation du cabinet"
              ></iframe>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. CTA FINAL */}
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
              Faisons le point sur votre situation
            </h2>
            <p className="text-xl mb-8 text-primary-50 leading-relaxed">
              30 minutes, sans engagement : vous repartez avec une vision claire des prochaines étapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href="https://calendly.com/votre-calendly" 
                variant="secondary" 
                className="bg-white text-primary-600 hover:bg-primary-50 border-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre un RDV gratuit (30 min)
              </CTAButton>
              <CTAButton 
                href="/prendre-rdv" 
                variant="secondary" 
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white/30"
              >
                Demander un devis
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

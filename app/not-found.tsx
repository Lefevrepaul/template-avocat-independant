import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page non trouvée</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/" variant="primary">
            Retour à l'accueil
          </CTAButton>
          <CTAButton href="/prendre-rdv" variant="secondary">
            Prendre un RDV
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

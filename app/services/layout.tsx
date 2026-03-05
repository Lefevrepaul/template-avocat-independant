import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services | Cabinet Expert-Comptable',
  description: 'Services d\'expertise-comptable complets : création d\'entreprise, comptabilité, fiscalité, social & paie, conseil & pilotage. Prenez rendez-vous gratuitement.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

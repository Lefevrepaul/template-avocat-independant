import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos domaines d\'intervention | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Conseil et représentation en droit du travail, droit de la famille, droit pénal, droit des affaires, droit immobilier et droit des étrangers. Prenez rendez-vous.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

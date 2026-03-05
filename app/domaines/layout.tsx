import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domaines d\'intervention | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Domaines d\'intervention de Maître Laurent Moreau : droit du travail, droit de la famille, droit pénal, droit des affaires, droit immobilier et droit des étrangers.',
};

export default function DomainesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

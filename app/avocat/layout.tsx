import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'L\'avocat | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Découvrez le parcours, la formation et l\'approche de Maître Laurent Moreau, avocat à Lyon.',
};

export default function AvocatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

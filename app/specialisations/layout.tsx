import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pour qui ? | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Un avocat adapté à votre situation : particuliers, professionnels et entreprises. Conseil, représentation et accompagnement clair et réactif.',
};

export default function SpecialisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

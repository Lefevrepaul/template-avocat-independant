import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pour qui ? | Cabinet Expert-Comptable',
  description: 'Un expert-comptable adapté à votre réalité : entrepreneurs, indépendants, professions libérales et PME. Accompagnement clair, réactif et orienté pilotage.',
};

export default function SpecialisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

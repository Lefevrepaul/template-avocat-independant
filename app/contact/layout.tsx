import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Maître Laurent Moreau - Avocat à Lyon',
  description: 'Contactez Maître Laurent Moreau, avocat à Lyon. Prenez rendez-vous ou envoyez un message. Réponse dans les meilleurs délais.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

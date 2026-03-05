import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maître Laurent Moreau | Avocat à Lyon - Conseil Juridique & Représentation',
  description: 'Maître Laurent Moreau, avocat à Lyon. Accompagnement juridique rigoureux, clair et humain en droit du travail, droit de la famille, droit pénal, droit des affaires, droit immobilier et droit des étrangers. Prenez rendez-vous pour un premier échange.',
  keywords: 'avocat Lyon, maître Laurent Moreau, conseil juridique, droit du travail, droit de la famille, droit pénal, droit des affaires, représentation, Lyon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

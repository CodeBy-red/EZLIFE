import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: {
    default: 'Conteúdo Digital - Ideias e Conhecimento para Renda Online',
    template: '%s | Conteúdo Digital',
  },
  description: 'Artigos informativos sobre renda online, ideias digitais práticas e conhecimento para quem busca independência financeira através do digital.',
  keywords: ['renda online', 'dinheiro digital', 'ideias práticas', 'conhecimento digital', 'ebooks'],
  authors: [{ name: 'Conteúdo Digital' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Conteúdo Digital',
    url: 'https://conteudodigital.com.br',
    images: [
      {
        url: 'https://conteudodigital.com.br/og-image.jpg', // Adicione uma imagem OG
        width: 1200,
        height: 630,
        alt: 'Conteúdo Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@conteudodigital', // Atualize com seu Twitter
    creator: '@conteudodigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}


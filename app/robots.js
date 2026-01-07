/**
 * Gera robots.txt dinamicamente
 * Next.js 14+ suporta robots.js nativamente
 */
export default function robots() {
  const baseUrl = 'https://conteudodigital.com.br'; // Atualize com seu domínio

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


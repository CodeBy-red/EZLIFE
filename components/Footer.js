import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Newsletter Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-primary-800 transition-colors">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-800 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-800 transition-colors">
                  Artigos Recentes
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-primary-800 transition-colors">
                  Entre em Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidade" className="text-gray-600 hover:text-primary-800 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-600 hover:text-primary-800 transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-primary-800 transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {currentYear} Conteúdo Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}


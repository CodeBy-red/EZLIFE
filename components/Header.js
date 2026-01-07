import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-800 hover:text-primary-900 transition-colors whitespace-nowrap">
            Conteúdo Digital
          </Link>

          {/* Barra de busca */}
          <div className="hidden md:block flex-1 max-w-md mx-4">
            <SearchBar />
          </div>

          {/* Menu de navegação */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-800 transition-colors font-medium"
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-primary-800 transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-primary-800 transition-colors font-medium"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-primary-800 transition-colors font-medium"
              >
                Contato
              </Link>
            </li>
          </ul>

          {/* Menu mobile (hamburger) */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary-800"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}


'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * Componente de barra de busca
 * Busca em tempo real nos posts
 */
export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Buscar posts quando o usuário digita
    if (query.length > 2) {
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          setResults(data.posts || []);
          setIsOpen(true);
        })
        .catch(() => {
          setResults([]);
        });
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    // Fechar resultados ao clicar fora
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/busca?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 2 && setIsOpen(true)}
          placeholder="Buscar artigos..."
          className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-primary-700 outline-none text-sm"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>

      {/* Resultados da busca */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.slice(0, 5).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              <div className="font-medium text-gray-900 text-sm mb-1">{post.title}</div>
              <div className="text-xs text-gray-500 line-clamp-1">{post.excerpt}</div>
            </Link>
          ))}
          {results.length > 5 && (
            <Link
              href={`/busca?q=${encodeURIComponent(query)}`}
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="block px-4 py-3 text-center text-sm text-primary-700 hover:bg-gray-50 font-medium"
            >
              Ver todos os resultados ({results.length})
            </Link>
          )}
        </div>
      )}
    </div>
  );
}


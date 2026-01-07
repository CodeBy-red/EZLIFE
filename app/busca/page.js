'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function BuscaPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          setResults(data.posts || []);
          setLoading(false);
        })
        .catch(() => {
          setResults([]);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Resultados da Busca
          </h1>
          {query && (
            <p className="text-xl text-gray-600">
              Resultados para: <strong className="text-gray-900">"{query}"</strong>
            </p>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Buscando...</p>
          </div>
        ) : results.length > 0 ? (
          <>
            <p className="text-gray-600 mb-6">
              {results.length} {results.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : query ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Nenhum resultado encontrado para "{query}".</p>
            <Link
              href="/blog"
              className="text-primary-700 hover:text-primary-900 font-medium underline"
            >
              Ver todos os artigos
            </Link>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Digite um termo de busca para encontrar artigos.</p>
            <Link
              href="/blog"
              className="text-primary-700 hover:text-primary-900 font-medium underline"
            >
              Ver todos os artigos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuscaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-gray-600">Carregando...</p>
          </div>
        </div>
      </div>
    }>
      <BuscaContent />
    </Suspense>
  );
}


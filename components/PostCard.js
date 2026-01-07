'use client';

import Link from 'next/link';

/**
 * Componente de card para exibir posts na lista do blog
 */
export default function PostCard({ post }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:shadow-lg transition-all">
      <Link href={`/blog/${post.slug}`}>
        {/* Imagem do post */}
        {post.image && (
          <div className="w-full h-48 overflow-hidden bg-gray-100">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          {/* Categoria */}
          <Link
            href={`/categorias/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-block text-xs font-semibold text-primary-700 mb-2 px-2 py-1 bg-primary-50 rounded hover:bg-primary-100 transition-colors"
          >
            {post.category}
          </Link>

          {/* Título */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-800 transition-colors">
            {post.title}
          </h2>

          {/* Resumo */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta informações */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </Link>
    </article>
  );
}


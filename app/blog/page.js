import PostCard from '@/components/PostCard';
import { posts } from '@/lib/data';
import { getAllCategories } from '@/lib/search';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Artigos sobre renda online, ideias digitais práticas e conhecimento para o mundo digital.',
};

export default function BlogPage() {
  // Ordenar posts por data (mais recentes primeiro)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const categories = getAllCategories();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da página */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Artigos informativos sobre renda online e ideias práticas
          </p>

          {/* Filtros por categoria */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <Link
                href="/blog"
                className="px-4 py-2 bg-primary-800 text-white rounded-md hover:bg-primary-900 transition-colors text-sm font-medium"
              >
                Todos
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categorias/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Lista de posts */}
        {sortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhum post encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}


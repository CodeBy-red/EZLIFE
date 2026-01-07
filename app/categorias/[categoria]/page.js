import PostCard from '@/components/PostCard';
import { getPostsByCategory, getAllCategories } from '@/lib/search';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/**
 * Gera metadados dinâmicos para cada categoria
 */
export async function generateMetadata({ params }) {
  const categoriaSlug = params.categoria;
  const categoria = categoriaSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Categoria: ${categoria}`,
    description: `Artigos sobre ${categoria.toLowerCase()} no Conteúdo Digital.`,
  };
}

/**
 * Gera rotas estáticas para todas as categorias
 */
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    categoria: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function CategoriaPage({ params }) {
  const categoriaSlug = params.categoria;
  const categoria = categoriaSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const posts = getPostsByCategory(categoria);

  if (posts.length === 0) {
    notFound();
  }

  // Ordenar por data (mais recentes primeiro)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary-800">
            Início
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/blog" className="text-gray-600 hover:text-primary-800">
            Blog
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{categoria}</span>
        </nav>

        {/* Cabeçalho da página */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Categoria: {categoria}
          </h1>
          <p className="text-xl text-gray-600">
            {posts.length} {posts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
          </p>
        </div>

        {/* Lista de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}


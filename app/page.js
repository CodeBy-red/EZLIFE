import Link from 'next/link';
import PostCard from '@/components/PostCard';
import Banner from '@/components/Banner';
import { getRecentPosts, getFeaturedPosts, products } from '@/lib/data';

export const metadata = {
  title: 'Início',
  description: 'Artigos informativos sobre renda online, ideias digitais práticas e conhecimento para quem busca independência financeira através do digital.',
};

export default function Home() {
  const recentPosts = getRecentPosts(3);
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-800 to-primary-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Conteúdo Digital
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Artigos informativos sobre renda online, ideias práticas e conhecimento para o mundo digital
            </p>
          </div>
        </div>
      </section>

      {/* Artigos Recentes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary-800">
              Artigos Recentes
            </h2>
            <Link 
              href="/blog" 
              className="text-primary-700 hover:text-primary-900 font-medium transition-colors"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Produtos */}
      <Banner products={products} title="Materiais Recomendados" />

      {/* Conteúdos em Alta */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">
              Conteúdos em Alta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}


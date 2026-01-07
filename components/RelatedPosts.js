import PostCard from './PostCard';

/**
 * Componente de posts relacionados
 * Exibe posts da mesma categoria
 */
export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-primary-800 mb-6">
        Artigos Relacionados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}


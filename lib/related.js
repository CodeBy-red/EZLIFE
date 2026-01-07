import { posts } from './data';

/**
 * Função para encontrar posts relacionados
 * Baseado na mesma categoria
 */
export function getRelatedPosts(currentPostSlug, limit = 3) {
  const currentPost = posts.find(post => post.slug === currentPostSlug);
  
  if (!currentPost) {
    return [];
  }

  // Buscar posts da mesma categoria, excluindo o post atual
  const related = posts.filter(post => 
    post.category === currentPost.category && 
    post.slug !== currentPostSlug
  );

  // Ordenar por data (mais recentes primeiro) e limitar
  return related
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}


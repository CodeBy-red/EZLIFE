import { posts } from './data';

/**
 * Função para buscar posts por termo
 */
export function searchPosts(query) {
  if (!query || query.length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => {
    const searchText = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
    return searchText.includes(searchTerm);
  });
}

/**
 * Função para obter posts por categoria
 */
export function getPostsByCategory(category) {
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Função para obter todas as categorias únicas
 */
export function getAllCategories() {
  const categories = posts.map(post => post.category);
  return [...new Set(categories)];
}


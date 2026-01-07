import { NextResponse } from 'next/server';
import { posts } from '@/lib/data';

/**
 * API Route para busca de posts
 * Busca por título e conteúdo
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase() || '';

    if (!query || query.length < 2) {
      return NextResponse.json({ posts: [] });
    }

    // Buscar nos posts
    const filteredPosts = posts.filter(post => {
      const searchText = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
      return searchText.includes(query);
    });

    // Retornar apenas dados necessários
    const results = filteredPosts.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
    }));

    return NextResponse.json({ posts: results });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Erro ao realizar busca' },
      { status: 500 }
    );
  }
}


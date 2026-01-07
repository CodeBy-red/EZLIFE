import { notFound } from 'next/navigation';
import Link from 'next/link';
import Banner from '@/components/Banner';
import CTA from '@/components/CTA';
import RelatedPosts from '@/components/RelatedPosts';
import SocialShare from '@/components/SocialShare';
import { getPostBySlug, products } from '@/lib/data';
import { getRelatedPosts } from '@/lib/related';

/**
 * Função para gerar metadados dinâmicos para cada post
 */
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  const postUrl = `https://conteudodigital.com.br/blog/${params.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: postUrl,
      images: post.image ? [post.image] : [],
      siteName: 'Conteúdo Digital',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

/**
 * Converte markdown simples para HTML/JSX
 * Versão básica - pode ser expandida ou substituída por biblioteca markdown
 */
function formatContent(content) {
  const lines = content.split('\n');
  const elements = [];
  let currentParagraph = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      return;
    }

    // Títulos
    if (trimmedLine.startsWith('# ')) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      elements.push(<h1 key={`h1-${index}`} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{trimmedLine.substring(2)}</h1>);
      return;
    }

    if (trimmedLine.startsWith('## ')) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      elements.push(<h2 key={`h2-${index}`} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{trimmedLine.substring(3)}</h2>);
      return;
    }

    if (trimmedLine.startsWith('### ')) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      elements.push(<h3 key={`h3-${index}`} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{trimmedLine.substring(4)}</h3>);
      return;
    }

    // Listas
    if (trimmedLine.startsWith('- ')) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      elements.push(<li key={`li-${index}`} className="mb-2 ml-6 list-disc text-gray-700">{trimmedLine.substring(2)}</li>);
      return;
    }

    // Texto normal
    currentParagraph.push(trimmedLine);
  });

  if (currentParagraph.length > 0) {
    elements.push(<p key={`p-final`} className="mb-4 text-gray-700 leading-relaxed">{currentParagraph.join(' ')}</p>);
  }

  return elements;
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Dividir conteúdo em partes para inserir banner no meio
  const contentParts = post.content.split('\n\n');
  const middleIndex = Math.floor(contentParts.length / 2);
  const firstHalf = contentParts.slice(0, middleIndex).join('\n\n');
  const secondHalf = contentParts.slice(middleIndex).join('\n\n');

  const postUrl = `https://conteudodigital.com.br/blog/${params.slug}`;

  return (
    <article className="min-h-screen py-12">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            image: post.image || '',
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Organization',
              name: 'Conteúdo Digital',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Conteúdo Digital',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': postUrl,
            },
          }),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: 'https://conteudodigital.com.br',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://conteudodigital.com.br/blog',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: postUrl,
              },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary-800">
                  Início
                </Link>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-800">
                  Blog
                </Link>
              </li>
              <li>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900">{post.title}</span>
              </li>
            </ol>
          </nav>

          {/* Imagem destacada do post */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Cabeçalho do post */}
          <header className="mb-8">
            <span className="inline-block text-sm font-semibold text-primary-700 mb-3 px-3 py-1 bg-primary-50 rounded-full">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime} de leitura</span>
            </div>
          </header>

          {/* Conteúdo do post */}
          <div className="prose max-w-none mb-8">
            {formatContent(firstHalf)}
          </div>

          {/* Banner no meio do conteúdo - mostra produto relacionado se houver */}
          {post.slug === 'como-ganhar-dinheiro-online-sem-aparecer' && (
            <Banner products={[products[0]]} />
          )}
          {post.slug !== 'como-ganhar-dinheiro-online-sem-aparecer' && (
            <Banner products={products.slice(0, 1)} />
          )}

          {/* Continuação do conteúdo */}
          <div className="prose max-w-none mb-8">
            {formatContent(secondHalf)}
          </div>

          {/* Compartilhamento social */}
          <SocialShare 
            title={post.title}
            url={postUrl}
          />

          {/* CTA discreto no final */}
          <CTA
            title="Material Recomendado"
            description="Confira nossos materiais sobre renda online e ideias práticas."
            buttonText="Ver materiais"
            buttonLink="#"
          />

          {/* Posts relacionados */}
          {relatedPosts.length > 0 && (
            <RelatedPosts posts={relatedPosts} />
          )}

          {/* Navegação */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="text-primary-700 hover:text-primary-900 font-medium"
            >
              ← Voltar para o blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}


/**
 * Estrutura de dados para posts do blog
 * Futuramente pode ser substituída por integração com CMS ou banco de dados
 */

export const posts = [
  {
    id: 1,
    slug: 'como-ganhar-dinheiro-online-sem-aparecer',
    title: 'Como ganhar dinheiro online sem aparecer',
    excerpt: 'Estratégias práticas para gerar renda através do digital sem precisar criar conteúdo pessoal ou aparecer em vídeos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    content: `
# Como ganhar dinheiro online sem aparecer

Muitas pessoas querem gerar renda através do digital, mas não se sentem confortáveis em aparecer em vídeos ou criar conteúdo pessoal. A boa notícia é que existem várias formas de monetizar online sem precisar se expor.

## Trabalho remoto tradicional

Uma das formas mais diretas é buscar oportunidades de trabalho remoto em áreas como programação, design, escrita, tradução ou atendimento ao cliente. Plataformas como LinkedIn, Indeed e sites especializados em trabalho remoto oferecem diversas oportunidades.

## Criação de conteúdo anônimo

Você pode criar blogs, ebooks ou cursos sem precisar aparecer. O foco fica no conteúdo e na qualidade da informação, não na sua imagem pessoal. Muitos criadores bem-sucedidos nunca mostraram o rosto.

## Automação e sistemas

Desenvolver sistemas automatizados, ferramentas digitais ou aplicativos pode gerar renda passiva sem necessidade de exposição pessoal. O produto fala por si só.

## Conclusão

Gerar renda online sem aparecer é totalmente viável. O importante é identificar suas habilidades, escolher um modelo que funcione para você e manter a consistência na execução.
    `.trim(),
    category: 'Renda Online',
    date: '2026-01-15',
    readTime: '5 min',
    featured: true,
  },
  {
    id: 2,
    slug: 'ideias-digitais-simples-que-quase-ninguem-comenta',
    title: 'Ideias digitais simples que quase ninguém comenta',
    excerpt: 'Oportunidades digitais pouco exploradas que podem gerar resultados interessantes para quem está começando.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    content: `
# Ideias digitais simples que quase ninguém comenta

Existem várias oportunidades digitais que passam despercebidas porque não são tão glamourosas quanto criar um canal no YouTube ou se tornar influencer. Mas podem ser igualmente lucrativas.

## Organização de dados e planilhas

Muitas pessoas precisam de ajuda para organizar informações, criar sistemas de controle ou automatizar processos simples. Você pode oferecer esse serviço de forma remota.

## Transcrição e legendagem

A demanda por transcrição de áudios e criação de legendas para vídeos é constante. É um trabalho que pode ser feito de casa, com horários flexíveis.

## Pesquisa e curadoria de conteúdo

Empresas e profissionais precisam de pessoas que façam pesquisas, organizem informações e criem resumos sobre temas específicos. É um serviço que pode ser oferecido remotamente.

## Criação de templates

Templates para planilhas, apresentações, documentos ou até mesmo sites podem ser vendidos repetidamente. Uma vez criado, pode gerar renda passiva.

## Conclusão

Nem sempre as oportunidades mais comentadas são as melhores. Às vezes, focar em necessidades específicas e menos exploradas pode gerar resultados mais consistentes.
    `.trim(),
    category: 'Ideias Práticas',
    date: '2026-01-10',
    readTime: '4 min',
    featured: true,
  },
  {
    id: 3,
    slug: 'o-que-realmente-funciona-para-renda-extra-hoje',
    title: 'O que realmente funciona para renda extra hoje',
    excerpt: 'Análise prática sobre métodos comprovados de gerar renda extra através do digital, baseado em resultados reais.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=600&fit=crop',
    content: `
# O que realmente funciona para renda extra hoje

Com tantas promessas e estratégias sendo divulgadas, é importante focar no que realmente funciona na prática. Vamos analisar métodos comprovados.

## Freelancing em habilidades específicas

Oferecer serviços como freelancer continua sendo uma das formas mais diretas de gerar renda extra. Se você tem uma habilidade específica - seja design, escrita, programação ou qualquer outra - há demanda no mercado.

## Venda de produtos digitais

Ebooks, cursos, templates e outros produtos digitais podem gerar renda recorrente. O investimento inicial é em tempo e conhecimento, não em estoque físico.

## Afiliados de produtos que você conhece

Recomendar produtos ou serviços que você realmente conhece e usa pode gerar comissões. O importante é manter a honestidade e só recomendar o que você confia.

## Ensino e mentoria

Se você tem conhecimento em alguma área, pode oferecer aulas particulares, mentoria ou criar conteúdo educacional. A educação online continua crescendo.

## Conclusão

Não existe fórmula mágica. O que funciona é combinar suas habilidades com necessidades reais do mercado, manter consistência e focar em entregar valor real.
    `.trim(),
    category: 'Renda Online',
    date: '2026-01-05',
    readTime: '6 min',
    featured: false,
  },
];

/**
 * Produtos/Ebooks para monetização
 */
export const products = [
  {
    id: 1,
    title: 'Guia da Renda Anônima',
    description: 'Guia completo com estratégias práticas para gerar renda através do digital sem precisar aparecer em vídeos ou criar conteúdo pessoal.',
    price: 'Ver preço',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    pageLink: 'https://kiwify.app/kx6TnfV',
    paymentLink: 'https://pay.kiwify.com.br/OmGiXZ5',
    category: 'Renda Online',
  },
  {
    id: 2,
    title: 'SSI - Seja Sua Inspiração!',
    description: 'Conteúdo desenvolvido especialmente para mulheres que buscam desenvolver autoconfiança e autoestima de forma prática e efetiva.',
    price: 'Ver preço',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
    pageLink: 'https://kiwify.app/BYbgUST',
    paymentLink: 'https://pay.kiwify.com.br/Do8PI4f',
    category: 'Desenvolvimento Pessoal',
  },
];

/**
 * Função auxiliar para buscar post por slug
 */
export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}

/**
 * Função para obter posts em destaque
 */
export function getFeaturedPosts() {
  return posts.filter(post => post.featured);
}

/**
 * Função para obter posts recentes
 */
export function getRecentPosts(limit = 3) {
  return posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}


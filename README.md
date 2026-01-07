# Blog Monetizável - Conteúdo Digital

Blog completo desenvolvido com Next.js 14+ (App Router), focado em conteúdo sobre renda online, ideias digitais práticas e conhecimento geral.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **React 18**
- **Tailwind CSS**
- **JavaScript** (sem TypeScript)

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🛠️ Instalação e Execução

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em modo de desenvolvimento:**
```bash
npm run dev
```

O site estará disponível em: **http://localhost:7000**

⚠️ **IMPORTANTE:** O projeto está configurado para rodar sempre na porta 7000.

3. **Build para produção:**
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── blog/              # Páginas do blog
│   │   ├── [slug]/        # Página individual de post
│   │   └── page.js        # Lista de posts
│   ├── sobre/             # Página sobre
│   ├── contato/           # Página de contato
│   ├── layout.js          # Layout principal
│   ├── page.js            # Página inicial (home)
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── Header.js          # Cabeçalho do site
│   ├── Footer.js          # Rodapé do site
│   ├── PostCard.js        # Card de post
│   ├── ProductCard.js     # Card de produto/ebook
│   ├── Banner.js          # Banner de produtos
│   └── CTA.js             # Call to action discreto
├── lib/                   # Utilitários e dados
│   └── data.js           # Dados dos posts e produtos
└── public/               # Arquivos estáticos
```

## 📝 Adicionando Novos Posts

Para adicionar novos posts, edite o arquivo `lib/data.js` e adicione um novo objeto no array `posts`:

```javascript
{
  id: 4,
  slug: 'meu-novo-post',
  title: 'Título do Post',
  excerpt: 'Resumo curto do post',
  content: `
    # Título Principal
    
    Conteúdo do post em markdown simples...
  `,
  category: 'Categoria',
  date: '2024-03-20',
  readTime: '5 min',
  featured: false,
}
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `tailwind.config.js` na seção `colors.primary`.

### Fontes

A fonte padrão é Inter. Para alterar, edite `app/globals.css` e `tailwind.config.js`.

### Produtos/Ebooks

Para adicionar ou modificar produtos, edite o array `products` no arquivo `lib/data.js`.

## 🔧 Próximos Passos

O projeto está preparado para futuras integrações:

- **CMS**: Pode ser integrado com Sanity, Contentful, Strapi, etc.
- **Banco de Dados**: Estrutura pronta para migrar dados para PostgreSQL, MongoDB, etc.
- **Sistema de Comentários**: Pode ser adicionado Disqus, Giscus ou solução própria
- **Newsletter**: Estrutura pronta para adicionar formulário de newsletter
- **Analytics**: Pronto para adicionar Google Analytics ou outras ferramentas

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 🤝 Contribuições

Sinta-se à vontade para fazer fork, melhorar e adaptar conforme suas necessidades.


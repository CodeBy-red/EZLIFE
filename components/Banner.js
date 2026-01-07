import ProductCard from './ProductCard';

/**
 * Componente de banner horizontal para produtos/ebooks
 * Pode ser usado no meio do conteúdo ou em seções específicas
 */
export default function Banner({ products, title = 'Materiais Recomendados' }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="my-12 py-12 bg-gray-50 rounded-lg border border-gray-200">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}


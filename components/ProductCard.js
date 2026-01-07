/**
 * Componente de card para exibir produtos/ebooks
 * Design discreto e profissional com imagem
 */
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:shadow-lg transition-all">
      {/* Imagem do produto */}
      {product.image && (
        <div className="w-full h-48 overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Categoria */}
        {product.category && (
          <span className="inline-block text-xs font-semibold text-primary-700 mb-2 px-2 py-1 bg-primary-50 rounded">
            {product.category}
          </span>
        )}
        
        {/* Título */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {product.title}
        </h3>
        
        {/* Descrição */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-3">
          {product.pageLink && (
            <a
              href={product.pageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium text-center"
            >
              Ver página
            </a>
          )}
          {product.paymentLink && (
            <a
              href={product.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium text-center"
            >
              Comprar agora
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


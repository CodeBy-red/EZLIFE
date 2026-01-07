/**
 * Componente CTA (Call to Action) discreto
 * Usado no final de posts ou em seções específicas
 */
export default function CTA({ title, description, buttonText, buttonLink }) {
  return (
    <div className="my-12 p-8 bg-primary-800 rounded-lg text-center text-white">
      {title && (
        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-200 mb-6 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          className="inline-block px-8 py-3 bg-white text-primary-800 rounded-md hover:bg-gray-100 transition-colors font-semibold"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}


import Link from 'next/link';

export const metadata = {
  title: 'Sobre',
  description: 'Conheça mais sobre o Conteúdo Digital e nosso propósito de compartilhar conhecimento sobre renda online e ideias práticas.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-6">Sobre</h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              O <strong>Conteúdo Digital</strong> é um espaço dedicado a compartilhar informações práticas e úteis sobre renda online, ideias digitais e conhecimento que pode ajudar pessoas interessadas em explorar oportunidades no mundo digital.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Nosso Propósito</h2>
            <p className="text-gray-700 mb-4">
              Acreditamos que o conhecimento deve ser acessível e que existem diversas formas legítimas de gerar renda através do digital. Nosso objetivo é apresentar informações claras, baseadas em experiência prática, sem promessas irreais ou linguagem de marketing agressivo.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">O Que Fazemos</h2>
            <p className="text-gray-700 mb-4">
              Publicamos artigos informativos sobre temas relacionados a renda online, ideias práticas que podem ser implementadas e conhecimento geral sobre o universo digital. Nosso conteúdo é focado em ajudar, informar e oferecer perspectivas realistas.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Transparência</h2>
            <p className="text-gray-700 mb-4">
              Este site pode conter links afiliados e recomendações de produtos ou serviços que acreditamos serem úteis. Quando isso acontecer, será sempre de forma transparente e discreta, sem comprometer a qualidade do conteúdo informativo.
            </p>

            <p className="text-gray-700 mt-8">
              Se você tem dúvidas ou sugestões, entre em <Link href="/contato" className="text-primary-700 hover:text-primary-900 underline">contato</Link> conosco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


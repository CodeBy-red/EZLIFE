export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do Conteúdo Digital - Como coletamos, usamos e protegemos suas informações.',
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-6">Política de Privacidade</h1>
          <p className="text-gray-600 mb-8">Última atualização: Janeiro de 2026</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introdução</h2>
              <p className="text-gray-700 mb-4">
                O Conteúdo Digital ("nós", "nosso" ou "site") respeita sua privacidade e está comprometido em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Informações que Coletamos</h2>
              <p className="text-gray-700 mb-4">
                Podemos coletar as seguintes informações:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                <li><strong>Informações de contato:</strong> Nome, endereço de e-mail quando você preenche formulários ou entra em contato conosco.</li>
                <li><strong>Informações de navegação:</strong> Dados sobre como você acessa e utiliza nosso site, incluindo endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.</li>
                <li><strong>Cookies:</strong> Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Como Usamos suas Informações</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                <li>Responder suas solicitações e fornecer suporte ao cliente</li>
                <li>Melhorar nosso site e personalizar sua experiência</li>
                <li>Enviar comunicações relacionadas ao nosso conteúdo (apenas se você consentir)</li>
                <li>Analisar o uso do site para melhorias contínuas</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-gray-700 mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                <li>Quando necessário para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam na operação do site (sob acordos de confidencialidade)</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies para melhorar sua experiência. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Links para Sites de Terceiros</h2>
              <p className="text-gray-700 mb-4">
                Nosso site pode conter links para sites de terceiros, incluindo links afiliados. Não somos responsáveis pelas práticas de privacidade desses sites externos. Recomendamos que você leia as políticas de privacidade de cada site que visitar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Segurança</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Seus Direitos</h2>
              <p className="text-gray-700 mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                <li>Acessar suas informações pessoais</li>
                <li>Solicitar correção de informações incorretas</li>
                <li>Solicitar exclusão de suas informações</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Opor-se ao processamento de suas informações</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Alterações nesta Política</h2>
              <p className="text-gray-700 mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas publicando a nova política nesta página e atualizando a data de "Última atualização".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contato</h2>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>E-mail:</strong> <a href="mailto:gl451606@gmail.com" className="text-primary-700 hover:text-primary-900 underline">gl451606@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


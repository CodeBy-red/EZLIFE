'use client';

import { useState } from 'react';

/**
 * Componente de formulário de newsletter
 * Design discreto e profissional
 */
export default function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Validação básica
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Por favor, insira um e-mail válido.' });
      setLoading(false);
      return;
    }

    try {
      // Simulação de envio - aqui você integraria com sua API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Inscrição realizada com sucesso!' });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: 'Erro ao realizar inscrição. Tente novamente.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Erro ao realizar inscrição. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-primary-700 outline-none text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary-800 text-white rounded-md hover:bg-primary-900 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? 'Enviando...' : 'Inscrever'}
        </button>
        {status && (
          <div className={`text-sm mt-2 sm:mt-0 sm:absolute sm:top-full sm:left-0 sm:mt-2 ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {status.message}
          </div>
        )}
      </form>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">
        Receba nossos artigos e novidades diretamente no seu e-mail.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-primary-700 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-primary-800 text-white rounded-md hover:bg-primary-900 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? 'Enviando...' : 'Inscrever'}
          </button>
        </div>
        {status && (
          <div className={`text-sm ${
            status.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}


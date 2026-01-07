'use client';

import { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');

    // Simulação de envio - aqui você integraria com seu backend ou serviço de email
    setTimeout(() => {
      setStatus('sucesso');
      setFormData({ nome: '', email: '', mensagem: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-6">Fale Conosco</h1>
          <p className="text-gray-600 mb-4">
            Entre em contato conosco. Responderemos o mais breve possível.
          </p>
          <p className="text-gray-700 mb-8">
            <strong>E-mail:</strong> <a href="mailto:gl451606@gmail.com" className="text-primary-700 hover:text-primary-900 underline">gl451606@gmail.com</a>
          </p>

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="mb-6">
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-primary-700 outline-none"
                placeholder="Seu nome"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-primary-700 outline-none"
                placeholder="seu@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-primary-700 outline-none resize-none"
                placeholder="Sua mensagem..."
              />
            </div>

            {status === 'sucesso' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'enviando'}
              className="w-full md:w-auto px-6 py-3 bg-primary-800 text-white rounded-md hover:bg-primary-900 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


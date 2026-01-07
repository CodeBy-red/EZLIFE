import { NextResponse } from 'next/server';

/**
 * API Route para processar inscrições na newsletter
 * Por enquanto é uma simulação - você pode integrar com Mailchimp, Brevo, etc.
 */
export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validação básica
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    // Aqui você integraria com seu serviço de email marketing
    // Exemplo: Mailchimp, Brevo, ConvertKit, etc.
    
    // Simulação de sucesso
    // TODO: Integrar com serviço real de email marketing
    console.log('Newsletter subscription:', email);

    return NextResponse.json(
      { message: 'Inscrição realizada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Erro ao processar inscrição' },
      { status: 500 }
    );
  }
}


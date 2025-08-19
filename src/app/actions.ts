"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  battleName: z.string().min(3, { message: 'O nome da batalha deve ter pelo menos 3 caracteres.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    battleName?: string[];
    message?: string[];
  }
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    battleName: formData.get('battleName'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Falha ao enviar o formulário. Por favor, verifique os erros.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, battleName, message } = validatedFields.data;

  // ATENÇÃO: A funcionalidade de envio de e-mail ainda não está implementada.
  // Os dados do formulário serão apenas registrados no console do servidor para fins de teste.
  // Para enviar e-mails de verdade, você precisará integrar um serviço como Resend, Nodemailer ou SendGrid.
  console.log('--- SIMULAÇÃO DE ENVIO DE E-MAIL ---');
  console.log('Uma submissão de formulário foi recebida:');
  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Nome da Batalha:', battleName);
  console.log('Mensagem:', message);
  console.log('-------------------------------------');
  console.log('O e-mail seria enviado para: sankofaraphub@gmail.com');


  return {
    message: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
    success: true,
  };
}

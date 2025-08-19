"use server";

import { z } from 'zod';
import nodemailer from 'nodemailer';

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

  // --- CONFIGURAÇÃO DO NODEMAILER ---
  // Substitua os valores abaixo pelas suas credenciais SMTP.
  // É ALTAMENTE RECOMENDÁVEL usar variáveis de ambiente para guardar essas informações.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com', // Ex: smtp.gmail.com
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'seu-email@example.com', // Seu usuário SMTP
      pass: process.env.SMTP_PASS || 'sua-senha-smtp', // Sua senha SMTP
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Remetente
      to: 'sankofaraphub@gmail.com', // Destinatário
      subject: `Nova Mensagem de Contato: ${battleName}`, // Assunto
      text: message, // Corpo do e-mail em texto puro
      html: `
        <h2>Nova Mensagem do SankofaRapHub</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nome da Batalha:</strong> ${battleName}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `, // Corpo do e-mail em HTML
    });

    return {
      message: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
      success: true,
    };

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return {
      message: 'Ocorreu um erro ao tentar enviar o e-mail. Por favor, tente novamente mais tarde.',
      success: false,
    };
  }
}

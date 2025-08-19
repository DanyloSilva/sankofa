"use client";


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  // Endpoint correto do Formspree
  const formspreeEndpoint = "https://formspree.io/f/xpwlgdpe";

  return (
    <form action={formspreeEndpoint} method="POST" className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">Seu Nome</label>
        <Input id="name" name="name" placeholder="Nome completo" className="bg-secondary" required minLength={2} />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-1">Seu Email</label>
        <Input id="email" name="email" type="email" placeholder="seu@email.com" className="bg-secondary" required />
      </div>
      <div>
        <label htmlFor="battleName" className="block font-semibold mb-1">Nome da Batalha</label>
        <Input id="battleName" name="battleName" placeholder="Ex: Batalha da Praça" className="bg-secondary" required minLength={3} />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold mb-1">Sua Mensagem</label>
        <Textarea id="message" name="message" placeholder="Fale um pouco sobre sua batalha ou sua dúvida." className="bg-secondary" required minLength={10} />
      </div>
      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
        Enviar Mensagem
      </Button>
    </form>
  );
}

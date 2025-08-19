import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, Mic, Star, Twitter, Instagram, Youtube, UserCheck, ShieldCheck, BarChart, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ContactForm } from '@/components/contact-form';

const Logo = () => (
  <Link href="#home" className="flex items-center gap-2" prefetch={false}>
    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
      <Mic className="h-6 w-6 text-primary-foreground" />
    </div>
    <span className="font-headline text-2xl font-bold tracking-wider">SankofaRapHub</span>
  </Link>
);

const navLinks = [
  { href: '#sobre', label: 'A Plataforma' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#cases', label: 'Batalhas' },
  { href: '#contato', label: 'Contato' },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/80 px-4 py-3 backdrop-blur-md md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-semibold tracking-wider md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary" prefetch={false}>
                {link.label}
              </Link>
            ))}
          </nav>
           <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contato">
                Cadastrar Evento <ArrowRight className="ml-2" />
              </Link>
            </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 border-l-border">
              <div className="flex flex-col gap-8 p-6">
                <Logo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-semibold tracking-wider transition-colors hover:text-primary" prefetch={false}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#contato">
                    Cadastrar Evento <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative flex items-center justify-center text-center h-[90vh] min-h-[700px] w-full">
          <div className="container px-4 md:px-6">
            <h1 className="font-headline text-5xl font-bold tracking-wider uppercase text-primary sm:text-7xl md:text-8xl">
              O Futuro das Batalhas de Rap
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-lg text-foreground/80 md:text-xl">
              Eleve sua batalha de MCs a um novo patamar com a plataforma definitiva para gestão de eventos, ranking de artistas e visibilidade na cena.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6">
                <Link href="#contato">
                  Quero Cadastrar
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6">
                <Link href="#como-funciona">
                  Saber Mais <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-background py-20">
          <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-6">
              <div className="inline-block rounded-md bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary">Sobre a Plataforma</div>
              <h2 className="font-headline text-4xl font-bold tracking-wider text-foreground sm:text-5xl">
                Fortalecendo a Cultura Hip Hop com Tecnologia.
              </h2>
              <p className="text-foreground/80 text-lg">
                O SankofaRapHub é uma iniciativa de código aberto, criada por e para a comunidade. Nossa missão é fornecer as ferramentas para que organizadores possam gerir seus eventos com profissionalismo e para que MCs possam construir suas carreiras com um ranking justo e transparente.
              </p>
               <p className="text-foreground/80 text-lg">
                Acreditamos no poder da tecnologia para conectar, organizar e amplificar as vozes da cena do rap nacional.
              </p>
            </div>
            <div className="relative h-[500px] w-full">
              <Image
                src="https://placehold.co/600x500.png"
                alt="Organizador de evento de rap usando um notebook"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-2xl shadow-primary/10"
                data-ai-hint="event organizer laptop"
              />
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-wider text-foreground sm:text-5xl">Leve sua Batalha para o Próximo Nível</h2>
              <p className="mt-4 text-foreground/80 text-lg">O processo é simples e direto. Veja como funciona:</p>
            </div>
            <div className="relative grid gap-10 md:grid-cols-3">
              <div className="absolute left-1/3 top-1/2 h-1 w-1/3 border-t-2 border-dashed border-primary/30 hidden md:block"></div>
               {[
                { step: "01", title: "Cadastro do Evento", description: "Organizador cadastra a batalha na plataforma, define regras e abre inscrições online." },
                { step: "02", title: "Gestão Automatizada", description: "Inscrições, chaveamento, votação e resultados gerenciados de forma simples e digital." },
                { step: "03", title: "Ranking e Visibilidade", description: "Rankings são atualizados em tempo real, dando destaque para MCs e para o seu evento no hub." },
              ].map((item) => (
                <div key={item.step} className="relative flex flex-col items-center text-center gap-4 p-6 bg-card rounded-xl shadow-lg">
                    <div className="absolute -top-6 flex items-center justify-center h-12 w-12 rounded-full bg-primary font-headline text-2xl text-primary-foreground">{item.step}</div>
                    <h3 className="mt-8 font-headline text-2xl tracking-wider">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="bg-background">
          <div className="container mx-auto px-4 md:px-6">
             <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-wider text-foreground sm:text-5xl">Vantagens para Todos</h2>
              <p className="mt-4 text-foreground/80 text-lg">Ferramentas que revolucionam a experiência de organizadores e MCs.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <div className="space-y-8">
                    <h3 className="font-headline text-3xl text-primary">PARA ORGANIZADORES</h3>
                    {[
                        { icon: <UserCheck className="h-8 w-8 text-accent" />, title: "Inscrições Online", description: "Gerencie as inscrições de forma automática, sem listas de papel ou confusão." },
                        { icon: <ShieldCheck className="h-8 w-8 text-accent" />, title: "Credibilidade", description: "Passe mais profissionalismo com uma página exclusiva para seu evento e rankings transparentes." },
                    ].map(card => (
                        <div key={card.title} className="flex items-start gap-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary">
                                {card.icon}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold tracking-wide">{card.title}</h4>
                                <p className="mt-1 text-foreground/70">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="space-y-8">
                    <h3 className="font-headline text-3xl text-primary">PARA MCS</h3>
                    {[
                        { icon: <BarChart className="h-8 w-8 text-accent" />, title: "Ranking Oficial", description: "Participe das batalhas, some pontos e suba no ranking nacional." },
                        { icon: <Tv className="h-8 w-8 text-accent" />, title: "Visibilidade Nacional", description: "Seu perfil com histórico de batalhas e vídeos para todo o Brasil ver e contratar." },
                    ].map(card => (
                        <div key={card.title} className="flex items-start gap-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary">
                                {card.icon}
                            </div>
                             <div>
                                <h4 className="text-xl font-bold tracking-wide">{card.title}</h4>
                                <p className="mt-1 text-foreground/70">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        <section id="cases" className="bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-wider text-foreground sm:text-5xl">Batalhas em Destaque</h2>
              <p className="mt-4 text-foreground/80 text-lg">Eventos que confiam e crescem com o SankofaRapHub.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-card border-border overflow-hidden group">
                <CardContent className="p-0">
                  <Image
                    src="/logos/batalha-da-varzea.png"
                    alt="Batalha na Várzea"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="font-headline text-2xl tracking-wider">Batalha na Várzea</h3>
                    <p className="text-foreground/70 mt-2">Uma das batalhas mais tradicionais, agora com gestão digital e ranking oficial.</p>
                     <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                        <a href="https://www.batalha-na-varzea.com/" target="_blank" rel="noopener noreferrer">
                          Ver Página da Batalha <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border overflow-hidden group">
                <CardContent className="p-0">
                   <Image
                    src="https://placehold.co/600x400.png"
                    alt="Liga do Trombone"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="microphone stage light"
                  />
                  <div className="p-6">
                    <h3 className="font-headline text-2xl tracking-wider">Liga do Trombone</h3>
                    <p className="text-foreground/70 mt-2">A nova liga que promete agitar a cena, em breve no nosso hub.</p>
                    <Button disabled className="w-full mt-6 font-bold">Em Breve</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="bg-gradient-to-br from-primary to-accent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="py-12 text-center text-primary-foreground">
              <h2 className="font-headline text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl">
                Junte-se à revolução das batalhas de rap.
              </h2>
               <p className="mx-auto mt-4 max-w-[600px] text-lg text-primary-foreground/80">
                Faça parte da comunidade que está construindo o futuro da cena.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/80 font-bold px-10 py-6">
                  <Link href="#contato">
                    Cadastrar Minha Batalha
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-4xl font-bold tracking-wider text-primary sm:text-5xl">Fale com a gente</h2>
              <p className="mt-4 text-foreground/80 text-lg">
                Pronto para cadastrar sua batalha? Tem alguma dúvida? Preencha o formulário que nossa equipe entrará em contato.
              </p>
            </div>
            <div className="mx-auto max-w-lg">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 text-center md:flex-row md:px-6">
          <Logo />
          <p className="text-sm text-foreground/70">&copy; {new Date().getFullYear()} SankofaRapHub. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-foreground/70 transition-colors hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="text-foreground/70 transition-colors hover:text-primary"><Instagram className="h-6 w-6" /></Link>
            <Link href="#" className="text-foreground/70 transition-colors hover:text-primary"><Youtube className="h-6 w-6" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

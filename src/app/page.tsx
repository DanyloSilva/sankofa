import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, Eye, Menu, Mic, Settings, Trophy, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ContactForm } from '@/components/contact-form';

const Logo = () => (
  <Link href="#home" className="flex items-center gap-2" prefetch={false}>
    <Mic className="h-8 w-8 text-accent" />
    <span className="font-headline text-2xl font-bold tracking-tight">SankofaRapHub</span>
  </Link>
);

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#cases', label: 'Cases' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/80 px-4 py-3 backdrop-blur-sm md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-accent" prefetch={false}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Logo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium transition-colors hover:text-accent" prefetch={false}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative h-[80vh] min-h-[600px] w-full">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Batalha de Rap"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-20"
            data-ai-hint="rap battle stage"
          />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="container px-4 md:px-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-accent sm:text-6xl md:text-7xl">
                O Hub das Batalhas de Rap no Brasil
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
                Uma plataforma completa para gestão, cadastro e ranking democrático. Dê visibilidade à sua batalha e aos seus MCs.
              </p>
              <div className="mt-6">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="#contato">
                    Cadastrar minha batalha <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-background">
          <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Sobre Nós</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">
                Tecnologia para fortalecer a cena.
              </h2>
              <p className="text-foreground/80">
                O SankofaRapHub nasceu da paixão pela cultura Hip Hop e da necessidade de ferramentas que impulsionem a cena das batalhas de rap. Desenvolvemos software gratuito e de código aberto para que organizadores possam gerenciar seus eventos de forma profissional, desde o cadastro dos MCs até a criação de um ranking transparente e justo. Nossa missão é democratizar o acesso à tecnologia e dar a visibilidade que os artistas merecem.
              </p>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="MCs batalhando"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              data-ai-hint="rap artists performing"
            />
          </div>
        </section>

        <section id="como-funciona" className="bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">Como Funciona?</h2>
              <p className="mt-4 text-foreground/80">Quatro passos simples para levar sua batalha a outro nível.</p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-4">
              {[
                { step: "01", title: "Cadastro", description: "O organizador cadastra as informações da batalha e dos participantes na plataforma." },
                { step: "02", title: "Gestão", description: "A plataforma gera uma página exclusiva para o evento e gerencia o fluxo de inscrições." },
                { step: "03", title: "Ranking", description: "Após a batalha, o ranking dos MCs é atualizado automaticamente, de forma transparente." },
                { step: "04", title: "Visibilidade", description: "Sua batalha e seus MCs ganham destaque em nosso hub, atraindo mais público e patrocinadores." },
              ].map((item) => (
                <div key={item.step} className="grid gap-2 text-center">
                  <div className="font-headline text-5xl font-bold text-primary">{item.step}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">Cases de Sucesso</h2>
              <p className="mt-4 text-foreground/80">Batalhas que já estão fazendo história com a gente.</p>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline">Batalha na Várzea</CardTitle>
                  <CardDescription>Uma das batalhas mais tradicionais, agora com gestão digital.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Batalha na Várzea"
                    width={600}
                    height={400}
                    className="mb-4 rounded-md"
                    data-ai-hint="street crowd brazil"
                  />
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="https://www.batalha-na-varzea.com/" target="_blank" rel="noopener noreferrer">
                      Visitar Site <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle className="font-headline">Liga do Trombone</CardTitle>
                  <CardDescription>A nova liga que promete agitar a cena, em breve no nosso hub.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Liga do Trombone"
                    width={600}
                    height={400}
                    className="mb-4 rounded-md"
                    data-ai-hint="microphone stage light"
                  />
                  <Button disabled className="w-full">Em Desenvolvimento</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="beneficios" className="bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
             <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">Benefícios da Plataforma</h2>
              <p className="mt-4 text-foreground/80">Ferramentas que fazem a diferença para organizadores e MCs.</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { icon: <Settings className="h-10 w-10 text-primary" />, title: "Gestão Facilitada", description: "Controle total sobre inscrições, chaves e resultados em um só lugar." },
                    { icon: <Trophy className="h-10 w-10 text-primary" />, title: "Ranking Democrático", description: "Sistema de pontuação transparente que valoriza o mérito de cada MC." },
                    { icon: <Eye className="h-10 w-10 text-primary" />, title: "Visibilidade para MCs", description: "Perfil individual para cada MC, com histórico de batalhas e conquistas." },
                    { icon: <Briefcase className="h-10 w-10 text-primary" />, title: "Organização Profissional", description: "Eleve o nível do seu evento com ferramentas que impressionam público e patrocinadores." },
                ].map(card => (
                    <Card key={card.title} className="text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                {card.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-bold">{card.title}</h3>
                            <p className="mt-2 text-foreground/80">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
          </div>
        </section>

        <section className="bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="py-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                Traga sua batalha para o SankofaRapHub e fortaleça a cultura.
              </h2>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#contato">
                    Quero fazer parte <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">Entre em Contato</h2>
              <p className="mt-4 text-foreground/80">
                Preencha o formulário para cadastrar sua batalha, tirar dúvidas ou pedir uma demonstração da plataforma.
              </p>
            </div>
            <div className="mx-auto max-w-lg">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-secondary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-6">
          <Logo />
          <p className="text-sm text-foreground/80">&copy; {new Date().getFullYear()} SankofaRapHub. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-foreground/80 hover:text-accent"><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="text-foreground/80 hover:text-accent"><Instagram className="h-6 w-6" /></Link>
            <Link href="#" className="text-foreground/80 hover:text-accent"><Youtube className="h-6 w-6" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

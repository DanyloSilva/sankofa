import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Sankofa Rap Hub',
  description: 'O Hub das Batalhas de Rap no Brasil. Plataforma de gestão, cadastro e ranking democrático para batalhas de rap.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <title>Sankofa Rap Hub</title>
        <meta name="description" content="O Hub das Batalhas de Rap no Brasil. Plataforma de gestão, cadastro e ranking democrático para batalhas de rap." />
        <meta name="keywords" content="batalha de rap, rap, hip hop, ranking, MC, evento, cadastro, plataforma, cultura, Brasil" />
        <meta name="author" content="Sankofa Rap Hub" />
        <meta property="og:title" content="Sankofa Rap Hub" />
        <meta property="og:description" content="O Hub das Batalhas de Rap no Brasil. Plataforma de gestão, cadastro e ranking democrático para batalhas de rap." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sankofaraphub.com.br" />
        <meta property="og:image" content="/logos/Logo do SANKOFA RAP HUB.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sankofa Rap Hub" />
        <meta name="twitter:description" content="O Hub das Batalhas de Rap no Brasil. Plataforma de gestão, cadastro e ranking democrático para batalhas de rap." />
        <meta name="twitter:image" content="/logos/Logo do SANKOFA RAP HUB.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Staatliches&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

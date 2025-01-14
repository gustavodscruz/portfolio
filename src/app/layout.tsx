import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";
import { GraphProvider } from "./_components/GraphProvider";
import Template from "./template";

const jetbrains = localFont({
  src: "./_fonts/JetBrainsMono.ttf",
  variable: "--primary",
  weight: "100 900",
});

const geo = localFont({
  src: "./_fonts/Geo.ttf",
  variable: "--secondary",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "gustavodscruz.dev",
  description: "Desenvolvedor Full-Stack Java e Typescript | Cientista de Dados Python",
  icons: [{ url: "./dev.ico" }],
  openGraph : {
    images: [{url: "./gustavo.jpg"}]
  },
  twitter : {
    images: [{url: "./gustavo.jpg"}]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${jetbrains.variable} ${geo.variable} antialiased flex flex-col bg-background max-w-screen-lg m-auto font-primary text-slate-300`}
      >
        <Header />
        <main className="flex-grow">
          <Template>
            <GraphProvider>{children}</GraphProvider>
          </Template>
        </main>
      </body>
    </html>
  );
}

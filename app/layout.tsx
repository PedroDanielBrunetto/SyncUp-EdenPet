import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eden Pet Litoral - Crematório de Animais",
  description:
    "Serviço humanizado de cremação para pets no Litoral Paulista. Cuidamos com respeito e carinho do último adeus ao seu amigo.",
  keywords: [
    "crematório de animais",
    "cremação de pets",
    "homenagem a animais",
    "serviço funerário pet",
    "luto animal",
    "despedida de pets",
    "Eden Pet Litoral",
  ],
  openGraph: {
    title: "Eden Pet Litoral - Crematório de Animais",
    description:
      "Oferecemos um serviço digno e respeitoso para a despedida do seu pet.",
    url: "https://edenpetlitoral.com.br",
    images: [
      {
        url: "/public/logo-header.png",
        width: 1200,
        height: 630,
        alt: "Banner Eden Pet Litoral - Crematório de Animais",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

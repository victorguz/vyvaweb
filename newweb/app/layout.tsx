import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#7b8be9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vyva | Sistema de Agendamiento y Gestión para Salones y Estéticas",
  description:
    "Vyva es el sistema de agendamiento y gestión diseñado para salones de belleza, estéticas, spas y clínicas. Gestiona citas, clientes, pagos y reportes desde una sola plataforma. Integración con Google Calendar.",
  keywords:
    "sistema agendamiento, gestión salón belleza, agenda citas, POS salón, Google Calendar, estética, spa, barbería, clínica estética, Colombia",
  authors: [{ name: "Vyva POS, LLC" }],
  openGraph: {
    title: "Vyva | Sistema de Agendamiento y Gestión para Salones y Estéticas",
    description:
      "Sistema de agendamiento y gestión para salones de belleza, estéticas, spas y clínicas. Reservas online, Google Calendar, gestión de clientes y pagos en una sola plataforma.",
    type: "website",
    url: "https://vyvapos.com",
    siteName: "Vyva POS",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyva | Sistema de Agendamiento y Gestión para Salones y Estéticas",
    description:
      "Sistema de agendamiento y gestión para salones de belleza, estéticas, spas y clínicas. Reservas online, Google Calendar, gestión de clientes y pagos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${inter.className} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

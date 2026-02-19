import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <Link href="/" className="order-1 md:order-none">
          <Image
            src="/assets/images/vyva_logo_white.svg"
            alt="Vyva Logo"
            width={100}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-slate-400 order-3 md:order-none">
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            Política de Privacidad
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Términos de Servicio
          </Link>
        </div>
        <p className="text-sm text-slate-400 order-2 md:order-none">
          © 2024 Vyva POS, LLC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

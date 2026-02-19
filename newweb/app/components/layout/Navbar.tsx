'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#features-dropdown')) {
        setIsFeaturesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const featuresLinks = [
    { href: '/#agendamiento', label: 'Agendamiento' },
    { href: '/#clientes', label: 'Gestión de Clientes' },
    { href: '/#pos', label: 'Punto de Venta' },
    { href: '/#dashboard', label: 'Dashboard' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white/80 backdrop-blur-lg shadow-sm'
      }`}
    >
      <nav className="container-custom py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/images/vyva_logo_black.svg"
            alt="Vyva Logo"
            width={100}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative" id="features-dropdown">
            <button
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              className="text-dark/80 hover:text-primary transition-colors flex items-center cursor-pointer"
            >
              Características
              <span
                className={`ml-1 text-xs transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
            {isFeaturesOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-default shadow-xl z-20 border border-slate-200 overflow-hidden">
                {featuresLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-dark/80 hover:bg-primary-soft hover:text-primary transition-colors text-sm"
                    onClick={() => setIsFeaturesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/#use-cases"
            className="text-dark/80 hover:text-primary transition-colors"
          >
            Casos de Uso
          </Link>
          <Link
            href="/pricing"
            className="text-dark/80 hover:text-primary transition-colors"
          >
            Planes
          </Link>
          <Link
            href="/faq"
            className="text-dark/80 hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="https://app.vyvapos.com"
            target="_blank"
            className="ml-5 text-dark/80 hover:text-primary transition-colors"
            title="Iniciar Sesión"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
          <Button
            href="https://app.vyvapos.com/plans/essential"
            target="_blank"
            size="sm"
          >
            Empezar Gratis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <Link
            href="https://app.vyvapos.com"
            target="_blank"
            className="text-dark/80 hover:text-primary transition-colors"
            title="Iniciar Sesión"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-btn text-dark/80 hover:bg-light cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-6 py-4">
            <Image
              src="/assets/images/vyva_logo_black.svg"
              alt="Vyva Logo"
              width={100}
              height={28}
              className="h-7 w-auto"
            />
          </div>
          {featuresLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 px-6 text-dark/80 hover:bg-light transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#use-cases"
            className="block py-2.5 px-6 text-dark/80 hover:bg-light transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Casos de Uso
          </Link>
          <Link
            href="/pricing"
            className="block py-2.5 px-6 text-dark/80 hover:bg-light transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Planes
          </Link>
          <Link
            href="/faq"
            className="block py-2.5 px-6 text-dark/80 hover:bg-light transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <div className="p-4">
            <Link
              href="https://app.vyvapos.com/plans/essential"
              target="_blank"
              className="block py-3 px-6 text-center bg-primary text-white font-semibold rounded-btn hover:brightness-90 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Empezar Gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/profissionais', label: 'Profissionais' },
    { href: '/loja', label: 'Loja' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">Belo</span>
              <span className="text-gold">.</span>
              <span className="text-gold">Salon</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-gold transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/carrinho"
              className="text-white/90 hover:text-gold transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <Link
              href="/agendamento"
              className="px-6 py-2.5 bg-gold text-black font-semibold rounded-md hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-gold/50"
            >
              Agendar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-gold transition-colors duration-300 font-medium px-4 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/agendamento"
                onClick={() => setIsOpen(false)}
                className="mx-4 px-6 py-2.5 bg-gold text-black font-semibold rounded-md hover:bg-gold/90 transition-all duration-300 text-center"
              >
                Agendar Horário
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado por se inscrever! Você receberá 10% de desconto no seu primeiro serviço.');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header with Gold Gradient */}
          <div className="gold-gradient p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
              <Gift className="h-8 w-8 text-gold" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Ganhe 10% OFF
            </h2>
            <p className="text-black/80">
              No seu primeiro serviço
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-center text-muted-foreground mb-6">
              Cadastre-se em nossa newsletter e receba ofertas exclusivas, dicas de beleza e novidades em primeira mão!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
              >
                Quero Meu Desconto!
              </button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Ao se cadastrar, você concorda em receber e-mails promocionais.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

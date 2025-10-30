import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Belo</span>
              <span className="text-gold">.</span>
              <span className="text-gold">Salon</span>
            </div>
            <p className="text-white/70 text-sm">
              Elegância, qualidade e autocuidado em um só lugar. Sua beleza é nossa paixão.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/profissionais" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Profissionais
                </Link>
              </li>
              <li>
                <Link href="/loja" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Loja de Bijuterias
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-white/70 hover:text-gold transition-colors text-sm">
                  Galeria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-white/70">(11) 3456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-white/70">contato@belo.salon</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Horário</h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li>Seg - Sex: 9h - 20h</li>
              <li>Sábado: 9h - 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Belo.Salon. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import { Clock } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'hair', label: 'Cabelo' },
    { value: 'nails', label: 'Unhas' },
    { value: 'spa', label: 'Spa' },
    { value: 'treatments', label: 'Tratamentos' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-gold">Serviços</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Descubra nossa ampla gama de serviços premium para realçar sua beleza
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-gold text-black shadow-lg'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all duration-300 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-gold font-bold text-2xl">
                      R$ {service.price}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}min
                    </div>
                  </div>
                  <Link
                    href="/agendamento"
                    className="mt-4 w-full px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gold hover:text-black transition-all duration-300 text-center font-semibold inline-block"
                  >
                    Agendar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

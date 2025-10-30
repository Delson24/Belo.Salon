'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { products } from '@/lib/data';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'earrings', label: 'Brincos' },
    { value: 'necklaces', label: 'Colares' },
    { value: 'bracelets', label: 'Pulseiras' },
    { value: 'rings', label: 'Anéis' },
    { value: 'sets', label: 'Conjuntos' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loja de <span className="text-gold">Bijuterias</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Peças exclusivas para complementar seu estilo com elegância
          </p>
        </div>
      </section>

      {/* Products */}
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all duration-300 bg-card"
              >
                <div className="aspect-square overflow-hidden bg-muted/30">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gold font-bold text-xl">
                      R$ {product.price}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Estoque: {product.stock}
                    </span>
                  </div>
                  <button className="w-full px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Frete Grátis em Compras Acima de R$ 200
          </h2>
          <p className="text-white/70 mb-6">
            Entrega rápida e segura para todo o Brasil
          </p>
        </div>
      </section>
    </div>
  );
}

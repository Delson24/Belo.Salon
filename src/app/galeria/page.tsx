export default function GalleryPage() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
    'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800',
    'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-gold">Galeria</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos e transformações incríveis
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siga-nos no <span className="text-gold">Instagram</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Acompanhe nosso dia a dia e fique por dentro das novidades
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            @belo.salon
          </a>
        </div>
      </section>
    </div>
  );
}

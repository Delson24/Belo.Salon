import Link from 'next/link';
import { ArrowRight, Sparkles, Clock, Award, Heart } from 'lucide-react';
import { services, professionals } from '@/lib/data';

export default function Home() {
  const featuredServices = services.slice(0, 4);
  const featuredProfessionals = professionals.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-gold text-sm font-medium">Luxo e Elegância</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Onde Sua Beleza
            <span className="block gold-gradient bg-clip-text text-transparent mt-2">
              Se Torna Arte
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experiência premium em beleza, autocuidado e estilo. Profissionais especializados e produtos de alta qualidade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agendamento"
              className="px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-xl hover:shadow-gold/50 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Agendar Horário</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/servicos"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-xl">Profissionais Qualificados</h3>
              <p className="text-muted-foreground">
                Equipe especializada com formação internacional
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30">
                <Sparkles className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-xl">Produtos Premium</h3>
              <p className="text-muted-foreground">
                Utilizamos apenas produtos de primeira linha
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/30">
                <Heart className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-semibold text-xl">Experiência Única</h3>
              <p className="text-muted-foreground">
                Ambiente acolhedor e atendimento personalizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="text-gold">Serviços</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços de beleza e bem-estar para você se sentir ainda mais especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all duration-300 bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold text-lg">
                      R$ {service.price}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}min
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              <span>Ver Todos os Serviços</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Professionals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="text-gold">Profissionais</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa equipe de especialistas dedicados a realçar sua beleza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProfessionals.map((professional) => (
              <div
                key={professional.id}
                className="group text-center"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold transition-colors duration-300">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-1">{professional.name}</h3>
                <p className="text-gold text-sm mb-2">{professional.role}</p>
                <p className="text-muted-foreground text-sm mb-3">{professional.specialty}</p>
                <div className="flex items-center justify-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(professional.rating) ? 'text-gold' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {professional.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/profissionais"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              <span>Conhecer Toda a Equipe</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Jewelry Shop CTA */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Descubra Nossa Loja de <span className="text-gold">Bijuterias</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Complemente seu visual com nossas peças exclusivas. Elegância e sofisticação em cada detalhe.
          </p>
          <Link
            href="/loja"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-xl hover:shadow-gold/50"
          >
            <span>Explorar Loja</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronta Para Transformar Sua Beleza?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Agende seu horário agora e experimente o melhor em serviços de beleza
          </p>
          <Link
            href="/agendamento"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-xl hover:shadow-gold/50"
          >
            <span>Agendar Agora</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

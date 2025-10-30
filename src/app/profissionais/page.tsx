import { professionals } from '@/lib/data';

export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-gold">Equipe</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Profissionais talentosos e dedicados à sua transformação
          </p>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {professionals.map((professional) => (
              <div
                key={professional.id}
                className="group text-center"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold transition-all duration-300 shadow-xl">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h3 className="font-bold text-2xl mb-2">{professional.name}</h3>
                <p className="text-gold font-semibold mb-2">{professional.role}</p>
                <p className="text-muted-foreground mb-3">{professional.specialty}</p>

                <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
                  {professional.bio}
                </p>

                <div className="flex items-center justify-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < Math.floor(professional.rating) ? 'text-gold' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-muted-foreground ml-2 font-semibold">
                    {professional.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto Para Sua Transformação?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Escolha seu profissional preferido e agende seu horário
          </p>
          <a
            href="/agendamento"
            className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            Agendar Horário
          </a>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Scissors, CheckCircle } from 'lucide-react';
import { services, professionals } from '@/lib/data';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    professional: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
  });

  const selectedService = services.find(s => s.id === formData.service);
  const selectedProfessional = professionals.find(p => p.id === formData.professional);

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar o agendamento
    alert('Agendamento realizado com sucesso! Você receberá uma confirmação por e-mail.');
  };

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Agende seu <span className="text-gold">Horário</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Preencha os dados abaixo para reservar seu atendimento
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s ? 'bg-gold text-black' : 'bg-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-16 h-1 ${step > s ? 'bg-gold' : 'bg-muted'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Scissors className="h-6 w-6 text-gold" />
                  <h2 className="text-2xl font-bold">Escolha o Serviço</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${
                        formData.service === service.id
                          ? 'border-gold bg-gold/5'
                          : 'border-border hover:border-gold/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{service.name}</h3>
                        <span className="text-gold font-bold">R$ {service.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}min
                      </div>
                    </label>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.service}
                  className="w-full px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Próximo
                </button>
              </div>
            )}

            {/* Step 2: Professional, Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <User className="h-6 w-6 text-gold" />
                  <h2 className="text-2xl font-bold">Profissional, Data e Horário</h2>
                </div>

                {/* Professional Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Escolha o Profissional</label>
                  <div className="grid grid-cols-1 gap-3">
                    {professionals.map((professional) => (
                      <label
                        key={professional.id}
                        className={`cursor-pointer border-2 rounded-lg p-4 transition-all flex items-center space-x-4 ${
                          formData.professional === professional.id
                            ? 'border-gold bg-gold/5'
                            : 'border-border hover:border-gold/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="professional"
                          value={professional.id}
                          checked={formData.professional === professional.id}
                          onChange={(e) => setFormData({ ...formData, professional: e.target.value })}
                          className="sr-only"
                        />
                        <img
                          src={professional.image}
                          alt={professional.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{professional.name}</h3>
                          <p className="text-sm text-gold">{professional.role}</p>
                          <p className="text-xs text-muted-foreground">{professional.specialty}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gold">★</span>
                          <span className="text-sm ml-1">{professional.rating}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Escolha a Data</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Escolha o Horário</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {availableTimes.map((time) => (
                      <label
                        key={time}
                        className={`cursor-pointer border-2 rounded-lg p-3 text-center transition-all ${
                          formData.time === time
                            ? 'border-gold bg-gold text-black'
                            : 'border-border hover:border-gold/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="time"
                          value={time}
                          checked={formData.time === time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="sr-only"
                        />
                        <span className="font-medium">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-3 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all duration-300"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.professional || !formData.date || !formData.time}
                    className="flex-1 px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Info */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <CheckCircle className="h-6 w-6 text-gold" />
                  <h2 className="text-2xl font-bold">Confirme seus Dados</h2>
                </div>

                {/* Booking Summary */}
                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold mb-4">Resumo do Agendamento</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Serviço:</span>
                      <span className="font-medium">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Profissional:</span>
                      <span className="font-medium">{selectedProfessional?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Data:</span>
                      <span className="font-medium">{new Date(formData.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Horário:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2 flex justify-between">
                      <span className="font-semibold">Total:</span>
                      <span className="text-gold font-bold text-lg">R$ {selectedService?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Personal Info Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 px-6 py-3 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all duration-300"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300"
                  >
                    Confirmar Agendamento
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

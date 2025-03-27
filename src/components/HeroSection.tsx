
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern opacity-30 z-0"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gasfacil-blue/10 text-gasfacil-blue text-sm font-medium mb-2">
              <span className="animate-pulse-soft mr-2 inline-block w-2 h-2 rounded-full bg-gasfacil-blue"></span>
              Assistência técnica especializada
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gasfacil-blue leading-tight">
              Conserte Seu Aquecedor a Gás <span className="text-gasfacil-orange">Hoje Mesmo</span> com a Gás Fácil!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Atendimento rápido, seguro e confiável para sua casa. Resolva seu problema agora!
            </p>
            <div className="pt-4">
              <a 
                href="https://wa.me/5511999999999?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center gap-2 group"
              >
                Fale Agora pelo WhatsApp 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gasfacil-blue rounded-2xl rotate-3 scale-105 opacity-10"></div>
              <div className="glassmorphism rounded-2xl p-3 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Técnico especializado consertando aquecedor a gás" 
                  className="w-full h-auto object-cover rounded-xl shadow-inner"
                  loading="lazy"
                />
              </div>
              <div className="absolute -right-6 -bottom-6 glassmorphism px-6 py-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gasfacil-blue font-semibold">Atendimento Imediato</p>
                    <p className="text-sm text-gray-600">Chegamos em até 2 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

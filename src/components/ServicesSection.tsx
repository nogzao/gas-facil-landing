
import React, { useEffect, useRef } from 'react';
import { Wrench, Settings, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <div className={`glassmorphism rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${
      index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
    }`} style={{ animationDelay: `${0.1 * index}s` }}>
      <div className="bg-gasfacil-blue/10 p-3 inline-flex rounded-full mb-4">
        <div className="text-gasfacil-blue">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gasfacil-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a 
        href="https://wa.me/5511999999999?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás."
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center mt-4 text-gasfacil-orange font-medium hover:text-gasfacil-orange-light transition-colors"
      >
        Solicitar serviço
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Conserto de Aquecedores',
      description: 'Solucionamos qualquer problema com seu aquecedor a gás com rapidez e eficiência.'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Manutenção Preventiva',
      description: 'Evite problemas futuros e mantenha seu aquecedor funcionando perfeitamente.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Instalação Especializada',
      description: 'Instalação segura e conforme as normas técnicas para garantir o melhor funcionamento.'
    }
  ];

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-blue-50 to-white" id="servicos">
      <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div ref={sectionRef} className="section-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gasfacil-blue mb-4">
              Assistência Completa para Aquecedores a Gás
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consertos, manutenção e instalação com rapidez e segurança. Contamos com equipamentos modernos e técnicos capacitados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-gasfacil-blue/5 rounded-xl p-8 border border-gasfacil-blue/10">
            <h3 className="text-xl font-semibold text-gasfacil-blue mb-4 text-center">
              Atendemos todas as marcas
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['Bosch', 'Rinnai', 'Komeco', 'Lorenzetti', 'Orbis', 'Inova'].map((brand, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 bg-white rounded-lg text-gray-600 shadow-sm animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

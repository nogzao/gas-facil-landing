
import React, { useEffect, useRef } from 'react';
import { Clock, Shield, DollarSign, CheckCircle } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="flex flex-col items-center p-6 glassmorphism rounded-xl animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-gasfacil-blue/10 p-3 rounded-full mb-4">
        <div className="text-gasfacil-blue">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gasfacil-blue mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
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

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Atendimento rápido',
      description: 'Seu problema resolvido em poucas horas.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Técnicos certificados',
      description: 'Segurança garantida para sua família.'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Preço justo',
      description: 'Orçamento sem surpresas.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Garantia no serviço',
      description: 'Confiança em cada conserto.'
    }
  ];

  return (
    <section className="py-20 px-4 relative bg-white" id="beneficios">
      <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div ref={sectionRef} className="section-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gasfacil-blue mb-4">
              Por que Escolher a Gás Fácil?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos com a melhor equipe de especialistas em aquecedores a gás para resolver seu problema com eficiência e segurança.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Benefit 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fade-in" style={{animationDelay: "0.5s"}}>
            <p className="text-xl font-medium text-gasfacil-blue mb-4">
              Não deixe o banho frio estragar seu dia – fale conosco agora!
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-2 mt-2"
            >
              Resolver meu problema agora
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

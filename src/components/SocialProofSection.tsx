
import React, { useEffect, useRef, useState } from 'react';

const SocialProofSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const targetCount = 1347;
  const duration = 2000; // 2 seconds for the counter animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * targetCount);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  return (
    <section className="py-16 px-4 relative bg-gasfacil-blue text-white" id="resultados">
      <div className="absolute inset-0 opacity-10 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto relative z-10">
        <div ref={sectionRef} className={`transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mais de <span className="text-gasfacil-orange">{isVisible ? count.toLocaleString() : '0'}</span> Residências Atendidas!
            </h2>
            
            <div className="glassmorphism bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <p className="text-xl mb-6">
                A Gás Fácil já trouxe conforto e segurança para mais de {targetCount.toLocaleString()} lares com nossos serviços de qualidade.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: '98%', label: 'Clientes satisfeitos' },
                  { value: '24h', label: 'Atendimento todos os dias' },
                  { value: '15+', label: 'Anos de experiência' },
                  { value: '100%', label: 'Garantia de serviço' }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gasfacil-orange mb-2">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

import React from 'react';
const CTASection: React.FC = () => {
  return <section className="py-16 px-4 relative" id="contato">
      <div className="absolute inset-0 bg-gradient-to-r from-gasfacil-blue to-gasfacil-blue-light opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-gasfacil-orange/10 text-gasfacil-orange text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Atendimento prioritário
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gasfacil-blue mb-4">
                Seu aquecedor parou? Não espere mais!
              </h2>
              <p className="text-gray-600 mb-6">
                Nossos técnicos estão prontos para resolver seu problema hoje mesmo. Atendimento rápido e eficiente para sua tranquilidade.
              </p>
              <a href="https://wa.me/5521996131840?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás." target="_blank" rel="noopener noreferrer" className="cta-button inline-flex items-center gap-2">
                Clique Aqui e Fale pelo WhatsApp Agora!
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gasfacil-orange to-gasfacil-orange-light opacity-20 blur-md rounded-xl"></div>
                <img alt="Família feliz com água quente após conserto de aquecedor" className="relative rounded-xl w-full h-auto object-cover shadow-lg" loading="lazy" src="/lovable-uploads/833716b7-f7c9-4e94-a8ea-04351b3666b7.jpg" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;
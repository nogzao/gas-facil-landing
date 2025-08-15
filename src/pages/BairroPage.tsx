import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import OndeAtendemos from "@/components/OndeAtendemos";
import Footer from "@/components/Footer";
import bairrosData from "@/data/bairros";
import { makeHeadline, updatePageSEO } from "@/utils/seo";

const BairroPage = () => {
  const { cidade, bairro } = useParams<{ cidade: string; bairro: string }>();
  
  // Validar se a cidade é válida
  if (!cidade || !bairro || !['rj', 'niteroi'].includes(cidade)) {
    return <Navigate to="/404" replace />;
  }
  
  // Encontrar o bairro nos dados
  let bairroEncontrado: { nome: string; slug: string } | null = null;
  let cidadeCompleta = '';
  
  if (cidade === 'rj') {
    cidadeCompleta = 'Rio de Janeiro';
    // Buscar em todas as zonas do Rio
    for (const zona of Object.values(bairrosData.rio)) {
      const encontrado = zona.find(b => b.slug === bairro);
      if (encontrado) {
        bairroEncontrado = encontrado;
        break;
      }
    }
  } else if (cidade === 'niteroi') {
    cidadeCompleta = 'Niterói';
    bairroEncontrado = bairrosData.niteroi.Niterói.find(b => b.slug === bairro) || null;
  }
  
  // Se o bairro não foi encontrado, redirecionar para 404
  if (!bairroEncontrado) {
    return <Navigate to="/404" replace />;
  }
  
  // Update SEO quando a página carregar
  useEffect(() => {
    updatePageSEO({
      bairro: bairroEncontrado!.nome,
      cidade: cidadeCompleta,
      slug: bairro!,
      cidadeBase: cidade!
    });
  }, [bairroEncontrado, cidadeCompleta, cidade, bairro]);

  return (
    <div className="w-full">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gasfacil-blue">
                <span className="text-gasfacil-orange">Gás</span>Fácil
              </a>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#beneficios" className="text-gray-600 hover:text-gasfacil-blue transition-colors">Benefícios</a>
              <a href="#servicos" className="text-gray-600 hover:text-gasfacil-blue transition-colors">Serviços</a>
              <a href="#resultados" className="text-gray-600 hover:text-gasfacil-blue transition-colors">Resultados</a>
              <a href="#contato" className="text-gray-600 hover:text-gasfacil-blue transition-colors">Contato</a>
            </nav>
            
            <a 
              href="https://wa.me/5521996131840?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gasfacil-blue hover:bg-gasfacil-blue-light text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            
            {/* Mobile menu button */}
            <button className="md:hidden flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gasfacil-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16">
        {/* Hero Section com headline customizada */}
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <div className="absolute inset-0 bg-pattern opacity-30 z-0"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gasfacil-blue/10 text-gasfacil-blue text-sm font-medium mb-2">
                  <span className="animate-pulse-soft mr-2 inline-block w-2 h-2 rounded-full bg-gasfacil-blue"></span>
                  Assistência técnica especializada
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gasfacil-blue leading-tight">
                  {makeHeadline(bairroEncontrado.nome, cidadeCompleta)}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                  Atendimento rápido, seguro e confiável em {bairroEncontrado.nome} e região. Resolva seu problema agora!
                </p>
                <div className="pt-4">
                  <a 
                    href="https://wa.me/5521996131840?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás."
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-button inline-flex items-center gap-2 group"
                  >
                    Fale Agora pelo WhatsApp 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gasfacil-blue rounded-2xl rotate-3 scale-105 opacity-10"></div>
                  <div className="glassmorphism rounded-2xl p-3 shadow-xl">
                    <img 
                      alt={`Técnico especializado consertando aquecedor a gás em ${bairroEncontrado.nome}`}
                      className="w-full h-auto object-cover rounded-xl shadow-inner" 
                      loading="lazy" 
                      src="/lovable-uploads/3f9dffcc-dccb-4177-9340-30eca31e3f95.jpg" 
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
                        <p className="text-sm text-gray-600">Resolvemos em até 24 horas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BenefitsSection />
        <ServicesSection />
        <SocialProofSection />
        <CTASection />
        <OndeAtendemos />
      </main>

      <Footer />
      
      {/* WhatsApp floating button for mobile */}
      <a 
        href="https://wa.me/5521996131840?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default BairroPage;
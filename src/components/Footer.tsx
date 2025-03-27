
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gasfacil-blue text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Gás Fácil</h3>
            <p className="text-blue-100 mb-4">
              Sua solução confiável para aquecedores a gás. Atendimento rápido e técnicos certificados para sua segurança.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', url: '#', icon: 'M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z' },
                { name: 'Instagram', url: '#', icon: 'M10 0C7.283 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.283 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 1.802c2.67 0 2.986.01 4.04.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.039.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.099-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.047 1.37-.057 4.039-.057zm0 3.064A5.139 5.139 0 004.86 10a5.139 5.139 0 105.14-5.134zm0 8.466A3.333 3.333 0 116.667 10 3.333 3.333 0 0110 13.332zM15.338 4.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z' },
                { name: 'Twitter', url: '#', icon: 'M19.992 3.978c-.736.33-1.525.55-2.357.65.847-.508 1.498-1.312 1.804-2.27-.793.47-1.671.812-2.606.996C16.072 2.522 15.013 2 13.847 2c-2.266 0-4.104 1.838-4.104 4.104 0 .32.036.634.106.935-3.415-.17-6.442-1.806-8.474-4.292-.353.608-.556 1.314-.556 2.068 0 1.424.724 2.68 1.825 3.415-.673-.022-1.305-.207-1.858-.513v.052c0 1.988 1.415 3.648 3.292 4.023-.344.095-.707.145-1.08.145-.265 0-.522-.026-.772-.075.522 1.63 2.037 2.818 3.833 2.85-1.404 1.1-3.174 1.757-5.096 1.757-.332 0-.66-.02-.982-.057 1.816 1.164 3.973 1.844 6.292 1.844 7.553 0 11.677-6.255 11.677-11.675 0-.178-.004-.355-.012-.53.8-.58 1.496-1.3 2.047-2.124z' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="hover:text-gasfacil-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <svg 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="h-5 w-5"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (21) 99613-1840
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (21) 96962-9801
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@gasfacil.com.br
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Rio de Janeiro - RJ
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Atendimento</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Segunda a Domingo: 7h às 22h
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Atendimento de emergência 24h
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://wa.me/5521996131840?text=Olá!%20Preciso%20de%20assistência%20com%20meu%20aquecedor%20a%20gás."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center gap-2 bg-gasfacil-orange/90"
              >
                Fale com a Gás Fácil pelo WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Gás Fácil - Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gasfacil-orange transition-colors mx-2">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-gasfacil-orange transition-colors mx-2">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

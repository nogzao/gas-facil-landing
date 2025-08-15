import React from 'react';
import { Link } from 'react-router-dom';
import bairrosData from '@/data/bairros';

const OndeAtendemos: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gasfacil-blue mb-12 text-center">
          onde atendemos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Rio de Janeiro - Centro */}
          <div>
            <h3 className="text-xl font-semibold text-gasfacil-blue mb-4">Centro</h3>
            <ul className="space-y-2">
              {bairrosData.rio.Centro.map((bairro) => (
                <li key={bairro.slug}>
                  <Link 
                    to={`/rj/${bairro.slug}`}
                    className="text-gray-700 hover:text-gasfacil-orange transition-colors duration-200"
                  >
                    {bairro.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rio de Janeiro - Zona Sul */}
          <div>
            <h3 className="text-xl font-semibold text-gasfacil-blue mb-4">Zona Sul</h3>
            <ul className="space-y-2">
              {bairrosData.rio["Zona Sul"].map((bairro) => (
                <li key={bairro.slug}>
                  <Link 
                    to={`/rj/${bairro.slug}`}
                    className="text-gray-700 hover:text-gasfacil-orange transition-colors duration-200"
                  >
                    {bairro.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rio de Janeiro - Zona Norte */}
          <div>
            <h3 className="text-xl font-semibold text-gasfacil-blue mb-4">Zona Norte</h3>
            <ul className="space-y-2">
              {bairrosData.rio["Zona Norte"].map((bairro) => (
                <li key={bairro.slug}>
                  <Link 
                    to={`/rj/${bairro.slug}`}
                    className="text-gray-700 hover:text-gasfacil-orange transition-colors duration-200"
                  >
                    {bairro.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rio de Janeiro - Zona Oeste */}
          <div>
            <h3 className="text-xl font-semibold text-gasfacil-blue mb-4">Zona Oeste</h3>
            <ul className="space-y-2">
              {bairrosData.rio["Zona Oeste"].map((bairro) => (
                <li key={bairro.slug}>
                  <Link 
                    to={`/rj/${bairro.slug}`}
                    className="text-gray-700 hover:text-gasfacil-orange transition-colors duration-200"
                  >
                    {bairro.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Niterói */}
          <div>
            <h3 className="text-xl font-semibold text-gasfacil-blue mb-4">Niterói</h3>
            <ul className="space-y-2">
              {bairrosData.niteroi.Niterói.map((bairro) => (
                <li key={bairro.slug}>
                  <Link 
                    to={`/niteroi/${bairro.slug}`}
                    className="text-gray-700 hover:text-gasfacil-orange transition-colors duration-200"
                  >
                    {bairro.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OndeAtendemos;
// Hook para gerar sitemap dinâmico
import { useEffect } from 'react';
import bairrosData from '@/data/bairros';

export const useSitemap = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = 'https://www.gasfacil.com.br';
      const urls = [
        { url: `${baseUrl}/`, priority: 1.0, changefreq: 'daily' }
      ];

      // Adicionar URLs dos bairros do Rio de Janeiro
      Object.values(bairrosData.rio).flat().forEach(bairro => {
        urls.push({
          url: `${baseUrl}/rj/${bairro.slug}`,
          priority: 0.8,
          changefreq: 'weekly'
        });
      });

      // Adicionar URLs dos bairros de Niterói
      bairrosData.niteroi.Niterói.forEach(bairro => {
        urls.push({
          url: `${baseUrl}/niteroi/${bairro.slug}`,
          priority: 0.8,
          changefreq: 'weekly'
        });
      });

      return urls;
    };

    // Opcional: Pode ser usado para gerar o sitemap.xml quando necessário
    const sitemapUrls = generateSitemap();
    console.log(`Sitemap gerado com ${sitemapUrls.length} URLs`, sitemapUrls);
  }, []);
};

export default useSitemap;
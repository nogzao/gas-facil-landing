// Dados completos dos bairros do Rio de Janeiro e Niterói
export interface Bairro {
  nome: string;
  slug: string;
}

export interface BairrosPorZona {
  [zona: string]: Bairro[];
}

export interface BairrosPorCidade {
  rio: BairrosPorZona;
  niteroi: BairrosPorZona;
}

// Função utilitária para gerar slugs
export function slugify(nome: string): string {
  return nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim();
}

// Base de dados completa dos bairros
const bairrosData: BairrosPorCidade = {
  rio: {
    "Centro": [
      "Centro", "Saúde", "Gamboa", "Santo Cristo", "Cidade Nova", "Estácio", 
      "Rio Comprido", "Catumbi", "Santa Teresa", "Lapa", "Glória"
    ].map(nome => ({ nome, slug: slugify(nome) })),
    
    "Zona Sul": [
      "Copacabana", "Ipanema", "Leblon", "Botafogo", "Flamengo", "Laranjeiras", 
      "Urca", "Humaitá", "Lagoa", "Gávea", "São Conrado", "Barra da Tijuca",
      "Recreio dos Bandeirantes", "Joá", "Vidigal", "Rocinha"
    ].map(nome => ({ nome, slug: slugify(nome) })),
    
    "Zona Norte": [
      "Tijuca", "Maracanã", "Grajaú", "Vila Isabel", "Andaraí", "Alto da Boa Vista",
      "Usina", "Mangueira", "Benfica", "São Cristóvão", "Caju", "Vasco da Gama",
      "Triagem", "Bonsucesso", "Ramos", "Olaria", "Penha", "Penha Circular",
      "Brás de Pina", "Cordovil", "Parada de Lucas", "Vigário Geral", "Jardim América",
      "Higienópolis", "Maria da Graça", "Del Castilho", "Pilares", "Abolição",
      "Água Santa", "Encantado", "Lins de Vasconcelos", "Méier", "Todos os Santos",
      "Cachambi", "Engenho de Dentro", "Riachuelo", "Rocha", "Sampaio", "São Francisco Xavier",
      "Madureira", "Turiaçu", "Rocha Miranda", "Honório Gurgel", "Oswaldo Cruz",
      "Bento Ribeiro", "Marechal Hermes", "Deodoro", "Vila Militar", "Magalhães Bastos",
      "Realengo", "Padre Miguel", "Bangu", "Senador Camará", "Santíssimo",
      "Acari", "Barros Filho", "Costa Barros", "Coelho Neto", "Guadalupe",
      "Honório Gurgel", "Irajá", "Jardim América", "Pavuna", "Parque Anchieta",
      "Ricardo de Albuquerque", "Anchieta", "Parque Colúmbia", "Vila da Penha",
      "Vista Alegre", "Irajá", "Colégio", "Complexo do Alemão", "Cidade Alta",
      "Inhaúma", "Engenho da Rainha", "Tomás Coelho", "Jacaré", "Jacarezinho",
      "Manguinhos", "Bonsucesso", "Higienópolis", "Piedade", "Quintino Bocaiúva",
      "Cascadura", "Vaz Lobo", "Vicente de Carvalho", "Vila da Penha", "Vista Alegre"
    ].map(nome => ({ nome, slug: slugify(nome) })),
    
    "Zona Oeste": [
      "Campo Grande", "Cosmos", "Inhoaíba", "Santíssimo", "Senador Vasconcelos",
      "Paciência", "Santa Cruz", "Sepetiba", "Guaratiba", "Barra de Guaratiba",
      "Pedra de Guaratiba", "Vargem Grande", "Vargem Pequena", "Camorim",
      "Curicica", "Freguesia", "Pechincha", "Taquara", "Tanque", "Praça Seca",
      "Vila Valqueire", "Anil", "Gardênia Azul", "Cidade de Deus", "Jacarepaguá",
      "Itanhangá", "Recreio dos Bandeirantes", "Grumari", "Bangu", "Padre Miguel",
      "Realengo", "Deodoro", "Vila Militar", "Magalhães Bastos", "Sulacap",
      "Campo dos Afonsos"
    ].map(nome => ({ nome, slug: slugify(nome) }))
  },
  
  niteroi: {
    "Niterói": [
      "Centro", "Icaraí", "Santa Rosa", "Ingá", "São Francisco", "Charitas",
      "Jurujuba", "Boa Viagem", "Fátima", "Vital Brazil", "Pendotiba", "Piratininga",
      "Camboinhas", "Itaipu", "Engenho do Mato", "Jacaré", "São Lourenço",
      "Baldeador", "Caramujo", "Fonseca", "Tenente Jardim", "Barreto", "Santana",
      "Viradouro", "Ilha da Conceição", "Ponta da Areia", "Morro do Estado",
      "Cubango", "Engenhoca", "Várzea das Moças", "Palácio", "Alcântara",
      "Cafubá", "Maravista", "Maria Paula", "Sapê", "Cantagalo", "Rio do Ouro",
      "Itacoatiara", "Badu", "Largo da Batalha"
    ].map(nome => ({ nome, slug: slugify(nome) }))
  }
};

export default bairrosData;
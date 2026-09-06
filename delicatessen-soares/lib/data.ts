export const CONTATO = {
  nomeFantasia: "Delicatessen Soares",
  telefoneExibicao: "(87) 99999-0000",
  whatsappNumero: "5587999990000", // TODO: substituir pelo número real, formato DDI+DDD+numero
  endereco: "Rua Principal, 123 – Centro, Caetés/PE",
  horarios: [
    { dias: "Terça a sexta", horario: "07h às 20h" },
    { dias: "Sábado", horario: "07h às 21h" },
    { dias: "Domingo", horario: "07h às 13h" },
    { dias: "Segunda-feira", horario: "Fechado" },
  ],
  instagram: "@delicatessensoares",
};

export function linkWhatsapp(mensagem: string) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${CONTATO.whatsappNumero}?text=${texto}`;
}

export type Prato = {
  slug: string;
  nome: string;
  descricao: string;
  preco: string;
  categoria: string;
  destaque?: string;
};

export const DELICIAS_DA_CASA: Prato[] = [
  {
    slug: "pao-fermentacao-natural",
    nome: "Pão de fermentação natural",
    descricao:
      "Casca crocante e miolo macio, assado em forno de lastro todas as manhãs com nossa massa-mãe de longa fermentação.",
    preco: "R$ 18,90",
    categoria: "Padaria",
    destaque: "Assado na hora",
  },
  {
    slug: "tabua-soares",
    nome: "Tábua Soares",
    descricao:
      "Seleção de frios nobres, queijos curados, geleia artesanal e torradas — feita para compartilhar em boa companhia.",
    preco: "R$ 79,90",
    categoria: "Frios & Queijos",
    destaque: "Para compartilhar",
  },
  {
    slug: "sanduiche-soares",
    nome: "Sanduíche Soares",
    descricao:
      "Pão australiano, presunto parma, queijo brie derretido, rúcula e geleia de pimenta. Nosso sanduíche assinatura.",
    preco: "R$ 32,90",
    categoria: "Sanduíches",
  },
  {
    slug: "bolo-fuba-caseiro",
    nome: "Bolo de fubá caseiro",
    descricao:
      "Receita de família, macio e levemente adocicado, com aquele toque de canela que lembra a casa da vó.",
    preco: "R$ 12,90",
    categoria: "Doces",
    destaque: "Receita de família",
  },
];

export const MAIS_PEDIDOS: Prato[] = [
  {
    slug: "cafe-pao-de-queijo",
    nome: "Café espresso + pão de queijo",
    descricao: "A dupla clássica do início de manhã, servida quente e na hora.",
    preco: "R$ 14,90",
    categoria: "Café da manhã",
  },
  {
    slug: "tabua-para-dois",
    nome: "Tábua para compartilhar",
    descricao: "Frios, queijos e pães selecionados para dividir com quem você gosta.",
    preco: "R$ 79,90",
    categoria: "Frios & Queijos",
  },
  {
    slug: "sanduiche-natural-frango",
    nome: "Sanduíche natural de frango",
    descricao: "Leve, fresco e cheio de sabor — a escolha certa para o dia a dia corrido.",
    preco: "R$ 24,90",
    categoria: "Sanduíches",
  },
  {
    slug: "bolo-do-dia",
    nome: "Fatia de bolo do dia",
    descricao: "Sabor rotativo, sempre fresquinho, direto do forno para a vitrine.",
    preco: "R$ 9,90",
    categoria: "Doces",
  },
];

export type CategoriaCardapio = {
  nome: string;
  itens: { nome: string; preco: string; descricao?: string }[];
};

export const CARDAPIO: CategoriaCardapio[] = [
  {
    nome: "Padaria",
    itens: [
      { nome: "Pão de fermentação natural", preco: "R$ 18,90", descricao: "Fermentação de 24h, casca crocante" },
      { nome: "Pão francês (unidade)", preco: "R$ 0,90" },
      { nome: "Croissant amanteigado", preco: "R$ 9,90" },
      { nome: "Pão de queijo (porção)", preco: "R$ 12,90" },
    ],
  },
  {
    nome: "Frios & Queijos",
    itens: [
      { nome: "Tábua Soares", preco: "R$ 79,90", descricao: "Para 2 a 3 pessoas" },
      { nome: "Presunto parma (100g)", preco: "R$ 22,90" },
      { nome: "Queijo brie (100g)", preco: "R$ 19,90" },
      { nome: "Queijo coalho grelhado", preco: "R$ 16,90" },
    ],
  },
  {
    nome: "Sanduíches & Lanches",
    itens: [
      { nome: "Sanduíche Soares", preco: "R$ 32,90" },
      { nome: "Sanduíche natural de frango", preco: "R$ 24,90" },
      { nome: "Misto quente artesanal", preco: "R$ 19,90" },
    ],
  },
  {
    nome: "Doces & Sobremesas",
    itens: [
      { nome: "Bolo de fubá caseiro", preco: "R$ 12,90" },
      { nome: "Fatia de bolo do dia", preco: "R$ 9,90" },
      { nome: "Torta de limão", preco: "R$ 14,90" },
    ],
  },
  {
    nome: "Bebidas",
    itens: [
      { nome: "Café espresso", preco: "R$ 6,90" },
      { nome: "Cappuccino", preco: "R$ 10,90" },
      { nome: "Suco natural (300ml)", preco: "R$ 9,90" },
      { nome: "Água com gás", preco: "R$ 5,90" },
    ],
  },
];

export type Depoimento = {
  nome: string;
  texto: string;
  cidade?: string;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Marta Alves",
    texto:
      "Todo sábado de manhã é ali: pão quentinho e aquele atendimento que já sabe até meu pedido. Virou parte da nossa rotina.",
    cidade: "Caetés/PE",
  },
  {
    nome: "Rogério Lima",
    texto:
      "A tábua de frios salvou mais de uma visita de última hora em casa. Qualidade que impressiona quem experimenta pela primeira vez.",
    cidade: "Caetés/PE",
  },
  {
    nome: "Juliana Ferreira",
    texto:
      "Gosto de ir sozinha, pedir um café e ficar um tempinho. É um dos poucos lugares da cidade com esse clima acolhedor de verdade.",
    cidade: "Garanhuns/PE",
  },
  {
    nome: "Carlos Eduardo",
    texto:
      "Peço pelo WhatsApp quase toda semana. Nunca erram no pedido e o bolo de fubá é exatamente como o da minha avó fazia.",
    cidade: "Caetés/PE",
  },
];

export const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/delicias", label: "Delícias da Casa" },
  { href: "/mais-pedidos", label: "Mais Pedidos" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/depoimentos", label: "Depoimentos" },
  { href: "/localizacao", label: "Localização" },
];

import {
  MagnifyingGlass,
  ShieldCheck,
  ArrowsClockwise,
  Tag,
  type Icon,
} from "@phosphor-icons/react";

export type Listing = {
  modelo: string;
  preco: string;
  km: string;
  ano: string;
  fonte: string;
  cidade: string;
};

export type Step = {
  n: string;
  titulo: string;
  texto: string;
};

export type Feature = {
  icon: Icon;
  titulo: string;
  texto: string;
};

export const SOURCES: string[] = [
  "AutoPátio",
  "CarroCerto",
  "Revenda Sul",
  "Multimarcas BR",
  "Garagem87",
  "TrocaFácil",
  "VeloxMotors",
  "Pátio Norte",
];

export const LISTINGS: Listing[] = [
  { modelo: "Volkswagen T-Cross 2022", preco: "89.900", km: "34.200", ano: "2022", fonte: "AutoPátio", cidade: "Santos, SP" },
  { modelo: "Chevrolet Onix 2023", preco: "74.500", km: "18.900", ano: "2023", fonte: "CarroCerto", cidade: "São Paulo, SP" },
  { modelo: "Toyota Corolla 2021", preco: "112.300", km: "41.000", ano: "2021", fonte: "Revenda Sul", cidade: "Curitiba, PR" },
  { modelo: "Jeep Compass 2023", preco: "138.700", km: "12.500", ano: "2023", fonte: "Multimarcas BR", cidade: "Campinas, SP" },
];

export const STEPS: Step[] = [
  { n: "01", titulo: "Busque", texto: "Diga o que procura: marca, modelo, região e faixa de preço." },
  { n: "02", titulo: "Compare", texto: "O Radar cruza o anúncio em dezenas de revendedores ao mesmo tempo." },
  { n: "03", titulo: "Escolha", texto: "Veja tudo lado a lado e feche direto com o revendedor, sem intermediário." },
];

export const FEATURES: Feature[] = [
  { icon: MagnifyingGlass, titulo: "Uma busca, todo o mercado", texto: "Sem abrir dez abas. O Radar já abriu por você." },
  { icon: ShieldCheck, titulo: "Direto com o revendedor", texto: "Sem intermediário, sem taxa escondida." },
  { icon: ArrowsClockwise, titulo: "Sempre atualizado", texto: "Anúncio sincronizado em tempo real. Se vendeu, sai da lista." },
  { icon: Tag, titulo: "Preço comparado", texto: "Veja se o valor está dentro da média da região antes de decidir." },
];

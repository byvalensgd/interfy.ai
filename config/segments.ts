export type Segment = {
  icon: string;
  href: string;
};

/** Order matches messages/<locale>/home.json's `segments.items` array. */
export const segments: Segment[] = [
  { icon: "/icons/segments/financeiro.svg", href: "/segmentos/financeiro" },
  { icon: "/icons/segments/saude.svg", href: "/segmentos/saude" },
  { icon: "/icons/segments/juridico.svg", href: "/segmentos/juridico" },
  { icon: "/icons/segments/industria.svg", href: "/segmentos/industria" },
  { icon: "/icons/segments/governo.svg", href: "/segmentos/governo" },
  { icon: "/icons/segments/educacao.svg", href: "/segmentos/educacao" },
  { icon: "/icons/segments/logistica.svg", href: "/segmentos/logistica" },
  { icon: "/icons/segments/ver-todos.svg", href: "/segmentos" },
];

export type SegmentCatalogItem = {
  icon: string;
  number?: number;
};

/** Order matches messages/<locale>/segments.json's `catalog.items` array. */
export const segmentCatalog: SegmentCatalogItem[] = [
  { icon: "/icons/segments/financeiro.svg", number: 1 },
  { icon: "/icons/segments/saude.svg", number: 2 },
  { icon: "/icons/segments/juridico.svg", number: 3 },
  { icon: "/icons/segments/industria.svg", number: 4 },
  { icon: "/icons/segments/governo.svg", number: 5 },
  { icon: "/icons/segments/educacao.svg", number: 6 },
  { icon: "/icons/segments/logistica.svg", number: 7 },
  { icon: "/icons/segments/seguros.svg", number: 8 },
  { icon: "/icons/segments/imobiliaria.svg", number: 9 },
  { icon: "/icons/segments/varejo.svg", number: 10 },
  { icon: "/icons/segments/recursos-humanos.svg", number: 11 },
  { icon: "/icons/segments/contabilidade.svg", number: 12 },
  { icon: "/icons/segments/farmacias-laboratorios.svg", number: 13 },
  { icon: "/icons/segments/franquias.svg", number: 14 },
  { icon: "/icons/segments/servicos.svg", number: 15 },
  { icon: "/icons/segments/agronegocio.svg", number: 16 },
  { icon: "/icons/segments/sindicatos-associacoes.svg", number: 17 },
  { icon: "/icons/segments/tecnologia.svg", number: 18 },
  { icon: "/icons/segments/turismo.svg", number: 19 },
  { icon: "/icons/segments/outros.svg" },
];

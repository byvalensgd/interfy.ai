export type Segment = {
  icon: string;
  label: string;
  href: string;
};

export const segments: Segment[] = [
  { icon: "/icons/segments/financeiro.svg", label: "Financeiro", href: "/segmentos/financeiro" },
  { icon: "/icons/segments/saude.svg", label: "Saúde", href: "/segmentos/saude" },
  { icon: "/icons/segments/juridico.svg", label: "Jurídico", href: "/segmentos/juridico" },
  { icon: "/icons/segments/industria.svg", label: "Indústria", href: "/segmentos/industria" },
  { icon: "/icons/segments/governo.svg", label: "Governo", href: "/segmentos/governo" },
  { icon: "/icons/segments/educacao.svg", label: "Educação", href: "/segmentos/educacao" },
  { icon: "/icons/segments/logistica.svg", label: "Logística", href: "/segmentos/logistica" },
  { icon: "/icons/segments/ver-todos.svg", label: "Ver todos...", href: "/segmentos" },
];

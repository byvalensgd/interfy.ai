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

export type SegmentCatalogItem = {
  icon: string;
  number?: number;
  title: string;
  bullets: [string, string, string];
};

export const segmentCatalog: SegmentCatalogItem[] = [
  { icon: "/icons/segments/financeiro.svg", number: 1, title: "Financeiro", bullets: ["Compliance e regulação", "Análise de crédito", "Gestão de contratos"] },
  { icon: "/icons/segments/saude.svg", number: 2, title: "Saúde", bullets: ["Prontuários e documentos", "Autorizações e convênios", "Gestão de atendimentos"] },
  { icon: "/icons/segments/juridico.svg", number: 3, title: "Jurídico", bullets: ["Gestão de processos", "Contratos e petições", "Compliance e prazos"] },
  { icon: "/icons/segments/industria.svg", number: 4, title: "Indústria", bullets: ["Qualidade e processos", "Manuais e documentos", "Manutenção de ordens"] },
  { icon: "/icons/segments/governo.svg", number: 5, title: "Governo", bullets: ["Processos e licitações", "Documentos oficiais", "Atendimento ao cidadão"] },
  { icon: "/icons/segments/educacao.svg", number: 6, title: "Educação", bullets: ["Matrículas e históricos", "Processos acadêmicos", "Comunicação e avisos"] },
  { icon: "/icons/segments/logistica.svg", number: 7, title: "Logística", bullets: ["CT-e e documentos", "Rastreamento e entregas", "Gestão de ocorrências"] },
  { icon: "/icons/segments/seguros.svg", number: 8, title: "Seguros", bullets: ["Apólices e sinistros", "Análise de riscos", "Atendimento e SLA"] },
  { icon: "/icons/segments/imobiliaria.svg", number: 9, title: "Imobiliária", bullets: ["Contratos e propostas", "Locações e vistorias", "Documentos de imóveis"] },
  { icon: "/icons/segments/varejo.svg", number: 10, title: "Varejo", bullets: ["Estoques e pedidos", "Notas e fornecedores", "Atendimento omnichannel"] },
  { icon: "/icons/segments/recursos-humanos.svg", number: 11, title: "Recursos Humanos", bullets: ["Admissão e documentos", "Avaliações de desempenho", "Gestão de benefícios"] },
  { icon: "/icons/segments/contabilidade.svg", number: 12, title: "Contabilidade", bullets: ["Notas e obrigações", "Declarações e relatórios", "Clientes e contratos"] },
  { icon: "/icons/segments/farmacias-laboratorios.svg", number: 13, title: "Farmácias & Laboratórios", bullets: ["Receitas e atendimentos", "Controle de qualidade", "Documentos regulatórios"] },
  { icon: "/icons/segments/franquias.svg", number: 14, title: "Franquias", bullets: ["Padronização e manuais", "Contratos e circulares", "Desempenho da rede"] },
  { icon: "/icons/segments/servicos.svg", number: 15, title: "Serviços", bullets: ["Propostas e contratos", "Chamados e projetos", "Entregas e faturamento"] },
  { icon: "/icons/segments/agronegocio.svg", number: 16, title: "Agronegócio", bullets: ["Contratos e safras", "Notas e documentos", "Rastreabilidade"] },
  { icon: "/icons/segments/sindicatos-associacoes.svg", number: 17, title: "Sindicatos & Associações", bullets: ["Filiados e documentos", "Assembléias e atas", "Comunicação e avisos"] },
  { icon: "/icons/segments/tecnologia.svg", number: 18, title: "Tecnologia", bullets: ["Projetos e backlog", "Contratos e NDAs", "Produção de arquivos"] },
  { icon: "/icons/segments/turismo.svg", number: 19, title: "Turismo", bullets: ["Conteúdo e pausas", "Contratos e mídia", "Produção e arquivos"] },
  { icon: "/icons/segments/outros.svg", title: "Outros", bullets: ["Soluções personalizadas", "Processos sob medida", "Transformação digital"] },
];

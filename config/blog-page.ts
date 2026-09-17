/** Icons + accent classes + anchor id, one per messages/<locale>/blog.json's
 * `categories.sections` entry, same order — the anchor id is also the target
 * of the "Principais pesquisas" shortcut cards in BlogTopSearches. */
export const blogCategoryMeta: { icon: string; accent: string; anchorId: string }[] = [
  { icon: "/icons/products/documents.svg", accent: "bg-ecm", anchorId: "categoria-documentos" },
  { icon: "/icons/products/automation.svg", accent: "bg-bpm", anchorId: "categoria-processos" },
  { icon: "/icons/products/agents.svg", accent: "bg-dss", anchorId: "categoria-ia" },
];

/** Background photo + gradient per "Principais pesquisas" shortcut card,
 * same order as blog.json's `topSearches.labels`. */
export const blogTopSearchMeta: { image: string; gradient: string; anchorId: string }[] = [
  { image: "/images/blog/top-search-a.png", gradient: "linear-gradient(-14deg,#027058,#0cd4a9)", anchorId: "categoria-documentos" },
  { image: "/images/blog/top-search-b.png", gradient: "linear-gradient(129deg,#4c5dda,#0062ff)", anchorId: "categoria-processos" },
  { image: "/images/blog/top-search-a.png", gradient: "linear-gradient(111.8deg,#184aee,#bf18f6)", anchorId: "categoria-ia" },
];

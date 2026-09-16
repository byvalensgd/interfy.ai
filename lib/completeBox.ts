/**
 * "Complete Box" (the user's name for this rule) — the standing sitewide
 * convention for any icon+text card row that wraps below its `lg:hidden`
 * mobile-card breakpoint:
 *   1. Every row's item count must differ from every other row's by at
 *      most 1 (e.g. 7 items → 4/3, never 5/2). A plain `flex-wrap` +
 *      `min-w-*` + `flex-1` row does NOT guarantee this — greedy wrapping
 *      packs "as many as fit", which can land on an unbalanced split for a
 *      given container width purely by chance.
 *   2. No row may leave an empty gap — a short last row must still stretch
 *      to fill the full row width, which plain CSS Grid does NOT do (an
 *      incomplete grid row just leaves its trailing columns blank).
 *
 * The fix: target a specific column count per breakpoint tier (the same
 * `packedCount` selection a CSS Grid would use, so #1 holds), but implement
 * each tier as a `flex-basis` percentage + `flex-grow` instead of
 * `grid-template-columns` — so whenever a row ends up short of the target
 * count (the last row, or any row), its items' flex-grow expands them to
 * fill the row completely, satisfying #2 as well. Pair the returned classes
 * with `flex flex-wrap gap-4` on the parent and `grow min-w-[Npx]` (plus a
 * fixed/min height, for equal card height) on every item.
 */
export function getCompleteBoxBasis(n: number): string {
  const packedCount = n % 4 === 0 || n % 4 === 3 ? 4 : n % 3 === 0 || n % 3 === 2 ? 3 : 2;
  const cardCols = Math.min(packedCount, n);
  const basisByCount = [
    "",
    "basis-full",
    "basis-[calc(50%-0.5rem)]",
    "basis-[calc(50%-0.5rem)] sm:basis-[calc(33.3333%-0.6667rem)]",
    "basis-[calc(50%-0.5rem)] md:basis-[calc(25%-0.75rem)]",
  ];
  return basisByCount[cardCols];
}

// Temporary kill switch for the site's two conversion CTAs — the "Test Drive"
// (trial signup) primary button and the "Agende uma Demo" (schedule a demo)
// secondary button — wherever `disabled={CTA_DISABLED}` (Button) or `CtaLink`
// (raw links) is wired up to it. Flip this to `false` to re-enable every one
// of them at once; no other file needs to change.
export const CTA_DISABLED = true;

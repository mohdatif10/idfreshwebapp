import localFont from "next/font/local";

// iD Fresh's official brand typefaces (per brand guideline PDF).
// Gotham Rounded = primary typeface for headings, subheads, and UI.
export const gothamRounded = localFont({
  variable: "--font-gotham",
  display: "swap",
  src: [
    { path: "./gotham-rounded/gothamrnd_light.otf", weight: "300", style: "normal" },
    { path: "./gotham-rounded/gothamrnd_lightitalic.otf", weight: "300", style: "italic" },
    { path: "./gotham-rounded/gothamrnd_book.otf", weight: "400", style: "normal" },
    { path: "./gotham-rounded/gothamrnd_bookitalic.otf", weight: "400", style: "italic" },
    { path: "./gotham-rounded/gothamrnd_medium.otf", weight: "500", style: "normal" },
    { path: "./gotham-rounded/gothamrnd_mediumitalic.otf", weight: "500", style: "italic" },
    { path: "./gotham-rounded/gothamrnd_bold.otf", weight: "700", style: "normal" },
    { path: "./gotham-rounded/gothamrnd_bolditalic.otf", weight: "700", style: "italic" },
  ],
});

// Amino = the largest display headline moments (e.g. the homepage hero H1) —
// confirmed against the real Figma layer properties (Font: Amino), not the
// brand-guideline PDF's Muller ExtraBold, which turned out to not match what
// the actual mockups use here. Bold added alongside Regular for a heavier
// look on the hero specifically (design call, not a Figma-spec'd weight).
export const amino = localFont({
  variable: "--font-amino",
  display: "swap",
  src: [
    { path: "./amino/Amino-Regular.woff2", weight: "400", style: "normal" },
    { path: "./amino/Amino-Bold.woff2", weight: "700", style: "normal" },
  ],
});

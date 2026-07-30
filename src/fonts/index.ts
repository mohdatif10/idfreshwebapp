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

// Muller ExtraBold = reserved for the largest display headline moments.
export const mullerExtraBold = localFont({
  variable: "--font-muller",
  display: "swap",
  src: [{ path: "./muller/muller-extra-bold.ttf", weight: "800", style: "normal" }],
});

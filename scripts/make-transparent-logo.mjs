// One-off utility: convert the white-background logo JPG into a
// WHITE, transparent-background PNG suitable for dark headers/footers.
//
// The source art is black-on-white. Every place the logo appears on this
// site (header, footer, hero circle) is near-black, so we knock out the
// white background AND recolor the black artwork to white so it reads
// clearly against dark surfaces.
//
// Run with:  node scripts/make-transparent-logo.mjs
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = "C:/Users/rayne/Downloads/logo.jpg";
const OUT_WHITE = path.join(__dirname, "..", "public", "logo.png");
const OUT_BLACK = path.join(__dirname, "..", "public", "logo-dark.png");

// White background cutoff and how the art maps to alpha.
const WHITE_CUTOFF = 235; // brighter than this = background → transparent

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// Build two outputs from the same source:
//  - white art on transparent (for dark site surfaces)
//  - black art on transparent (kept for any future light-background use)
const white = Buffer.from(data);
const black = Buffer.from(data);

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const lum = (r + g + b) / 3;

  // Alpha derived from how dark the pixel is: pure black art = opaque,
  // white background = transparent, with a smooth edge in between.
  let alpha;
  if (lum >= WHITE_CUTOFF) alpha = 0;
  else alpha = Math.round(255 * (1 - lum / WHITE_CUTOFF));

  // White version: paint the art white, use derived alpha
  white[i] = 255;
  white[i + 1] = 255;
  white[i + 2] = 255;
  white[i + 3] = alpha;

  // Black version: paint the art black, use derived alpha
  black[i] = 10;
  black[i + 1] = 10;
  black[i + 2] = 10;
  black[i + 3] = alpha;
}

await sharp(white, { raw: { width, height, channels } }).png().trim().toFile(OUT_WHITE);
await sharp(black, { raw: { width, height, channels } }).png().trim().toFile(OUT_BLACK);

console.log(`Wrote white logo  -> ${OUT_WHITE}`);
console.log(`Wrote black logo  -> ${OUT_BLACK}`);

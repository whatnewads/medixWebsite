// One-off asset pipeline: transparent logo + favicons + OG image from the supplied white-bg PNG.
// Run: node scripts/logo-pipeline.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = process.env.LOGO_SRC || "/Users/wes/Downloads/Add a heading.png";
const PUB = "public";
const NAVY = { r: 6, g: 34, b: 74, alpha: 1 }; // #06224A

await mkdir(PUB, { recursive: true });

// 1) Original white-bg copy -> public/medixlogo.png
await sharp(SRC).png().toFile(`${PUB}/medixlogo.png`);

// 2) Transparent version: alpha = 255 - min(r,g,b). Keys flat white to transparent,
//    feathers anti-aliased edges, preserves the blue outline + black tagline.
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const min = Math.min(r, g, b);
  data[i + 3] = 255 - min;
}
await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(`${PUB}/medixlogo-transparent.png`);

// 3) White-recolored version (same alpha mask, RGB forced white) for the navy footer / OG.
const white = Buffer.from(data);
for (let i = 0; i < white.length; i += channels) {
  white[i] = 255; white[i + 1] = 255; white[i + 2] = 255; // keep white[i+3] (alpha)
}
await sharp(white, { raw: { width, height, channels } })
  .png()
  .toFile(`${PUB}/medixlogo-white.png`);

// Tightly trimmed buffers we reuse below
const trimmedTransparent = await sharp(`${PUB}/medixlogo-transparent.png`)
  .trim({ threshold: 10 })
  .toBuffer({ resolveWithObject: true });
const trimmedWhite = await sharp(`${PUB}/medixlogo-white.png`)
  .trim({ threshold: 10 })
  .toBuffer({ resolveWithObject: true });
console.log("trimmed content size:", trimmedTransparent.info.width, "x", trimmedTransparent.info.height);

// Trimmed display assets (tight bbox) for the header (transparent, on near-white) and
// footer (white, on navy). These avoid the 2000x2000 whitespace padding.
await sharp(trimmedTransparent.data).png().toFile(`${PUB}/medixlogo-mark.png`);
await sharp(trimmedWhite.data).png().toFile(`${PUB}/medixlogo-mark-white.png`);

// 4) Favicon source: the "M" only. The MEDIX band sits in the top ~74% of the trimmed mark;
//    the "M" is the leftmost letter. Crop, trim, pad to a square on navy.
const tw = trimmedTransparent.info.width, th = trimmedTransparent.info.height;
const wordmarkH = Math.round(th * 0.74); // exclude the tagline row
const mWhite = await sharp(trimmedWhite.data)
  .extract({ left: 0, top: 0, width: Math.round(tw * 0.205), height: wordmarkH })
  .trim({ threshold: 10 })
  .toBuffer({ resolveWithObject: true });
const mSide = Math.max(mWhite.info.width, mWhite.info.height);
const pad = Math.round(mSide * 0.32);
const square = mSide + pad * 2;
const faviconBase = await sharp({
  create: { width: square, height: square, channels: 4, background: NAVY },
})
  .composite([{ input: mWhite.data, gravity: "center" }])
  .png()
  .toBuffer();
for (const size of [16, 32, 192, 512]) {
  await sharp(faviconBase).resize(size, size).png().toFile(`${PUB}/icon-${size}.png`);
}
await sharp(faviconBase).resize(180, 180).png().toFile(`${PUB}/apple-touch-icon.png`);
await sharp(faviconBase).resize(48, 48).png().toFile(`${PUB}/favicon.ico`); // PNG-encoded .ico, fine for modern browsers
await sharp(faviconBase).resize(512, 512).png().toFile("/tmp/medix-favicon-preview.png");

// 5) OG image: 1200x630 navy, white wordmark+tagline centered.
const ogLogo = await sharp(trimmedWhite.data).resize({ width: 900 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: NAVY } })
  .composite([{ input: ogLogo, gravity: "center" }])
  .png()
  .toFile(`${PUB}/og-image.png`);

console.log("assets written:", "medixlogo.png, medixlogo-transparent.png, medixlogo-white.png, icon-{16,32,192,512}.png, apple-touch-icon.png, favicon.ico, og-image.png");

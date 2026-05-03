import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imageDir = path.join(root, "assets", "images");

const images = [
  "devstash-homepage",
  "property-pulse-home",
  "property-pulse-detail",
  "property-pulse-auth",
  "taskflow-home",
  "portfolio-home",
  "ecommerce-home",
];

const widths = [640, 960, 1280, 1920];

await mkdir(imageDir, { recursive: true });

for (const name of images) {
  const input = path.join(imageDir, `${name}.png`);
  const metadata = await sharp(input).metadata();
  const outputWidths = widths.filter((width) => width < metadata.width);

  for (const width of outputWidths) {
    const output = path.join(imageDir, `${name}-${width}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(output);
  }
}

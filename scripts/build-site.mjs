import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const read = (filePath) => readFile(path.join(root, filePath), "utf8");

const sections = {
  background: "src/sections/background.html",
  header: "src/sections/header.html",
  hero: "src/sections/hero.html",
  about: "src/sections/about.html",
  projects: "src/sections/projects.html",
  contact: "src/sections/contact.html",
  footer: "src/sections/footer.html",
};

let html = await read("src/layout.html");

for (const [key, filePath] of Object.entries(sections)) {
  html = html.replace(`{{${key}}}`, (await read(filePath)).trim());
}

await mkdir(path.join(root, "assets/css"), { recursive: true });
await mkdir(path.join(root, "assets/js"), { recursive: true });
await writeFile(path.join(root, "index.html"), `${html.trim()}\n`);
await writeFile(path.join(root, "assets/css/styles.css"), await read("src/styles/styles.css"));
await writeFile(path.join(root, "assets/js/main.js"), await read("src/scripts/main.js"));

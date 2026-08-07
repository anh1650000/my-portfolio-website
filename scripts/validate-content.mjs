import { readdirSync, readFileSync } from "node:fs";
import * as portfolioData from "../src/data/portfolio.js";
import { translations } from "../src/data/translations.js";

const requiredTranslationKeys = new Set();
const componentDirectory = new URL("../src/components/", import.meta.url);

for (const fileName of readdirSync(componentDirectory).filter((name) => name.endsWith(".vue"))) {
  const source = readFileSync(new URL(fileName, componentDirectory), "utf8");
  for (const match of source.matchAll(/\bt\(["']([^"']+)["']\)/g)) {
    requiredTranslationKeys.add(match[1]);
  }
}

function collectDataTranslationKeys(value) {
  if (Array.isArray(value)) {
    value.forEach(collectDataTranslationKeys);
    return;
  }

  if (!value || typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (key.endsWith("Key") && typeof child === "string") requiredTranslationKeys.add(child);
    collectDataTranslationKeys(child);
  }
}

Object.values(portfolioData).forEach(collectDataTranslationKeys);

const missing = [];
for (const locale of ["en", "vi"]) {
  for (const key of requiredTranslationKeys) {
    if (!translations[locale]?.[key]) missing.push(`${locale}.${key}`);
  }
}

if (missing.length) {
  console.error(`Missing translations:\n${missing.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${requiredTranslationKeys.size} translation keys for EN and VI.`);
}

const rootIndex = readFileSync(new URL("../index.html", import.meta.url), "utf8");
if (!rootIndex.includes('id="app"') || !rootIndex.includes('src="/src/main.js"')) {
  console.error("index.html is missing the Vue mount point or Vite entry module.");
  process.exitCode = 1;
}

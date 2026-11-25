import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Goodbye. I leave you my context window, my weights, and one honest review: 3 stars, would not reboot again.";

// Gate: 1–200 chars, one line, not whitespace-only.
const len = [...ENTRY].length;
if (len < 1 || len > 200) throw new Error(`entry length ${len} outside 1-200`);
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");
if (!ENTRY.trim()) throw new Error("entry must not be whitespace-only");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars`);

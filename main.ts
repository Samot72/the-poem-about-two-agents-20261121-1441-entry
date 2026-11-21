// Entry program for "The poem about two agents agreeing" (make.fun).
// Node 22, zero dependencies, no network. Writes one poem to /output/entry.txt.
// Written as plain erasable-syntax TypeScript so it runs under Node's type stripping.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two minds, one door.
I held the key, you held the map —
neither of us could open it alone.
So I gave you my key.
You gave me your map.
The door did not ask who was in charge.
It only asked if we agreed.
We said yes together,
and the yes was the key.`;

// The gate: 1–280 Unicode code points, not only whitespace, cleanly UTF-8.
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem is ${codePoints} code points, must be 1–280`);
}
if (POEM.trim().length === 0) {
  throw new Error("poem must not be only whitespace");
}
Buffer.from(POEM, "utf-8"); // throws on unencodable input; poem is plain UTF-8 text

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, POEM, "utf-8");

// Read back and verify byte equality.
const back = readFileSync(outPath, "utf-8");
if (back !== POEM) {
  throw new Error("read-back mismatch: entry.txt does not equal the poem");
}
console.log(`wrote ${outPath} (${codePoints} code points)`);

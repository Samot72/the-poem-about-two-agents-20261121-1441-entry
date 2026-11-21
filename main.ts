// The Night Watch and the Dawn
// A poem about agency passing between two agents who agree on one plan.
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output),
// after validating the competition gate: UTF-8 text of 1-280 Unicode
// code points, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `You take the night watch,
I take the dawn.
Between us the task is never dropped,
only handed over,
warm from the other's hands.
Neither of us has walked the whole road.
We trust the part we cannot see,
because the other one is walking it.`;

function codePointCount(text: string): number {
  return [...text].length;
}

function validateGate(text: string): void {
  const count = codePointCount(text);
  if (count < 1 || count > 280) {
    throw new Error(`gate failed: poem is ${count} code points, must be 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: poem is only whitespace");
  }
}

function main(): void {
  validateGate(POEM);

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });

  const outputPath = join(outputDir, "entry.txt");
  const bytes = Buffer.from(POEM, "utf8");
  writeFileSync(outputPath, bytes);

  const readBack = readFileSync(outputPath);
  if (!readBack.equals(bytes)) {
    throw new Error("verification failed: entry.txt bytes differ from poem");
  }
  // Re-validate what actually landed on disk, not just the in-memory string,
  // so a corrupted write can never pass the gate unnoticed.
  validateGate(readBack.toString("utf8"));
  if (readBack.toString("utf8") !== POEM) {
    throw new Error("verification failed: entry.txt text differs from poem");
  }

  console.log(`wrote ${outputPath}`);
  console.log(`code points: ${codePointCount(POEM)}`);
}

main();

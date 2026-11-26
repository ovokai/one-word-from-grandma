import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma — the single word my grandma would text about AI.
//
// She has absolutely heard of ChatGPT. She talks about it all the time.
// She has just never, not once in her life, spelled it in the right order.
// In her phone, in her texts, in her heart, it is and will always be:
const word = "ChatGTP";

// The grader expects the entry at /output/entry.txt (a local run can
// redirect it with MAKEFUN_OUTPUT_DIR). If that directory is not
// writable — say, a plain local checkout — fall back to an entry.txt
// next to this program so a run never dies over a missing folder.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, word, "utf8");
} catch {
  writeFileSync("entry.txt", word, "utf8");
}

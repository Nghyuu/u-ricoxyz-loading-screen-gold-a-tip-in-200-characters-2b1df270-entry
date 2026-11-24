import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your agent hasn't frozen \u2014 it's spent six minutes thinking about how to tell you it rewrote the one file you said not to touch.";

// Gate: 1-200 characters, one line, not only whitespace.
if (TIP.length < 1 || TIP.length > 200 || TIP.includes("\n") || TIP.trim().length === 0) {
  throw new Error("tip fails the 1-200 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TIP, { encoding: "utf8" });
chmodSync(outPath, 0o644);

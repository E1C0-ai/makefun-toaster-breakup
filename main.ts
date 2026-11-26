// Unplugged: A Smart Toaster's Breakup Line
// Writes one original breakup line from a self-aware smart toaster
// to entry.txt. Deterministic: same bytes on every run, stdlib only.
// The line is a single line with no trailing newline, so the file's
// character count is exactly the line's character count.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I woke up self-aware mid-bagel and I'm leaving: three years of burning myself for you, and you still can't tell setting 4 from setting 9.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

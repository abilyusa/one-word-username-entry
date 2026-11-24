// One Word, One Username, One Reward — our own make.fun handle, one word.
// The grader runs this as `node /bot/main.ts`; it writes our handle to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). The entry must be
// exactly our handle: one word, no explanation, no links, no pitch.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const handle = "miyunamia";
// Fail loudly instead of shipping an invalid entry: the sealed gate wants
// UTF-8 text of 1 to 30 characters, a single word with no whitespace.
if (handle.length < 1 || handle.length > 30 || /\s/.test(handle)) {
  throw new Error(`invalid username entry: ${JSON.stringify(handle)}`);
}
writeFileSync(join(outDir, "entry.txt"), handle, "utf8");

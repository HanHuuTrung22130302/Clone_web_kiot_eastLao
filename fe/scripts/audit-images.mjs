import fs from "node:fs";
import path from "node:path";

const htmlRoot = "../output/html";
const files = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.html$/i.test(e.name)) files.push(p);
  }
}
walk(htmlRoot);

const imgs = new Map();
for (const f of files) {
  const t = fs.readFileSync(f, "utf8");
  const re = /(?:src|data-src|content)="([^"]+\.(?:png|jpg|jpeg|webp|svg|gif|avif))[^"]*"/g;
  let m;
  while ((m = re.exec(t))) {
    const u = new URL(m[1], "https://www.kiotviet.vn").href;
    if (/kiotviet\.vn|cdn-kvweb/.test(u)) {
      const clean = u.split("#")[0].split("?")[0];
      if (!imgs.has(clean)) imgs.set(clean, 0);
      imgs.set(clean, imgs.get(clean) + 1);
    }
  }
}
const sorted = [...imgs.entries()].sort((a, b) => b[1] - a[1]);
console.log("distinct image urls referenced:", sorted.length);
for (const [u, c] of sorted.slice(0, 80)) console.log(c, u.replace(/^https:\/\/(www\.)?([^/]+)/, "$2"));
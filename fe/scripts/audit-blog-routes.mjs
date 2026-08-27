import fs from "node:fs";
const r = JSON.parse(fs.readFileSync("./src/data/routes.json", "utf8"));
console.log("routes sample:", JSON.stringify(r[0]));
const blogUrls = r.filter((x) => {
  const u = x.url || x.path || "";
  return u.includes("/blog/");
}).map((x) => x.url || x.path);
console.log("blog url-like count:", blogUrls.length);
const tagUrls = r.filter((x) => {
  const u = x.url || x.path || "";
  return /\/t\//.test(u);
}).map((x) => x.url || x.path);
console.log("tag count:", tagUrls.length);
const sample = blogUrls.slice(0, 30);
console.log("sample blog urls:");
for (const s of sample) console.log(" ", s);
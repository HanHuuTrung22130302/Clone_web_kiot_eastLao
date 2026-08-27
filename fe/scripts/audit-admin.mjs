import fs from "node:fs";
const t = fs.readFileSync(
  "../output/html/product-detail/danh-sach-khach-hang-co/man--dashboard-402cd4259a46.html",
  "utf8"
);
console.log("size:", (t.length / 1024).toFixed(0), "KB");
// find sidebar / menu labels
const menuRe = /class="[^"]*(sidebar|menu|nav)[^"]*"[^>]*>/g;
let m, count = 0;
const labels = [];
// extract visible text blocks that look like menu items
const textRe = />([^<>]{2,40})<\/[a-z]+>/g;
while ((m = textRe.exec(t)) && count < 200) {
  const s = m[1].trim();
  if (s && /[A-Za-zÀ-ỹ0-9]/.test(s)) {
    labels.push(s);
    count++;
  }
}
const uniq = [...new Set(labels)];
console.log("--- text tokens (first 80 uniq) ---");
console.log(uniq.slice(0, 80).join("\n"));
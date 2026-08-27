import fs from 'node:fs';
const t = fs.readFileSync('../output/html/product-detail/danh-sach-hang-hoa/huong-dan-su-dung-kiotviet-retail-hang-hoa-danh-sach-ha-d0397d3dcf8b.html', 'utf8');
for (const kw of ['support-detail', 'support-content', 'post-content', 'entry-content', 'page-content', 'article-body', 'doc-content', 'manual-content']) {
  console.log(kw, 'at', t.indexOf(kw));
}
const cls = new Set();
const re = /class="([^"]*content[^"]*)"/g;
let m;
while ((m = re.exec(t))) cls.add(m[1]);
console.log('CLASSES containing "content":', [...cls].slice(0, 30));
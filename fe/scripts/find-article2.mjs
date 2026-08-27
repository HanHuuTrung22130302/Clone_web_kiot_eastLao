import fs from 'node:fs';
const t = fs.readFileSync('../output/html/product-detail/danh-sach-hang-hoa/huong-dan-su-dung-kiotviet-retail-hang-hoa-danh-sach-ha-d0397d3dcf8b.html', 'utf8');
const first = t.indexOf('supportMain-content_article-wrapper');
const second = t.indexOf('supportMain-content_article-wrapper', first + 10);
console.log('first:', first, 'second:', second);
const re = /<(div|section|main)[^>]*class="[^"]*supportMain-content_article-wrapper[^"]*"/g;
let m;
while ((m = re.exec(t))) console.log('DOM match at', m.index, m[0].slice(0, 160));
const idx = t.indexOf('class="supportMain-content_article-wrapper"');
console.log('exact class match at', idx);
if (idx > 0) {
  console.log('--- before ---');
  console.log(t.slice(idx - 400, idx));
  console.log('--- match region ---');
  const elStart = t.lastIndexOf('<', idx);
  const elEnd = t.indexOf('>', idx);
  console.log(t.slice(elStart, elEnd + 1));
  console.log('--- next 2000 after el ---');
  console.log(t.slice(idx, idx + 2000));
}
fs.writeFileSync('/tmp/article_region.txt', JSON.stringify({ first, second }));
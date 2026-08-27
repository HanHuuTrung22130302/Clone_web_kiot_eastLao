import fs from 'node:fs';
import path from 'node:path';
const manifest = JSON.parse(fs.readFileSync('../output/markdown/ai-rebuild-handoff/implementation_manifest.json', 'utf8'));
const present = manifest.routes_and_states.filter(r => r.html_path && fs.existsSync(r.html_path));
console.log('html present:', present.length);
const withWrapper = present.filter(r => {
  const t = fs.readFileSync(r.html_path, 'utf8');
  return t.includes('supportMain-content_article-wrapper');
});
console.log('with article wrapper:', withWrapper.length);
const pd = present.filter(r => r.html_path.includes('product-detail'));
console.log('product-detail html present:', pd.length);
const pdWrap = pd.filter(r => {
  const t = fs.readFileSync(r.html_path, 'utf8');
  return t.includes('supportMain-content_article-wrapper');
});
console.log('product-detail with wrapper:', pdWrap.length);
const nonPd = present.filter(r => !r.html_path.includes('product-detail'));
console.log('non product-detail:', nonPd.length);
// list of product-detail html files
pd.forEach(r => console.log('PODETAIL', r.url.slice(0,70), '| wrapper:', r.html_path));

// check alternate wrappers in pages that don't have the main one
let withContentClass = 0;
let withMainTag = 0;
for (const r of present) {
  const t = fs.readFileSync(r.html_path, 'utf8');
  if (t.includes('support-content') || t.includes('post-content') || t.includes('entry-content')) withContentClass++;
  if (t.includes('<main')) withMainTag++;
}
console.log('any content class:', withContentClass, '| <main tag:', withMainTag);
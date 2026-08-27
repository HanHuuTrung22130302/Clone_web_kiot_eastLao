import fs from 'node:fs';
const manifest = JSON.parse(fs.readFileSync('../output/markdown/ai-rebuild-handoff/implementation_manifest.json', 'utf8'));
const docs = manifest.routes_and_states.filter(r => r.url.includes('huong-dan-su-dung-kiotviet'));
console.log('total docs routes:', docs.length);
const unique = [...new Set(docs.map(d => d.url))];
console.log('unique docs urls:', unique.length);
let sample = 0;
for (const r of docs) {
  if (!r.url.includes('hant.')) {
    const p = r.profile || {};
    const desc = p.description || p.primary_heading || p.topic || '';
    if (sample < 12) {
      console.log('---');
      console.log('URL:', r.url.slice(0, 80));
      console.log('type:', p.page_type, '| topic:', p.topic);
      console.log('desc:', String(desc).slice(0, 200));
      sample++;
    }
  }
}
// check duplicate structured pages
const seen = {};
for (const r of docs) {
  seen[r.url] = (seen[r.url] || 0) + 1;
}
const dupes = Object.entries(seen).filter(([, c]) => c > 1);
console.log('duplicated urls (states):', dupes.length);
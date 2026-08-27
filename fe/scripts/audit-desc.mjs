import fs from 'node:fs';
const manifest = JSON.parse(fs.readFileSync('../output/markdown/ai-rebuild-handoff/implementation_manifest.json', 'utf8'));
const routes = manifest.routes_and_states.filter(r => r.url.includes('huong-dan-su-dung-kiotviet') && !r.url.includes('hant.'));
// pick a few distinct ones and dump full description
const picked = routes.filter(r => /dạng|\u0111\u1ebfn|danh-muc|giao-hang/.test(r.profile?.topic || '')).slice(0, 2);
const byUrl = [...new Map(routes.map(r => [r.url, r])).values()];
console.log('unique marketing docs pages:', byUrl.length);
for (const r of byUrl.slice(0, 1)) {
  console.log('=== URL:', r.url);
  console.log('=== topic:', r.profile?.topic);
  console.log('=== desc length:', r.profile?.description?.length);
  console.log('=== full desc:');
  console.log(r.profile?.description);
}
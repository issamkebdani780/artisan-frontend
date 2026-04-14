const fs = require('fs');
const path = require('path');

const extra = [
  ['\u00e2\u02dc\u2026', '★'],   // â˜…  → ★
  ['\u00e2\u02dc\u2020', '☆'],   // â˜†  → ☆
  ['\u00e2\u20ac\u00a2', '•'],   // â€¢  → •
  ['\u00e2\u20ac\u2122', "'"],   // â€™  → '
  ['\u00e2\u20ac\u0153', '"'],   // â€œ  → "
  ['\u00e2\u20ac\u009d', '"'],   // â€   → "
  ['\u00e2\u20ac\u201c', '–'],   // â€"  → –
  ['\u00e2\u20ac\u201d', '—'],   // â€"  → —
  ['\u00e2\u201e\u00a2', '™'],   // â„¢  → ™
  ['\u00e2\u20ac\u00a6', '…'],   // â€¦  → …
  ['\u00c2\u00bb', '»'],
  ['\u00c2\u00ab', '«'],
  ['\u00c2\u00b0', '°'],
  ['\u00c2\u00b7', '·'],
  ['\u00c2\u00a0', '\u00a0'],    // non-breaking space
];

let fixed = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (entry !== 'node_modules' && entry !== '.git') walk(fullPath);
    } else if (/\.(jsx|js|css|ts|tsx)$/.test(entry)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [bad, good] of extra) {
        if (content.includes(bad)) {
          content = content.split(bad).join(good);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed:', entry);
        fixed++;
      }
    }
  }
}

walk('src');
console.log(`\nDone. Fixed ${fixed} files.`);

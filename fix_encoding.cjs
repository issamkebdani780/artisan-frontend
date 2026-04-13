const fs = require('fs');
const path = require('path');

const replacements = [
  ['\u00c3\u00a9', '\u00e9'],   // é
  ['\u00c3\u00a8', '\u00e8'],   // è
  ['\u00c3\u00a0', '\u00e0'],   // à
  ['\u00c3\u00a7', '\u00e7'],   // ç
  ['\u00c3\u00ae', '\u00ee'],   // î
  ['\u00c3\u00af', '\u00ef'],   // ï
  ['\u00c3\u00b4', '\u00f4'],   // ô
  ['\u00c3\u00bb', '\u00fb'],   // û
  ['\u00c3\u00b9', '\u00f9'],   // ù
  ['\u00c3\u0089', '\u00c9'],   // É
  ['\u00c3\u008a', '\u00ca'],   // Ê
  ['\u00c3\u0087', '\u00c7'],   // Ç
  ['\u00c3\u0080', '\u00c0'],   // À
  ['\u00c3\u00a2', '\u00e2'],   // â
  ['\u00c3\u00ab', '\u00eb'],   // ë
  ['\u00c3\u00ac', '\u00ec'],   // ì
  ['\u00c3\u00ad', '\u00ed'],   // í
  ['\u00c3\u00b2', '\u00f2'],   // ò
  ['\u00c3\u00b3', '\u00f3'],   // ó
  ['\u00c3\u00b6', '\u00f6'],   // ö
  ['\u00c3\u00bc', '\u00fc'],   // ü
  ['\u00c3\u00b1', '\u00f1'],   // ñ
  ['\u00c3\u0082', '\u00c2'],   // Â
  ['\u00c3\u0084', '\u00c4'],   // Ä
  ['\u00c3\u0088', '\u00c8'],   // È
  ['\u00c3\u008b', '\u00cb'],   // Ë
  ['\u00c3\u008c', '\u00cc'],   // Ì
  ['\u00c3\u008e', '\u00ce'],   // Î
  ['\u00c3\u0096', '\u00d6'],   // Ö
  ['\u00c3\u0099', '\u00d9'],   // Ù
  ['\u00c3\u009a', '\u00da'],   // Ú
  ['\u00c3\u009b', '\u00db'],   // Û
  ['\u00c3\u009c', '\u00dc'],   // Ü
  ['\u00c3\u00a1', '\u00e1'],   // á
  ['\u00c3\u00a6', '\u00e6'],   // æ
  ['\u00c3\u00b0', '\u00f0'],   // ð
  ['\u00c3\u00be', '\u00fe'],   // þ
  ['\u00c3\u00bd', '\u00fd'],   // ý
  ['\u00c3\u00bf', '\u00ff'],   // ÿ
  ['\u00c3\u0091', '\u00d1'],   // Ñ
  ['\u00c3\u0094', '\u00d4'],   // Ô
  ['\u00c3\u0095', '\u00d5'],   // Õ
  ['\u00c3\u0093', '\u00d3'],   // Ó
  ['\u00c3\u0092', '\u00d2'],   // Ò
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
      for (const [bad, good] of replacements) {
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

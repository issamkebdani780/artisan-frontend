const fs = require('fs');
const path = require('path');

// Mojibake: UTF-8 bytes misread as Latin-1, then re-encoded as UTF-8
const replacements = [
  ['\u00C3\u0089', '\u00C9'],   // É
  ['\u00C3\u00A9', '\u00E9'],   // é
  ['\u00C3\u0087', '\u00C7'],   // Ç
  ['\u00C3\u00A7', '\u00E7'],   // ç
  ['\u00C3\u0080', '\u00C0'],   // À
  ['\u00C3\u00A0', '\u00E0'],   // à
  ['\u00C3\u0082', '\u00C2'],   // Â
  ['\u00C3\u00A2', '\u00E2'],   // â
  ['\u00C3\u0084', '\u00C4'],   // Ä
  ['\u00C3\u00A4', '\u00E4'],   // ä
  ['\u00C3\u0088', '\u00C8'],   // È
  ['\u00C3\u00A8', '\u00E8'],   // è
  ['\u00C3\u008A', '\u00CA'],   // Ê
  ['\u00C3\u00AA', '\u00EA'],   // ê
  ['\u00C3\u008B', '\u00CB'],   // Ë
  ['\u00C3\u00AB', '\u00EB'],   // ë
  ['\u00C3\u008C', '\u00CC'],   // Ì
  ['\u00C3\u00AC', '\u00EC'],   // ì
  ['\u00C3\u008E', '\u00CE'],   // Î
  ['\u00C3\u00AE', '\u00EE'],   // î
  ['\u00C3\u008F', '\u00CF'],   // Ï
  ['\u00C3\u00AF', '\u00EF'],   // ï
  ['\u00C3\u0091', '\u00D1'],   // Ñ
  ['\u00C3\u00B1', '\u00F1'],   // ñ
  ['\u00C3\u0092', '\u00D2'],   // Ò
  ['\u00C3\u00B2', '\u00F2'],   // ò
  ['\u00C3\u0093', '\u00D3'],   // Ó
  ['\u00C3\u00B3', '\u00F3'],   // ó
  ['\u00C3\u0094', '\u00D4'],   // Ô
  ['\u00C3\u00B4', '\u00F4'],   // ô
  ['\u00C3\u0096', '\u00D6'],   // Ö
  ['\u00C3\u00B6', '\u00F6'],   // ö
  ['\u00C3\u0099', '\u00D9'],   // Ù
  ['\u00C3\u00B9', '\u00F9'],   // ù
  ['\u00C3\u009A', '\u00DA'],   // Ú
  ['\u00C3\u00BA', '\u00FA'],   // ú
  ['\u00C3\u009B', '\u00DB'],   // Û
  ['\u00C3\u00BB', '\u00FB'],   // û
  ['\u00C3\u009C', '\u00DC'],   // Ü
  ['\u00C3\u00BC', '\u00FC'],   // ü
  ['\u00C3\u009D', '\u00DD'],   // Ý
  ['\u00C3\u00BD', '\u00FD'],   // ý
  ['\u00C5\u0093', '\u0153'],   // œ
  ['\u00C5\u0092', '\u0152'],   // Œ
  ['\u00C5\u00B8', '\u0178'],   // Ÿ
  ['\u00C5\u0099', '\u0159'],   // ř
  ['\u00C3\u0097', '\u00D7'],   // ×
  ['\u00C3\u009F', '\u00DF'],   // ß
  ['\u00C3\u00B8', '\u00F8'],   // ø
  ['\u00C3\u008D', '\u00CD'],   // Í
  ['\u00C3\u00AD', '\u00ED'],   // í
  // Curly quotes and special punctuation
  ['\u00E2\u0080\u0099', '\u2019'],  // '
  ['\u00E2\u0080\u009C', '\u201C'],  // "
  ['\u00E2\u0080\u009D', '\u201D'],  // "
  ['\u00E2\u0080\u0093', '\u2013'],  // –
  ['\u00E2\u0080\u0094', '\u2014'],  // —
  ['\u00E2\u0080\u00A6', '\u2026'],  // …
  // Common symbols
  ['\u00C2\u00A9', '\u00A9'],   // ©
  ['\u00C2\u00AE', '\u00AE'],   // ®
  ['\u00E2\u0084\u00A2', '\u2122'], // ™
  ['\u00E2\u0082\u00AC', '\u20AC'], // €
  ['\u00C2\u00A3', '\u00A3'],   // £
  ['\u00C2\u00B0', '\u00B0'],   // °
  ['\u00C2\u00B7', '\u00B7'],   // ·
  ['\u00C2\u00AB', '\u00AB'],   // «
  ['\u00C2\u00BB', '\u00BB'],   // »
  ['\u00C2\u00A0', '\u00A0'],   // non-breaking space
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = content;
  for (const [bad, good] of replacements) {
    if (fixed.includes(bad)) {
      fixed = fixed.split(bad).join(good);
    }
  }
  if (fixed !== content) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    return true;
  }
  return false;
}

function walkDir(dir) {
  let count = 0;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return 0;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      count += walkDir(full);
    } else if (entry.isFile() && /\.(jsx?|tsx?|css)$/.test(entry.name)) {
      if (fixFile(full)) {
        console.log('Fixed:', entry.name);
        count++;
      }
    }
  }
  return count;
}

const srcDir = path.join(__dirname, 'src');
const total = walkDir(srcDir);
console.log('\nTotal files fixed:', total);

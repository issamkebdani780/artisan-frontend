const fs = require('fs');
const path = require('path');

// These are the actual Unicode character sequences found in corrupted files,
// mapped to their correct French characters.
// Pattern determined by hex analysis of actual file bytes.
const replacements = [
  // Triple-encoded (Ã + Windows-1252 special char)
  ['\u00C3\u2030', '\u00C9'],   // Ã‰ -> É  (hex: c383 e280b0 -> c389)
  ['\u00C3\u0192', '\u00C3'],   // Ãƒ -> Ã  (hex: c383 c692 -> c383)
  ['\u00C3\u02C6', '\u00C8'],   // Ãˆ -> È  (hex: c383 cb86 -> c388) 
  ['\u00C3\u20AC', '\u00C0'],   // Ã€ -> À  (hex: c383 e282ac -> c380)
  ['\u00C3\u2026', '\u00C5'],   // Ã… -> Å  (hex: c383 e280a6 -> c385)
  ['\u00C3\u02DC', '\u00C8'],   // Ã˜ -> Ø? check
  ['\u00C3\u2122', '\u00C9'],   // Ã™ -> Ù? check
  ['\u00C3\u017D', '\u00CE'],   // ÃŽ -> Î  (hex: c383 c5bd -> c38e)
  ['\u00C3\u00A5', '\u00E5'],   // Ã¥ -> å  (hex: c383 c2a5 -> c3a5) - already ok? 
  ['\u00C3\u0160', '\u00CA'],   // ÃŠ -> Ê  (hex: c383 c5a0 -> c38a)

  // Double-encoded standard Latin-1 (Ã + regular UTF-8 continuation byte as char)
  ['\u00C3\u00A9', '\u00E9'],   // é
  ['\u00C3\u00A8', '\u00E8'],   // è
  ['\u00C3\u00AA', '\u00EA'],   // ê
  ['\u00C3\u00AB', '\u00EB'],   // ë
  ['\u00C3\u00A0', '\u00E0'],   // à
  ['\u00C3\u00A2', '\u00E2'],   // â
  ['\u00C3\u00A4', '\u00E4'],   // ä
  ['\u00C3\u00A6', '\u00E6'],   // æ
  ['\u00C3\u00AC', '\u00EC'],   // ì
  ['\u00C3\u00AE', '\u00EE'],   // î
  ['\u00C3\u00AF', '\u00EF'],   // ï
  ['\u00C3\u00B1', '\u00F1'],   // ñ
  ['\u00C3\u00B2', '\u00F2'],   // ò
  ['\u00C3\u00B3', '\u00F3'],   // ó
  ['\u00C3\u00B4', '\u00F4'],   // ô
  ['\u00C3\u00B5', '\u00F5'],   // õ
  ['\u00C3\u00B6', '\u00F6'],   // ö
  ['\u00C3\u00B8', '\u00F8'],   // ø
  ['\u00C3\u00B9', '\u00F9'],   // ù
  ['\u00C3\u00BA', '\u00FA'],   // ú
  ['\u00C3\u00BB', '\u00FB'],   // û
  ['\u00C3\u00BC', '\u00FC'],   // ü
  ['\u00C3\u00BD', '\u00FD'],   // ý
  ['\u00C3\u00BF', '\u00FF'],   // ÿ
  ['\u00C3\u00A7', '\u00E7'],   // ç
  ['\u00C3\u009F', '\u00DF'],   // ß
  ['\u00C3\u00A1', '\u00E1'],   // á
  ['\u00C3\u00AD', '\u00ED'],   // í
  ['\u00C3\u00BA', '\u00FA'],   // ú

  // Uppercase accented (these should already be in files as-is or need fixing)
  ['\u00C3\u0087', '\u00C7'],   // Ç (double-encoded)
  ['\u00C3\u0080', '\u00C0'],   // À (double-encoded)

  // Euro and symbols (double-encoded)
  ['\u00E2\u0082\u00AC', '\u20AC'], // € (should be fine if already corrected on first pass)
  ['\u00C2\u00A9', '\u00A9'],   // ©
  ['\u00C2\u00AE', '\u00AE'],   // ®
  ['\u00C2\u00B0', '\u00B0'],   // °
  ['\u00C2\u00AB', '\u00AB'],   // «
  ['\u00C2\u00BB', '\u00BB'],   // »
  ['\u00C2\u00A0', '\u00A0'],   // non-breaking space
  ['\u00C2\u00A3', '\u00A3'],   // £
  ['\u00C2\u00B7', '\u00B7'],   // ·
  
  // Curly quotes
  ['\u00E2\u0080\u0099', '\u2019'],  // '
  ['\u00E2\u0080\u009C', '\u201C'],  // "
  ['\u00E2\u0080\u009D', '\u201D'],  // "
  ['\u00E2\u0080\u0093', '\u2013'],  // –
  ['\u00E2\u0080\u0094', '\u2014'],  // —
  ['\u00E2\u0080\u00A6', '\u2026'],  // …

  // Tricky: Œ and œ
  ['\u00C5\u0092', '\u0152'],   // Œ
  ['\u00C5\u0093', '\u0153'],   // œ
];

// Also handle: the UTF-8 bytes read as latin1 then re-UTF8-encoded
// For cases like Ã‰ (c383 e280b0) which are triple-encoded:
// We do a second pass using the buffer-level replacement
function fixBufferLevel(content) {
  // Map: bad UTF-8 byte sequences -> good UTF-8 byte sequences
  const bufMap = [
    // Ã‰ (c3 83 e2 80 b0) -> É (c3 89)
    [[0xC3,0x83,0xE2,0x80,0xB0], [0xC3,0x89]],
    // ÃŽ (c3 83 c5 bd) -> Î (c3 8e)
    [[0xC3,0x83,0xC5,0xBD], [0xC3,0x8E]],
    // ÃŠ (c3 83 c5 a0) -> Ê (c3 8a)
    [[0xC3,0x83,0xC5,0xA0], [0xC3,0x8A]],
    // Ãˆ (c3 83 cb 86) -> È (c3 88)
    [[0xC3,0x83,0xCB,0x86], [0xC3,0x88]],
    // Ã€ (c3 83 e2 82 ac) -> À (c3 80)
    [[0xC3,0x83,0xE2,0x82,0xAC], [0xC3,0x80]],
    // Ãƒ (c3 83 c6 92) -> Ã (c3 83) -- itself, skip
    // Ã˜ (c3 83 cb 9c) -> Ø (c3 98)
    [[0xC3,0x83,0xCB,0x9C], [0xC3,0x98]],
    // Ã™ (c3 83 e2 84 a2) -> Ù (c3 99)
    [[0xC3,0x83,0xE2,0x84,0xA2], [0xC3,0x99]],
    // Ã… (c3 83 e2 80 a6) -> Å (c3 85)
    [[0xC3,0x83,0xE2,0x80,0xA6], [0xC3,0x85]],
    // â‚¬ (e2 80 9a c3 ac) -> No, let's do euro sign
    // â‚¬ = e2 82 ac which is already correct UTF-8 for €
    // But Ã¥ c3 83 c2 a5 -> å c3 a5
    [[0xC3,0x83,0xC2,0xA5], [0xC3,0xA5]],
  ];

  let buf = Buffer.from(content, 'utf8');
  
  for (const [badBytes, goodBytes] of bufMap) {
    const badBuf = Buffer.from(badBytes);
    const goodBuf = Buffer.from(goodBytes);
    
    let result = [];
    let i = 0;
    while (i < buf.length) {
      if (i + badBytes.length <= buf.length) {
        const slice = buf.slice(i, i + badBytes.length);
        if (slice.equals(badBuf)) {
          result.push(...goodBytes);
          i += badBytes.length;
          continue;
        }
      }
      result.push(buf[i]);
      i++;
    }
    buf = Buffer.from(result);
  }
  
  return buf.toString('utf8');
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // First: fix triple/buffer-level issues
  let fixed = fixBufferLevel(content);
  
  // Then fix any remaining double-encoded sequences
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

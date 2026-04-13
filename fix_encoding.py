import os
import re

replacements = [
    ("Ã©", "é"), ("Ã¨", "è"), ("Ã ", "à"), ("Ã§", "ç"), ("Ã®", "î"),
    ("Ã¯", "ï"), ("Ã´", "ô"), ("Ã»", "û"), ("Ã¹", "ù"), ("Ã‰", "É"),
    ("ÃŠ", "Ê"), ("Ã‡", "Ç"), ("Ã€", "À"), ("Ã¢", "â"), ("Ã«", "ë"),
    ("Ã¬", "ì"), ("Ã­", "í"), ("Ã²", "ò"), ("Ã³", "ó"), ("Ã¶", "ö"),
    ("Ã¼", "ü"), ("Ã±", "ñ"), ("Ã‚", "Â"), ("Ã„", "Ä"), ("Ãˆ", "È"),
    ("Ã‹", "Ë"), ("ÃŒ", "Ì"), ("ÃŽ", "Î"), ("Ã'", "Ñ"), ("Ã–", "Ö"),
    ("Ã™", "Ù"), ("Ãš", "Ú"), ("Ã›", "Û"), ("Ãœ", "Ü"), ("Ã¥", "å"),
    ("Ã¡", "á"), ("Ã¢", "â"), ("Ã£", "ã"), ("Ã¤", "ä"), ("Ã¦", "æ"),
    ("Ã°", "ð"), ("Ã¾", "þ"), ("Ã½", "ý"), ("Ã¿", "ÿ"),
]

extensions = (".jsx", ".js", ".css", ".tsx", ".ts")

fixed = 0
for root, dirs, files in os.walk("src"):
    # Skip node_modules
    dirs[:] = [d for d in dirs if d != "node_modules"]
    for fname in files:
        if not any(fname.endswith(ext) for ext in extensions):
            continue
        fpath = os.path.join(root, fname)
        try:
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception:
            continue
        
        changed = False
        for bad, good in replacements:
            if bad in content:
                content = content.replace(bad, good)
                changed = True
        
        if changed:
            with open(fpath, "w", encoding="utf-8", newline="") as f:
                f.write(content)
            print(f"Fixed: {fpath}")
            fixed += 1

print(f"\nDone. Fixed {fixed} files.")

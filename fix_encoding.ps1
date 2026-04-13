$map = @{
    "Ã©" = "é"; "Ã¨" = "è"; "Ã " = "à"; "Ã§" = "ç"; "Ã®" = "î"; "Ã¯" = "ï"
    "Ã´" = "ô"; "Ã»" = "û"; "Ã¹" = "ù"; "Ã‰" = "É"; "ÃŠ" = "Ê"; "Ã‡" = "Ç"
    "Ã€" = "À"; "Ã¢" = "â"; "Ã£" = "ã"; "Ã¤" = "ä"; "Ã¦" = "æ"; "Ã«" = "ë"
    "Ã¬" = "ì"; "Ã­" = "í"; "Ã²" = "ò"; "Ã³" = "ó"; "Ã¶" = "ö"; "Ã¼" = "ü"
    "Ã±" = "ñ"; "Ã " = "à"; "Ã‚" = "Â"; "Ãƒ" = "Ã"; "Ã„" = "Ä"; "Ãˆ" = "È"
    "Ã‹" = "Ë"; "ÃŒ" = "Ì"; "Ã" = "Í"; "ÃŽ" = "Î"; "Ã" = "Ï"; "Ã'" = "Ñ"
    "Ã'" = "Ò"; "Ã"" = "Ó"; "Ã"" = "Ô"; "Ã•" = "Õ"; "Ã–" = "Ö"; "Ã™" = "Ù"
    "Ãš" = "Ú"; "Ã›" = "Û"; "Ãœ" = "Ü"; "Ã‡" = "Ç"; "Ã¥" = "å"; "Ã°" = "ð"
    "Ã¾" = "þ"; "Ã½" = "ý"; "Ã¿" = "ÿ"; "Ã¡" = "á"; "Ã " = "à"
}

$files = Get-ChildItem -Recurse -Path "src" -Filter "*.jsx"
$files += Get-ChildItem -Recurse -Path "src" -Filter "*.js"
$files += Get-ChildItem -Recurse -Path "src" -Filter "*.css"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $changed = $false
    foreach ($key in $map.Keys) {
        if ($content -clike "*$key*") {
            $content = $content -replace [regex]::Escape($key), $map[$key]
            $changed = $true
        }
    }
    if ($changed) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "Fixed: $($file.Name)"
    }
}
Write-Host "Done."

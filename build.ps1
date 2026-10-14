# 把 src/ 打包成單一檔案 dist/index.html（CSS、JS、圖片全部內嵌，雙擊即可玩、可直接上傳）
$ErrorActionPreference = 'Stop'
$utf8 = New-Object Text.UTF8Encoding($false)
$src = Join-Path $PSScriptRoot 'src'
$dist = Join-Path $PSScriptRoot 'dist'

$html = [IO.File]::ReadAllText("$src\index.html", $utf8)
$css = [IO.File]::ReadAllText("$src\style.css", $utf8)
$js = [IO.File]::ReadAllText("$src\main.js", $utf8)

$html = $html.Replace('<link rel="stylesheet" href="style.css">', "<style>$css</style>")
$html = $html.Replace('<script type="module" src="main.js"></script>', "<script type=`"module`">$js</script>")

# 圖片 assets/xxx.webp → data URI
foreach ($f in Get-ChildItem "$src\assets" -Filter *.webp) {
  $uri = 'data:image/webp;base64,' + [Convert]::ToBase64String([IO.File]::ReadAllBytes($f.FullName))
  $html = $html.Replace("assets/$($f.Name)", $uri)
}

New-Item -ItemType Directory -Force $dist | Out-Null
[IO.File]::WriteAllText("$dist\index.html", $html, $utf8)
"已輸出 dist\index.html（$([Math]::Round((Get-Item "$dist\index.html").Length / 1KB)) KB）"

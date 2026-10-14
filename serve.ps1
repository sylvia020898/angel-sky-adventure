# 本機開發伺服器：預設服務 src/（改完存檔重新整理即可），加 -Dir dist 可測打包版
param([string]$Dir = 'src', [int]$Port = 18931)
$root = Join-Path $PSScriptRoot $Dir
$types = @{ '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'; '.webp' = 'image/webp'; '.png' = 'image/png'; '.json' = 'application/json' }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
"飛翔天使大冒險：http://localhost:$Port/  （服務 $Dir，Ctrl+C 結束）"
while ($l.IsListening) {
  $c = $l.GetContext()
  $path = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath.TrimStart('/'))
  if ($path -eq '') { $path = 'index.html' }
  $file = [IO.Path]::GetFullPath((Join-Path $root $path))
  if ($file.StartsWith([IO.Path]::GetFullPath($root)) -and (Test-Path $file -PathType Leaf)) {
    $bytes = [IO.File]::ReadAllBytes($file)
    $ct = $types[[IO.Path]::GetExtension($file)]
    $c.Response.ContentType = if ($ct) { $ct } else { 'application/octet-stream' }
    $c.Response.Headers.Add('Cache-Control', 'no-store')
    $c.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $c.Response.StatusCode = 404
  }
  $c.Response.Close()
}

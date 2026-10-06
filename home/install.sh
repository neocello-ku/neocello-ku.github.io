#!/usr/bin/env bash
# Quartz 빌드 결과(public) 위에 직접 만든 대문을 덮어쓴다. 글 페이지는 Quartz 그대로.
set -euo pipefail
OUT="${1:-public}"
HERE="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$OUT/home" "$OUT/ko"
cp "$HERE/home.css" "$HERE/home.js" "$HERE/notes.json" "$HERE/essays.json" "$OUT/home/"
cp "$HERE/index.html" "$OUT/index.html"
cp "$HERE/ko.html" "$OUT/ko/index.html"
echo "landing installed into $OUT"

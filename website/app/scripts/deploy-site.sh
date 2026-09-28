#!/usr/bin/env bash
# Build the Vite app and publish it to GitHub Pages (outstandingspeakers.com).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

DOMAIN="${DEPLOY_DOMAIN:-outstandingspeakers.com}"
REPO="${DEPLOY_REPO:-https://github.com/marianapsilveira/outstanding-speakers.git}"

echo "Building site…"
npm run build

cp dist/index.html dist/404.html
touch dist/.nojekyll
printf '%s\n' "$DOMAIN" > dist/CNAME

HERO="dist/assets/speakers-hero.mp4"
if [[ -f "$HERO" ]] && [[ "$(stat -f%z "$HERO" 2>/dev/null || stat -c%s "$HERO")" -gt 100000000 ]]; then
  if ! command -v ffmpeg >/dev/null; then
    echo "speakers-hero.mp4 is over 100MB and ffmpeg is not installed." >&2
    exit 1
  fi
  echo "Compressing speakers-hero.mp4 for GitHub Pages…"
  ffmpeg -y -i public/assets/speakers-hero.mp4 \
    -vf 'scale=min(1920\,iw):-2' -c:v libx264 -pix_fmt yuv420p \
    -crf 28 -preset fast -movflags +faststart -an \
    "$HERO"
fi

DEPLOY="$(mktemp -d)"
cleanup() { rm -rf "$DEPLOY"; }
trap cleanup EXIT

rsync -a --exclude '.DS_Store' dist/ "$DEPLOY/"
cd "$DEPLOY"
git init -b gh-pages
git add -A
git -c user.name='Mariana Silveira' \
    -c user.email='marianapsilveira@users.noreply.github.com' \
    commit -m "Deploy site to GitHub Pages"
git remote add origin "$REPO"

echo "Publishing to GitHub Pages…"
GIT_TERMINAL_PROMPT=0 git \
  -c credential.helper= \
  -c credential.helper='!gh auth git-credential' \
  -c http.version=HTTP/1.1 \
  -c http.postBuffer=524288000 \
  push -u origin gh-pages --force

echo "Live at https://${DOMAIN}"

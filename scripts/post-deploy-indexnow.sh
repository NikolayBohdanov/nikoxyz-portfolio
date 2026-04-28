#!/usr/bin/env bash
# Post-deploy: submit changed/new blog posts to IndexNow (Bing/Yandex/Seznam)
# Run after `vercel deploy` (or manually). Uses git diff against previous commit.
#
# Required env: NEXT_PUBLIC_INDEXNOW_KEY (same as in Vercel env)
# Required env: SITE_URL (defaults to https://nikoxyz.com)

set -euo pipefail

SITE_URL="${SITE_URL:-https://nikoxyz.com}"
KEY="${NEXT_PUBLIC_INDEXNOW_KEY:-}"

if [[ -z "$KEY" ]]; then
  echo "ERROR: NEXT_PUBLIC_INDEXNOW_KEY not set" >&2
  exit 1
fi

# Find changed/new posts in the last commit (HEAD~1..HEAD)
mapfile -t changed_posts < <(
  git diff --name-only --diff-filter=AM HEAD~1 HEAD -- 'app/blog/posts/*.mdx' 2>/dev/null \
    | sed -E 's|app/blog/posts/(.+)\.mdx|/blog/\1|' \
    | sed "s|^|${SITE_URL}|"
)

# Always include sitemap + blog index when posts change
urls=()
if [[ ${#changed_posts[@]} -gt 0 ]]; then
  urls+=("${changed_posts[@]}")
  urls+=("${SITE_URL}/blog")
  urls+=("${SITE_URL}/sitemap.xml")
fi

if [[ ${#urls[@]} -eq 0 ]]; then
  echo "No post changes in HEAD~1..HEAD; skipping IndexNow ping."
  exit 0
fi

echo "Submitting ${#urls[@]} URL(s) to IndexNow:"
printf '  - %s\n' "${urls[@]}"

json_urls=$(printf '%s\n' "${urls[@]}" | jq -R . | jq -sc .)

curl -sS -X POST "${SITE_URL}/api/indexnow" \
  -H "Authorization: Bearer ${KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"urls\": ${json_urls}}" \
  | jq .

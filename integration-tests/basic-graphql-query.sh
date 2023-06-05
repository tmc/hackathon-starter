#!/bin/bash
set -euo pipefail
curl -s 'http://localhost:4000/' \
  -H 'Cache-Control: no-cache' \
  -H 'Origin: http://localhost:4000' \
  -H 'Referer: http://localhost:4000/' \
  -H 'content-type: application/json' \
  --data-raw $'{"query":"query User($userId: ID\u0021) {\\n  user(id: $userId) {\\n    id\\n    username\\n    description\\n  }\\n}","variables":{"userId":41},"operationName":"User"}' \
  --compressed

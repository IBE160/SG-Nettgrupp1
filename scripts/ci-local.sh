#!/bin/bash
# Mirror CI execution locally for debugging

echo "🔍 Running CI pipeline locally..."

# Lint
npm run lint || exit 1

# Tests
npm run test:e2e || exit 1

# Burn-in (reduced iterations)
for i in {1..3}; do
  echo "🔥 Burn-in $i/3"
  npm run test:e2e || exit 1
done

echo "✅ Local CI pipeline passed"

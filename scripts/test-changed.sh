#!/bin/bash
# Run only tests for changed files

CHANGED_FILES=$(git diff --name-only HEAD~1)

if echo "$CHANGED_FILES" | grep -q "src/.*\.ts$"; then
  echo "Running affected tests..."
  npm run test:e2e -- --grep="$(echo $CHANGED_FILES | sed 's/src\///g' | sed 's/\.ts//g')"
else
  echo "No test-affecting changes detected"
fi

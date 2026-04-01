

## Remove all Lovable references

### Files to change

1. **`README.md`** — Replace content with JPFF project description
2. **`vite.config.ts`** — Remove `lovable-tagger` import and plugin usage
3. **`package.json`** — Remove `lovable-tagger` from devDependencies

### Files left untouched

- **`playwright-fixture.ts`** and **`playwright.config.ts`** — These are testing infrastructure files used by Lovable's internal testing. They don't affect your deployed site or source code. Removing them could break the test setup, so they're best left as-is.
- **`package-lock.json`** — Will be auto-regenerated when dependencies change.


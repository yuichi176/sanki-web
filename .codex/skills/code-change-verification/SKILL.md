---
name: code-change-verification
description: Run the sanki-web verification stack when changes affect application code, tests, or build and lint configuration.
---

# Code Change Verification

## Overview

Use this skill when changes affect `src/`, tests, or build, lint, formatting, or TypeScript configuration. Do not mark work complete until the applicable checks pass.

The project is a Vite application. Its production build runs TypeScript project builds (`tsc -b`) before Vite, so `pnpm build` is the canonical build and type-check command.

## Quick start

1. Run it from the repository root.
2. macOS/Linux: `bash .codex/skills/code-change-verification/scripts/run.sh`.
3. If a command fails, fix the issue and rerun the complete script.
4. Confirm completion only when every command succeeds.

## Manual workflow

- Run from the repository root in this order: `pnpm install --frozen-lockfile`, `pnpm build`, `pnpm lint`, `pnpm format`, `pnpm test`.
- Do not skip steps; stop and fix issues immediately when a command fails.
- Re-run the full stack after applying fixes so the commands execute in the required order.

`pnpm test` is currently a placeholder script. Run it to preserve the project contract, but do not describe it as a unit or end-to-end test suite until one is configured.

## Documentation upkeep

- If verification exposes a reusable project rule or workflow requirement, update `AGENTS.md` before marking work complete.
- Keep updates concise and general; do not document transient environment failures or one-off implementation details.

## Resources

### scripts/run.sh

- Executes the sanki-web verification sequence with fail-fast semantics.
- Prefer this entry point to ensure the commands always run in the correct order from the repo root.

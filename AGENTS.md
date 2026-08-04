# Contributor Guide

This guide helps new contributors get started with the OpenAI Agents. It covers repo structure, how to test your work, available utilities, file locations, and guidelines for commits and PRs.

**Location:** `AGENTS.md` at the repository root.

## Table of Contents

1.  [Policies & Mandatory Rules](#policies--mandatory-rules)
2.  [Project Structure Guide](#project-structure-guide)
3.  [Operation Guide](#operation-guide)

## Policies & Mandatory Rules

### Mandatory Skill Usage

#### `$code-change-verification`

Run `$code-change-verification` before marking work complete when changes affect runtime code, tests, or build/test behavior.

Run it when you change:

- `src/`
- Root build/test config such as `package.json`, `pnpm-lock.yaml`, `tsconfig*.json`, `eslint.config.*`, or `vitest*.ts`

You can skip `$code-change-verification` for docs-only or repo-meta changes (for example, `.codex/`, `README.md`, `AGENTS.md`, `.github/`), unless a user explicitly asks to run the full verification stack.

#### `$openai-knowledge`

When working on OpenAI API or OpenAI platform integrations in this repo (Responses API, tools, streaming, Realtime API, auth, models, rate limits, MCP, Agents SDK/ChatGPT Apps SDK), use `$openai-knowledge` to pull authoritative docs via the OpenAI Developer Docs MCP server (and guide setup if it is not configured).

## Project Structure Guide

### Key Architecture Pattern (Page/Section/Presentation)

- `page.tsx`: route entry, renders a `*-section` component.
- `*-section.tsx` (Server Component): fetches from Firestore, transforms data, passes props.
- `*-presentation.tsx` (Client Component): UI, interactions, local state; no direct Firestore reads.
- `_components/`: page-specific components; can be server or client.

### Frontend Guidelines

#### React

- Functional components only; PascalCase names.
- Single responsibility per component.
- Split large UI blocks (roughly 200+ lines or multiple concerns) into focused subcomponents under the nearest `_components/` folder (e.g., extract modals/forms into their own files).
- Use Jotai for global state.
- Use `useEffect` carefully; clean up side effects.
- Use `React.memo`, `useCallback`, `useMemo` when needed.
- Tailwind CSS for styling; use `cn` from `src/utils/shadcn.ts` for component `className` composition.
- Accessibility: semantic HTML + proper ARIA.

#### TypeScript

- Explicit types for all exported functions/variables/components.
- Avoid `any`; prefer `unknown`.
- Prefer `interface` for object shapes; `type` for unions.
- Use full words for names; verbs for booleans (`isX`, `hasX`).
- Avoid `enum` unless required; use string unions.
- Handle `null`/`undefined` explicitly.
- Use RO-RO for multi-parameter functions.

## Operation Guide

### Prerequisites

- Node.js 24.15.0
- pnpm 11.0.9 (`corepack enable` is recommended to manage versions).

### Development Workflow

1.  Sync with `main` (or default branch).
2.  Create a feature/fix branch with a descriptive name:
    ```bash
    git checkout -b feat/<short-description>
    ```
3.  Commit using Conventional Commits.
4.  Push and open a pull request.
5.  When reporting code changes as complete (after substantial code work), invoke `$pr-draft-summary` to generate the required PR summary block with change summary, PR title, and draft description.

### Testing & Automated Checks

Before submitting changes, ensure all checks pass and augment tests when you touch code:

When `$code-change-verification` applies (see Mandatory Skill Usage), invoke it to run the required verification stack from the repository root. Rerun the full stack after fixes.

#### Build and Type Checking

- Always run the full build first to validate the latest build outputs:
  ```bash
  pnpm build
  ```
  NEVER USE `-w` or other watch modes.

#### Linting & Formatting

- Run ESLint:
  ```bash
  pnpm lint
  ```
- Code style follows `eslint.config.js` and Prettier defaults.
- Comments must end with a period.

#### Mandatory Local Run Order

When `$code-change-verification` applies (see Mandatory Skill Usage), run the full validation sequence locally via the `$code-change-verification` skill; do not skip any step or change the order.

### Pull Request & Commit Guidelines

- Use **Conventional Commits**:
  - `feat`: new feature
  - `fix`: bug fix
  - `docs`: documentation only
  - `test`: adding or fixing tests
  - `chore`: build, CI, or tooling changes
  - `perf`: performance improvement
  - `refactor`: code changes without feature or fix
  - `build`: changes that affect the build system
  - `ci`: CI configuration
  - `style`: code style (formatting, missing semicolons, etc.)
  - `types`: type-related changes
  - `revert`: reverts a previous commit
- Commit message format:

  ```
  <type>(<scope>): <short summary>

  Optional longer description.
  ```

- Keep summary under 80 characters.

### Review Process & What Reviewers Look For

- ✅ All automated checks pass (build, tests, lint).
- ✅ Code is readable and maintainable.
- ✅ Commit history is clean and follows Conventional Commits.

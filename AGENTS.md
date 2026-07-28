    # Brandon Johnson Dev agent operating guide

    This file is the operating contract for AI agents and humans working in `excelsior-creative/brandon-johnson-dev`. It follows the Excelsior AGENTS.md standard tracked by EXC-244.

    ## Canonical operating model

    - GitHub repository: `excelsior-creative/brandon-johnson-dev` is the durable source for code, repo-local docs, and implementation evidence.
    - GitHub Issues and PRs: canonical work graph for repo-native implementation, decisions, acceptance criteria, and review evidence.
    - Linear: portfolio-level planning and sync visibility. Mirror status back to the linked Linear issue when a task originated there.
    - Hermes Kanban: execution lane for approved, well-scoped issues. Treat Kanban cards as run attempts, not as durable product specs.

    ## Stack and architecture overview

    | Concern | Standard for this repo |
    |---|---|
    | Repository | `excelsior-creative/brandon-johnson-dev` |
    | Default branch | `main` |
    | Package manager | Use the package manager pinned by the repo when present. |
    | Stack | Custom/undocumented; inspect README, package files, and repo history before changing behavior. |
    | Architecture notes | Read `README.md`, source layout, and existing docs before editing. Preserve current architecture unless the issue explicitly authorizes a change. |

    ## Run, build, and test locally

    Start with the repo README. When scripts are present, prefer the existing package-manager scripts over invented commands.

    - Inspect `README.md` and package/tooling files for repo-specific commands before running changes.
- If `package.json` exists, prefer `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm test`, and `pnpm build` when those scripts are defined.

    If a command cannot run because dependencies, browsers, services, or credentials are unavailable, report the exact blocker in the PR and the linked issue rather than claiming success.

    ## Environment variables and credentials

    - Reference env vars by name only. Never paste or commit secret values.
    - Check `README.md`, `.env.example`, deployment settings, and 1Password references before running work that needs secrets. Never commit env values.
    - Use local placeholder values only for non-secret build verification when the app explicitly supports that mode.
    - Credential, billing, DNS, provider, and production-secret changes require explicit Brandon approval in the issue/PR thread.

    ## Deploy and production boundaries

    - Do not deploy, publish, submit, or change production settings unless the issue explicitly authorizes that action.
    - Do not change DNS, email routing, billing, subscriptions, provider accounts, credentials, app-store/public publishing, payments, or client-facing commitments without Brandon approval.
    - If deployment details are absent from `README.md`, treat deploy status as unknown and document that gap instead of guessing.

    ## Risk tiers and approval gates

    - R0/R1: docs, comments, local-only cleanup, and reversible tests are generally safe with normal PR review.
    - R2: code behavior, data model, auth, integration, CI, or dependency changes require clear acceptance criteria and PR evidence.
    - R3: production config, deploy, DNS/email, paid providers, credentials, analytics/tracking, or external integrations require explicit Brandon approval.
    - R4: destructive data operations, legal/financial commitments, public launch, payment flows, and client-facing promises are human-gated.

    Keep one risk tier per issue. If work mixes tiers, use the highest tier and stop at the approval gate.

    ## Branch, commit, and PR conventions

    - Branch from `main` using `agent/<issue-key>-<short-slug>` for Linear/Hermes work, or `docs/<short-slug>` / `fix/<short-slug>` for human-requested repo-local work.
    - Reference the issue key or GitHub issue number in commits and PR bodies.
    - Open a PR for every change; do not push directly to `main`.
    - PR bodies should include summary, changed files, verification commands/results, risk notes, and links to the source issue.

    ## Before acting checklist

    1. Read this file, `README.md`, and any linked docs that describe the touched area.
    2. Inspect open issues/PRs so you do not duplicate active work.
    3. Confirm the risk tier and approval gate before edits.
    4. Make the smallest reversible change that satisfies the issue.
    5. Run relevant checks and paste real results in the PR/issue handoff.

    ## Deviations from standard

    Document justified deviations here when this repo intentionally differs from the Excelsior stack standard. Undocumented gaps should be fixed or tracked as follow-up work.

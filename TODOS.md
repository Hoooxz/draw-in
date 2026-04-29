# Draw In External TODOs

This file tracks external setup work that cannot be fully represented in the
repository. The project has already been renamed to **Draw In** with the slug
`draw-in`.

## Current Baseline

- GitHub fork: `Hoooxz/draw-in`
  - This is the renamed fork of `DayuanJiang/next-ai-draw-io`.
  - Keep `upstream` pointing to `DayuanJiang/next-ai-draw-io`.
- npm organization: `draw-in`
  - Created.
- npm package: `@draw-in/mcp-server`
  - Published as `0.2.0`.
  - Bin: `draw-in-mcp`.
- Vercel project: `draw-in`
  - Created under the current Vercel account.
  - Framework preset is `Next.js`.
- Temporary mistaken GitHub repo:
  - `Hoooxz/draw-in-created-by-mistake-delete-me`
  - This was created accidentally while trying to reserve `draw-in`.
  - It does not own the final project name anymore.

## Remaining External Work

### 1. Cloudflare R2 And Worker

Background:
- `wrangler.jsonc` already uses the Draw In names:
  - Worker: `draw-in-worker`
  - R2 bucket: `draw-in-inc-cache`
- Cloudflare API currently rejects R2 bucket creation because R2 has not been
  enabled in the account yet.

Do:
- Enable R2 in the Cloudflare Dashboard for the target account.
- Create the R2 bucket `draw-in-inc-cache`.
- Deploy or confirm the Worker named `draw-in-worker`.
- Set any required Worker secrets/env vars before production deployment.

Requirements:
- Do not rename the bucket or Worker unless the code/docs are updated too.
- Do not add a custom domain unless there is a separate domain decision.
- After setup, confirm the deployed Worker uses the same bindings as
  `wrangler.jsonc`.

Useful checks:

```bash
npx wrangler login
npx wrangler r2 bucket create draw-in-inc-cache
npx wrangler deploy
```

### 2. GHCR Container Image

Background:
- Docker/GHCR docs now refer to `ghcr.io/hoooxz/draw-in`.
- The local machine did not have Docker installed when this TODO was created.
- GitHub Actions did not produce a Docker workflow run after the rename push.

Do:
- Build and push the first image to `ghcr.io/hoooxz/draw-in`.
- After the first push, open GitHub Packages and set the package visibility as
  intended.
- Confirm README/docs references match the actual image path.

Requirements:
- Image path must be `ghcr.io/hoooxz/draw-in`.
- Do not publish under the old upstream image name.
- If using GitHub Actions, confirm package permissions include `packages: write`.

Useful options:

```bash
docker build -t ghcr.io/hoooxz/draw-in:latest .
docker push ghcr.io/hoooxz/draw-in:latest
```

or update/trigger the existing `Docker Build and Push` workflow.

### 3. EdgeOne Pages Project

Background:
- Code config already uses the Draw In naming where applicable.
- EdgeOne CLI was installed on demand, but it was not authenticated.

Do:
- Log in to EdgeOne.
- Create or link the EdgeOne Pages project named `draw-in`.
- Configure build/deploy settings to match the project.

Requirements:
- Project name should be `draw-in`.
- Do not configure a custom domain yet.
- Keep runtime environment variables aligned with `env.example`.

Useful checks:

```bash
npx edgeone login
npx edgeone pages link
```

### 4. npm Automation Token And Publish Policy

Background:
- `@draw-in/mcp-server@0.2.0` has been published manually.
- Manual publish required npm authentication and OTP/security-key flow.
- CI publishing should not depend on an interactive browser session.

Do:
- Create an npm automation token for the `draw-in` organization/package.
- Store it as a GitHub Actions secret, for example `NPM_TOKEN`.
- Decide and document the 2FA policy for future package releases.
- Add or update release automation only after the token policy is clear.

Requirements:
- Keep the package name `@draw-in/mcp-server`.
- Do not publish `@draw-in/draw-in-mcp-server`.
- Do not publish under any personal scope such as `@hoooxz/*`.
- Use `npm publish --access public` for scoped public releases.

Useful check:

```bash
npm view @draw-in/mcp-server version --registry=https://registry.npmjs.org
```

### 5. Delete Mistaken GitHub Repository

Background:
- `Hoooxz/draw-in-created-by-mistake-delete-me` is an accidental private repo.
- It was renamed away from `draw-in`, so it no longer blocks the final project.
- The local GitHub CLI token did not have the `delete_repo` scope.

Do:
- Delete `Hoooxz/draw-in-created-by-mistake-delete-me`.

Requirements:
- Double-check the repo name before deleting.
- Do not delete `Hoooxz/draw-in`; that is the real renamed fork.

Options:

```bash
gh auth refresh -h github.com -s delete_repo
gh repo delete Hoooxz/draw-in-created-by-mistake-delete-me --yes
```

or delete it from the GitHub web UI.

## Optional Future Work

These were discussed as optional and are not required for the current rename:

- Register a custom domain such as `draw-in.dev`, `draw-in.app`, `draw-in.ai`,
  or `draw-in.io`.
- Register matching social/brand handles.
- Create a Docker Hub organization/repository if Docker Hub distribution is
  desired.
- Prepare Apple Developer Bundle ID and Windows code signing identity for
  signed desktop distribution.

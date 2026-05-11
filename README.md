# Full-Stack Development — Micro Frontend Architecture

A learning platform built as a **Micro Frontend** system. Each course is an independently deployed Next.js application orchestrated by a central Shell portal.

## Architecture

```
full-stack-development/
├── shell/        ← Portal (Shell App)      → localhost:3000
├── html/         ← HTML MFE               → localhost:3001
├── css/          ← CSS MFE                → localhost:3002
├── javascript/   ← JavaScript MFE         → localhost:3003
├── reactjs/      ← React MFE              → localhost:3004
├── nodejs/       ← Node.js MFE            → localhost:3005
└── package.json  ← Root orchestrator (concurrently)
```

## MFE Principles Applied

| Principle            | Implementation                                               |
| -------------------- | ------------------------------------------------------------ |
| **Independent Deploy** | Each app has its own `package.json`, dependencies & port    |
| **Team Autonomy**    | Each course codebase is fully isolated                        |
| **Fault Isolation**  | One MFE down never affects the others                        |
| **Shell Orchestration** | Shell polls health of each MFE and shows live status      |
| **Shared Identity**  | Each MFE renders a top bar for back-navigation to the portal |

## Getting Started

### Run all MFEs at once (recommended)

```bash
# From the root directory:
npm run dev
```

This starts **6 apps concurrently** with color-coded terminal output:
- 🟣 `SHELL`  → http://localhost:3000
- 🔵 `HTML`   → http://localhost:3001
- 🟡 `CSS`    → http://localhost:3002
- 🟡 `JS`     → http://localhost:3003
- 🟦 `REACT`  → http://localhost:3004
- 🟢 `NODE`   → http://localhost:3005

### Run a single MFE

```bash
npm run dev:shell   # Shell portal only
npm run dev:html    # HTML course only
npm run dev:css     # CSS course only
npm run dev:js      # JavaScript course only
npm run dev:react   # ReactJS course only
npm run dev:node    # Node.js course only
```

### Install all dependencies

```bash
npm run install:all
```

## How It Works

1. **Shell** (`localhost:3000`) is the entry point — it shows all 5 course MFEs, their live status, and port assignments.
2. Each **MFE** runs completely independently. The shell uses `fetch` with `HEAD` requests to poll each MFE's health every 8 seconds.
3. Each MFE has a **top bar** injected into its layout showing the portal back-link and its MFE identity badge.
4. Clicking a course card in the shell **opens the MFE in the same tab** (or new tab) — navigating to that app's independent dev server.

## Tech Stack

- **Shell**: Next.js 16, Tailwind CSS v4, TypeScript
- **MFEs**: Next.js 16, Tailwind CSS v4, Framer Motion, React Syntax Highlighter
- **Orchestration**: `concurrently` (root-level `npm run dev`)

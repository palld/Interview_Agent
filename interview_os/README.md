# InterviewOS — Foundation

A production-ready foundation for **InterviewOS**, an AI technical interview
platform. This is scaffolding only: layout, design system, and three
placeholder routes. No interview logic, APIs, or AI features are wired up.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3** with a custom dark design-token system
- Hand-written **shadcn/ui-style** primitives (Radix UI under the hood)
- **Framer Motion** for page transitions and layout animation
- **lucide-react** for icons
- **Geist Sans / Geist Mono** (via the `geist` package — no Google Fonts
  network call required)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Routes:

- `/` — Overview / dashboard
- `/interview` — Live session workspace
- `/report` — Session report

## Folder structure

```
app/
  layout.tsx          Root layout — fonts, metadata, AppShell
  globals.css          Design tokens, base styles, glass utilities
  page.tsx              /
  interview/page.tsx    /interview
  report/page.tsx       /report

components/
  layout/
    app-shell.tsx        Combines navbar + sidebar + content + toaster
    navbar.tsx            Responsive top navbar
    sidebar.tsx            Collapsible desktop sidebar + mobile drawer
    sidebar-context.tsx     Collapse/mobile-open state
    page-transition.tsx     AnimatePresence route transition wrapper
  shared/
    signal-bars.tsx        Signature animated waveform motif
    status-readout.tsx     Signature terminal-style status line
  ui/
    button.tsx, card.tsx, badge.tsx, progress.tsx, dialog.tsx,
    input.tsx, textarea.tsx, skeleton.tsx, toast.tsx, toaster.tsx

hooks/
  use-toast.ts          Toast queue state (pairs with ui/toast.tsx)

lib/
  utils.ts               cn() class-merging helper
```

## Design system notes

- **Color tokens** live in `app/globals.css` as HSL CSS variables (`--ink`,
  `--surface`, `--signal`, `--pulse`, `--mint`, `--danger`) and are exposed
  to Tailwind in `tailwind.config.ts`. Change the palette in one place.
- **Glassmorphism** is applied via the `.glass` / `.glass-strong` utility
  classes (blur + translucent surface + hairline border).
- **Signature motifs**: `SignalBars` (animated waveform, evokes a live
  interview signal) and `StatusReadout` (terminal-style status line, evokes
  the "OS" in InterviewOS) recur across all three routes to give the product
  a consistent visual identity instead of generic dashboard boilerplate.
- All interactive primitives respect `prefers-reduced-motion`.

## What's intentionally not built

Interview session logic, AI scoring, real authentication, and API routes are
out of scope for this foundation — every screen is a styled placeholder
ready for real data and logic to be wired in.

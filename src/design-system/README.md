# Prism Design System (`src/design-system/`)

The codebase implementation of the system locked in [`design.md`](../../design.md) v1.
Reverse-engineered foundation from a CRM design-system example, then re-skinned end-to-end to Prism / Indian VCs brand tokens.

> **Canonical reference:** [`design.md`](../../design.md) is the source of truth for tokens, roles, type scale, and component intent. This codebase is its concrete realization. If they ever drift, `design.md` wins — update the code, not the doc.

## What's here

```
src/design-system/
├── tokens/           CSS variables, TS exports, Tailwind preset, JSON source
├── styles/           globals.css (Tailwind + token import + base styles)
├── primitives/       Box, Flex, Stack, Grid, Text, Heading, Divider, VisuallyHidden
├── components/       ~40 components: Button, Input, Select, Modal, Toast, Tabs, Table, etc.
├── layouts/          AppShell, Sidebar, Topbar, PageHeader, ContentLayout, …
├── patterns/         DataTable, FilterBar, ActivityTimeline, RecordHeader, MetricCard, …
├── icons/            Icon wrapper + ~30 icons
└── utils/            cn() — clsx + tailwind-merge wrapper
```

## What was changed from the source repo

Everything that was visually CRM-blue is now Prism Clay Red Light. Specifically:

| Concern | CRM example | Prism v1 |
|---|---|---|
| **Product canvas** | `#FFFFFF` | `#F5F6F8` (cool off-white) |
| **Primary CTA bg** | `#266DF0` (blue-500) | `#AB342B` (Clay Red Light) — `--accent-primary` |
| **Primary CTA hover** | `#1A5AD4` (blue-600) | `#810100` (Clay Red Dark) — `--accent-primary-hover` |
| **Focus ring** | `rgba(38, 109, 240, 0.32)` | `rgba(210, 25, 5, 0.32)` (brand red @ 32%) |
| **Selection bg** | blue @ 50 | `rgba(171, 52, 43, 0.08)` (Clay Red Light @ 8%) |
| **Neutral ramp** | warm-ish gray | cool slate (`#F8F9FB` → `#191816` anchored to Charcoal) |
| **Body font** | Inter | Switzer (DM Sans web fallback) |
| **Success/Warning/Info** | full-saturation Tailwind defaults | quieter, contemporary tones tuned to the cool canvas |
| **Shadows** | neutral black alpha | warm Charcoal alpha (`rgba(25, 24, 22, …)`) |
| **Hardcoded grays in components** | `#242529 / #6B6F76 / #EEEFF1 / #E0E1E4 / #F8F9FA` | mapped to cool ramp `#191816 / #6A707A / #EFF1F4 / #E1E4E9 / #F8F9FB` |
| **Hardcoded blue accents** | `#3B6FE0 / #1550C0` | brand red `#D21905` (focus) and Clay Red Dark `#810100` (active) |

The component **architecture** (Tailwind v4 + CSS variables + Radix UI primitives + class-variance-authority) is preserved as-is. Only values changed.

## Brand-pause budget — where the bright red `#D21905` shows up

Per the locked tone principle in `design.md`, Indian VCs Red is reserved for these surfaces only. Anywhere else that wants "red" should reach for **Clay Red Light `#AB342B`** (the `--accent-primary`):

- Logomark
- Active-tab indicator (the underline)
- Sidenav active-item leading marker
- Focus ring / focused input border
- Form validation errors and required-field markers
- "The Link" motif moments inside marketing or hero sections
- Activity-feed brand dots (e.g. "moved deal to Term Sheet")

## Setup (when you're ready to run code)

1. **Install deps** — `npm install` (or `pnpm install`). Optional deps for `RichTextEditor`, `Chart`, and DnD components are in `optionalDependencies` — install only when you need them.
2. **Load fonts.** This system needs Switzer (and DM Sans as fallback). Add to your app's HTML head, or use your framework's font loader:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://api.fontshare.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link href="https://api.fontshare.com/v2/css?f%5B%5D=switzer@400,500,600,700&display=swap" rel="stylesheet">
   ```
   For marketing surfaces that use the section-anchor heading, also load **Arapey** (Google Fonts).
3. **Import tokens + base styles** in your root entry CSS:
   ```css
   @import './src/design-system/styles/globals.css';
   ```
4. **Import components** via the `@components/*` path alias (see `tsconfig.json`):
   ```tsx
   import { Button } from '@components/Button';
   ```

## Status & deferred items

- **Active components ready to use:** Button, Input, Textarea, Select, Combobox, Checkbox, Radio, Switch, Badge, Avatar, FormField, Tabs, Tooltip, Popover, DropdownMenu, ContextMenu, HoverCard, Modal, Drawer, Toast, Card, Skeleton, Spinner, Pagination, Breadcrumb, Table, EmptyState, Alert, SegmentedControl, FileUpload, InlineEditableField, ResponsiveContainer, plus the layout / pattern / primitive / icon set.
- **Deferred (in `optionalDependencies`)**: `Chart` (Recharts — chart palette is an open decision in `design.md §9`), `RichTextEditor` (Tiptap), `DragHandle / DropZone / SortableList` (@dnd-kit), `DatePicker` (heavy, will own its own deps), `CommandPalette` (usually paired with `cmdk`), `BottomNav / MobileNav` (mobile surface decision pending in `§9`).
- **Theme parity:** dark theme tokens are scaffolded in `tokens/tokens.css` under `[data-theme="dark"]`. Activate via a `ThemeProvider` once the open-decision sign-off lands.
- **Token JSON source files** (`colors.json`, `typography.json`, etc.) are partially stale. The runtime source of truth is **`tokens/tokens.css`** — components use those CSS variables directly. The `.ts` and `.json` siblings will be regenerated when we wire up the build pipeline.

## How to extend this safely

1. Read the relevant section of [`design.md`](../../design.md) first. Tokens / type / component conventions live there.
2. Use role tokens (`--text-primary`, `--accent-primary`, `--border-default`) — never raw hex.
3. If a token doesn't exist for what you need, propose it as an **addition to `design.md`** rather than introducing a one-off in a component.
4. New components belong in `components/`. New product-specific patterns belong in `patterns/`. New layout chrome belongs in `layouts/`.
5. Keep components stack-agnostic at the design-token layer — they should re-skin cleanly via `tokens.css` swap.

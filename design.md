# Prism — Design System

> **Single source of truth.** Every token, type ramp, spacing rule, and component pattern in this document is canonical. No off-grid choices in code or design without first updating this file. Recommendations are welcome *while* a section is open; once codified, treat the grid as load-bearing.

**Status legend**

- `[Locked]` — codified. Treat as canonical. Do not propose alternatives in component work; if the system needs to change, update this file first.
- `[Proposed]` — derived for product use, awaiting sign-off. Defaults until changed.
- `[Deferred]` — needs a decision before we can build. Listed at the bottom of each section.

**Versioning.** This doc grows. When a section changes, bump `Last updated` in that section's header and note what shifted in the changelog at the bottom.

---

## 1. Brand Foundation `[Locked]`

Prism is a product within the **Indian VCs** brand family. Every visual choice should feel like an extension of the parent brand: editorial, premium, restrained, and authoritative — *not* generic SaaS.

### Purpose, Vision, Mission

| | |
|---|---|
| **Purpose** | We are creating India's premier venture community — where venture leaders connect, collaborate, and elevate India's entrepreneurial landscape. |
| **Vision** | We see a world where India's brightest ideas make a global impact. |
| **Mission** | Build India's venture; promote and uplift VCs; help founders in their early-investment journey; increase ecosystem transparency; connect VCs to global capital. |

### Brand Motif — "The Link"

A short red horizontal bar on a dark surface. Represents bridging the gap in India's VC space. Used in the logo (the underscore between "Indian" and "VCs") and as a recurring product motif.

**In Prism, "The Link" recurs as:**
- The active-tab indicator (a 2px Indian VCs Red bar under the selected tab).
- The sidenav active-item marker (a 2px Indian VCs Red bar at the leading edge of the active item).
- The section-anchor accent (a 24px red bar above marketing-style page titles).
- The focus-state accent on text inputs (a 2px red border on focus).
- The empty-state divider (a 16px red bar above the empty-state headline).
- The "moved to / status changed" activity-feed dot.

It is a brand pause, not decoration. Used sparingly so it stays meaningful.

### Tone Principles (for design decisions)

1. **Editorial over corporate.** Lean on typographic hierarchy and whitespace, not on chrome.
2. **Cool and quiet, not clinical.** Product neutrals are slate-tinted (modern, contemporary) while Charcoal `#191816` anchors the dark end. Pearl Cream `#F8F8EE` is reserved for marketing / brand-pause surfaces, *not* the product canvas.
3. **Two-tier red.** The bright Indian VCs Red `#D21905` is a brand-pause accent — used for the logo, focus, the Link motif, errors, and required-field markers. The default *primary CTA* color in product UI is **Clay Red Light `#AB342B`** (already in the locked brand palette) — gentler at high frequency, still on-brand.
4. **Confidence in negative space.** Premium products earn it through generous spacing, not embellishment.
5. **The product is for serious work.** Investors, founders, operators. No playful microcopy, no decorative illustration where a clear interface will do.

---

## 2. Color System `[Locked]`

> Last updated: v1 — palette locked to v2 Refined Cool. Cool slate neutrals; primary CTA = Clay Red Light; brand red reserved for brand-pause moments.

### 2.1 Brand Palette `[Locked]`

These six values are taken verbatim from the Indian VCs Brand Guide v1.0 and are non-negotiable. What changes between *systems* is the surrounding neutrals and how often each brand color is used in product UI.

#### Primary

| Token | Hex | Pantone | CMYK | RGB | Use |
|---|---|---|---|---|---|
| `brand.red` | `#D21905` | 1799 C | 0/90/90/18 | 210, 25, 5 | The Link, focus, errors, required-marker, brand-pause moments. **Not** the default product CTA. |

#### Secondary (text & backgrounds)

| Token | Hex | Pantone | CMYK | RGB | Use |
|---|---|---|---|---|---|
| `brand.charcoal` | `#191816` | Black 7 C | 0/4/12/90 | 25, 24, 22 | Default text, dark-theme canvas, inverse surfaces. |
| `brand.cocoa` | `#301008` | 1817 C | 0/67/83/81 | 48, 16, 8 | Premium dark surfaces (hero, splash, marketing). |
| `brand.pearl` | `#F8F8EE` | 7401 C | 0/0/4/3 | 248, 248, 238 | **Marketing canvas only** — landing pages, hero bands, editorial cards. Not the product canvas. |

#### Tertiary (highlights)

| Token | Hex | Pantone | CMYK | RGB | Use |
|---|---|---|---|---|---|
| `brand.clayDark` | `#810100` | 7621 C | 0/98/100/49 | 129, 1, 0 | Hover / pressed state for primary CTA; deep accent. |
| `brand.clayLight` | `#AB342B` | 1805 C | 0/70/75/33 | 171, 51, 43 | **Default primary CTA color in product UI**; soft accent; status accent. |

### 2.2 Extended Neutral Ramp `[Locked]`

The brand defines only three neutrals (Charcoal, Cocoa, Pearl). A working product needs a graded ramp for borders, dividers, table rows, muted text, hover states, and skeletons. The ramp below is **slate-tinted (cool)** and anchored to Charcoal `#191816` at the dark end so the brand black remains intact.

| Token | Hex | Use |
|---|---|---|
| `neutral.0` | `#FFFFFF` | Card surfaces (lifted contrast above the cool canvas). |
| `neutral.50` | `#F8F9FB` | Subtle row stripe, hover bg. |
| `neutral.100` | `#EFF1F4` | Subtle surface, table header bg, code blocks. |
| `neutral.200` | `#E1E4E9` | Default border, divider. |
| `neutral.300` | `#C5CAD2` | Strong border, input border. |
| `neutral.400` | `#969CA6` | Placeholder text, muted icons. |
| `neutral.500` | `#6A707A` | Secondary text, chevrons. |
| `neutral.600` | `#4A4F58` | Tertiary text, body de-emphasized. |
| `neutral.700` | `#30343B` | Strong secondary text. |
| `neutral.800` | `#20232A` | Dark-theme raised surface. |
| `neutral.900` | `#191816` | Identical to `brand.charcoal`; primary text. |

These are **functional only**. They never appear in marketing collateral; brand contexts use only the locked palette.

### 2.3 Semantic Colors `[Locked]`

The brand does not define success / warning / info. Below are cool, contemporary, desaturated tones tuned to sit naturally on the slate canvas. Error reuses `brand.red`.

| Token | Hex | Pairing (light theme) | Use |
|---|---|---|---|
| `semantic.success` | `#1F8056` | bg `#E4F1EC`, border `#A8D2BD` | Confirmations, positive deltas. |
| `semantic.warning` | `#B27316` | bg `#F8EDD2`, border `#E0C285` | Caution, pending, soft alerts. |
| `semantic.info` | `#2D5DA0` | bg `#E1ECF7`, border `#B0C8E2` | Neutral notices, helper banners. |
| `semantic.error` | `#D21905` *(brand.red)* | bg `#FBE5E1`, border `#F1B7AE` | Validation errors, destructive states. |

Avoid full-saturation greens / blues / yellows — they read clinical. These muted tones sit alongside the cool canvas without screaming.

### 2.4 Role Tokens `[Locked]`

Components reference *role tokens*, never raw palette values. This is the layer that makes the system theme-portable.

#### Light theme (default — product surfaces)

| Role | Value | Notes |
|---|---|---|
| `bg.canvas` | `#F5F6F8` | **Product page background.** Cool off-white. *Not* Pearl Cream. |
| `bg.surface` | `neutral.0` `#FFFFFF` | Cards, panels, modals. |
| `bg.surface-raised` | `neutral.0` `#FFFFFF` + shadow | Popovers, menus, tooltips. |
| `bg.subtle` | `neutral.100` `#EFF1F4` | Table headers, hover row, code blocks. |
| `bg.muted` | `neutral.50` `#F8F9FB` | Disabled fields, skeleton base. |
| `bg.inverse` | `brand.charcoal` `#191816` | Dark sections, footers, contrast bands. |
| `bg.premium` | `brand.cocoa` `#301008` | Hero, splash, marketing-grade dark. |
| `bg.marketing` | `brand.pearl` `#F8F8EE` | Marketing surfaces only — landing, hero bands, editorial cards. |
| `text.primary` | `brand.charcoal` `#191816` | Default body and headings. |
| `text.secondary` | `neutral.700` `#30343B` | Sub-text, secondary labels. |
| `text.muted` | `neutral.500` `#6A707A` | Helper text, captions, metadata. |
| `text.placeholder` | `neutral.400` `#969CA6` | Empty input value. |
| `text.disabled` | `neutral.400` `#969CA6` | Disabled labels and values. |
| `text.on-inverse` | `brand.pearl` `#F8F8EE` | Text on charcoal/cocoa surfaces. |
| `text.on-brand` | `brand.pearl` `#F8F8EE` | Text on red CTA / Clay Red CTA. |
| `text.link` | `brand.clayLight` `#AB342B` | Inline links and link buttons. |
| `text.link-hover` | `brand.clayDark` `#810100` | |
| `text.error` | `brand.red` `#D21905` | Validation copy. |
| `border.subtle` | `neutral.200` `#E1E4E9` | Section dividers, card outline. |
| `border.default` | `neutral.300` `#C5CAD2` | Inputs, buttons (secondary), tables. |
| `border.strong` | `neutral.700` `#30343B` | Active inputs, selected rows. |
| `border.focus` | `brand.red` `#D21905` | Focus ring color (see focus spec). |
| `divider` | `neutral.200` `#E1E4E9` | Horizontal rules, list separators. |
| `icon.default` | `brand.charcoal` `#191816` | Default icon color. |
| `icon.muted` | `neutral.500` `#6A707A` | De-emphasized icons. |
| `icon.disabled` | `neutral.400` `#969CA6` | |
| `icon.brand` | `brand.red` `#D21905` | Logomark, accent icons (sparingly). |
| `chevron` | `neutral.500` `#6A707A` | Dropdown arrows, accordion carets. |
| `cta.primary.bg` | `brand.clayLight` `#AB342B` | **Default primary CTA bg.** |
| `cta.primary.bg-hover` | `brand.clayDark` `#810100` | Hover state for primary CTA. |
| `cta.primary.bg-press` | `brand.clayDark` `#810100` | Pressed state — pair with inset shadow for visual feedback. |
| `cta.primary.fg` | `brand.pearl` `#F8F8EE` | Text/icon on primary CTA. |
| `cta.brand.bg` | `brand.red` `#D21905` | Brand-pause CTA — sparingly, for explicit brand moments. |
| `cta.brand.fg` | `brand.pearl` `#F8F8EE` | Text/icon on brand CTA. |
| `overlay` | `rgba(25, 24, 22, 0.55)` | Modal backdrops. |
| `focus-ring` | `brand.red` `#D21905` @ 30% outer + 100% inner | 2px outer halo + 2px solid ring, or 2px inset border on inputs. |
| `selection` | `rgba(171, 52, 43, 0.18)` | Text selection background (Clay Red Light @ 18%). |

#### Dark theme (paired with `brand.charcoal` canvas)

| Role | Value |
|---|---|
| `bg.canvas` | `brand.charcoal` `#191816` |
| `bg.surface` | `neutral.800` `#20232A` |
| `bg.surface-raised` | `#2A2E36` *(charcoal +1 cool step)* |
| `bg.subtle` | `#1E2126` |
| `bg.muted` | `#20232A` |
| `bg.inverse` | `brand.pearl` `#F8F8EE` |
| `bg.premium` | `brand.cocoa` `#301008` |
| `text.primary` | `brand.pearl` `#F8F8EE` |
| `text.secondary` | `#C5CAD2` |
| `text.muted` | `#969CA6` |
| `text.placeholder` | `#6A707A` |
| `text.disabled` | `#4A4F58` |
| `text.link` | `brand.clayLight` `#AB342B` *(better contrast on dark than `brand.red`)* |
| `text.error` | `brand.red` `#D21905` |
| `border.subtle` | `#2A2E36` |
| `border.default` | `#3D4149` |
| `border.strong` | `#6A707A` |
| `divider` | `#2A2E36` |
| `cta.primary.bg` | `brand.clayLight` `#AB342B` |
| `cta.primary.bg-hover` | `#BF4338` *(slight lift of clayLight for dark-on-dark contrast)* |

> **Dark theme status:** scaffolded but not part of v1 build. Activate when "Theme parity" decision lands (see §9).

### 2.5 Color Usage Rules

1. **Two-tier red.** Default primary CTA is `cta.primary.bg` (Clay Red Light `#AB342B`). The bright `brand.red` `#D21905` is reserved for: the logomark, the Link motif (active tabs / sidebar markers / activity-feed dots / focus borders), errors, and required-field markers. Don't smear bright red across the UI.
2. **Red has a budget.** Combined red usage (brand red + clay) on any single screen should feel deliberate. If a screen wants "more red," reach for Charcoal or Cocoa for emphasis instead.
3. **Never red-on-red.** A CTA does not sit on a red background. The Link motif sits on Charcoal, Cocoa, or the cool canvas — never on a Clay Red surface.
4. **Body text is Charcoal, never pure black.** `#000000` does not exist in this system.
5. **Product canvas is `#F5F6F8`.** Never set a product page background to `#FFFFFF` (white is for cards) and never to `#F8F8EE` (Pearl Cream is reserved for marketing surfaces — `bg.marketing`).
6. **Borders are slate-cool.** The neutral ramp is intentionally cool; do not substitute Tailwind defaults like `#E5E7EB` / `#D1D5DB` — they're close-but-wrong. Use `neutral.200` / `neutral.300`.
7. **Dividers are subtle.** Default to `border.subtle`. A divider strong enough to "see clearly" is usually too strong.
8. **Chevrons are muted.** Dropdown arrows use `chevron` (`neutral.500`), never red — red chevrons compete with The Link.
9. **Disabled states do not use red.** Disabled CTAs revert to `neutral.100` (`#EFF1F4`) bg + `neutral.400` (`#969CA6`) text.

### 2.6 Accessibility Notes `[Locked]`

Approximate WCAG contrast ratios on the product canvas:

- Body text on canvas — Charcoal `#191816` on `#F5F6F8` → ~**16.5 : 1**. ✓ AAA.
- Secondary text — `#30343B` on `#F5F6F8` → ~**12.0 : 1**. ✓ AAA.
- Muted text — `#6A707A` on `#F5F6F8` → ~**4.7 : 1**. ✓ AA.
- Placeholder — `#969CA6` on `#F5F6F8` → ~**2.7 : 1**. ✗ AA — use only for placeholder text (informational, not content).
- Clay Red Light CTA — Pearl `#F8F8EE` text on `#AB342B` bg → ~**5.6 : 1**. ✓ AA.
- Brand red CTA (rare) — Pearl `#F8F8EE` text on `#D21905` bg → ~**4.5 : 1**. Borderline — pair with bold weight or ≥ 14px medium.
- Link text — Clay Red Light `#AB342B` on `#F5F6F8` → ~**5.4 : 1**. ✓ AA.
- Brand red text on white card — `#D21905` on `#FFFFFF` → ~**4.9 : 1**. ✓ AA.
- Brand red on Charcoal — `#D21905` on `#191816` → ~**4.5 : 1**. Borderline — for Link motifs (small bars / dots) this is fine; for text, use ≥ 18px or bold.

---

## 3. Typography `[Locked]`

> Last updated: v1 — locked. Switzer is the in-product UI font; Arapey is reserved for section-anchor moments only.

### 3.1 Typeface Roles `[Locked]`

| Family | License role | Use | Hard rules |
|---|---|---|---|
| **Prata** | Logo only | Word-mark only | Never use elsewhere. Not for headings, not for hero, not anywhere. |
| **Arapey** | Primary | Marketing headings + in-app section-anchor | Regular for headings, Italic for emphasized highlights. |
| **Switzer** | Secondary — **product UI primary** | Body copy, all in-app UI text, CTAs | Regular for body. Medium UPPERCASE for CTA buttons. **All in-app text uses Switzer except section anchors.** |
| **Over the Rainbow** | Display, exclusive | High-impact section highlights only | Always: red, small caps, underlined. Never elsewhere. |
| **DM Sans** | Web-safe fallback | Switzer fallback only | Triggered when Switzer can't load. Never paired with Arapey by choice. |

### 3.2 In-app vs. Marketing — `[Locked]`

Arapey and Switzer are split **by surface**, not by hierarchy.

- **Marketing surfaces** (homepage, landing pages, pitch decks, hero sections, splash, empty-state hero copy, large editorial cards): Arapey for H1 / H2 / H3, Switzer for body.
- **Product surfaces** (dashboards, tables, forms, settings, modals, side panels, navigation, charts, data-dense screens): **Switzer for everything** — including page titles, section titles, table headers. Arapey appears at exactly one in-app location: the **page hero / section anchor** at the top of major sections (Deal Flow, Portfolio, etc.) where editorial presence is wanted.

**Why this split:** Arapey is a high-contrast modern serif. Beautiful at 32px+. At 14–18px on dense screens it loses crispness, fights with table data, and feels formal where the user wants velocity. Switzer is a geometric grotesque designed for UI — neutral, dense-friendly, and pairs cleanly with Arapey when both appear together.

### 3.3 Type Scale `[Locked]`

Two ramps. Marketing leans larger; product leans tighter.

#### Marketing ramp (Arapey for headings)

| Token | Family / Weight | Size / Line | Tracking | Use |
|---|---|---|---|---|
| `display.xl` | Arapey Regular | 72 / 80 | -0.02em | Splash, hero anchor. |
| `display.l` | Arapey Regular | 56 / 64 | -0.02em | Marketing H1. |
| `display.m` | Arapey Regular | 44 / 52 | -0.01em | Marketing H2. |
| `display.s` | Arapey Regular | 32 / 40 | -0.01em | Marketing H3. |
| `display.italic` | Arapey Italic | inherit | inherit | In-line editorial highlight inside Arapey copy. |
| `display.over-the-rainbow` | Over the Rainbow | 32 / 40 | 0 | Red, small caps, underline. Highlights only. |

#### Product ramp (Switzer for everything; Arapey only at section anchors)

| Token | Family / Weight | Size / Line | Tracking | Use |
|---|---|---|---|---|
| `heading.section-anchor` | Arapey Regular | 36 / 44 | -0.01em | Top-of-section page hero only. |
| `heading.page` | Switzer Semibold | 24 / 32 | -0.01em | Page title (in-app). |
| `heading.h1` | Switzer Semibold | 20 / 28 | -0.005em | Card / panel title. |
| `heading.h2` | Switzer Semibold | 18 / 26 | -0.005em | Section title within a card. |
| `heading.h3` | Switzer Medium | 16 / 24 | 0 | Sub-section / table-group title. |
| `heading.eyebrow` | Switzer Medium UPPERCASE | 12 / 16 | +0.08em | Section eyebrow above a heading. |
| `body.l` | Switzer Regular | 18 / 28 | 0 | Reading-rich text, modals. |
| `body.m` | Switzer Regular | 14 / 22 | 0 | **Default in-app body.** |
| `body.s` | Switzer Regular | 13 / 20 | 0 | Tertiary copy, dense lists. |
| `body.xs` | Switzer Regular | 12 / 16 | +0.01em | Captions, timestamps, metadata. |
| `label.field` | Switzer Medium | 13 / 20 | 0 | Form field labels (above input). |
| `label.helper` | Switzer Regular | 12 / 16 | 0 | Helper text below input. |
| `label.error` | Switzer Medium | 12 / 16 | 0 | Validation error copy (red). |
| `cta.l` | Switzer Medium UPPERCASE | 14 / 20 | +0.08em | Primary CTA button. |
| `cta.m` | Switzer Medium UPPERCASE | 13 / 18 | +0.08em | Default CTA button. |
| `cta.s` | Switzer Medium UPPERCASE | 12 / 16 | +0.08em | Compact CTA, toolbar button. |
| `mono.code` | (mono fallback stack) | 13 / 20 | 0 | Inline code, IDs, hashes. |

**Weights to license / load:**
- Arapey: Regular, Italic.
- Switzer: Regular, Medium, Semibold (3 weights). Bold optional.
- Prata: Regular only (logo asset, not loaded as a web font in the app).
- Over the Rainbow: Regular only (loaded only on pages that use it).
- DM Sans: Regular, Medium, Semibold (fallback parity with Switzer).

**Why these weights:** Switzer Light / Thin won't read well on the cool canvas at body sizes (insufficient contrast). Switzer ExtraBold / Black would compete with Arapey's editorial gravity. Three weights is the minimum-viable, maximum-tasteful set.

### 3.4 Typography Rules `[Locked]`

1. **CTAs are always uppercase Switzer Medium with `+0.08em` tracking.** This is the brand voice for action — do not lowercase a CTA.
2. **Italic = Arapey Italic only.** Do not italicize Switzer for emphasis. Use Switzer Medium instead.
3. **No mixed serif inside body copy.** Arapey is for headings / anchors; Switzer is for body. Don't drop a serif word into a sans paragraph.
4. **Numerals are tabular in tables and number-heavy cells.** Use `font-variant-numeric: tabular-nums` for all financial data, currency, percentages, dates in tables. Proportional figures elsewhere.
5. **Underlines are red, only on links and Over-the-Rainbow.** Headings are not underlined. Buttons are not underlined.
6. **Small caps belong to Over the Rainbow.** Switzer should not be set in small caps; use UPPERCASE + tracking instead.
7. **Line length.** Body copy targets 60–75 characters per line. Use a max-width container (~640px at body.l, ~560px at body.m) to enforce.

---

## 4. Spacing & Grid `[Locked]`

### 4.1 Base Unit

**4px base, 8px primary unit.** All spacing tokens are multiples of 4. Component padding and gaps default to 8px increments; 4px is reserved for fine adjustments (icon-to-text, chip-to-chip).

### 4.2 Spacing Scale

| Token | Value | Typical use |
|---|---|---|
| `space.0` | 0 | Reset. |
| `space.0.5` | 2px | Hairline only. |
| `space.1` | 4px | Icon-to-text gap, chip internal. |
| `space.2` | 8px | Tight stack, button padding-y (small). |
| `space.3` | 12px | Default form field row gap. |
| `space.4` | 16px | Default card padding, paragraph gap. |
| `space.5` | 20px | Compact section gap. |
| `space.6` | 24px | Section gap, card padding (large). |
| `space.8` | 32px | Page gutter, section break. |
| `space.10` | 40px | Major section break. |
| `space.12` | 48px | Hero spacing. |
| `space.16` | 64px | Page top/bottom in marketing. |
| `space.20` | 80px | Marketing block spacing. |
| `space.24` | 96px | Hero block spacing. |

### 4.3 Layout Grid

- **App shell:** 12-column grid, 24px gutter, max content width 1280px, side gutters 24px (≥ md), 16px (sm).
- **Marketing:** 12-column grid, 32px gutter, max content width 1200px.
- **Forms:** single-column on narrow viewports; two-column (50/50 or 60/40) on ≥ md when fields are short and related.

### 4.4 Breakpoints

| Token | Min width | Notes |
|---|---|---|
| `bp.sm` | 640px | Phone landscape, narrow tablet. |
| `bp.md` | 768px | Tablet portrait. |
| `bp.lg` | 1024px | Tablet landscape, small laptop. |
| `bp.xl` | 1280px | Standard desktop. |
| `bp.2xl` | 1536px | Wide desktop. |

> `[Deferred]`: confirm Prism's primary surface — is this **web-only**, web + mobile native, or web + responsive PWA? Density and touch-target defaults change accordingly.

---

## 5. Radius, Elevation, Motion `[Locked]`

### 5.1 Corner Radius

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Tables, dividers, the Link motif. |
| `radius.xs` | 2px | Inline tags, micro-pills. |
| `radius.s` | 4px | Inputs, buttons, chips, badges. |
| `radius.m` | 8px | Cards, panels, menus, modals. |
| `radius.l` | 12px | Large cards, marketing tiles. |
| `radius.full` | 9999px | Avatars, status dots, filter chips. |

**Default:** `radius.s` (4px) for interactive controls, `radius.m` (8px) for surfaces. Editorial brand → modest curvature, never rounded-pill buttons (filter chips and pills excepted).

### 5.2 Elevation (Shadows)

Shadows are warm — built from Charcoal at low alpha, never from black or cool gray. (Even on the cool canvas, the shadow stays warm — it's the "weight of the brand" peeking through.)

| Token | Value | Use |
|---|---|---|
| `elev.0` | none | Flat surface (default). |
| `elev.1` | `0 1px 2px 0 rgba(25,24,22,0.06)` | Card resting state. |
| `elev.2` | `0 2px 8px -2px rgba(25,24,22,0.08), 0 1px 2px 0 rgba(25,24,22,0.04)` | Card hover, dropdowns. |
| `elev.3` | `0 8px 24px -8px rgba(25,24,22,0.12), 0 2px 6px -2px rgba(25,24,22,0.06)` | Popovers, menus, toasts. |
| `elev.4` | `0 24px 48px -16px rgba(25,24,22,0.18), 0 4px 12px -4px rgba(25,24,22,0.08)` | Modals, drawers. |

### 5.3 Motion

| Token | Value | Use |
|---|---|---|
| `motion.duration.instant` | 80ms | Pressed states, micro-feedback. |
| `motion.duration.fast` | 150ms | Hover, focus, color transitions. |
| `motion.duration.base` | 220ms | Most UI transitions. |
| `motion.duration.slow` | 320ms | Modals, drawers, page enter. |
| `motion.duration.deliberate` | 480ms | Hero animations, marketing reveals. |
| `motion.ease.standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default. Fast-out, slow-in. |
| `motion.ease.entrance` | `cubic-bezier(0, 0, 0, 1)` | Things appearing. |
| `motion.ease.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Things disappearing. |
| `motion.ease.emphasized` | `cubic-bezier(0.2, 0, 0, 1.2)` | Hero, brand-pause moments. |

**Rule:** if a transition exceeds 320ms in the app, reconsider — premium ≠ slow. Marketing earns 480ms; product UI does not.

---

## 6. Iconography `[Locked]`

### 6.1 System

- **Style:** monoline, 1.5px stroke at 24px viewbox.
- **Joins / caps:** rounded.
- **Corner radius:** small (2px on rectangular shapes) — keeps the iconography in the same "modest curvature" bucket as the buttons and cards.
- **Default library:** Lucide (open license, comprehensive, matches the geometry). We override only when a brand-specific icon is needed.
- **Two-tone or filled icons:** avoided. Reserve filled treatments for *active / selected* states only (e.g., a filled bookmark vs. its outline counterpart).

### 6.2 Sizes

| Token | Size | Use |
|---|---|---|
| `icon.xs` | 12px | Inline with `body.xs`, badges. |
| `icon.s` | 16px | Default in-line with `body.m`, buttons. |
| `icon.m` | 20px | Toolbar, navigation rail. |
| `icon.l` | 24px | Section anchors, modal close. |
| `icon.xl` | 32px | Empty states, illustration accents. |

### 6.3 Color

Icons reference role tokens — `icon.default`, `icon.muted`, `icon.disabled`, `icon.brand`. Default to `icon.default`. `icon.brand` (Indian VCs Red) is used **only** for: the logomark, the "active state" of the primary nav rail, and explicit brand moments.

**Chevrons** (dropdown arrows, accordion carets, breadcrumb separators) use the `chevron` token (`neutral.500` `#6A707A`), never red.

---

## 7. Form Pattern `[Locked]`

### Stacked label-above-input is the system default.

```
┌────────────────────────────────┐
│ Label                          │  ← `label.field`
│ ┌────────────────────────────┐ │
│ │ Value / placeholder        │ │  ← input
│ └────────────────────────────┘ │
│ Helper text                    │  ← `label.helper`
└────────────────────────────────┘
```

**Why stacked over inline:**
1. Long labels and i18n: Hindi / Tamil / translated strings often run longer than English. Inline labels truncate or push the input around. Stacked is invariant.
2. Mobile and responsive: stacked layouts scale to narrow widths without re-flow. Inline layouts collapse awkwardly.
3. Accessibility: clearer label-input association, better for screen readers, easier focus order.
4. Form density: with editorial spacing values, stacked forms still look generous. Inline forms with editorial type feel cramped.
5. Validation: error copy slots cleanly under the input without disrupting layout.

**Inline label-value (right-aligned label, left-aligned value)** is reserved for **read-only summary views** (e.g., "Investment details" panel showing key/value pairs). Never for editable forms.

### Field Anatomy

| Spec | Value |
|---|---|
| Label → input gap | `space.1` (4px) |
| Input → helper gap | `space.1` (4px) |
| Field row → next field row gap | `space.4` (16px) |
| Input height (default) | 40px |
| Input height (compact) | 32px |
| Input padding-x | `space.3` (12px) |
| Input border | 1px `border.default` (`neutral.300` `#C5CAD2`) |
| Input border (focus) | 2px `border.focus` (`brand.red` `#D21905`), inset |
| Input border (error) | 1px `semantic.error` (`#D21905`) |
| Input border (disabled) | 1px `border.subtle` (`neutral.200` `#E1E4E9`) |
| Input bg (default) | `bg.surface` (`#FFFFFF`) |
| Input bg (disabled) | `bg.muted` (`neutral.50` `#F8F9FB`) |
| Label color | `text.secondary` (`neutral.700` `#30343B`) |
| Label weight | Switzer Medium (`label.field`) |
| Required marker | Red asterisk after the label, no space. |
| Helper color | `text.muted` (`neutral.500` `#6A707A`) |
| Error color | `semantic.error` (`brand.red`) |

The focus state uses a 2px inset red border (an echo of The Link). No outer halo unless the input has `radius.full` (which it shouldn't in this system).

---

## 8. Core Components — Roadmap

> Specs to be expanded in subsequent passes. Listed here so we have a working inventory.

### 8.1 P0 — Required for v1

- Button (primary, secondary, tertiary/ghost, destructive, link) × (small, default, large) × (default, hover, pressed, focus, disabled, loading)
- Text Input, Textarea, Number Input, Search Input
- Select / Dropdown
- Checkbox, Radio, Switch
- Chip / Tag, Badge, Status Pill
- Tooltip, Popover, Menu (context menu, kebab menu)
- Modal / Dialog, Drawer, Sheet
- Toast / Notification
- Breadcrumb, Tabs, Pagination
- Table (with: density, sorting, sticky headers, row selection, empty state)
- Empty State, Skeleton, Spinner
- Card, Panel, Divider
- Avatar, AvatarGroup
- Banner / Alert (info, warning, success, error)
- Navigation: top bar, side rail, side nav, footer

### 8.2 P1 — Domain components (Prism-specific, defined when product scope sharpens)

- Deal card, Investor card, Founder card
- Pipeline / kanban column
- Stage indicator (uses The Link motif)
- KPI / metric tile
- Activity feed item
- Document / file row
- Comment / thread

### 8.3 P2 — Specialized

- Charts (line, bar, donut, sparkline) — palette to be defined; will lean on Charcoal + Clay Red Light + 2–3 muted accents from the cool neutral ramp.
- Date range picker, calendar
- Rich text editor
- Command palette / search

---

## 9. Open Decisions `[Deferred]`

These need user input before the corresponding sections can be locked.

1. **Product surface.** Web only? Web + responsive mobile? Native mobile? *Affects breakpoints, touch targets, density.*
2. **Theme parity.** Light only at v1, or light + dark at parity? Dark theme tokens are scaffolded above; sign-off needed before we build for both.
3. **Audience density.** Investor-facing data dashboard (denser)? Founder-facing relational tool (calmer)? Both? *Affects default body size and table density.*
4. **Marketing site coupling.** Does Prism share a marketing site, or is the product self-contained? *Affects whether the Marketing ramp lives in this system or in a sibling.*
5. **Switzer license.** Confirm Switzer is licensed for web-app use (vs. marketing only). If not, DM Sans becomes the in-app primary.
6. **Chart palette.** Will be defined alongside the first dashboard. Series order, gradient ramp, and how often Indian VCs Red appears as a series accent.
7. **Iconography library.** Lucide is locked above; flag if you'd rather substitute (Phosphor regular and Tabler are also stylistically compatible).

---

## Changelog

| Version | Date | Notes |
|---|---|---|
| v0 | initial | Foundation laid: brand identity, locked palette, proposed neutral ramp + semantic colors + role tokens, light/dark theme tokens, color usage rules, type roles + scale (proposed), spacing, radius, elevation, motion, iconography, form pattern decision (stacked), component roadmap. Awaiting user finalization on typography and resolution of open decisions. |
| v1 | 2026-05-05 | **Palette locked: v2 Refined Cool.** Replaced warm-tinted neutral ramp with cool slate ramp (`#F8F9FB` → `#191816`). Canvas changed from Pearl Cream `#F8F8EE` to cool off-white `#F5F6F8`; Pearl Cream reassigned to marketing surfaces (`bg.marketing`). Primary CTA changed from Indian VCs Red `#D21905` to Clay Red Light `#AB342B`; brand red now reserved for brand-pause moments (logo, focus, Link motif, errors). Semantic palette refreshed to cool/contemporary tones. **Typography locked: Switzer for product UI**, Arapey reserved for in-app section anchors. Tone principle #2 updated from "warm" to "cool and quiet"; tone principle #3 updated to two-tier-red rule. Field anatomy updated with new neutral hex values. Resolved Open Decision #5 (in-app Arapey scope) and #8 (iconography — Lucide locked). Promoted Sections 2.2 / 2.3 / 2.4 / 2.6 / 3.x / 4 / 5 / 6 / 7 from `[Proposed]` to `[Locked]`. |

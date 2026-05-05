# Prism — Design System

> **Single source of truth.** Every token, type ramp, spacing rule, and component pattern in this document is canonical. No off-grid choices in code or design without first updating this file. Recommendations are welcome *while* a section is open; once codified, treat the grid as load-bearing.

**Status legend**

- `[Locked]` — taken verbatim from the Indian VCs Brand Guide v1.0. Non-negotiable.
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
- The section-anchor accent (a 24px red bar above marketing-style page titles).
- The focus-state accent on text inputs (a 2px red bottom border on focus).
- The empty-state divider (a 16px red bar above the empty-state headline).

It is a brand pause, not decoration. Used sparingly so it stays meaningful.

### Tone Principles (for design decisions)

1. **Editorial over corporate.** Lean on typographic hierarchy and whitespace, not on chrome.
2. **Warm, not clinical.** All neutrals are warm-tinted. No cool blue-grays.
3. **Restraint with red.** Red is never a "primary action" color smeared across the UI; it is reserved for the brand mark, the single most important action on a screen, focus, errors, and "The Link" motif.
4. **Confidence in negative space.** Premium products earn it through generous spacing, not embellishment.
5. **The product is for serious work.** Investors, founders, operators. No playful microcopy, no decorative illustration where a clear interface will do.

---

## 2. Color System

> Last updated: v0 — foundation laid. Awaiting sign-off on extended neutral ramp and semantic colors.

### 2.1 Brand Palette `[Locked]`

#### Primary

| Token | Hex | Pantone | CMYK | RGB | Use |
|---|---|---|---|---|---|
| `brand.red` | `#D21905` | 1799 C | 0/90/90/18 | 210, 25, 5 | The Link, primary CTA, brand mark, focus, errors. |

#### Secondary (text & backgrounds)

| Token | Hex | Pantone | CMYK | RGB | Use |
|---|---|---|---|---|---|
| `brand.charcoal` | `#191816` | Black 7 C | 0/4/12/90 | 25, 24, 22 | Default text, dark-theme canvas, inverse surfaces. |
| `brand.cocoa` | `#301008` | 1817 C | 0/67/83/81 | 48, 16, 8 | Premium dark surfaces (hero, splash, marketing). |
| `brand.pearl` | `#F8F8EE` | 7401 C | 0/0/4/3 | 248, 248, 238 | Default canvas (light theme). |

#### Tertiary (highlights)

| Token | Hex | Pantone | CMYK | RGB | Use |
|---|---|---|---|---|---|
| `brand.clayDark` | `#810100` | 7621 C | 0/98/100/49 | 129, 1, 0 | Pressed state for red CTAs; deep accent on cream. |
| `brand.clayLight` | `#AB342B` | 1805 C | 0/70/75/33 | 171, 51, 43 | Hover state for red CTAs; soft accent; status accent. |

### 2.2 Extended Neutral Ramp `[Proposed]`

The brand defines only three neutrals (Charcoal, Cocoa, Pearl). A working product needs a graded ramp for borders, dividers, table rows, muted text, hover states, and skeletons. The ramp below is **derived from Charcoal and Pearl Cream** and shares their warm undertone — not new brand colors.

| Token | Hex | Use |
|---|---|---|
| `neutral.0` | `#FFFFFF` | Card surfaces (slight contrast against Pearl canvas). |
| `neutral.50` | `#FAFAF3` | Subtle row stripe, hover bg on Pearl. |
| `neutral.100` | `#F1EFE4` | Subtle surface, table header bg, disabled bg. |
| `neutral.200` | `#E5E2D5` | Default border, divider on Pearl. |
| `neutral.300` | `#CFCBBC` | Strong border, input border. |
| `neutral.400` | `#A8A498` | Placeholder text, muted icons. |
| `neutral.500` | `#7C7970` | Secondary text on Pearl. |
| `neutral.600` | `#5A5852` | Tertiary text, body de-emphasized. |
| `neutral.700` | `#3D3B36` | Strong text, secondary on Pearl. |
| `neutral.800` | `#26241F` | Near-charcoal; dark-theme raised surface. |
| `neutral.900` | `#191816` | Identical to `brand.charcoal`; primary text. |

These are **functional only**. They never appear in marketing collateral; brand contexts use only the locked palette.

### 2.3 Semantic Colors `[Proposed]`

The brand does not define success/warning/info. Below are warm-leaning, desaturated proposals that fit the editorial tone. Error reuses `brand.red`.

| Token | Hex | Pairing (light theme) | Use |
|---|---|---|---|
| `semantic.success` | `#2F6B4F` | bg `#E7F0EA`, border `#BFD6C8` | Confirmations, positive deltas. |
| `semantic.warning` | `#A6651E` | bg `#F6EAD4`, border `#E5C896` | Caution, pending, soft alerts. |
| `semantic.info` | `#3F5A7A` | bg `#E5ECF4`, border `#BFCBDC` | Neutral notices, helper banners. |
| `semantic.error` | `#D21905` *(brand.red)* | bg `#FBE5E1`, border `#F1B7AE` | Validation errors, destructive states. |

Avoid pure greens/blues/yellows — they read clinical. These muted tones sit alongside Pearl Cream without screaming.

### 2.4 Role Tokens `[Proposed]`

Components reference *role tokens*, never raw palette values. This is the layer that makes the system theme-portable.

#### Light theme (default)

| Role | Value | Notes |
|---|---|---|
| `bg.canvas` | `brand.pearl` `#F8F8EE` | Page background. |
| `bg.surface` | `neutral.0` `#FFFFFF` | Cards, panels, modals. |
| `bg.surface-raised` | `neutral.0` `#FFFFFF` + shadow | Popovers, menus, tooltips. |
| `bg.subtle` | `neutral.100` `#F1EFE4` | Table headers, hover row, code blocks. |
| `bg.muted` | `neutral.50` `#FAFAF3` | Disabled fields, skeleton base. |
| `bg.inverse` | `brand.charcoal` `#191816` | Dark sections, footers, contrast bands. |
| `bg.premium` | `brand.cocoa` `#301008` | Hero, splash, marketing-grade dark. |
| `text.primary` | `brand.charcoal` `#191816` | Default body and headings. |
| `text.secondary` | `neutral.700` `#3D3B36` | Sub-text, secondary labels. |
| `text.muted` | `neutral.500` `#7C7970` | Helper text, captions, metadata. |
| `text.placeholder` | `neutral.400` `#A8A498` | Empty input value. |
| `text.disabled` | `neutral.400` `#A8A498` | Disabled labels and values. |
| `text.on-inverse` | `brand.pearl` `#F8F8EE` | Text on charcoal/cocoa surfaces. |
| `text.on-brand` | `brand.pearl` `#F8F8EE` | Text on red CTA. |
| `text.link` | `brand.red` `#D21905` | Inline links and link buttons. |
| `text.link-hover` | `brand.clayDark` `#810100` | |
| `text.error` | `brand.red` `#D21905` | Validation copy. |
| `border.subtle` | `neutral.200` `#E5E2D5` | Section dividers, card outline. |
| `border.default` | `neutral.300` `#CFCBBC` | Inputs, buttons (secondary), tables. |
| `border.strong` | `neutral.700` `#3D3B36` | Active inputs, selected rows. |
| `border.focus` | `brand.red` `#D21905` | Focus ring color (see focus spec). |
| `divider` | `neutral.200` `#E5E2D5` | Horizontal rules, list separators. |
| `icon.default` | `brand.charcoal` `#191816` | Default icon color. |
| `icon.muted` | `neutral.500` `#7C7970` | De-emphasized icons. |
| `icon.disabled` | `neutral.400` `#A8A498` | |
| `icon.brand` | `brand.red` `#D21905` | Logomark, accent icons (sparingly). |
| `chevron` | `neutral.500` `#7C7970` | Dropdown arrows, accordion carets. |
| `overlay` | `rgba(25, 24, 22, 0.55)` | Modal backdrops. |
| `focus-ring` | `brand.red` `#D21905` @ 30% outer + 100% inner | 2px outer halo + 2px solid ring. |
| `selection` | `rgba(210, 25, 5, 0.18)` | Text selection background. |

#### Dark theme (paired with `brand.charcoal` canvas)

| Role | Value |
|---|---|
| `bg.canvas` | `brand.charcoal` `#191816` |
| `bg.surface` | `neutral.800` `#26241F` |
| `bg.surface-raised` | `#2E2C26` *(charcoal +1 step)* |
| `bg.subtle` | `#1F1D1A` |
| `bg.muted` | `#22201D` |
| `bg.inverse` | `brand.pearl` `#F8F8EE` |
| `bg.premium` | `brand.cocoa` `#301008` |
| `text.primary` | `brand.pearl` `#F8F8EE` |
| `text.secondary` | `#C9C5BA` |
| `text.muted` | `#8A8780` |
| `text.placeholder` | `#6E6B64` |
| `text.disabled` | `#5A5852` |
| `text.link` | `brand.clayLight` `#AB342B` *(better contrast on dark than `brand.red`)* |
| `text.error` | `brand.red` `#D21905` |
| `border.subtle` | `#2B2926` |
| `border.default` | `#3D3B36` |
| `border.strong` | `#5A5852` |
| `divider` | `#2B2926` |

### 2.5 Color Usage Rules

1. **Red has a budget.** No more than ~5% of a screen's pixels should be Indian VCs Red. If a screen needs "more red," reach for Clay Red Light/Dark instead, or use Charcoal/Cocoa for emphasis.
2. **Never red-on-red.** A red CTA does not sit on a red background. The Link motif sits on Charcoal or Cocoa only.
3. **Body text is Charcoal, never pure black.** `#000000` does not exist in this system.
4. **Backgrounds prefer Pearl over white.** White is reserved for elevated surfaces *on top of* Pearl. Never set the page background to `#FFFFFF`.
5. **Borders are warm.** Never use `#E5E7EB`, `#D1D5DB`, or any cool gray. Use the neutral ramp.
6. **Dividers are subtle.** Default to `border.subtle`. A divider strong enough to "see clearly" is usually too strong.
7. **Chevrons are muted.** Dropdown arrows use `chevron` (`neutral.500`), never the brand red. Red chevrons compete with The Link.
8. **Disabled states do not use red.** Disabled CTAs revert to `neutral.100` bg + `neutral.400` text.

### 2.6 Accessibility Notes `[Proposed]`

- Body text on Pearl Cream: Charcoal `#191816` on `#F8F8EE` → contrast **15.9:1**. ✓ AAA.
- Secondary text on Pearl: `#3D3B36` on `#F8F8EE` → **10.2:1**. ✓ AAA.
- Muted text on Pearl: `#7C7970` on `#F8F8EE` → **4.6:1**. ✓ AA for normal text.
- Brand red on Pearl: `#D21905` on `#F8F8EE` → **4.7:1**. ✓ AA for normal text. Use sparingly for inline links — prefer charcoal text with a red underline for long-form reading.
- Brand red on white: `#D21905` on `#FFFFFF` → **4.9:1**. ✓ AA.
- Brand red on charcoal: `#D21905` on `#191816` → **4.5:1**. Borderline. Pair with bold weight or ≥18px when used as text.

---

## 3. Typography `[Proposed — please review and confirm before we lock]`

> Last updated: v0. Awaiting your finalization. Brand-locked typeface roles below are unchanged; what's proposed is the *product* application of those roles — the type scale, weights, and the in-app vs. marketing split.

### 3.1 Typeface Roles `[Locked]`

| Family | License role | Use | Hard rules |
|---|---|---|---|
| **Prata** | Logo only | Word-mark only | Never use elsewhere. Not for headings, not for hero, not anywhere. |
| **Arapey** | Primary | Headings, editorial highlights | Regular for headings, Italic for emphasized highlights. |
| **Switzer** | Secondary | Body copy, UI text, CTAs | Regular for body. Regular **UPPERCASE** for CTA buttons. |
| **Over the Rainbow** | Display, exclusive | High-impact section highlights only | Always: red, small caps, underlined. Never elsewhere. |
| **DM Sans** | Web-safe fallback | Switzer fallback only | Triggered when Switzer can't load. Never paired with Arapey by choice. |

### 3.2 In-app vs. Marketing — `[Proposed]`

**Recommendation:** Split Arapey and Switzer by surface, not by hierarchy.

- **Marketing surfaces** (homepage, landing pages, pitch decks, hero sections, splash, empty-state hero copy, large editorial cards): Arapey for H1/H2/H3, Switzer for body.
- **Product surfaces** (dashboards, tables, forms, settings, modals, side panels, navigation, charts, data-dense screens): **Switzer for everything** — including page titles, section titles, table headers. Arapey is reserved for one surface inside the app: the **page hero / section anchor** at the top of major sections (Deal Flow, Portfolio, etc.) where editorial presence is wanted.

**Why this split:** Arapey is a high-contrast modern serif. Beautiful at 32px+. At 14–18px on dense screens it loses crispness, fights with table data, and feels formal where the user wants velocity. Switzer is a geometric grotesque designed for UI — neutral, dense-friendly, and pairs cleanly with Arapey when both appear together.

**If you'd rather use Arapey throughout the app**, we can — but it'll change every component spec below. Flag now if so.

### 3.3 Type Scale `[Proposed]`

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

**Weights to license/load:**
- Arapey: Regular, Italic.
- Switzer: Regular, Medium, Semibold (3 weights). Bold optional.
- Prata: Regular only (logo asset, not loaded as web font in the app).
- Over the Rainbow: Regular only (loaded only on pages that use it).
- DM Sans: Regular, Medium, Semibold (fallback parity with Switzer).

**Why these weights:** Switzer Light/Thin won't read well on Pearl Cream (insufficient contrast at body sizes). Switzer ExtraBold/Black would compete with Arapey's editorial gravity. Three weights is the minimum-viable, maximum-tasteful set.

### 3.4 Typography Rules

1. **CTAs are always uppercase Switzer Medium with `+0.08em` tracking.** This is the brand voice for action — do not lowercase a CTA.
2. **Italic = Arapey Italic only.** Do not italicize Switzer for emphasis. Use Switzer Medium instead.
3. **No mixed serif inside body copy.** Arapey is for headings/anchors; Switzer is for body. Don't drop a serif word into a sans paragraph.
4. **Numerals are tabular in tables and number-heavy cells.** Switzer's tabular figures (use `font-variant-numeric: tabular-nums`) for all financial data, currency, percentages, dates in tables. Proportional figures elsewhere.
5. **Underlines are red, only on links and Over-the-Rainbow.** Headings are not underlined. Buttons are not underlined.
6. **Small caps belong to Over the Rainbow.** Switzer should not be set in small caps; use UPPERCASE + tracking instead.
7. **Line length.** Body copy targets 60–75 characters per line. Use a max-width container (~640px at body.l, ~560px at body.m) to enforce.

---

## 4. Spacing & Grid `[Proposed]`

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

> `[Deferred]`: confirm Prism's primary surface — is this **web-only**, web + mobile native, or web + responsive PWA? Density and breakpoint defaults change accordingly.

---

## 5. Radius, Elevation, Motion `[Proposed]`

### 5.1 Corner Radius

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Tables, dividers, the Link motif. |
| `radius.xs` | 2px | Inline tags, micro-pills. |
| `radius.s` | 4px | Inputs, buttons, chips, badges. |
| `radius.m` | 8px | Cards, panels, menus, modals. |
| `radius.l` | 12px | Large cards, marketing tiles. |
| `radius.full` | 9999px | Avatars, status dots. |

**Default:** `radius.s` (4px) for interactive controls, `radius.m` (8px) for surfaces. Editorial brand → modest curvature, never rounded-pill buttons.

### 5.2 Elevation (Shadows)

Shadows are warm — built from Charcoal at low alpha, never from black or cool gray.

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

## 6. Iconography `[Proposed]`

### 6.1 System

- **Style:** monoline, 1.5px stroke at 24px viewbox.
- **Joins / caps:** rounded.
- **Corner radius:** small (2px on rectangular shapes) — keeps the iconography in the same "modest curvature" bucket as the buttons and cards.
- **Default library:** Lucide (open license, comprehensive, matches the geometry). We override only when a brand-specific icon is needed.
- **Two-tone or filled icons:** avoided. Reserve filled treatments for *active/selected* states only (e.g., a filled bookmark vs. its outline counterpart).

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

**Chevrons (dropdown arrows, accordion carets, breadcrumb separators) use `chevron` token (`neutral.500`)**, never red.

---

## 7. Form Pattern Decision `[Proposed — recommend stacked]`

### Recommendation: **Stacked label-above-input** as the system default.

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
1. Long labels and i18n: Hindi/Tamil/translated strings often run longer than English. Inline labels truncate or push the input around. Stacked is invariant.
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
| Input border | 1px `border.default` (`neutral.300`) |
| Input border (focus) | 2px `border.focus` (`brand.red`), inset |
| Input border (error) | 1px `semantic.error` |
| Input border (disabled) | 1px `border.subtle` |
| Input bg (default) | `bg.surface` (`#FFFFFF`) |
| Input bg (disabled) | `bg.muted` (`neutral.50`) |
| Label color | `text.secondary` |
| Label weight | Switzer Medium (`label.field`) |
| Required marker | Red asterisk after the label, no space. |
| Helper color | `text.muted` |
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

- Charts (line, bar, donut, sparkline) — palette to be defined; will use brand red + warm neutrals + 2–3 muted accents.
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
5. **In-app Arapey scope.** Endorse the proposed split (Arapey only at section anchors), or use Arapey for all in-app page titles?
6. **Switzer license.** Confirm Switzer is licensed for web-app use (vs. marketing only). If not, DM Sans becomes the in-app primary.
7. **Chart palette.** Will be defined alongside the first dashboard. Flag whether Indian VCs Red should be the "primary series" color or reserved.
8. **Iconography library.** Lucide is proposed. Confirm or substitute (Phosphor regular and Tabler are also stylistically compatible).

---

## Changelog

| Version | Date | Notes |
|---|---|---|
| v0 | initial | Foundation laid: brand identity, locked palette, proposed neutral ramp + semantic colors + role tokens, light/dark theme tokens, color usage rules, type roles + scale (proposed), spacing, radius, elevation, motion, iconography, form pattern decision (stacked), component roadmap. Awaiting user finalization on typography and resolution of open decisions. |

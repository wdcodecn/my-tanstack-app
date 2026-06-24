---
name: Obsidian Gold Label
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#bfd0ea'
  on-tertiary: '#213145'
  tertiary-container: '#a4b4cd'
  on-tertiary-container: '#36465b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-tabular:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The brand personality is anchored in **exclusive financial authority** and **technical precision**. This design system targets high-net-worth individuals and professional traders who demand a "Black Label" experience: one that is quiet, powerful, and impeccably organized.

The aesthetic follows a **Modern Corporate** direction with **Skeuomorphic touches**. It utilizes absolute blacks and deep charcoal surfaces to create an infinite depth, punctuated by high-fidelity financial visualizations. The emotional response is one of calm confidence—reducing the "noise" of volatile markets into a curated, premium dashboard. Key visual drivers include subtle top-lighting (as if from a physical light source above the screen), micro-borders that simulate chamfered edges, and a meticulous focus on data legibility.

## Colors
The palette is built on a foundation of **Absolute Black (#000000)** to maximize OLED contrast and minimize eye fatigue during extended trading sessions. 

- **Primary Gold (#D4AF37):** Used sparingly for high-value status indicators, growth trends, and primary calls to action. It should feel like a metallic leaf against dark glass.
- **Surface Charcoal (#0D0D0D):** Used for card containers and navigation bars to provide subtle separation from the background.
- **Functional Accents:** Muted Slates (#64748B) are used for secondary data and labels to maintain hierarchy, while Crisp Whites (#F8FAFC) are reserved for primary figures and headings.
- **Sentiment Colors:** Success states utilize a desaturated mint green, while critical alerts use a deep, muted crimson to avoid breaking the "luxury" dark aesthetic.

## Typography
The typography system prioritizes **mathematical precision**. **Geist** is the primary typeface for headlines and financial figures due to its technical, monospaced-influenced terminals which ensure numbers align perfectly in tables. **Inter** is used for body copy to provide a humanist balance and high readability at small sizes.

Numerical data must always use **tabular figures** (tnum) to ensure that columns of prices remain vertically aligned as values fluctuate. We use a tight scale for information density, relying on weight (Medium vs. SemiBold) rather than massive size shifts to denote hierarchy.

## Layout & Spacing
The layout follows a **structured grid** with high density to accommodate complex financial data. 

- **Grid:** A 12-column grid for desktop and a 4-column grid for mobile. 
- **Rhythm:** A 4px baseline shift is used for all micro-adjustments. 
- **Density:** Elements are packed tightly but separated by clear tonal shifts. Large margins are avoided in favor of "safe zones" defined by surface containers.
- **Responsiveness:** On mobile, horizontal scrolling "chips" are used for category filtering to preserve vertical space for asset lists. On desktop, the layout expands into multi-pane viewports (e.g., Watchlist | Main Chart | Order Book).

## Elevation & Depth
Depth is created through **Tonal Layering** and **Micro-Borders** rather than traditional shadows.

1.  **Level 0 (Background):** Absolute Black (#000000).
2.  **Level 1 (Cards/Panels):** Deep Charcoal (#0D0D0D) with a 1px solid border at 10% white opacity.
3.  **Top-Down Lighting:** Every container features a subtle 0.5px "inner-glow" on the top edge to simulate a chamfered glass finish.
4.  **Backdrop Blurs:** Modal overlays and sticky headers use a 20px Gaussian blur with 70% opacity to maintain a sense of context behind the current action.
5.  **Interactive States:** Hovering over an element does not lift it; instead, it increases the border brightness or adds a subtle gold outer-glow.

## Shapes
The shape language is **refined and surgical**. 

- **Containers:** We use a standard 0.5rem (8px) radius for most cards and input fields. This provides a modern feel without the softness of fully rounded mobile apps.
- **Buttons:** Primary buttons utilize a pill-shape to distinguish them from informational cards.
- **Charts:** Line graphs (sparklines) use a smooth cubic-bezier curve but maintain a 2px stroke width for technical clarity.
- **Icons:** Use a 1.5px stroke weight with slight rounding on terminals to match the typography.

## Components
- **Buttons:** Primary buttons are Solid Gold with black text. Secondary buttons are "Ghost" style with a micro-border and gold text.
- **Asset Cards:** Use a horizontal layout with a fixed-width icon, leading text for the asset name, and trailing text for the price and 24h change. A mini sparkline is embedded in the center.
- **Input Fields:** Minimalist design—only a bottom border that turns gold on focus. Labels are placed above in `label-sm` style.
- **Chips/Tabs:** Segmented controls are housed in a dark container. The active state is a subtle gold outline or a "filled" charcoal state with gold text.
- **Sparklines:** High-fidelity lines. If the trend is positive, use Gold (#D4AF37); if negative, use a muted Slate-Grey.
- **Navigation Bar:** An anchored bottom bar on mobile with glassmorphism effects and gold-tinted active icons.
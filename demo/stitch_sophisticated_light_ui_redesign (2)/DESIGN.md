---
name: Gold Label Ivory
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4d4635'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#505f76'
  on-tertiary: '#ffffff'
  tertiary-container: '#a4b4cd'
  on-tertiary-container: '#36465b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
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
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
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
    fontWeight: '700'
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
  gutter: 16px
  margin-mobile: 16px
  md: 20px
  lg: 32px
  margin-desktop: 40px
  xl: 48px
---

## Brand & Style

Gold Label Ivory is a premium, high-fidelity fintech aesthetic reimagined for a light, high-clarity environment. The brand personality is authoritative, precise, and luxurious. It targets sophisticated users who value security, exclusivity, and data density presented with an airy, gallery-like elegance.

The design style is **High-Fidelity Minimalism with Luminescent Accents**. It utilizes a clean, ivory-toned foundation to make the gold and slate accents feel substantial. Depth is achieved through "micro-borders"—ultra-thin, low-opacity internal strokes—and soft ambient shadows, creating a sense of precision engineering and digital craftsmanship.

## Colors

The palette is rooted in a **Light / Ivory** theme. The primary driver is "Gold Leaf" (#D4AF37), used for brand identity and critical calls to action. The background is a crisp white (#FDFC F9) to ensure maximum clarity and professional polish.

- **Primary:** Gold accents indicate value and primary navigation states, providing a warm contrast to the light surfaces.
- **Surface:** A tiered system of light greys and ivories (from #FFFFFF to #E5E1D9) differentiates content layers.
- **Success/Error:** High-chroma Emerald and Coral are used sparingly for financial trends and alerts to maintain the professional atmosphere.
- **Glass/Translucency:** Background blurs (80% opacity with 20px blur) are used for fixed navigation elements to maintain context while scrolling, utilizing a white tint.

## Typography

The system uses a dual-font approach to balance technical precision with readability.

- **Geist** is the "Data & Brand" face. It is used for all monetary values, tabular data, and major headlines. Its technical, slightly condensed nature reinforces the crypto-native aesthetic.
- **Inter** is the "Utility" face. It handles body text, secondary labels, and UI controls where legibility and functional neutrality are paramount.

Letter spacing is tightened for large headings to create a "locked-in" editorial feel and widened for small labels to improve scannability on light backgrounds.

## Layout & Spacing

The layout follows a **Safe Margin** philosophy with a focus on mobile-first vertical density. 

- **Outer Margins:** A strict 16px gutter is maintained on mobile devices.
- **Vertical Rhythm:** Elements are grouped in 32px or 48px sections. Internal component spacing uses a 4px base grid (4, 8, 12, 20).
- **Safe Areas:** Navigation and headers use fixed positioning with backdrop blurs, requiring a minimum of 80px bottom padding on the main content container to prevent overlap.
- **Horizontal Lists:** Token filters and horizontal action rows use a "no-scrollbar" overflow-x pattern to maximize screen real estate.

## Elevation & Depth

Depth is communicated through **Tonal Stacking** and **Soft Shadows**. 

1. **The Floor:** Ivory/White (#FDFCF9).
2. **The Base Container:** Surface Container Low (#F7F3EA) for the main card structures.
3. **The Interactive Layer:** Surface Container High (#EBE7DE) for buttons and hover states.
4. **The Micro-Border:** Most elevated elements feature a `box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.03)` which creates a faint definition on the top edge, simulating a physical bevel.

Shadows are used more frequently than in the dark theme to provide lift; they are large-radius, low-opacity "Ambient Shadows" that maintain the clean, light aesthetic.

## Shapes

The shape language is **Refined Geometric**. It strikes a balance between friendly modernism and professional structure.

- **Standard Cards/Sections:** Use 12px (xl) or 16px (2xl) corners.
- **Primary Buttons & Pills:** Use a "Full" (9999px) radius to differentiate actionable triggers from static content containers.
- **Micro-elements:** Icons and small status badges use a 4px (sm) radius.
- **Icons:** Material Symbols Outlined are used with a thin weight (200-300) to match the Geist typography's technical feel.

## Components

- **Buttons:** Primary buttons are pill-shaped with gold backgrounds. Action icons are housed in "Soft Square" or "Circle" containers (48x48px) with a micro-border and subtle shadow.
- **Chips/Filters:** Used for token categorization. The active state features a primary gold border; inactive states use a subtle surface-container-low fill.
- **Lists:** Token lists use a "Divide-and-Conquer" approach with 1px semi-transparent separators (black/5%). Each list item has a hover state that slightly shifts the surface tone.
- **Cards:** Feature a subtle outer shadow to distinguish them from the main background.
- **Navigation:** The bottom bar is an 80% opaque white glass container with a top-border highlight and active states indicated by a primary gold icon fill.
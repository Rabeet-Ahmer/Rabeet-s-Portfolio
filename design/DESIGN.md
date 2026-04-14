# Design System Strategy: The Digital Editorial

 

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Digital Curator."** 

 

This system is designed to transform a personal portfolio from a static resume into a high-end, immersive editorial experience. It moves away from the rigid, boxed-in nature of standard web design in favor of expansive layouts, intentional asymmetry, and a profound sense of "tonal depth." 

 

The goal is to evoke the feeling of a premium physical monograph. We achieve this by utilizing ultra-heavy typography against delicate serif body copy, creating a rhythmic cadence of high-contrast sections that alternate between the deep, intellectual stillness of `primary_container` (#0A2A1E) and the airy, intellectual lightness of `surface` (#FAFAF5). This is not just a layout; it is a choreographed narrative.

 

---

 

## 2. Colors & Surface Philosophy

The palette is rooted in a "Forest & Parchment" duality, utilizing high-contrast transitions to signal shifts in content focus.

 

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or cards. Hierarchy must be established exclusively through:

*   **Color Shifts:** Transitioning from `surface` to `surface_container_low`.

*   **Tonal Nesting:** Placing a `surface_container_lowest` (pure white) card on a `surface_container` background to create a natural, "floating" perception.

*   **Negative Space:** Using large padding values to allow elements to breathe without structural constraints.

 

### Surface Hierarchy & Nesting

Treat the UI as physical layers of fine paper.

*   **Base:** `surface` (#FAFAF5) for main page flow.

*   **Elevated Content:** Use `surface_container` (#EEEEE9) for secondary background sections.

*   **Interactive Focus:** Use `surface_container_lowest` (#FFFFFF) for the most prominent cards to create a "lift" effect.

 

### The "Glass & Gradient" Rule

To elevate the design beyond flat colors, use Glassmorphism for floating UI (like navigation bars or hovering info chips). 

*   **Execution:** Apply `surface_variant` at 60% opacity with a `24px` backdrop-blur.

*   **Signature Textures:** Use subtle linear gradients on primary buttons, transitioning from `primary` (#00130B) to `primary_container` (#0A2A1E) at a 45-degree angle. This adds "soul" and depth to key interaction points.

 

---

 

## 3. Typography

Typography is the voice of the brand. We pair the industrial strength of Epilogue with the academic grace of Noto Serif.

 

*   **Display & Headline (Epilogue):** These must be set with `letter-spacing: -0.04em` and `font-weight: 800`. Use these to command attention. The high contrast between the heavy weight and the background color creates a bold, "ink-on-paper" look.

*   **Title & Body (Noto Serif):** Titles use the serif to provide a sophisticated, human touch. Body text must maintain a line-height of `1.6` to ensure the elegant serifs have room to breathe, improving legibility and perceived value.

*   **Labels (Manrope):** All-caps, small-scale sans-serif used for eyebrow headers or metadata. This acts as the "functional" layer of the UI.

 

---

 

## 4. Elevation & Depth

Depth in this system is organic, not artificial. We reject harsh shadows in favor of **Tonal Layering**.

 

*   **The Layering Principle:** Place `surface_container_highest` elements on `surface_dim` backgrounds. The subtle difference in hex values is enough to signify depth to the human eye without the clutter of lines.

*   **Ambient Shadows:** If a floating element (like a modal) is required, use the "Ambient Light" approach.

    *   **Shadow Blur:** `40px` to `60px`.

    *   **Opacity:** 4% - 6% of the `on_surface` color.

*   **The "Ghost Border" Fallback:** If a border is required for accessibility on interactive inputs, use `outline_variant` at 20% opacity. It should feel like a suggestion of a container, not a cage.

*   **Roundedness:** Adhere strictly to the **XL (3rem/48px)** radius for major sections and **LG (2rem/32px)** for cards. This extreme roundedness softens the high-contrast color palette, making the professional aesthetic feel approachable.

 

---

 

## 5. Components

 

### Buttons

*   **Primary:** Background `primary_container`, Text `on_primary`. Shape `full` (pill). No border. On hover, apply a subtle gradient shift.

*   **Secondary:** Background `transparent`, Text `primary`. Border: "Ghost Border" (`outline_variant` @ 20%).

*   **Tertiary:** Text `primary` with a `2px` underline offset by `4px`.

 

### Cards

*   **Style:** No borders. Use `surface_container_lowest` on a `surface` background. 

*   **Spacing:** Internal padding must be at least `md` (24px) to `lg` (32px).

*   **Content:** Forbid dividers. Separate header from body using vertical whitespace (e.g., `2rem`).

 

### Inputs

*   **Text Fields:** Background `surface_container_low`, roundedness `md`. The label should be in `label-md` (Manrope) positioned above the field, never inside.

*   **State:** On focus, the background transitions to `surface_container_highest` with a subtle 1px "Ghost Border."

 

### High-Motion Elements (Portfolio Specific)

*   **Parallax Image Frames:** Images should sit inside `xl` (3rem) rounded containers. Apply a slow-scale transform (1.05x) on scroll to give the "Editorial" layout a dynamic, living feel.

 

---

 

## 6. Do’s and Don’ts

 

### Do:

*   **Do** embrace massive amounts of white space (or "green space" when using `primary_container`).

*   **Do** use asymmetrical layouts—place a small `title-sm` serif next to a massive `display-lg` sans-serif.

*   **Do** use high-quality, desaturated imagery to match the forest/charcoal tones.

 

### Don't:

*   **Don't** use 1px solid black or grey borders. This immediately destroys the premium editorial feel.

*   **Don't** use standard "drop shadows." If it looks like a default CSS shadow, it is wrong.

*   **Don't** cram content. If a section feels "busy," increase the vertical spacing between elements by 50%.

*   **Don't** use pure black (#000000). Use `primary` (#00130B) or `charcoal` (#222222) to keep the shadows "warm" and sophisticated.
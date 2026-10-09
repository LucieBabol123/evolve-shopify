# Evolve technical product section for Shopify Impulse

A standalone Online Store 2.0 product section. Designed for a more technical Evolve look: grid-backed imagery, accent markers, image callouts and structured specification rows. Shopify Grow supports custom theme sections; no app or subscription is needed for this code.

## Install on a duplicate of your theme

1. In Shopify → Online Store → Themes, duplicate Impulse before editing.
2. Open **Edit code** on the duplicate. Add `sections/evolve-technical-product.liquid` and the two `assets/evolve-technical-product.css` and `assets/evolve-technical-product.js` files, copying their contents from this package.
3. Customize that theme, open a **product template**, and add **Evolve technical product**. This section appears on product templates only. Save and preview a real product.
4. Keep Impulse's existing product section for its purchase controls by default. This new section is an additional overview; move it to suit your page. If using it as the main product display, avoid duplicated titles/descriptions through the visibility settings. Hiding/replacing Impulse's main section can also remove its reviews, apps, subscriptions, pickup and other features, so validate those requirements first.
5. Only enable this section's purchase controls for straightforward products with standard variants. They use Shopify's native cart form and normal page navigation; they do not implement Impulse's cart drawer, subscriptions, personalization, quantity rules or app integrations. Keep Impulse's purchase form for those features.

The precise Impulse version and its source were not supplied. This package uses scoped styles and Shopify section APIs; final integration must be checked in your duplicate theme. No store or live theme has been changed.

## Connect your CSV-fed metafields

Each **Specification row** has a Label and a **Value** text setting. Use the dynamic-source icon beside Value to connect an existing product metafield. Keep importing into the same metafield definitions through your existing CSV import tool. This section reads product data; it does not import CSVs or change definitions.

If a compatible dynamic source is not offered (for example, a list type), leave Value blank and put its exact `namespace.key` into **Optional metafield namespace.key**, such as `custom.viscosity`. This fallback supports scalar text/numbers and lists of text/numbers, joined with commas. It is not intended for rich text, references, files or measurement objects. Value takes precedence over the fallback. Do not assume the example key matches your store.

Add, reorder, disable or remove rows independently. **Hide when no value** defaults to on. The table can be disabled altogether. If every value is empty, the Technical data heading remains; switch off the table until your fields are connected.

## Editor controls

- Main image override, product title override, rich-text description override, technical label and image caption.
- Product title, description, thumbnails, hotspots, specification table, background grid, purchase controls and price visibility.
- Section, panel, text, secondary text, accent, border, button background and button text colours.
- Theme, sans-serif or monospace font; desktop/mobile title sizes; body/label sizes; width, spacing, panel radius and row padding.
- Hotspot title, detail text, visibility and horizontal/vertical placement. Detail text can connect to compatible dynamic sources.

Hotspot coordinates relate to the primary image. They disappear when another gallery image is selected and return with the primary image. Use an image override if you need stable placement across products. The same template shares hotspot positions across products; use separate product templates where images differ substantially. Video and 3D media remain in Impulse's main gallery.

Only enter verified product claims, viscosity grades and approvals. The included example labels do not populate or invent specification values.

## Validation and store checks

Local validation results are recorded in `VALIDATION.md`. Before publishing your duplicate theme, check desktop/mobile rendering, dynamic sources on at least two products, empty values, hotspots with keyboard/touch, all variant options and sold-out states, native add-to-cart (if enabled), and compatibility with installed apps. Make any final publication through Shopify after review.

## Your Impulse 9.2.0 configuration

The preset includes your supplied fields: **Viscosity, Standards, Approval, Specifications, Performances, Application and Quality**. Connect each row's Value to its matching product dynamic source. For **Safety Data Sheet**, connect the section's Safety data sheet link URL setting to a compatible URL or file source. If Shopify does not offer your existing file metafield there, use a URL metafield holding the Shopify Files URL, or manually choose the file URL; a plain text title alone is not a downloadable file. The link hides until it has a URL and has its own visibility toggle.

Version target: Impulse 9.2.0 by Archetype Themes. Its theme source is not present here, so store-level compatibility has not yet been verified.

`preview.html` is a standalone illustrative preview, with sample packaging artwork and placeholder specification values. It is not a Shopify theme file and should not be uploaded to your theme. The PNG previews show that same sample, not your actual product data.

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

Add, reorder, disable or remove up to **eight** specification rows independently. With Hide when no value enabled, the same template can show two populated rows on one product and eight on another, according to the imported metafield values. **Hide when no value** defaults to on. The table can be disabled altogether. If every row is empty or disabled, the table and Technical data heading both hide automatically.

## Editor controls

- Main image override, product title override, rich-text description override, technical label and image caption.
- Product title, description, thumbnails, hotspots, specification table, background grid, purchase controls and price visibility.
- Section, panel, text, secondary text, accent, border, button background and button text colours.
- Montserrat font loaded through Shopify’s font library (Regular 400 body, Semibold 600 subheadings and labels, Bold 700 headings); desktop/mobile title sizes; body/label sizes; width, spacing, panel radius and row padding.
- Hotspot title, detail text, visibility and horizontal/vertical placement. Detail text can connect to compatible dynamic sources.

Hotspot coordinates relate to the primary image. They disappear when another gallery image is selected and return with the primary image. Use an image override if you need stable placement across products. The same template shares hotspot positions across products; use separate product templates where images differ substantially. Video and 3D media remain in Impulse's main gallery.

Only enter verified product claims, viscosity grades and approvals. The included example labels do not populate or invent specification values.

## Validation and store checks

Local validation results are recorded in `VALIDATION.md`. Before publishing your duplicate theme, check desktop/mobile rendering, dynamic sources on at least two products, empty values, hotspots with keyboard/touch, all variant options and sold-out states, native add-to-cart (if enabled), and compatibility with installed apps. Make any final publication through Shopify after review.

## Your Impulse 9.2.0 configuration

The preset includes your supplied fields: **Viscosity, Standards, Approval, Specifications, Performances, Application and Quality**. Connect each row's Value to its matching product dynamic source. For **Safety Data Sheet**, connect the section's Safety data sheet link URL setting to a compatible URL or file source. Your supplied screenshot confirms that Safety Data Sheet is already a URL metafield; connect it directly with the dynamic-source icon beside Safety data sheet link. No conversion or new metafield is needed. Choose **Underlined link** or **Button** under Safety data sheet appearance. Button colours use the editable button colour settings. The link hides until it has a URL and has its own visibility toggle.

Version target: Impulse 9.2.0 by Archetype Themes. Its theme source is not present here, so store-level compatibility has not yet been verified.

`preview.html` is a standalone illustrative preview, with sample packaging artwork and placeholder specification values. It is not a Shopify theme file and should not be uploaded to your theme. The PNG previews show that same sample, not your actual product data.

## Update an existing installation

Replace the section Liquid and CSS files with these latest versions; the JavaScript file is unchanged. Existing row connections and colour/size settings keep their setting IDs. The new Section font setting defaults to Montserrat. Keep **Hide when no value** enabled on each row for CSV-driven visibility. Connect the Safety Data Sheet URL once in the section settings, then choose its appearance. If an earlier installation has more than eight specification blocks, remove extra rows before saving under the new limit. Recheck in your duplicate theme before publishing.

The standalone preview embeds Montserrat font files distributed under the SIL Open Font License, included in `MONTSERRAT-LICENSE.txt`. The Shopify section itself loads its fonts through Shopify.

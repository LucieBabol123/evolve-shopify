# Evolve technical product section for Shopify Impulse

A standalone Online Store 2.0 product section. Designed for a more technical Evolve look: grid-backed imagery, accent markers, image callouts and structured specification rows. Shopify Grow supports custom theme sections; no app or subscription is needed for this code.

## Install on a duplicate of your theme

1. In Shopify → Online Store → Themes, duplicate Impulse before editing.
2. Open **Edit code** on the duplicate. Add `sections/evolve-technical-product.liquid` and the two `assets/evolve-technical-product.css` and `assets/evolve-technical-product.js` files, copying their contents from this package.
3. Customize that theme, open a **product template**, and add **Evolve technical product**. This section appears on product templates only. Save and preview a real product.
4. Keep Impulse's existing product section for its purchase controls by default. This new section is an additional overview; move it to suit your page. If using it as the main product display, avoid duplicated titles/descriptions through the visibility settings. Hiding/replacing Impulse's main section can also remove its reviews, apps, subscriptions, pickup and other features, so validate those requirements first.
5. Only enable this section's **Show Add to cart** setting for straightforward products with standard variants. They use Shopify's native cart form and normal page navigation; they do not implement Impulse's cart drawer, subscriptions, personalization, quantity rules or app integrations. Keep Impulse's purchase form for those features.

The precise Impulse version and its source were not supplied. This package uses scoped styles and Shopify section APIs; final integration must be checked in your duplicate theme. No store or live theme has been changed.

## Connect your CSV-fed metafields

Each **Specification row** has a Label and a **Value** text setting. Use the dynamic-source icon beside Value to connect an existing product metafield. Keep importing into the same metafield definitions through your existing CSV import tool. This section reads product data; it does not import CSVs or change definitions.

If a compatible dynamic source is not offered (for example, a list type), leave Value blank and put its exact `namespace.key` into **Optional metafield namespace.key**, such as `custom.viscosity`. This fallback supports scalar text/numbers and lists of text/numbers, joined with commas. It is not intended for rich text, references, files or measurement objects. Value takes precedence over the fallback. Do not assume the example key matches your store.

Add, reorder, disable or remove up to **eight** specification rows independently. With Hide when no value enabled, the same template can show two populated rows on one product and eight on another, according to the imported metafield values. **Hide when no value** defaults to on. The table can be disabled altogether. If every row is empty or disabled, the table and Technical data heading both hide automatically.

## Editor controls

- Main image override, product title override, rich-text description override, technical label and image caption. The image footer has a vector molecule mark at the bottom right, inspired by the supplied artwork, using the Accent colour setting. The full mark (including the small dot) is 24px wide by 18px high, with the molecule itself approximately 16px wide and keeps the original footer padding (20px desktop, 16px mobile).
- Product title, description, thumbnails, hotspots, specification table and background grid visibility; separate variant selector, price and Add to cart toggles.
- Section, grid background, grid lines, text, secondary text, accent, border, button background and button text colours. Grid line colour is independent of border/divider colour.
- Montserrat font loaded through Shopify’s font library (Regular 400 body, Semibold 600 subheadings and labels, Bold 700 headings); desktop/mobile title sizes; body/label sizes; width, spacing, panel radius and row padding, plus a Space below table and data sheet slider (32px by default, applied below each).
- Up to **12 Image hotspot** blocks, each with its own title, detail text, visibility and horizontal/vertical placement sliders. Add more via **Add block → Image hotspot**; edit its Horizontal position and Vertical position to move the circle. Detail text can connect to compatible dynamic sources.

Hotspot coordinates relate to the primary image. They disappear when another gallery image is selected and return with the primary image. Use an image override if you need stable placement across products. The same template shares hotspot positions across products; use separate product templates where images differ substantially. Video and 3D media remain in Impulse's main gallery.

Only enter verified product claims, viscosity grades and approvals. The included example labels do not populate or invent specification values.

## Validation and store checks

Local validation results are recorded in `VALIDATION.md`. Before publishing your duplicate theme, check desktop/mobile rendering, dynamic sources on at least two products, empty values, hotspots with keyboard/touch, all variant options and sold-out states, native add-to-cart (if enabled), and compatibility with installed apps. Make any final publication through Shopify after review.

## Your Impulse 9.2.0 configuration

The preset includes your supplied fields: **Viscosity, Standards, Approval, Specifications, Performances, Application and Quality**. Connect each row's Value to its matching product dynamic source. For **Safety Data Sheet**, connect the section's Safety data sheet link URL setting to a compatible URL or file source. Your supplied screenshot confirms that Safety Data Sheet is already a URL metafield; connect it directly with the dynamic-source icon beside Safety data sheet link. No conversion or new metafield is needed. Choose **Underlined link** or **Button** under Safety data sheet appearance. Button colours use the editable button colour settings. The link hides until it has a URL and has its own visibility toggle.

Version target: Impulse 9.2.0 by Archetype Themes. Its theme source is not present here, so store-level compatibility has not yet been verified.

`preview.html` is a standalone illustrative preview, with sample packaging artwork and placeholder specification values. It is not a Shopify theme file and should not be uploaded to your theme. The PNG previews show that same sample, not your actual product data.

## Update an existing installation

Replace the section Liquid and CSS files with these latest versions; also replace the JavaScript file to support independent catalogue controls. Existing row connections and colour/size settings keep their setting IDs. The new Section font setting defaults to Montserrat. Keep **Hide when no value** enabled on each row for CSV-driven visibility. Connect the Safety Data Sheet URL once in the section settings, then choose its appearance. If an earlier installation has more than eight specification blocks, remove extra rows before saving under the new limit. Recheck in your duplicate theme before publishing.

The standalone preview embeds Montserrat font files distributed under the SIL Open Font License, included in `MONTSERRAT-LICENSE.txt`. The Shopify section itself loads its fonts through Shopify.

## Six pack-size images and catalogue mode

Add up to six **Pack size image** blocks. New sections come with labels **1L, 4L, 5L, 20L, 60L and 199L**. Choose an image for each and toggle **Show pack size** independently. On an existing section, add the six blocks manually. Labels are editable for the theme editor and accessibility; no pack-size text is shown below the thumbnail. Image-picker settings can connect to compatible product image/file dynamic sources, allowing different images on products sharing a template; manually selected images are shared by that template.

Only enabled slots with an image appear. In catalogue mode, the first enabled image becomes the main image unless you set the main-image override. In variant mode, an image mapped to the selected variant takes priority. When any pack images have been configured, disabled slots do not fall back into the gallery. Without configured pack images, the section shows up to the first six existing product images. Thumbnails are stacked in a compact vertical rail to the left of the main image on desktop and mobile. The rail scrolls vertically when needed. Hotspots belong to the primary image and hide when other images are selected.

In catalogue mode, a **Select pack size** dropdown is generated from your enabled image blocks (1L, 4L, 5L, 20L, 60L, 199L). Changing it displays that pack image and selects its thumbnail; clicking a thumbnail updates the dropdown. No purchase variants or prices are needed for this mode.

When the variant selector, price or Add to cart is enabled, Shopify's product variant selector is used instead. Set the image block labels to match the Size option values in Shopify. Spaces and capitalization are ignored, so `1L` matches `1 L`. Selecting a variant displays the matching enabled pack image (or its assigned Shopify variant image). Clicking a labelled pack thumbnail selects the matching variant, preserving other variant option values where a matching combination exists. If that image has no matching purchase variant, Add to cart is disabled and the price is cleared until a product option is selected, preventing purchase of a different size. For complex option combinations, verify the mapping in your duplicate theme.

**Show price**, **Show Add to cart** and **Show variant selector** are independent settings, all off by default on new sections. A catalogue pack-size dropdown still appears when you have configured size images. For a catalogue, leave price and Add to cart off; the image selector, specification table and Safety Data Sheet remain available. No purchase form is rendered when Add to cart is off. Turning Add to cart on also supplies the variant selector required to choose a valid purchase variant. You can keep price hidden while enabling cart, or show price with cart disabled.

These toggles affect this custom section only. To keep the whole product page in catalogue mode, hide price and purchase controls in Impulse's other product sections as well. Theme visibility settings do not disable the store's checkout or other sales channels.

The **Grid background colour** control sets the colour behind the grid lines. **Grid line colour** sets the lines separately. Hotspot plus signs are inline SVGs so they do not depend on font glyphs or empty-element styling in Impulse. The custom size-dropdown arrow has been removed. The Technical data heading has no circle or arrow accent. When updating, replace both the section Liquid and CSS together to keep the icon markup and styles in sync.

Feature information opens on mouse hover. Move into the tooltip to read it; moving away closes an unpinned tooltip after a short delay. Click to pin it open, and click again or press Escape to close. Touch and keyboard activation retain normal click/Enter/Space behavior. Opening one feature closes another.

## Move information in Shopify's editor

All information-column groups can be arranged using **Layout** blocks: Technical label, Product title, Description, Size selector, Price, Add to cart, Technical table, and Safety Data Sheet. These blocks set position; the existing section settings still control content, styling and visibility. Each group can be added once. Packaging size selector, Price and Add to cart are named directly in the block list; the other positioning blocks retain the Layout: prefix. Specification row blocks continue to reorder the rows *inside* the technical table.

For an existing section, replace the Liquid and CSS files, then open **Customize → product template → Evolve technical product**. Use **Add block** to add each of the eight **Layout:** blocks once. Drag those Layout blocks into your desired order, for example:

1. Layout: Technical label
2. Layout: Product title
3. Layout: Description
4. Packaging size selector
5. Layout: Technical table
6. Layout: Safety Data Sheet
7. Price
8. Add to cart

Your existing metafield row connections, pack images and hotspots remain intact. You do not need to delete/re-add the whole section. Groups without a Layout block still render automatically after the explicitly positioned groups, so adding all eight is recommended before rearranging. Deleting a Layout block restores that group's fallback placement; use the existing section visibility controls to hide it.

Newly added sections include all eight Layout blocks automatically, with the size selector immediately below the description and the technical table immediately below the selector. Price, Add to cart and Safety Data Sheet remain independently movable. Price and cart remain hidden until their visibility settings are enabled. The size selector is associated with the purchase form even when they are in different positions.

Changing the preset does not rearrange Layout blocks already saved in your Shopify product template. For an existing installation, drag **Packaging size selector** below **Layout: Description**, then **Layout: Technical table** below the selector. If those blocks are missing, add all eight Layout blocks once before arranging them; preserve your existing specification rows and image blocks.

## Packaging, price and cart spacing

Open **Packaging size selector**, **Price**, or **Add to cart** in the editor block list to set **Top padding** and **Bottom padding** (0–100px). Drag each block like a Specification row or Pack size image. Price and cart also have a **Visibility** choice: Use section setting, Show or Hide. This preserves your existing section toggles by default and allows each block to be controlled directly.

The whole image panel is now square, including its grid header, thumbnail rail and footer. The product image uses contain sizing so it stays uncropped. The panel is capped by viewport height with space reserved for page padding and a typical header; the thumbnails scroll within the rail. An unusually tall theme header, announcement bar or other content above the section can still require scrolling. On mobile the information column remains below the image.

## Optional Evolve product template with blocks already added

The package now includes **templates/product.evolve.json**, which pre-adds all eight information blocks plus the specification, hotspot and pack-image blocks. It is a new product template containing this Evolve section only; Impulse's existing main-product section and app blocks are not included. It does not replace your default product template.

To try it on a duplicate theme:

1. Update the section Liquid and CSS files first.
2. In Edit code, create a new **JSON product template** named **evolve**. Replace that new file's contents with `templates/product.evolve.json` from this package. If that template name already exists, preserve it and use a different new name instead.
3. Open the theme editor and select **Products → evolve**, then choose a product to preview.
4. In Evolve technical product, the block list already includes **Packaging size selector**, **Price** and **Add to cart**. Drag them to the preferred positions and set their padding/visibility.
5. Connect the metafield rows and pack images for this new template. Your original template retains its existing connections and settings.

For an existing configured section, you can instead update its Liquid/CSS and add the missing information blocks manually; you do not need to switch templates or recreate its metafield connections. Check the duplicate theme before publishing or assigning products to the new template.

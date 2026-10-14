# Validation

Passed locally:
- Shopify Theme Check 3.30.1: zero offenses for the section, checked in a temporary partial-theme harness with an empty locales directory.
- JavaScript syntax check.
- All eight content groups reorder in DOM order without duplicates. Price and cart render above the table; a variant selector placed outside and after the cart form still contributes the selected variant ID to native FormData, and price/sold-out updates remain functional. Existing sections without Layout blocks retain fallback rendering.
- Footer mark retains its explicit bounds under a simulated global theme SVG sizing rule. Dropdown chevron markup is absent.
- Molecule-and-dot mark is 24×18px at the footer right edge with original desktop/mobile padding. Mouse hover opens features, pointer movement into the tooltip keeps it open, leaving closes it, click pins it, and Escape/keyboard/touch controls remain functional.
- Two independently positioned hotspots render at their configured coordinates; disabled hotspots hide, and opening a second closes the first. The Technical data header has no accent icon, and both custom dropdown chevrons are removed.
- Vertical thumbnail rail is left of the main image on desktop/mobile without page overflow. Catalogue dropdown switches all six pack images and thumbnail clicks update its selection.
- Variant selector switches to its matching pack image; pack thumbnail selects the matching variant; an unmapped pack disables purchase. Matching ignores whitespace in size values.
- Hotspot plus uses a visible inline SVG path; browser geometry confirms the icon is centred within 0.1px on desktop/mobile, both closed and rotated open.
- Browser checks: pack thumbnails have no visible labels and retain accessible names; table/link bottom spacing defaults to 32px and responds to adjustment; grid line and panel background colours update independently.
- Six configured pack images render and switch individually; each selection updates the main image and pressed state. Disabled slots hide, all disabled slots stay hidden, and ordinary product-image fallback is capped at six.
- Catalogue fixture has no price, variant selector, Add to cart or purchase form. Independent price-only, selector-only and cart-without-price fixtures render correctly. Selector changes without a cart button raise no browser error.
- Schema enforces eight specification blocks; Liquid fixtures show eight populated rows or two populated rows with remaining values empty, and no table heading when no rows render.
- Safety Data Sheet fixtures: underlined link, button style, and hidden link for an empty URL.
- Browser computed typography: Montserrat 400 for body, 600 for row labels and 700 for title; all three preview font weights loaded successfully.
- LiquidJS fixture rendering: text metafield fallback, list joining, hidden empty rows, disabled rows, safety data sheet URL output.
- Headless system Chromium at desktop (1440px) and mobile (375px): hotspot open/close and Escape focus handling; gallery image switching and hotspot visibility; available/sold-out variant button states and price updates; cart form target; mobile page overflow and tooltip bounds; initialization on Shopify section reload.

Limits: LiquidJS used adapters for Shopify image/font filters and the product form tag. The standalone preview uses illustrative packaging, sample specifications and prices. It is not live Shopify rendering. No request was sent to a Shopify cart. Impulse 9.2.0 source and store access are unavailable, so final theme rendering, actual metafield bindings, installed apps and checkout/cart behavior must be checked in a duplicate theme before publication.


Latest square-panel and editor-block validation:
- Shopify Theme Check: zero offenses, including the new JSON product template.
- Packaging size selector, Price and Add to cart are defined as single-use blocks and pre-added in `product.evolve.json`.
- Independent top/bottom padding renders at selected values; price/cart block Show/Hide overrides work while preserving inherited section settings.
- Reordering selector, price and cart above the table preserves variant ID submission and sold-out states.
- Whole image panel is square and fits the available local viewport at 1440×900, 1366×768, 375×812 and 390×667 without horizontal page overflow. Actual store header height was not available to test.
- Gallery switching and hover popups still work. Previews regenerated from the updated section and template with illustrative product data.

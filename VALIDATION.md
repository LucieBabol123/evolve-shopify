# Validation

Passed locally:
- Shopify Theme Check 3.30.1: zero offenses for the section, checked in a temporary partial-theme harness with an empty locales directory.
- JavaScript syntax check.
- Browser checks: pack thumbnails have no visible labels and retain accessible names; table/link bottom spacing defaults to 32px and responds to adjustment; grid line and panel background colours update independently.
- Six configured pack images render and switch individually; each selection updates the main image and pressed state. Disabled slots hide, all disabled slots stay hidden, and ordinary product-image fallback is capped at six.
- Catalogue fixture has no price, variant selector, Add to cart or purchase form. Independent price-only, selector-only and cart-without-price fixtures render correctly. Selector changes without a cart button raise no browser error.
- Schema enforces eight specification blocks; Liquid fixtures show eight populated rows or two populated rows with remaining values empty, and no table heading when no rows render.
- Safety Data Sheet fixtures: underlined link, button style, and hidden link for an empty URL.
- Browser computed typography: Montserrat 400 for body, 600 for row labels and 700 for title; all three preview font weights loaded successfully.
- LiquidJS fixture rendering: text metafield fallback, list joining, hidden empty rows, disabled rows, safety data sheet URL output.
- Headless system Chromium at desktop (1440px) and mobile (375px): hotspot open/close and Escape focus handling; gallery image switching and hotspot visibility; available/sold-out variant button states and price updates; cart form target; mobile page overflow and tooltip bounds; initialization on Shopify section reload.

Limits: LiquidJS used adapters for Shopify image/font filters and the product form tag. The standalone preview uses illustrative packaging, sample specifications and prices. It is not live Shopify rendering. No request was sent to a Shopify cart. Impulse 9.2.0 source and store access are unavailable, so final theme rendering, actual metafield bindings, installed apps and checkout/cart behavior must be checked in a duplicate theme before publication.

# Validation

Passed locally:
- Shopify Theme Check 3.30.1: zero offenses for the section, checked in a temporary partial-theme harness with an empty locales directory.
- JavaScript syntax check.
- LiquidJS fixture rendering: text metafield fallback, list joining, hidden empty rows, disabled rows, safety data sheet URL output.
- Headless system Chromium at desktop (1440px) and mobile (375px): hotspot open/close and Escape focus handling; gallery image switching and hotspot visibility; available/sold-out variant button states and price updates; cart form target; mobile page overflow and tooltip bounds; initialization on Shopify section reload.

Limits: LiquidJS used adapters for Shopify image filters and the product form tag. The standalone preview uses illustrative packaging, sample specifications and prices. It is not live Shopify rendering. No request was sent to a Shopify cart. Impulse 9.2.0 source and store access are unavailable, so final theme rendering, actual metafield bindings, installed apps and checkout/cart behavior must be checked in a duplicate theme before publication.

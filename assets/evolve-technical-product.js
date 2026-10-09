(() => {
  const initialize = (scope) => {
    scope.querySelectorAll('[data-evolve-product]').forEach((root) => {
      if (root.dataset.evInitialized) return;
      root.dataset.evInitialized = 'true';
      root.addEventListener('click', (event) => {
        const thumb = event.target.closest('[data-image]');
        if (!thumb || !root.contains(thumb)) return;
        const image = root.querySelector('img.ev-tech__image');
        if (!image) return;
        image.srcset = thumb.dataset.srcset;
        image.src = thumb.dataset.image;
        image.alt = thumb.dataset.alt;
        root.querySelectorAll('[data-image]').forEach((button) => button.setAttribute('aria-pressed', String(button === thumb)));
        // Coordinates belong to the primary image, so hide its hotspots on other images.
        root.querySelectorAll('.ev-tech__hotspot').forEach((hotspot) => {
          hotspot.hidden = thumb.dataset.image !== root.dataset.evPrimaryImage;
          hotspot.open = false;
        });
      });
      const image = root.querySelector('img.ev-tech__image');
      if (image) root.dataset.evPrimaryImage = image.getAttribute('src').split('&')[0];
      // Shopify URLs may have sizing parameters in a different order. Match by image identity.
      const primary = [...root.querySelectorAll('[data-image]')].find((button) => button.getAttribute('aria-pressed') === 'true');
      if (primary) root.dataset.evPrimaryImage = primary.dataset.image;
      root.addEventListener('change', (event) => {
        if (!event.target.matches('[data-ev-variant]')) return;
        const option = event.target.selectedOptions[0];
        const button = root.querySelector('[data-ev-buy]');
        const price = root.querySelector('[data-ev-price]');
        if (price) price.textContent = option.dataset.price;
        button.disabled = option.dataset.available !== 'true';
        button.textContent = button.disabled ? 'Sold out' : button.dataset.label;
      });
      root.querySelectorAll('.ev-tech__hotspot').forEach((hotspot) => {
        hotspot.addEventListener('toggle', () => {
          if (!hotspot.open) return;
          root.querySelectorAll('.ev-tech__hotspot').forEach((other) => { if (other !== hotspot) other.open = false; });
        });
      });
      root.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        const open = root.querySelector('.ev-tech__hotspot[open]');
        if (open) { open.open = false; open.querySelector('summary').focus(); }
      });
    });
  };
  if (!window.evolveTechnicalProductLoaded) {
    window.evolveTechnicalProductLoaded = true;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initialize(document));
    else initialize(document);
    document.addEventListener('shopify:section:load', (event) => initialize(event.target));
  }
})();

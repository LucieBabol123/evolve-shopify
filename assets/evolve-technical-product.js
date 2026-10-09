(() => {
  const initialize = (scope) => {
    scope.querySelectorAll('[data-evolve-product]').forEach((root) => {
      if (root.dataset.evInitialized) return;
      root.dataset.evInitialized = 'true';
      const thumbs = [...root.querySelectorAll('button[data-image]')];
      const image = root.querySelector('img.ev-tech__image');
      const variantSelect = root.querySelector('[data-ev-variant]');
      const packSelect = root.querySelector('[data-ev-pack]');
      const primary = thumbs.find((button) => button.getAttribute('aria-pressed') === 'true');
      const identity = (url) => url ? url.split('?')[0] : '';
      root.dataset.evPrimaryImage = primary ? primary.dataset.image : (image ? image.getAttribute('src') : '');
      const normalize = (size) => String(size || '').toLowerCase().replace(/\s+/g, '');
      const variantSizes = (option) => {
        try { return JSON.parse(option.dataset.options || '[]').map(normalize); }
        catch { return []; }
      };
      const showImage = (thumb, fallbackUrl) => {
        if (!image || (!thumb && !fallbackUrl)) return;
        if (thumb) image.srcset = thumb.dataset.srcset;
        else image.removeAttribute('srcset');
        image.src = thumb ? thumb.dataset.image : fallbackUrl;
        if (thumb) image.alt = thumb.dataset.alt;
        thumbs.forEach((button) => button.setAttribute('aria-pressed', String(button === thumb)));
        const rail = root.querySelector('.ev-tech__thumbs');
        if (thumb && rail && !rail.hidden) {
          const selectedBox = thumb.getBoundingClientRect();
          const railBox = rail.getBoundingClientRect();
          if (selectedBox.top < railBox.top) rail.scrollTop -= railBox.top - selectedBox.top;
          else if (selectedBox.bottom > railBox.bottom) rail.scrollTop += selectedBox.bottom - railBox.bottom;
        }
        if (packSelect && thumb) {
          const pack = [...packSelect.options].find((option) => option.dataset.image === thumb.dataset.image);
          if (pack) packSelect.value = pack.value;
        }
        root.querySelectorAll('.ev-tech__hotspot').forEach((hotspot) => {
          hotspot.hidden = identity(image.getAttribute('src')) !== identity(root.dataset.evPrimaryImage);
          hotspot.open = false;
        });
      };
      const updateVariant = () => {
        const option = variantSelect.selectedOptions[0];
        if (!option) return;
        const button = root.querySelector('[data-ev-buy]');
        const price = root.querySelector('[data-ev-price]');
        if (price) price.textContent = option.dataset.price;
        if (button) {
          button.disabled = option.dataset.available !== 'true';
          button.textContent = button.disabled ? 'Sold out' : button.dataset.label;
        }
        const sizes = variantSizes(option);
        const thumb = thumbs.find((item) => item.dataset.size && sizes.includes(normalize(item.dataset.size)))
          || thumbs.find((item) => identity(item.dataset.image) === identity(option.dataset.image));
        if (thumb || option.dataset.image) showImage(thumb, option.dataset.image);
      };
      root.addEventListener('click', (event) => {
        const thumb = event.target.closest('button[data-image]');
        if (!thumb || !root.contains(thumb)) return;
        if (variantSelect && thumb.dataset.size) {
          const size = normalize(thumb.dataset.size);
          const current = variantSelect.selectedOptions[0];
          const candidates = [...variantSelect.options].filter((option) => variantSizes(option).includes(size));
          const currentSizes = current ? variantSizes(current) : [];
          const match = candidates.find((option) => variantSizes(option).every((value, index) => value === size || value === currentSizes[index])) || candidates[0];
          if (match) {
            variantSelect.value = match.value;
            updateVariant();
          } else {
            // Prevent buying a different size when an image has no matching variant.
            const button = root.querySelector('[data-ev-buy]');
            const price = root.querySelector('[data-ev-price]');
            if (button) { button.disabled = true; button.textContent = 'Select a product option'; }
            if (price) price.textContent = '';
          }
        }
        showImage(thumb);
      });
      root.addEventListener('change', (event) => {
        if (event.target === variantSelect) updateVariant();
        if (event.target === packSelect) {
          const option = packSelect.selectedOptions[0];
          const thumb = thumbs.find((item) => item.dataset.image === option.dataset.image);
          if (thumb) showImage(thumb);
        }
      });
      if (variantSelect) updateVariant();
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

document.querySelectorAll('.product-card-footer').forEach(footer => {
  const minus  = footer.querySelector('[data-action="minus"]');
  const plus   = footer.querySelector('[data-action="plus"]');
  const input  = footer.querySelector('.qty-stepper__input');
  const addBtn = footer.querySelector('.btn-primary');

  if (!input) return;

  minus.addEventListener('click', () => {
    const val = parseInt(input.value, 10);
    if (val > 1) input.value = val - 1;
  });

  plus.addEventListener('click', () => {
    input.value = parseInt(input.value, 10) + 1;
  });

  input.addEventListener('change', () => {
    const val = parseInt(input.value, 10);
    if (!val || val < 1) input.value = 1;
  });

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const qty  = parseInt(input.value, 10);
      const card = footer.closest('.product-card');
      const sku  = card.querySelector('.product-card-sku').textContent.trim();
      const name = card.querySelector('.product-card-name').textContent.trim();
      console.log(`Add to order: ${qty} × ${sku} — ${name}`);
      const badge = document.querySelector('.nav-cart-badge');
      if (badge) badge.textContent = parseInt(badge.textContent, 10) + qty;
    });
  }
});
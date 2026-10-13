const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
function closeNavigation() {
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Open navigation');
  nav?.classList.remove('open');
  document.querySelectorAll('.products-menu[open]').forEach(menu => menu.open = false);
}
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNavigation();
});
document.addEventListener('click', event => {
  document.querySelectorAll('.products-menu[open]').forEach(menu => {
    if (!menu.contains(event.target)) menu.open = false;
  });
  if (event.target.closest('.main-nav a')) closeNavigation();
});
const scenes = [...document.querySelectorAll('[data-scene]')];
scenes.forEach(button => button.addEventListener('click', () => {
  scenes.forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
  const photo = document.querySelector('#hero-photo');
  photo.src = `/assets/${button.dataset.scene}.webp?v=20261013-2`;
  photo.alt = button.dataset.alt;
  document.querySelector('#scene-link').href = button.dataset.href;
  document.querySelector('#scene-name').textContent = button.dataset.name;
  document.querySelector('#scene-label').textContent = button.dataset.label;
}));

(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('site-menu');

  function closeMenu() {
    menu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  }

  toggle?.addEventListener('click', () => {
    const opened = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!opened));
    toggle.setAttribute('aria-label', opened ? 'Open navigation' : 'Close navigation');
    menu?.classList.toggle('open', !opened);
    document.body.classList.toggle('menu-open', !opened);
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 700) closeMenu(); });
  document.getElementById('current-year').textContent = String(new Date().getFullYear());

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const elements = document.querySelectorAll('.product-card, .principle, .story-content, .connect-panel');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    elements.forEach((element, i) => {
      element.classList.add('reveal');
      element.style.transitionDelay = ((i % 3) * 70) + 'ms';
      observer.observe(element);
    });
  }
})();

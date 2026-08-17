function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => observer.observe(el));
}

// astro:page-load se dispara tras la carga inicial y también tras cada
// transición de página (ver <ClientRouter /> en BaseLayout), así que los
// elementos de la página entrante siempre quedan observados.
document.addEventListener('astro:page-load', initScrollReveal);

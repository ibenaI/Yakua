// Número de WhatsApp de Yakua: código de país + área + número, solo dígitos (ej: 5491112345678).
const WHATSAPP_NUMBER = '5490000000000';

// Arma el link de WhatsApp con un mensaje pre-cargado según el servicio.
function buildWhatsAppLink(service) {
  const message = service
    ? `Hola Yakua! Quiero consultar por el servicio: ${service}`
    : 'Hola Yakua! Quiero consultarte por un proyecto.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('[data-service]').forEach((link) => {
  link.href = buildWhatsAppLink(link.dataset.service);
});

// Menú mobile
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

function setNavOpen(open) {
  navToggle.setAttribute('aria-expanded', String(open));
  siteNav.classList.toggle('is-open', open);
}

navToggle.addEventListener('click', () => {
  setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
});

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setNavOpen(false);
});

// Contadores de "Sobre mí": animan de 0 al valor de data-count al entrar en pantalla
const counters = document.querySelectorAll('[data-count]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderCounter(el, value) {
  el.textContent = `${el.dataset.prefix || ''}${value}`;
}

function animateCounter(el) {
  const target = Number(el.dataset.count);
  const duration = 1500;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    renderCounter(el, Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  counters.forEach((el) => renderCounter(el, el.dataset.count));
} else {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  counters.forEach((el) => counterObserver.observe(el));
}

// Año actual en el footer
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

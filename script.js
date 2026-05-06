const revealTargets = document.querySelectorAll(
  '.section__head, .card, .pain-item, .timeline__item, .result-section, .price-card, .faq__item, .final-cta'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((element, index) => {
  element.classList.add('reveal');
  element.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
  observer.observe(element);
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header--compact', window.scrollY > 24);
});

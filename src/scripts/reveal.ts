/**
 * Lightweight scroll reveal & parallax script (< 1KB gzipped)
 */
export function initInteractions() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // 1. Scroll reveal
  const elementsToReveal = document.querySelectorAll<HTMLElement>('[data-reveal]');
  
  if (prefersReducedMotion) {
    elementsToReveal.forEach(el => el.classList.add('is-revealed'));
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    elementsToReveal.forEach(el => observer.observe(el));
  } else {
    elementsToReveal.forEach(el => el.classList.add('is-revealed'));
  }

  // 2. Light Parallax for Hero
  if (!prefersReducedMotion && window.innerWidth >= 768) {
    const hero = document.getElementById('hero');
    const sun = document.querySelector<HTMLElement>('.hero-sun');
    const subject = document.querySelector<HTMLElement>('.hero-subject-wrapper');
    const palmLeft = document.querySelector<HTMLElement>('.hero-palm-tl');
    const palmRight = document.querySelector<HTMLElement>('.hero-palm-r');

    if (hero) {
      let ticking = false;

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const heroHeight = hero.offsetHeight;

            if (scrollY <= heroHeight) {
              const ratio = scrollY / heroHeight;
              const maxTranslate = 24;

              if (sun) sun.style.transform = `translateY(${ratio * maxTranslate * 0.5}px)`;
              if (subject) subject.style.transform = `translateY(${ratio * maxTranslate * 0.7}px)`;
              if (palmLeft) palmLeft.style.transform = `translateY(${ratio * -maxTranslate * 0.4}px)`;
              if (palmRight) palmRight.style.transform = `translateY(${ratio * -maxTranslate * 0.6}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  }
}

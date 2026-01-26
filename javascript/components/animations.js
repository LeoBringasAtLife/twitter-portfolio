/* ==========================================
   COMPONENTE: Animaciones
   Maneja efectos visuales y animaciones
   ========================================== */

export class Animations {
  constructor() {
    this.init();
  }

  init() {
    this.initScrollReveal();
    this.initSmoothScroll();
    console.log('✨ Animaciones inicializadas');
  }

  /**
   * Animación de revelado al hacer scroll
   */
  initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observar cards de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
      observer.observe(card);
    });
  }

  /**
   * Scroll suave a secciones
   */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Animación de contador (opcional para stats)
   */
  static animateNumber(element, targetValue, duration = 1000) {
    const start = parseInt(element.textContent) || 0;
    const increment = (targetValue - start) / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (
        (increment > 0 && current >= targetValue) ||
        (increment < 0 && current <= targetValue)
      ) {
        element.textContent = targetValue;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }
}
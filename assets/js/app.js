// Mobile menu toggle
const menuBtn = document.querySelector('[data-menu-btn]');
const mobilePanel = document.querySelector('[data-mobile-panel]');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    mobilePanel.hidden = isExpanded;
  });
}

// Set current year in footer
const yearElement = document.getElementById('y');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Counter animation for impact statistics
function animateCounter(element, target) {
  const increment = target / 60;
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + '+';
    }
  };

  updateCounter();
}

// Observe when stat numbers come into view
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numElement = entry.target.querySelector('.num');
        if (numElement && !numElement.dataset.animated) {
          numElement.dataset.animated = 'true';
          const text = numElement.textContent.replace(/[^0-9]/g, '');
          const target = parseInt(text) || 0;
          numElement.classList.add('count-up');
          animateCounter(numElement, target);
          observer.unobserve(entry.target);
        }
      }
    });
  });

// Carousel functionality
const initCarousel = () => {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  let currentIndex = 0;
  let autoPlayInterval;

  const updateCarousel = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    indicators.forEach((btn, i) => {
      btn.classList.toggle('active', i === currentIndex);
      btn.style.background = i === currentIndex ? '#3C2F7F' : '#ddd';
    });
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      updateCarousel(currentIndex - 1);
      resetAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      updateCarousel(currentIndex + 1);
      resetAutoPlay();
    });
  }

  indicators.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const slideIndex = parseInt(e.target.dataset.slide);
      updateCarousel(slideIndex);
      resetAutoPlay();
    });
  });

  const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 5000);
  };

  const resetAutoPlay = () => {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  };

  startAutoPlay();
};

// Initialize carousel on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}

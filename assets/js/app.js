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

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Only handle anchor links
    if (this.hash) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // Adjust if navbar is fixed
          behavior: 'smooth'
        });
      }
    }
  });
});

// Active menu highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 80; // Adjust offset for fixed navbar
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.hash === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Optional: Typing effect for subtitle (if you want it animated)
function typeWriter(element, text, speed = 60) {
  let i = 0;
  element.textContent = '';
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Example usage for subtitle
document.addEventListener('DOMContentLoaded', () => {
  const subtitle = document.querySelector('.subtitle-typing');
  if (subtitle) {
    typeWriter(subtitle, subtitle.dataset.text || subtitle.textContent);
  }
});

// Optional: Mobile menu toggle (if you add a hamburger menu)
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

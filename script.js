function smoothScroll() {
    document.querySelectorAll('a[href^="#"], a[href*="html"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

function validateForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('All fields are required.');
                return;
            }
            
            if (!isValidEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            fetch('https://formspree.io/f/mnqlzqra', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    'name': nameInput.value,
                    'email': emailInput.value,
                    'message': messageInput.value
                }).toString()
            })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully! Expect a response within 24 hours.');
                    contactForm.reset();
                } else {
                    alert('Error sending message. Please try again.');
                }
            })
            .catch(error => {
                alert('Error sending message. Please try again.');
                console.error('Error:', error);
            });
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function toggleMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.querySelector('.skill-bar')) {
                    const bar = entry.target.querySelector('.skill-bar');
                    bar.style.width = bar.dataset.width;
                }
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00D1FF' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#FF00FF', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}

window.addEventListener('load', () => {
    smoothScroll();
    validateForm();
    toggleMenu();
    animateOnScroll();
    initParticles();
});
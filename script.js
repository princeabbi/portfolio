// 1. Loading Screen
// Hide loader when page finishes loading. Also set a failsafe timeout
// in case the `load` event doesn't fire (blocked by extensions or file:// issues).
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    loader.style.transition = loader.style.transition || 'opacity 0.5s ease';
    loader.style.opacity = '0';
    loader.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
        if (loader && loader.style) loader.style.display = 'none';
    }, 600);
});

// Failsafe: hide loader after 6s if still visible
setTimeout(() => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    const disp = window.getComputedStyle(loader).display;
    if (disp !== 'none') {
        loader.style.transition = loader.style.transition || 'opacity 0.5s ease';
        loader.style.opacity = '0';
        loader.setAttribute('aria-hidden', 'true');
        setTimeout(() => { loader.style.display = 'none'; }, 600);
    }
}, 6000);

// 2. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Typing Animation for Hero
const textElement = document.querySelector('.typing-text');
const words = ["& Full Stack Developer", "& UI/UX Enthusiast", "& Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!textElement) return;
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}
typeEffect();

// 4. Scroll Reveal Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// 5. Mobile Menu Toggle (Simplified)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

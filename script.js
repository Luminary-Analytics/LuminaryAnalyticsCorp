// ========================================
// LUMINARY ANALYTICS - INTERACTIONS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Intersection Observer for scroll animations
    initScrollAnimations();
    
    // Navigation background on scroll
    initNavScroll();
    
    // Animate stats on scroll
    initStatsAnimation();
});

// ----------------------------------------
// SMOOTH SCROLL
// ----------------------------------------
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed nav
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ----------------------------------------
// SCROLL ANIMATIONS
// ----------------------------------------
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.service-card, .result-card, .approach-point, .testimonial-quote').forEach(el => {
        observer.observe(el);
    });
}

// ----------------------------------------
// NAVIGATION SCROLL EFFECT
// ----------------------------------------
function initNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 11, 0.95)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 11, 1), transparent)';
            nav.style.borderBottom = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ----------------------------------------
// STATS COUNTER ANIMATION
// ----------------------------------------
function initStatsAnimation() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statValues.forEach(stat => observer.observe(stat));
}

function animateValue(element) {
    const text = element.textContent;
    const hasX = text.includes('x');
    const hasPlus = text.includes('+');
    const hasDollar = text.includes('$');
    const hasM = text.includes('M');
    const hasHr = text.includes('hr');
    
    // Extract numeric value
    let numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
    
    if (isNaN(numericValue)) return;
    
    const duration = 1500;
    const startTime = performance.now();
    const startValue = 0;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        let currentValue = startValue + (numericValue - startValue) * easeOut;
        
        // Format the display value
        let displayValue = '';
        
        if (hasDollar) displayValue += '$';
        
        if (hasM) {
            displayValue += currentValue.toFixed(1) + 'M';
        } else if (hasX) {
            displayValue += currentValue.toFixed(1) + 'x';
        } else if (hasHr) {
            displayValue += Math.round(currentValue) + 'hr';
        } else {
            displayValue += Math.round(currentValue);
        }
        
        if (hasPlus) displayValue += '+';
        
        element.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ----------------------------------------
// PARALLAX GLOW EFFECT
// ----------------------------------------
document.addEventListener('mousemove', (e) => {
    const glows = document.querySelectorAll('.glow');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    glows.forEach((glow, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        glow.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// ----------------------------------------
// MOBILE MENU (if needed)
// ----------------------------------------
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
}


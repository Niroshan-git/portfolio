document.addEventListener('DOMContentLoaded', function() {
    // Elements to observe for scroll animations
    const animateElements = [
        ...document.querySelectorAll('.section-title'),
        ...document.querySelectorAll('.skill-item'),
        ...document.querySelectorAll('.stat'),
        ...document.querySelectorAll('.project-card'),
        ...document.querySelectorAll('.about-content p'),
        ...document.querySelectorAll('.animate-on-scroll'),
        document.querySelector('.about-image')
    ].filter(Boolean); // Filter out null elements
    
    if (animateElements.length === 0) return;
    
    // Options for the observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target; // Define element here
            
            if (entry.isIntersecting) {
                // Check if element has a specific animation class from data attribute
                if (element.dataset.animation) {
                    const animationClass = element.dataset.animation;
                    element.classList.add(animationClass);
                } else {
                    // Default animation
                    element.classList.add('animate-in');
                }
                
                // Handle specific animations for skill progress bars
                if (element.classList.contains('skill-item')) {
                    const progressBar = element.querySelector('.skill-progress');
                    if (progressBar) {
                        progressBar.classList.add('animate');
                    }
                }
                
                // Check if we should only animate once
                if (element.dataset.once === 'true' || !element.dataset.hasOwnProperty('once')) {
                    observer.unobserve(element);
                }
            } else if (element.dataset.once !== 'true') {
                // If we want to repeat the animation when element leaves viewport
                if (element.dataset.animation) {
                    const animationClass = element.dataset.animation;
                    element.classList.remove(animationClass);
                } else {
                    element.classList.remove('animate-in');
                }
                
                // Also remove progress bar animation if it exists
                if (element.classList.contains('skill-item')) {
                    const progressBar = element.querySelector('.skill-progress');
                    if (progressBar) {
                        progressBar.classList.remove('animate');
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Calculate animation delays for staggered animations
    document.querySelectorAll('[data-stagger]').forEach((container) => {
        const children = container.children;
        const staggerDelay = parseInt(container.dataset.stagger) || 100; // default 100ms
        
        Array.from(children).forEach((child, index) => {
            child.style.animationDelay = `${index * staggerDelay}ms`;
            child.classList.add('opacity-0'); // Hide elements initially
        });
    });
    
    // Handle parallax effects
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = parseFloat(element.dataset.speed) || 0.5;
        
        window.addEventListener('scroll', () => {
            const yPos = window.scrollY * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Handle counter animations
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                const duration = parseInt(counter.dataset.duration) || 2000; // Default 2 seconds
                let startTimestamp = null;
                const startValue = 0;
                
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const currentValue = Math.floor(progress * (target - startValue) + startValue);
                    
                    counter.textContent = currentValue;
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        counter.textContent = target; // Ensure the final value is exact
                        counterObserver.unobserve(counter);
                    }
                };
                
                window.requestAnimationFrame(step);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Handle typing animation
    document.querySelectorAll('.typing-text').forEach(element => {
        const text = element.textContent;
        const speed = parseInt(element.dataset.speed) || 50; // Default 50ms per character
        
        element.textContent = '';
        element.style.visibility = 'visible';
        
        const typingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let i = 0;
                    const typing = setInterval(() => {
                        if (i < text.length) {
                            element.textContent += text.charAt(i);
                            i++;
                        } else {
                            clearInterval(typing);
                            typingObserver.unobserve(element);
                        }
                    }, speed);
                }
            });
        }, { threshold: 0.5 });
        
        typingObserver.observe(element);
    });
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const menuToggle = document.querySelector('.menu-toggle');
                
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (menuToggle) menuToggle.classList.remove('active');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add expanded CSS for scroll animations
document.head.insertAdjacentHTML('beforeend', `
<style>
    /* Base animations */
    .animate-in {
        animation: fadeInUp 0.8s forwards;
    }
    
    .section-title, .skill-item, .stat, .project-card, .about-content p, .about-image, .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
    }
    
    /* Default animation */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Additional animations */
    .fade-in-up {
        animation: fadeInUp 0.8s forwards;
    }
    
    .fade-in {
        animation: fadeIn 0.8s forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .slide-in-left {
        animation: slideInLeft 0.8s forwards;
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .slide-in-right {
        animation: slideInRight 0.8s forwards;
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .zoom-in {
        animation: zoomIn 0.8s forwards;
    }
    
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    /* For staggered animations */
    .opacity-0 {
        opacity: 0;
    }
    
    /* For typing animation */
    .typing-text {
        visibility: hidden;
        display: inline-block;
    }
    
    /* For skill progress bars */
    .skill-progress {
        width: 0;
        transition: width 1.5s ease-out;
    }
    
    .skill-progress.animate {
        width: var(--skill-level);
    }
</style>
`);
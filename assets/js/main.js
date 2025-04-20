document.addEventListener('DOMContentLoaded', function() {
    // Theme toggling with persistence
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Check localStorage on page load and apply saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.dataset.theme = savedTheme;
        
        // Update icon based on current theme
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (savedTheme === 'dark') {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        }
        
        // Handle theme toggle click
        themeToggle.addEventListener('click', function() {
            const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            
            // Update theme
            document.documentElement.dataset.theme = newTheme;
            
            // Save to localStorage
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            if (icon) {
                if (newTheme === 'dark') {
                    icon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    icon.classList.replace('fa-sun', 'fa-moon');
                }
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
        });
    }
    
    // Counting animation for stats
    const stats = document.querySelectorAll('.stat-number');
    
    if (stats.length > 0) {
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const count = parseInt(target.dataset.count);
                    let current = 0;
                    const interval = setInterval(() => {
                        if (current >= count) {
                            clearInterval(interval);
                        } else {
                            current++;
                            target.textContent = current;
                        }
                    }, 20);
                    observer.unobserve(target);
                }
            });
        }, observerOptions);
        
        stats.forEach(stat => {
            observer.observe(stat);
        });
    }
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Data Sphere animation
    setupDataSphere();

    // Load projects (function now in projects.js)
    if (typeof loadProjects === 'function') {
        loadProjects();
    }

    // Setup project filtering (function now in projects.js)
    if (typeof setupFilters === 'function') {
        setupFilters();
    }

    // Title words animation
    animateTitleWords();
});

// Data Sphere using Three.js
function setupDataSphere() {
    const container = document.getElementById('data-sphere');
    if (!container) return;
    
    if (typeof THREE === 'undefined') {
        console.warn('Three.js is not loaded. Data sphere will not be rendered.');
        return;
    }
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    
    // Create particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    
    for (let i = 0; i < 1000; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 2 + Math.random() * 0.5;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        vertices.push(x, y, z);
        colors.push(0.2 + Math.random() * 0.3);
        colors.push(0.2 + Math.random() * 0.5);
        colors.push(0.5 + Math.random() * 0.5);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    
    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        renderer.render(scene, camera);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

// Animate title words
function animateTitleWords() {
    const titleWords = document.querySelectorAll('.title-word');
    if (titleWords.length === 0) return;
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = 1;
            word.style.animation = 'fadeInUp 0.8s forwards';
        }, index * 200);
    });
}


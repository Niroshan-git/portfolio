document.addEventListener('DOMContentLoaded', function() {
    // Get filter buttons and projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length === 0 || projectCards.length === 0) return;

    // Set animation delays for projects
    projectCards.forEach((card, index) => {
        card.style.setProperty('--index', index);
    });
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter projects with animation
            filterProjects(filter);
        });
    });
    
    // Filter projects function with animation
    function filterProjects(filter) {
        projectCards.forEach(card => {
            // Reset animation
            card.style.animation = 'none';
            card.offsetHeight; // Force reflow
            
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s forwards';
                
                // Stagger animation based on index
                const index = Array.from(projectCards).indexOf(card);
                card.style.animationDelay = `${index * 0.1}s`;
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Initialize with "all" filter active
    document.querySelector('.filter-btn[data-filter="all"]').click();
});
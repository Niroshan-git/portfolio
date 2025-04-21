// Project data with added date field for sorting
const projectsData = [
    {
        id: 1,
        title: "Excel Analytics and Data Visualization Charts",
        description: " Contains a collection of advanced Excel projects in data analysis, visualization, and business reporting. ",
        image: "/portfolio/projects/project1/assets/images/Main Image.JPG",
        category: "Excel",
        link: "/portfolio/projects/project1/index.html",
        featured: true,
        date: "2023-10-15" // Added date field in YYYY-MM-DD format
    },
    {
        id: 2,
        title: "Pet Industry Inflation-Dashboard",
        description: "Built a real-time dashboard to visualize sales performance across regions.",
        image: "/portfolio/projects/project2/assets/images/Main Image.JPG",
        category: "Tableau",
        link: "/portfolio/projects/project2/index.html",
        featured: true,
        date: "2023-11-20"
    },
    {
        id: 3,
        title: "Kraken Cofee Sales Dashboard",
        description: "A comprehensive guide to improving data literacy in organizations.",
        image: "/portfolio/projects/project3/assets/projectImages/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project3/index.html",
        featured: true,
        date: "2024-01-15"
    },
    {
        id: 4,
        title: "Advanced Excel Dashboard Collection",
        description: "A collection of four intricately designed, data-driven dashboards",
        image:  "/portfolio/projects/project4/assets/images/Main Image.JPG",
        category: "Excel",
        link: "/portfolio/projects/project4/index.html",
        featured: true,
        date: "2024-02-10"
    },
    {
        id: 5,
        title: "Spotify Analytics Dashboard Version 01",
        description: "This dashboard analyzes Spotify streaming data, featuring artist-specific insights, stream counts, and performance metrics.",
        image: "/portfolio/projects/projects5/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/projects5/index.html",
        featured: true,
        date: "2024-02-28"
    },
    {
        id: 6,
        title: "Street Fighter Character Dashboard",
        description: "Interactive character selection and profile view for Street Fighter characters.",
        image: "/portfolio/projects/project6/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project6/index.html",
        featured: false,
        date: "2024-03-15"
    },
    {
        id: 7,
        title: "Nike Product Dashboard",
        description: "Visualizing Nike products.",
        image: "/portfolio/projects/project7/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project7/index.html",
        featured: false,
        date: "2024-03-30"
    },
    {
        id: 8,
        title: "Superstore Data Cleaning and Organization Project",
        description: "This project demonstrates comprehensive SQL data cleaning and organization techniques.",
        image: "/portfolio/projects/project8/assets/images/Main Image.JPG",
        category: "SQL",
        link: "/portfolio/projects/project8/index.html",
        featured: false,
        date: "2024-04-10"
    },
    {
        id: 9,
        title: "Adventure Works Dashboard",
        description: "Analysis of sales and performance metrics for Adventure Works",
        image: "/portfolio/projects/project9/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project9/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 10,
        title: "Customer Complaint Time Series Analysis",
        description: "Time Series Analyzation of Customer Complaints",
        image: "/portfolio/projects/project10/assets/images/Main Image.JPG",
        category: "Python",
        link: "/portfolio/projects/project10/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 11,
        title: "Air-Miles-Time-Series-Analysis",
        description: "Time Series Analyzation of Air Miles",
        image: "/portfolio/projects/project11/assets/images/Main Image.JPG",
        category: "Python",
        link: "/portfolio/projects/project11/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 12,
        title: "Coffee Shop Revenue Forecasting",
        description: "Time Series Forecasting of Coffee Shop",
        image: "/portfolio/projects/project12/assets/images/Main Image.JPG",
        category: "Python",
        link: "/portfolio/projects/project12/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 13,
        title: "Financial-Statement-Analyze-With-Power-Piviot",
        description: "Financial Statements Analysis",
        image: "/portfolio/projects/project13/assets/images/Main Image.JPG",
        category: "Excel",
        link: "/portfolio/projects/project13/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 14,
        title: "Market-Minds-Customer-Analytics-Dashboard",
        description: "This project showcases a comprehensive customer analytics dashboard",
        image: "/portfolio/projects/project14/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project14/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 15,
        title: "LEGO-Dataset-Dashboard",
        description: "This dashboard allows users to explore and analyze LEGO set data",
        image: "/portfolio/projects/project15/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project15/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 16,
        title: "Credit-Card-Transaction-Analysis-Project",
        description: "This dashboard ocusing on fraud detection, spending patterns, and customer behavior.",
        image: "/portfolio/projects/project16/assets/images/Main Image.JPG",
        category: "SQL",
        link: "/portfolio/projects/project16/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 17,
        title: "Wikipedia-Movie-Scraper",
        description: "A Streamlit-based web application that scrapes movie information from Wikipedia.",
        image: "/portfolio/projects/project17/assets/images/Main Image.JPG",
        category: "Python",
        link: "/portfolio/projects/project17/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 18,
        title: "Infinite-Scroll-Web-Scraper",
        description: "A specialized web scraper built to handle websites with infinite scrolling functionality",
        image: "/portfolio/projects/project18/assets/images/Main Image.JPG",
        category: "Python",
        link: "/portfolio/projects/project18/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 19,
        title: "Books-to-Scrape---Web-Scraper",
        description: "A Python-based web scraper designed to extract book information from Books to Scrape (books.toscrape.com).",
        image: "/portfolio/projects/project19/assets/images/Main Image.JPG",
        category: "Python",
        link: "/portfolio/projects/project19/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 20,
        title: "Financial Dashboard- Streamlit",
        description: "A comprehensive Streamlit-based financial analytics dashboard",
        image: "/portfolio/projects/project20/assets/images/Main Image.JPG",
        category: "Python",
        link: "/portfolio/projects/project20/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 21,
        title: "Toy-Store-KPI-Dashboard",
        description: "This Toy Store KPI Dashboard provides a comprehensive overview of the performance metrics for a toy store, segmented by location",
        image: "/portfolio/projects/project21/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project21/index.html",
        featured: false,
        date: "2024-04-25"
    },
    {
        id: 22,
        title: "Maven Music Analytics Dashboard",
        description: "The Maven Music Challenge Dashboard is an interactive visualization project that replicates the popularity of Spotify Wrapped using Power BI.",
        image: "/portfolio/projects/project22/assets/images/Main Page.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project22/index.html",
        featured: false,
        date: "2025-01-30"
    },
    {
        id: 23,
        title: "Pixar Films Analytics Dashboard 🎬",
        description: "This interactive Power BI dashboard analyzes Pixar's filmography from 1995 to 2020",
        image: "/portfolio/projects/project23/assets/images/Home Page.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project23/index.html",
        featured: false,
        date: "2025-03-30"
    },
    {
        id: 24,
        title: "Logistics & Transport Analytics Dashboard",
        description: "This interactive Power BI dashboard was developed for the ZoomCharts Challenge, focusing on logistics and transportation analytics.",
        image: "/portfolio/projects/project24/assets/images/Home Page.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project24/index.html",
        featured: false,
        date: "2025-03-17"
    },
    {
        id: 25,
        title: "Aurora Bank Credit Card Analysis Dashboard",
        description: "This interactive dashboard provides comprehensive analytics for Aurora Bank's credit card operations. ",
        image: "/portfolio/projects/project25/assets/images/Full Dashbaord.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project25/index.html",
        featured: false,
        date: "2024-12-16"
    },
    {
        id: 26,
        title: "Financial Dashboard Analysis Project",
        description: "This repository contains a comprehensive financial dashboard built with Power BI, designed to provide detailed financial analysis and visualization. ",
        image: "/portfolio/projects/project26/assets/images/Overview.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project26/index.html",
        featured: false,
        date: "2025-03-12"
    },
    {
        id: 27,
        title: "Call Center Analysis Dashboard",
        description: "This minimalist, single-page Power BI dashboard provides comprehensive call center analytics with an intuitive UI/UX design. ",
        image: "/portfolio/projects/project27/assets/images/Dark Mode.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project27/index.html",
        featured: false,
        date: "2025-04-10"
    },
    {
        id: 28,
        title: "Customer Churn Analysis Dashboard",
        description: "This Customer Churn Analysis Dashboard provides telecommunications service providers with comprehensive insights into customer retention metrics. ",
        image: "/portfolio/projects/project28/assets/images/Main Image.JPG",
        category: "PowerBI",
        link: "/portfolio/projects/project28/index.html",
        featured: false,
        date: "2025-04-12"
    }
];

// Define which projects should be featured on the main page (by ID)
const featuredProjectIds = [28, 27, 26, 25, 24, 22, 12, 1]; // These will be shown on main page

// Function to generate dynamic IDs for new projects
function getNextProjectId() {
    if (projectsData.length === 0) return 1;
    return Math.max(...projectsData.map(project => project.id)) + 1;
}

// Function to add a new project with dynamic ID
function addProject(projectData) {
    // Assign the next available ID
    const newProject = {
        id: getNextProjectId(),
        ...projectData
    };
    
    // Add to projects array
    projectsData.push(newProject);
    
    // Reload projects on page if needed
    if (document.querySelector('.projects-grid')) {
        loadProjects();
        updateCategoryStats();
    }
    
    return newProject.id; // Return the assigned ID
}

// Calculate category statistics
function getCategoryStats() {
    const stats = {
        total: projectsData.length,
        categories: {}
    };
    
    // Count projects by category
    projectsData.forEach(project => {
        if (!stats.categories[project.category]) {
            stats.categories[project.category] = 1;
        } else {
            stats.categories[project.category]++;
        }
    });
    
    return stats;
}

// Create category stats cards
function updateCategoryStats() {
    const statsContainer = document.querySelector('.category-stats');
    if (!statsContainer) return;
    
    const stats = getCategoryStats();
    
    // Clear existing stats
    statsContainer.innerHTML = '';
    
    // Create total projects card
    const totalCard = document.createElement('div');
    totalCard.classList.add('stat-card', 'total');
    totalCard.innerHTML = `
        <h3>Total Projects</h3>
        <div class="stat-count">${stats.total}</div>
    `;
    statsContainer.appendChild(totalCard);
    
    // Create cards for each category
    Object.keys(stats.categories).forEach(category => {
        const card = document.createElement('div');
        card.classList.add('stat-card', category);
        
        // Create an icon based on category
        let icon = 'fa-chart-pie';
        if (category === 'Excel') icon = 'fa-magnifying-glass-chart';
        if (category === 'PowerBI') icon = 'fa-chart-line';
        if (category === 'SQL') icon = 'fa-file-lines';
        
        card.innerHTML = `
            <div class="card-icon">
                <i class="fas ${icon}"></i>
            </div>
            <h3>${category.replace('-', ' ')}</h3>
            <div class="stat-count">${stats.categories[category]}</div>
            <button class="filter-trigger" data-filter="${category}">View</button>
        `;
        
        statsContainer.appendChild(card);
    });
    
    // Add event listeners to filter buttons in cards
    document.querySelectorAll('.filter-trigger').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Find and click the corresponding filter button
            const filterButton = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (filterButton) {
                filterButton.click();
                
                // Smooth scroll to projects grid
                document.querySelector('.projects-grid').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load projects into the grid - shows featured projects on main page and all projects on projects page
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Clear any existing content
    projectsGrid.innerHTML = '';
    
    // Check if we're on the main page or projects page
    const isMainPage = !window.location.href.includes('projects.html');
    
    // Sort projects by date (newest first)
    const sortedProjects = [...projectsData].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    
    // Filter projects based on page
    let projectsToShow;
    if (isMainPage) {
        // Get specific featured projects by ID and limit to maximum 5
        projectsToShow = sortedProjects
            .filter(project => featuredProjectIds.includes(project.id))
            .slice(0, 8); // Ensure we never show more than 5 even if more IDs are specified
    } else {
        // Show all projects on projects page
        projectsToShow = sortedProjects;
    }
    
    // Create project cards
    projectsToShow.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.dataset.category = project.category;
        
        if (project.category === 'Excel') {
            projectCard.dataset.type = 'Excel';
        }
        
        // Format date for display
        const displayDate = new Date(project.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
        
        projectCard.innerHTML = `
            <div class="project-media">
                <img src="${project.image}" alt="${project.title}" class="project-image-preview" onerror="this.src='../assets/images/placeholder.jpg'">
                <div class="project-overlay">
                    <div class="project-tags">
                        <span class="project-tag">${project.category.replace('-', ' ')}</span>
                        <span class="project-date">${displayDate}</span>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.link}" class="project-link">
                    View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        // Add click event to the project image
        const projectImage = projectCard.querySelector('.project-image-preview');
        if (projectImage) {
            projectImage.addEventListener('click', function() {
                openImageModal(project.image, project.title);
            });
        }
        
        projectsGrid.appendChild(projectCard);
    });

    // Add a "View All Projects" button if on main page
    if (isMainPage && projectsGrid.parentNode) {
        // Remove existing view all container if it exists
        const existingContainer = projectsGrid.parentNode.querySelector('.view-all-container');
        if (existingContainer) {
            existingContainer.remove();
        }
        
        const viewAllContainer = document.createElement('div');
        viewAllContainer.classList.add('view-all-container');
        viewAllContainer.innerHTML = `
            <a href="projects.html" class="btn btn-secondary">View All Projects</a>
        `;
        
        projectsGrid.parentNode.appendChild(viewAllContainer);
    }
}

// Setup project filtering
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const activeButton = document.querySelector('.filter-btn.active');
            if (activeButton) {
                activeButton.classList.remove('active');
            }
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update the category stats if they exist
            updateCategoryStats();
        });
    });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create category stats container if on projects page
    if (window.location.href.includes('projects.html')) {
        const projectsSection = document.querySelector('.projects-section');
        if (projectsSection) {
            const statsContainer = document.createElement('div');
            statsContainer.classList.add('category-stats');
            
            // Insert stats container after the section title but before filters
            const filtersContainer = document.querySelector('.filters-container');
            if (filtersContainer) {
                projectsSection.insertBefore(statsContainer, filtersContainer);
            } else {
                const sectionTitle = document.querySelector('.section-title');
                if (sectionTitle) {
                    projectsSection.insertBefore(statsContainer, sectionTitle.nextSibling);
                } else {
                    projectsSection.prepend(statsContainer);
                }
            }
        }
    }
    
    loadProjects();
    updateCategoryStats();
    setupFilters();
});

// Export functions to make them available to main.js
// Note: If not using modules, you can remove these exports
if (typeof module !== 'undefined') {
    module.exports = {
        loadProjects,
        setupFilters,
        addProject,
        getNextProjectId,
        getCategoryStats,
        updateCategoryStats
    };
}

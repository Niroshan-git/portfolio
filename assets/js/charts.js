document.addEventListener('DOMContentLoaded', function() {
    // Skills data for radar chart
    const skillsData = {
        labels: ['Data Analysis', 'Crytical Thinking', 'ERP Consultation', 'Visualization', 'Python', 'SQL', 'Power BI'],
        datasets: [{
            label: 'Technical Skills',
            data: [90, 85, 75, 95, 50, 80, 90],
            backgroundColor: 'rgba(67, 97, 238, 0.2)',
            borderColor: 'rgba(67, 97, 238, 1)',
            pointBackgroundColor: 'rgba(67, 97, 238, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(67, 97, 238, 1)'
        }]
    };

    // Create the radar chart
    const radarChart = document.getElementById('radarChart');
    if (radarChart) {
        new Chart(radarChart, {
            type: 'radar',
            data: skillsData,
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            display: false
                        },
                        pointLabels: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 14
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                elements: {
                    line: {
                        borderWidth: 3
                    },
                    point: {
                        radius: 5,
                        hoverRadius: 7
                    }
                },
                responsive: true,
                maintainAspectRatio: true
            }
        });
    }

    // Load skills items
    loadSkillsItems();
});

// Data for skills items
const skillsItems = [
    {
        name: 'Python',
        icon: 'fab fa-python',
        level: 50
    },
    /*
    {
        name: 'R',
        icon: 'fas fa-chart-line',
        level: 
    },*/
    {
        name: 'SQL',
        icon: 'fas fa-database',
        level: 80
    },
    {
        name: 'Tableau',
        icon: 'fas fa-chart-bar',
        level: 80
    },
    {
        name: 'Power BI',
        icon: 'fas fa-chart-pie',
        level: 90
    },
    /*
    {
        name: 'Machine Learning',
        icon: 'fas fa-brain',
        level: 75
    },
    {
        name: 'Statistics',
        icon: 'fas fa-square-root-alt',
        level: 85
    },*/
    {
        name: 'Excel',
        icon: 'fas fa-file-excel',
        level: 95
    },
    {
        name: 'Data Mining',
        icon: 'fas fa-search',
        level: 80
    },
    {
        name: 'Web Analytics',
        icon: 'fas fa-globe',
        level: 85
    },
    {
        name: 'Big Data',
        icon: 'fas fa-server',
        level: 70
    },/*
    {
        name: 'JavaScript',
        icon: 'fab fa-js',
        level: 75
    }*/
];

function loadSkillsItems() {
    const skillsList = document.querySelector('.skills-list');
    if (!skillsList) return;
    
    // Clear existing items if any
    skillsList.innerHTML = '';
    
    // Add new items
    skillsItems.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        
        skillsList.appendChild(skillItem);
    });
}

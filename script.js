// Set current year in footer and handle tabs
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function switchTab(tabName) {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to target button and pane
        const targetButton = document.querySelector(`[data-tab="${tabName}"]`);
        const targetPane = document.getElementById(tabName);
        
        if (targetButton) {
            targetButton.classList.add('active');
        }
        if (targetPane) {
            targetPane.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Handle summary link clicks
    const summaryLinks = document.querySelectorAll('.summary-link');
    summaryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const jobId = this.getAttribute('data-job');
            
            // Switch to experience tab
            switchTab('experience');
            
            // Scroll to the specific job after a short delay to allow tab switch
            setTimeout(() => {
                const jobElement = document.getElementById(`job-${jobId}`);
                if (jobElement) {
                    jobElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    // Add a highlight effect
                    jobElement.style.transition = 'box-shadow 0.3s ease';
                    jobElement.style.boxShadow = '0 0 0 4px rgba(30, 64, 175, 0.3)';
                    setTimeout(() => {
                        jobElement.style.boxShadow = '';
                    }, 2000);
                }
            }, 300);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animation
    document.querySelectorAll('.section').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Trigger initial animation for visible active tab
    const activePane = document.querySelector('.tab-pane.active');
    if (activePane) {
        setTimeout(() => {
            activePane.querySelectorAll('.section').forEach(section => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            });
        }, 100);
    }

    // Print functionality (can be triggered from browser or button)
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('printing');
        // Show all tabs when printing
        tabPanes.forEach(pane => pane.classList.add('active'));
    });

    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
        // Restore original active tab
        const activeButton = document.querySelector('.tab-button.active');
        if (activeButton) {
            const targetTab = activeButton.getAttribute('data-tab');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        }
    });
});

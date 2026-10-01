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

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    const copyContacts = document.querySelectorAll('.copy-contact');

    copyContacts.forEach(contact => {
        contact.addEventListener('click', async function(event) {
            const value = this.getAttribute('data-copy-value');
            const hint = this.querySelector('.copy-hint');

            if (!value || !navigator.clipboard) {
                return;
            }

            event.preventDefault();

            try {
                await navigator.clipboard.writeText(value);
                if (hint) {
                    hint.textContent = 'Copied';
                    window.setTimeout(() => {
                        hint.textContent = 'Click to copy';
                    }, 1400);
                }
            } catch (error) {
                window.location.href = this.href;
            }
        });
    });
});

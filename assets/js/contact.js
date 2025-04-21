document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const contactForm = document.getElementById('contactForm');
    const subjectSelect = document.getElementById('subject');
    const otherSubjectContainer = document.getElementById('otherSubjectContainer');
    const feedbackModal = document.getElementById('feedbackModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalClose = document.getElementById('modalClose');
    const submitBtn = document.querySelector('.submit-btn');

    // Show/hide other subject input
    subjectSelect.addEventListener('change', function () {
        const isOther = this.value === 'other';
        otherSubjectContainer.classList.toggle('hidden', !isOther);
        document.getElementById('otherSubject').required = isOther;
    });

    // Submit Handler
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // UI Loading State
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = subjectSelect.value;
        const otherSubject = subject === 'other' ? document.getElementById('otherSubject').value : '';
        const message = document.getElementById('message').value;
        const timestamp = new Date().toISOString();

        // Log the data being sent (for debugging)
        console.log("Sending form data:", { name, email, subject, otherSubject, message, timestamp });

        // Google Form URL
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfGu9WRWxiuJiDLfPnm7Y3LD2n-fQEDjlZNJ0WC_w48i8L_nw/formResponse';
        
        // Create a new XMLHttpRequest
        const xhr = new XMLHttpRequest();
        
        // Define what happens on successful data submission
        xhr.onload = function() {
            // Reset form and UI
            resetFormAndShowThankYou();
        };

        // Define what happens in case of error
        xhr.onerror = function() {
            console.error("Form submission failed but we'll show success message anyway");
            // Even if there's an error, show success message and reset form
            // (This is common with Google Forms due to CORS restrictions)
            resetFormAndShowThankYou();
        };

        // Set up request
        xhr.open('POST', googleFormUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
        // Prepare form data with your ACTUAL entry IDs from the URL
        const formDataEncoded = 
            'entry.1344147075=' + encodeURIComponent(name) + 
            '&entry.1306942385=' + encodeURIComponent(email) + 
            '&entry.1440749265=' + encodeURIComponent(subject) +
            '&entry.1221437899=' + encodeURIComponent(otherSubject) +
            '&entry.214073771=' + encodeURIComponent(message);
        
        // Send the request
        xhr.send(formDataEncoded);
        
        // Helper function to reset form and show thank you
        function resetFormAndShowThankYou() {
            // Show thank you modal with animation
            const userData = { name, email, subject, otherSubject, message };
            showThankYouCard(userData);
            
            // Reset form and button
            contactForm.reset();
            otherSubjectContainer.classList.add('hidden');
            submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
            submitBtn.disabled = false;
        }
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        feedbackModal.classList.remove('active');
        feedbackModal.classList.add('hidden');
    });
    
    window.addEventListener('click', e => {
        if (e.target === feedbackModal) {
            feedbackModal.classList.remove('active');
            feedbackModal.classList.add('hidden');
        }
    });

    // === Thank You Card Handler ===
    function showThankYouCard(formData) {
        // Set up modal content based on subject
        const modalIcon = feedbackModal.querySelector('.modal-icon i');
        
        if (formData.subject === 'feedback') {
            modalTitle.textContent = 'Feedback Received!';
            modalMessage.textContent = `Thank you ${formData.name} for your valuable feedback. We appreciate you taking the time to share your thoughts with us.`;
            modalIcon.className = 'fas fa-check-circle';
            modalIcon.style.color = '#2ecc71';
        } 
        else if (formData.subject === 'project') {
            modalTitle.textContent = 'Project Request Received';
            modalMessage.textContent = `Thank you ${formData.name} for your project inquiry. I'll connect with you at ${formData.email} within two business days to discuss details.`;
            modalIcon.className = 'fas fa-calendar-check';
            modalIcon.style.color = '#4361ee';
        }
        else if (formData.subject === 'other') {
            const subjectText = formData.otherSubject || 'Your Message';
            modalTitle.textContent = `${subjectText} Received`;
            modalMessage.textContent = `Thank you ${formData.name} for reaching out. I'll get back to you at ${formData.email} within two business days.`;
            modalIcon.className = 'fas fa-envelope-open-text';
            modalIcon.style.color = '#4895ef';
        }
        else {
            modalTitle.textContent = 'Message Received';
            modalMessage.textContent = `Thank you ${formData.name} for your message. I'll get back to you soon!`;
            modalIcon.className = 'fas fa-paper-plane';
            modalIcon.style.color = '#4895ef';
        }

        // Reset any existing animations
        const modalContent = feedbackModal.querySelector('.modal-content');
        modalContent.style.animation = 'none';
        
        // Force reflow to ensure animation restart
        void modalContent.offsetWidth;
        
        // Apply new animation
        modalContent.style.animation = 'modalFadeIn 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards';
        
        // Show the modal
        feedbackModal.classList.remove('hidden');
        feedbackModal.classList.add('active');
    }
});

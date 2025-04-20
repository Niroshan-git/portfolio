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

        // Gather form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: subjectSelect.value,
            otherSubject: subjectSelect.value === 'other' ? document.getElementById('otherSubject').value : null,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Process the submission (with a slight delay to show the loading state)
        setTimeout(() => {
            handleFormSubmission(formData);
        }, 800);
    });

    // Close modal
    modalClose.addEventListener('click', () => feedbackModal.classList.remove('active'));
    window.addEventListener('click', e => {
        if (e.target === feedbackModal) feedbackModal.classList.remove('active');
    });

    // === Main Submission Handler ===
    function handleFormSubmission(data) {
        // Store in localStorage
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        submissions.push(data);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        // Save data to JSON file in the background
        downloadJsonFile(submissions, 'contact_submissions.json');

        // Show the thank you card
        showThankYouCard(data);
        
        // Reset form
        contactForm.reset();
        otherSubjectContainer.classList.add('hidden');
        submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
    }

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
        
        // Force reflow
        void modalContent.offsetWidth;
        
        // Apply new animation
        modalContent.style.animation = 'modalFadeIn 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards';
        
        // Show the modal
        feedbackModal.classList.remove('hidden');
        feedbackModal.classList.add('active');
    }

    // === Silent JSON File Download ===
    function downloadJsonFile(data, filename) {
        try {
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error saving submissions:', error);
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create email body with formatted content
        const emailBody = `
Name: ${name}
Phone: ${phone}
Subject: ${subject}

Message:
${message}

---
This email was sent via Palm Eco Alliance Contact Form
        `.trim();

        // Create mailto link with all fields
        const mailtoLink = `mailto:palmecoalliance@gmail.com?subject=${encodeURIComponent(`Website Contact: ${subject}`)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success modal
        successModal.style.display = 'block';
        contactForm.reset();
    });

    // Close modal when clicking X or outside
    closeModal.onclick = function() {
        successModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == successModal) {
            successModal.style.display = 'none';
        }
    }
}); 
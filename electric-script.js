// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation (you'll need a backend for actual submission)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) { // Check if the form exists
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields.');
                return;
            }

            //  In a real application, you'd send the data to a server here.
            //  For this example, we'll just log the data and show a success message.
            console.log('Form Data:', { name, email, message });
            alert('Thank you! Your message has been sent (simulated).');
            contactForm.reset(); // Clear the form
        });
    }
});
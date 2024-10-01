// Example JavaScript for the Contact Form
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can use AJAX or fetch to send this data to a server-side script
    // for processing (e.g., storing the message in a database)
    console.log('Form submitted:', { name, email, message });

    // You can also provide feedback to the user (e.g., a success message)
    alert('Mesajınız göndərildi!');
});
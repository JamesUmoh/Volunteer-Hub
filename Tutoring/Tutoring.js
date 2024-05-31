document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! We have received your message:\n\n"${message}"\n\nWe will get back to you at ${email}.`);

    document.getElementById('contactForm').reset();
});

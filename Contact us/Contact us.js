document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var responseMessage = document.getElementById('responseMessage');

    if(name && email && message) {
        responseMessage.style.color = 'green';
        responseMessage.textContent = 'Thank you for your message, ' + name + '!';
        this.reset();
    } else {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please fill in all fields.';
    }
});

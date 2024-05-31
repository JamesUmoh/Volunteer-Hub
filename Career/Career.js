function signUp(opportunity) {
    alert(`Thank you for signing up for the ${opportunity} opportunity!`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donation-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const amount = form.amount.value;

        if (name && email && amount) {
            thankYouMessage.style.display = 'block';
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;

    // Here you could add code to process the donation

    // Display thank you message
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = `Thank you, ${name}, for your generous donation of $${amount}!`;
    thankYouMessage.classList.remove('hidden');
});

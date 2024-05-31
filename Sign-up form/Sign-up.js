document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    var Username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = `Thank You, ${Username}, for Signing-up!`;
    thankYouMessage.classList.remove('hidden');
})
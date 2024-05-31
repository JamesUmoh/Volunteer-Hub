document.addEventListener('DOMContentLoaded', function() {
    var learnMoreBtn = document.getElementById('learnMoreBtn');
    var moreInfo = document.getElementById('moreInfo');

    learnMoreBtn.addEventListener('click', function() {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            learnMoreBtn.textContent = 'Show Less';
        } else {
            moreInfo.classList.add('hidden');
            learnMoreBtn.textContent = 'Learn More';
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
        form.reset();
    });
});


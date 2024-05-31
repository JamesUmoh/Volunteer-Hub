document.getElementById('planForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const preferences = document.getElementById('preferences').value;

    fetch('/find-plan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, age, preferences })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Suggested Plan: ${data.plan}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Your Preferences is noted. We will responds as fast as possible.';
    });
});

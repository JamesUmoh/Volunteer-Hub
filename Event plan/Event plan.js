// script.js
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventImage = document.getElementById('eventImage').files[0];
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const eventImageElement = document.createElement('img');
        eventImageElement.src = e.target.result;
        eventCard.appendChild(eventImageElement);

        const eventInfo = document.createElement('div');
        eventInfo.innerHTML = `
            <h3>${eventName}</h3>
            <p>${eventDate} at ${eventTime}</p>
        `;
        eventCard.appendChild(eventInfo);

        document.getElementById('eventsContainer').appendChild(eventCard);

        // Reset the form
        document.getElementById('eventForm').reset();
    };
    reader.readAsDataURL(eventImage);
});

// script.js

// Example: Simple image gallery functionality

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".project img");
    images.forEach(image => {
        image.addEventListener("click", function() {
            openModal(image.src);
        });
    });
});

function openModal(src) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="${src}" alt="Large Image">
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
        document.body.removeChild(modal);
    });
}

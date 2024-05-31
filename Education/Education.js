document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll("#gallery img");

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            alert("Thank you for your interest in our volunteer program!");
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".lightbox-trigger");
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img src="" alt="Enlarged Image">
    `;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector("img");
    const closeBtn = overlay.querySelector(".close-lightbox");

    // Open Lightbox
    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const imgSrc = trigger.getAttribute("data-fullsize");
            overlayImg.src = imgSrc;
            overlay.style.display = "flex";
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay || e.target === closeBtn) {
            overlay.style.display = "none";
        }
    });
});


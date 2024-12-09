document.addEventListener("DOMContentLoaded", function () {
    // Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error("Contact form not found!");
    } else {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for your message!');
            this.reset();
        });
    }

    // Lightbox functionality
    const triggers = document.querySelectorAll(".lightbox-trigger");
    if (triggers.length === 0) {
        console.warn("No lightbox triggers found!");
    }

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

    // Scroll to about section and trigger animation
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.querySelector('#about');

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Add the 'animate' class to trigger the animation
            setTimeout(function() {
                aboutSection.classList.add('animate');
            }, 300); // Small delay to make sure the scroll happens before animation starts
        });
    }
});

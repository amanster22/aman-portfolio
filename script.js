// Scroll to the top of the page when it is loaded or refreshed
window.onload = function() {
    window.scrollTo(0, 0); // Scroll to the top of the page
};

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor link behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);

        // Call the smooth scroll function
        smoothScrollTo(targetElement, 250); // 250ms scroll duration
    });
});

// Function to scroll smoothly to the target element
function smoothScrollTo(target, duration) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    // Animation function to perform smooth scroll
    function animation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't go over 1

        // Calculate the current position based on progress
        window.scrollTo(0, startPosition + distance * progress);

        // If the scroll isn't finished, continue the animation
        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    }

    // Start the animation
    requestAnimationFrame(animation);
}

// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const triggers = document.querySelectorAll('.lightbox-trigger');

// Open the lightbox when an image is clicked
triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImage.src = this.src;
    });
});

// Close the lightbox when the "X" button is clicked
lightboxClose.addEventListener('click', function () {
    lightbox.style.display = 'none';
    lightboxImage.src = ''; // Clear the image source
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImage.src = '';
    }
});


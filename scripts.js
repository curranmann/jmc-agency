// Navbar Scroll Effect
document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#f5f5f5';
    } else {
        navbar.style.backgroundColor = '#fff';
    }
});

// Placeholder for additional functionality (e.g., testimonial slider, FAQ toggles)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully.');
    // Add more interactive features here as needed
});

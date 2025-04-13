document.addEventListener('DOMContentLoaded', function() {
    // Toggle Mobile Menu
    window.toggleMenu = function() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu after click
            if(window.innerWidth <= 768) {
                document.getElementById('navLinks').classList.remove('active');
            }
        });
    });

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 50) {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = 'none';
        }
    });
});
var typed= new Typed(".text", {
    strings: ["Web Developer", "Frontend Developer", "UI/UX Designer"],
    typeSpeed: 95,
    backSpeed: 95,
    backDelay: 1000,
    loop: true
});

// Navbar active state on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

function activeNavOnScroll() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if we're at the bottom of the page
    if (scrollY + windowHeight >= documentHeight - 50) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#contact') {
                link.classList.add('active');
            }
        });
        return;
    }
    
    // Normal section detection
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    if (currentSection) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

window.addEventListener('scroll', activeNavOnScroll);

// Set home as active on page load
window.addEventListener('load', () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
        }
    });
});

// Web3Forms Contact Form Handler
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const formResponse = document.getElementById('form-response');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        formResponse.style.display = 'none';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            // Send to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Success message
                formResponse.style.display = 'block';
                formResponse.style.backgroundColor = 'rgba(0, 234, 255, 0.1)';
                formResponse.style.color = '#00eaff';
                formResponse.style.border = '1px solid #00eaff';
                formResponse.innerHTML = '<i class="bx bx-check-circle"></i> Message sent successfully! I will get back to you soon.';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formResponse.style.display = 'none';
                }, 5000);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            // Error message
            formResponse.style.display = 'block';
            formResponse.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            formResponse.style.color = '#ff4444';
            formResponse.style.border = '1px solid #ff4444';
            formResponse.innerHTML = '<i class="bx bx-error-circle"></i> Failed to send message. Please try again or email me directly.';
            
            console.error('Form submission error:', error);
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            btnText.textContent = 'Send Message';
        }
    });
}


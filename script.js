// Hamburger menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Visit Github button
const visitBtn = document.querySelector('.visit-btn');
if (visitBtn) {
    visitBtn.addEventListener('click', () => {
        window.open('https://github.com/raushan8676', '_blank');
    });
}

// CV Download button
const cvBtn = document.querySelectorAll('.btn')[0];
if (cvBtn && cvBtn.textContent.trim() === 'CV Download') {
    cvBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'CV.pdf';
        link.download = 'Raushan_Kumar_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Contact button - scroll to contact section
const contactBtn = document.querySelectorAll('.btn')[1];
if (contactBtn && contactBtn.textContent.trim() === 'Contact') {
    contactBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// Social media links
const socialIcons = document.querySelectorAll('.socials i');
socialIcons.forEach((icon, index) => {
    icon.style.cursor = 'pointer';
    if (icon.classList.contains('fa-github')) {
        icon.addEventListener('click', () => {
            window.open('https://github.com/raushan8676', '_blank');
        });
    } else if (icon.classList.contains('fa-linkedin')) {
        icon.addEventListener('click', () => {
            window.open('https://www.linkedin.com/in/raushan-kumar-62056rk/', '_blank');
        });
    }
});

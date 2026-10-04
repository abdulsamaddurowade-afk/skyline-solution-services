document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Switch
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    const setMenuOpen = (open) => {
        navLinks.classList.toggle('active', open);
        mobileMenu.classList.toggle('toggle-animation', open);
        mobileMenu.setAttribute('aria-expanded', String(open));
    };

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            setMenuOpen(!navLinks.classList.contains('active'));
        });

        // Close menu when clicking a link on mobile
        navItems.forEach(link => {
            link.addEventListener('click', () => setMenuOpen(false));
        });

        // Close menu with the Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        });
    }

    // 2. Dynamic Highlighting for Navigation Links on Scroll
    // Only sections with an id have a matching nav link
    const sections = document.querySelectorAll('section[id]');

    const highlightCurrentSection = () => {
        let current = sections.length ? sections[0].id : '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) {
                current = section.id;
            }
        });

        // At the very bottom the last section may be too short to reach the top
        if (sections.length && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            current = sections[sections.length - 1].id;
        }

        navItems.forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === `#${current}`);
        });
    };

    // Run at most once per frame while scrolling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            highlightCurrentSection();
            ticking = false;
        });
    }, { passive: true });

    highlightCurrentSection();

    // 3. Request Form (no backend yet: hands the request to the visitor's email app)
    const CONTACT_EMAIL = 'sky.ss.info@gmail.com';
    const rfqForm = document.getElementById('rfqForm');
    const formStatus = document.getElementById('formStatus');

    if (rfqForm) {
        rfqForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload

            const serviceSelect = document.getElementById('service');
            const formData = {
                fullName: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                service: serviceSelect.options[serviceSelect.selectedIndex].text,
                message: document.getElementById('message').value.trim()
            };

            const subject = `Website enquiry: ${formData.service}`;
            const body = [
                `Name: ${formData.fullName}`,
                `Email: ${formData.email}`,
                `Requested service: ${formData.service}`,
                '',
                formData.message
            ].join('\n');

            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // UI Feedback notification
            if (formStatus) {
                formStatus.textContent = `Thank you, ${formData.fullName}! Your email app should open with your request ready to send. If it doesn't, please email us at ${CONTACT_EMAIL}.`;
            }
        });
    }
});

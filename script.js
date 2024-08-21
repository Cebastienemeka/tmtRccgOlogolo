const mainMenu = document.querySelector('.nav');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.open');
const navItems = document.querySelectorAll('.nav li a');

openMenu.addEventListener('click', () => toggleMenu(true));
closeMenu.addEventListener('click', () => toggleMenu(false));

function toggleMenu(open) {
    mainMenu.style.top = open ? '0' : '-100%';
    openMenu.style.display = open ? 'none' : 'block';
    closeMenu.style.display = open ? 'block' : 'none';

    // Toggle class to show/hide the navigation menu
    mainMenu.classList.toggle('active', open);

    // Add or remove event listeners based on the menu state
    if (open) {
        navItems.forEach((item) => {
            item.addEventListener('click', scrollToSection);
        });
    } else {
        navItems.forEach((item) => {
            item.removeEventListener('click', scrollToSection);
        });
    }
}

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Smooth scrolling to the target section
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Close the menu after clicking on a navigation item
        toggleMenu(false);
    }
}



// Select the header element
const header = document.querySelector('header');

// Define the height at which the header becomes fixed
const scrollHeightToShowHeader = 200; // Adjust this value as needed

// Function to toggle the class based on scroll position
function toggleFixedHeader() {
    if (window.scrollY > scrollHeightToShowHeader) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', toggleFixedHeader);
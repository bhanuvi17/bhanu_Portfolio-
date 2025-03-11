const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()

document.addEventListener("mousemove", function (e) {
    let cursor = document.querySelector(".magic-cursor");
    
    // Get mouse position
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Move the cursor position based on mouse position
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    // Calculate depth effect: Make it move slightly (parallax effect)
    let distanceX = (mouseX / window.innerWidth) * 10 - 5;  // Horizontal movement
    let distanceY = (mouseY / window.innerHeight) * 10 - 5; // Vertical movement

    // Scale the cursor based on movement to simulate depth
    let scale = 1 + (Math.abs(distanceX) + Math.abs(distanceY)) / 100;

    // Apply transform: move (translate) and scale the cursor for 4D effect
    cursor.style.transform = `translate(-50%, -50%) translate(${distanceX}px, ${distanceY}px) scale(${scale})`;
});



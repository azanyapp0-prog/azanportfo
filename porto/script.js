// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// ================================
// CLOSE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================================
// NAVBAR SCROLL EFFECT
// ================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================================
// CURRENT YEAR
// ================================

const year = new Date().getFullYear();

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.innerHTML = `© ${year} AZAN.DEV`;
}
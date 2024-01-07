/* ----------------------- Scroll section active link ----------------------- */
let sections = document.querySelectorAll('Section');
let navLinks = document.querySelectorAll('header nav a');

const icon = document.getElementById("dm-icon");

icon.onclick = function darkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icon.firstChild.className = "bx bx-sun";
    }
    else {
        icon.firstChild.className = "bx bxs-moon";
    }
 }

 const homeButton = document.getElementById("home-bar");
 const homeSection = document.getElementById("home");
 const aboutButton = document.getElementById("about-bar");
 const aboutSection = document.getElementById("about");
 const portfolioButton = document.getElementById("portfolio-bar");
 const portfolioSection = document.getElementById("portfolio");
 const contactButton = document.getElementById("contact-bar");
 const contactSection = document.getElementById("contact");

 homeButton.onclick = function home() {
    aboutSection.style.visibility = "hidden";
    aboutSection.style.opacity = "0";
    portfolioSection.style.visibility = "hidden";
    portfolioSection.style.opacity = "0";
    contactSection.style.visibility = "hidden";
    contactSection.style.opacity = "0";
    navLinks.forEach(links => {
        links.classList.remove('active');
        homeButton.classList.add('active');
    })
 }

 aboutButton.onclick = function about() {
    aboutSection.style.visibility = "visible";
    aboutSection.style.opacity = "1";
    portfolioSection.style.visibility = "hidden";
    portfolioSection.style.opacity = "0";
    contactSection.style.visibility = "hidden";
    contactSection.style.opacity = "0";
    navLinks.forEach(links => {
        links.classList.remove('active');
        aboutButton.classList.add('active');
    })
 }

 portfolioButton.onclick = function portfolio() {
    aboutSection.style.visibility = "hidden";
    aboutSection.style.opacity = "0";
    portfolioSection.style.visibility = "visible";
    portfolioSection.style.opacity = "1";
    contactSection.style.visibility = "hidden";
    contactSection.style.opacity = "0";
    navLinks.forEach(links => {
        links.classList.remove('active');
        portfolioButton.classList.add('active');
    })
 }

 contactButton.onclick = function contact() {
    portfolioSection.style.visibility = "hidden";
    portfolioSection.style.opacity = "0";
    aboutSection.style.visibility = "hidden";
    aboutSection.style.opacity = "0";
    contactSection.style.visibility = "visible";
    contactSection.style.opacity = "1";
    navLinks.forEach(links => {
        links.classList.remove('active');
        contactButton.classList.add('active');
    })
 }
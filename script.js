/* ----------------------- Scroll section active link ----------------------- */
let sections = document.querySelectorAll('Section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });
};

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
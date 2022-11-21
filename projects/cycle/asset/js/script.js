//--Show Menu--//
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav_link'),
    navMenu = document.getElementById('nav-menu');

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


//--Scroll on Active Link--//

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 400;
        sectionId = current.getAttribute("id");

        /*
        - Add and remove class .active 
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active_link");
        } else {
            document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active_link");
        }
    });
}

window.onscroll = () => {
    const nav = document.querySelector('#header');
    if (this.scrollY <= 10) nav.className = 'header';
    else nav.className = 'header-scroll';
};

/*
 - Testimonial sliders
 */

const slide = document.getElementById("slide");
const left = document.getElementById("left");
const right = document.getElementById("right");

let x = 0;

left.onclick = function() {
    if (x > "-900") {
        x = x - 300;
        slide.style.top = x + "px";
    }
}

right.onclick = function() {
    if (x < "0") {
        x = x + 300;
        slide.style.top = x + "px";
    }
}
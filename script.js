// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}   

// Scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

//Scroll reveal animation
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .skills-container, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed js

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".multiple-text", {
        strings: ["Web Developer", "App Developer", "Web Designer", "Programmer"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});

// Ensure MixItUp is properly initialized
let mixerProject = mixitup('.project-container', {
    selectors: {    
        target : '.project-card'
    },
    animation: {
        duration: 300
    }
});

//link active work
const linkWork = document.querySelectorAll('.project-item');

function activeWork() {
        linkWork.forEach(l => l.classList.remove('active-work'));
        this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

//project popup
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('project-button')) {
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
})

function toggleProjectPopup() {
    document.querySelector('.project-popup').classList.toggle('open'); 
}

document.querySelector('.project-popup-close').addEventListener('click', toggleProjectPopup);

function projectItemDetails(projectItem) {
    document.querySelector('.pp-thumbnail img').src = projectItem.querySelector('.project-img').src;
    document.querySelector('.project-popup-subtitles span').innerHTML = projectItem.querySelector('.project-title').innerHTML;
    document.querySelector('.project-popup-body').innerHTML = projectItem.querySelector('.project-item-details').innerHTML;
}   
        
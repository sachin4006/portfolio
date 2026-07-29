/* ======================================================
   main.js
   Modern Portfolio Interactions
====================================================== */

/* ================= PRELOADER ================= */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    }, 700);
});

/* ================= THEME ================= */

const body = document.body;
const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

/* ================= TYPING EFFECT ================= */

const typingElement = document.getElementById("typing");

const words = [

    "BCA Student",

    "Full Stack Developer",

    "Frontend Developer",

    "Software Engineering Enthusiast",

    "Problem Solver",

    "AI Learner"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 40 : 90
    );

}

typingEffect();

/* ================= HEADER SHADOW ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(

    ".section-title, .glass-card, .skill-card, .project-card, .timeline-item, .stat-card, .contact-info, .contact-form"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(el=>{

el.classList.add("show");



});

/* ================= COUNTERS ================= */

const counters =
document.querySelectorAll(".stat-card h3");

const counterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},

{threshold:.5}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

function animateCounter(counter){

const value=counter.innerText;

const num=parseInt(value);

if(isNaN(num)) return;

let start=0;

const speed=25;

const update=()=>{

start++;

counter.innerText=start+"+";

if(start<num){

setTimeout(update,speed);

}else{

counter.innerText=value;

}

};

update();

}

/* ================= SCROLL TO TOP ================= */

const scrollTopBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTopBtn.classList.add("visible");

}else{

scrollTopBtn.classList.remove("visible");

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ================= FLOATING PROFILE ================= */

const profile =
document.querySelector(".profile-card");

window.addEventListener("mousemove",(e)=>{

const x=
(window.innerWidth/2-e.clientX)/45;

const y=
(window.innerHeight/2-e.clientY)/45;

profile.style.transform=

`rotateY(${x}deg)
 rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave",()=>{

profile.style.transform=
"rotateY(0deg) rotateX(0deg)";

});

/* ================= CONTACT ================= */

const form =
document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your message has been received."
);

form.reset();

});

/* ================= PARALLAX ================= */

window.addEventListener("scroll",()=>{

const hero =
document.querySelector(".hero");

hero.style.backgroundPositionY=

window.scrollY*0.3+"px";

});

/* ================= SMOOTH APPEAR ================= */

document.querySelectorAll(".hidden").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(45px)";

});

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(45px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.nav-links a.active{

color:#6366f1;

}

#scrollTop{

position:fixed;

right:25px;

bottom:25px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#6366f1;

color:#fff;

cursor:pointer;

font-size:20px;

opacity:0;

pointer-events:none;

transition:.3s;

box-shadow:0 10px 30px rgba(0,0,0,.25);

}

#scrollTop.visible{

opacity:1;

pointer-events:auto;

}

`;

document.head.appendChild(style);

console.log(
"%cPortfolio Loaded Successfully 🚀",
"color:#6366f1;font-size:18px;font-weight:bold;"
);

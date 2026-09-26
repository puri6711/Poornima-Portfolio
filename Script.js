// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Data Science Student",
    "Aspiring Data Analyst",
    "Python & SQL Learner",
    "Machine Learning Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// MOUSE GLOW
// =========================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


// =========================
// PROFILE 3D EFFECT
// =========================

const profileCard = document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener("mousemove", (event) => {

        const rect = profileCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        profileCard.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    profileCard.addEventListener("mouseleave", () => {

        profileCard.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

}


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
    document.querySelectorAll(
        ".reveal, .skill-card, .project-card"
    );

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// PARTICLES
// =========================

const particleContainer =
    document.querySelector(".particles");

if (particleContainer) {

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.style.position = "absolute";
        particle.style.width = "3px";
        particle.style.height = "3px";
        particle.style.borderRadius = "50%";
        particle.style.background = "rgba(139, 92, 246, 0.5)";
        particle.style.left =
            Math.random() * 100 + "%";
        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animation =
            `floatParticle ${
                4 + Math.random() * 6
            }s infinite ease-in-out`;

        particleContainer.appendChild(particle);
    }
}


// =========================
// FOOTER YEAR
// =========================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
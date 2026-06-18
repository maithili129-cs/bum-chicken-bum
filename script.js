```javascript
/* =========================
   AOS ANIMATION
========================= */

AOS.init({
    duration: 1000,
    once: true
});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.4)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener("submit",
function(e){

    e.preventDefault();

    alert(
      "Thank you for contacting BUM CHICKEN BUM! 🍗"
    );

    contactForm.reset();

});


/* =========================
   MENU CARD HOVER EFFECT
========================= */

const menuCards =
document.querySelectorAll(".menu-card");

menuCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


/* =========================
   HERO BUTTON ANIMATION
========================= */

const heroButtons =
document.querySelectorAll(
".btn-primary, .btn-secondary"
);

heroButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition =
        "0.3s ease";

    });

});


console.log(
"BUM CHICKEN BUM Website Loaded Successfully 🍗🔥"
);
```

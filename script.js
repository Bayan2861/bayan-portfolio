const text = "Bayan Alyousef";
const typingElement = document.querySelector(".typing");

let index = 0;
let isDeleting = false;

function typeEffect() {

    if(!isDeleting){
        typingElement.textContent = text.substring(0, index);
        index++;

        if(index > text.length){
            isDeleting = true;

            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent = text.substring(0, index);
        index--;

        if(index < 0){
            isDeleting = false;
            index = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }

    else{
        navbar.classList.remove("scrolled");
    }

});
```javascript
// ================================
// MENU MOBILE
// ================================

function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}


// ================================
// FECHAR MENU AO CLICAR
// ================================

const links = document.querySelectorAll("#menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("active");

    });

});


// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


function goTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ================================
// ANIMAÇÃO DOS ELEMENTOS
// ================================

const elements = document.querySelectorAll(
    ".game-card, .curiosity, .timeline-item, .year-card"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "all 0.7s ease";

    observer.observe(element);

});
```

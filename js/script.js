const elementos = document.querySelectorAll(".oculto");

const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.15
});

elementos.forEach((el)=>{

    observer.observe(el);

});
const imagenes = document.querySelectorAll(".imagenes img");

const lightbox = document.getElementById("lightbox");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.querySelector(".cerrar");

imagenes.forEach((img)=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";
        imagenGrande.src=img.src;

    });

});

cerrar.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
const contadores = document.querySelectorAll(".contador");

const observerContadores = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const contador = entry.target;
        const objetivo = +contador.dataset.numero;

        let numero = 0;

        const incremento = objetivo / 80;

        const actualizar = () => {

            numero += incremento;

            if (numero < objetivo) {

                contador.textContent = Math.floor(numero);

                requestAnimationFrame(actualizar);

            } else {

                contador.textContent = objetivo;

            }

        };

        actualizar();

        observerContadores.unobserve(contador);

    });

}, { threshold: .5 });

contadores.forEach(c => observerContadores.observe(c));
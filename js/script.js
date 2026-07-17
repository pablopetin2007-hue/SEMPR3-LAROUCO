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
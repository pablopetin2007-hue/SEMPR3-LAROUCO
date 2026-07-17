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
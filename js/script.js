// Botón volver arriba

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        btnTop.style.display = "block";

    }else{

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
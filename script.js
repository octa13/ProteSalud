/* MENU */

const menuBtn = document.getElementById("encabezado__boton-menu");
const nav = document.getElementById("encabezado__navegacion");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("activo");
});


/* HERO */

const slides = document.querySelectorAll(".hero__slide");
const indicadores = document.querySelectorAll(".hero__indicador");

/*const btnAnterior = document.querySelector(".hero__flecha--anterior");
const btnSiguiente = document.querySelector(".hero__flecha--siguiente");*/

let indiceActual = 0;

function mostrarSlide(indice){

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    indicadores.forEach(indicador => {
        indicador.classList.remove("activo");
    });

    slides[indice].classList.add("activo");
    indicadores[indice].classList.add("activo");

}

function siguienteSlide(){

    indiceActual++;

    if(indiceActual >= slides.length){
        indiceActual = 0;
    }

    mostrarSlide(indiceActual);

}

function anteriorSlide(){

    indiceActual--;

    if(indiceActual < 0){
        indiceActual = slides.length - 1;
    }

    mostrarSlide(indiceActual);

}

/*btnSiguiente.addEventListener("click", siguienteSlide);
btnAnterior.addEventListener("click", anteriorSlide);*/

indicadores.forEach((indicador, indice)=>{

    indicador.addEventListener("click", ()=>{

        indiceActual = indice;

        mostrarSlide(indiceActual);

    });

});

setInterval(siguienteSlide, 5000);


/* PRODUCTOS CARRUSEL (CORREGIDO) */

const trackProd = document.querySelector(".productos__track");
const slidesProd = document.querySelectorAll(".productos__slide");
const btnAnteriorProd = document.querySelector(".productos__flecha--anterior");
const btnSiguienteProd = document.querySelector(".productos__flecha--siguiente");

let indiceProd = 0;

function actualizarCarruselProductos(){
    trackProd.style.transform = `translateX(-${indiceProd * 100}%)`;
}

btnSiguienteProd.addEventListener("click", () => {
    indiceProd++;

    if(indiceProd >= slidesProd.length){
        indiceProd = 0;
    }

    actualizarCarruselProductos();
});

btnAnteriorProd.addEventListener("click", () => {
    indiceProd--;

    if(indiceProd < 0){
        indiceProd = slidesProd.length - 1;
    }

    actualizarCarruselProductos();
});


/*carrusel tactil*/
let inicioX = 0;
let finX = 0;

const carrusel = document.querySelector(".productos__carrusel");

carrusel.addEventListener("touchstart", (e) => {
    inicioX = e.changedTouches[0].screenX;
});

carrusel.addEventListener("touchend", (e) => {

    finX = e.changedTouches[0].screenX;

    manejarSwipe();

});


function manejarSwipe(){

    const diferencia = inicioX - finX;

    if(diferencia > 50){

        indiceProd++;

        if(indiceProd >= slidesProd.length){
            indiceProd = 0;
        }

        actualizarCarruselProductos();

    }

    if(diferencia < -50){

        indiceProd--;

        if(indiceProd < 0){
            indiceProd = slidesProd.length - 1;
        }

        actualizarCarruselProductos();

    }

}
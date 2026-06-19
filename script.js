/* MENU */

const menuBtn = document.getElementById("encabezado__boton-menu");
const nav = document.getElementById("encabezado__navegacion");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("activo");
});






/*ENCABEZADO*/

const encabezado = document.querySelector(".encabezado");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        encabezado.classList.add("scrolled");

    }else{

        encabezado.classList.remove("scrolled");

    }

});








/*SUB MENU*/

const submenu = document.querySelector('.submenu');
const botonSubmenu = document.querySelector('.submenu__boton');

botonSubmenu.addEventListener('click', () => {

    submenu.classList.toggle('activo');

});







/* HERO */

const slides = document.querySelectorAll(".hero__slide");
const indicadores = document.querySelectorAll(".hero__indicador");

const btnAnterior = document.querySelector(".hero__flecha--anterior");
const btnSiguiente = document.querySelector(".hero__flecha--siguiente");

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

btnSiguiente.addEventListener("click", siguienteSlide);
btnAnterior.addEventListener("click", anteriorSlide);

indicadores.forEach((indicador, indice)=>{

    indicador.addEventListener("click", ()=>{

        indiceActual = indice;

        mostrarSlide(indiceActual);

    });

});

setInterval(siguienteSlide, 5000);




/* HERO TÁCTIL MEJORADO */

let touchStartX = 0;
let touchEndX = 0;

let swipeBloqueado = false;

const carruselHero = document.querySelector(".hero__carrusel");

carruselHero.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

carruselHero.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    manejarSwipeHero();

});

function manejarSwipeHero(){

    if(swipeBloqueado){
        return;
    }

    const distancia = touchEndX - touchStartX;

    if(Math.abs(distancia) < 120){
        return;
    }

    swipeBloqueado = true;

    if(distancia < 0){

        indiceActual++;

        if(indiceActual >= slides.length){
            indiceActual = 0;
        }

    }else{

        indiceActual--;

        if(indiceActual < 0){
            indiceActual = slides.length - 1;
        }

    }

    mostrarSlide(indiceActual);

    setTimeout(() => {

        swipeBloqueado = false;

    }, 500);

}













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









/*SERVICIOS*/

const servicios = document.querySelectorAll(".servicio");

const observadorServicios = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold:0.2

});

servicios.forEach(servicio => {

    observadorServicios.observe(servicio);

});



/*MARCAS*/

const logos = document.querySelectorAll(".marcas__logo");

let logoActivo = 0;

setInterval(() => {

    logos[logoActivo].classList.remove("activo");

    logoActivo++;

    if(logoActivo >= logos.length){

        logoActivo = 0;

    }

    logos[logoActivo].classList.add("activo");

}, 2500);





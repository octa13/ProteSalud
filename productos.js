/* MENU */

const menuBtn = document.getElementById("encabezado__boton-menu");
const nav = document.getElementById("encabezado__navegacion");

if(menuBtn && nav){
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("activo");
    });
}


/* SUBMENU */

const submenu = document.querySelector(".submenu");
const botonSubmenu = document.querySelector(".submenu__boton");

if(submenu && botonSubmenu){
    botonSubmenu.addEventListener("click", () => {
        submenu.classList.toggle("activo");
    });
}


/* ENCABEZADO */

const encabezado = document.querySelector(".encabezado");

if(encabezado){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            encabezado.classList.add("scrolled");
        }else{
            encabezado.classList.remove("scrolled");
        }

    });

}


/* CARRUSEL PRODUCTOS */

const trackProd = document.querySelector(".productos__track");
const slidesProd = document.querySelectorAll(".productos__slide");
const btnAnteriorProd = document.querySelector(".productos__flecha--anterior");
const btnSiguienteProd = document.querySelector(".productos__flecha--siguiente");

let indiceProd = 0;

function actualizarCarruselProductos(){

    trackProd.style.transform =
        `translateX(-${indiceProd * 100}%)`;

}

if(trackProd && slidesProd.length){

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

}


/* SWIPE TÁCTIL */

const carrusel = document.querySelector(".productos__carrusel");

let inicioX = 0;
let finX = 0;

if(carrusel){

    carrusel.addEventListener("touchstart", (e) => {

        inicioX = e.changedTouches[0].screenX;

    });

    carrusel.addEventListener("touchend", (e) => {

        finX = e.changedTouches[0].screenX;

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

    });

}


/* MARCAS */

const logos = document.querySelectorAll(".marcas__logo");

if(logos.length){

    let logoActivo = 0;

    setInterval(() => {

        logos[logoActivo].classList.remove("activo");

        logoActivo++;

        if(logoActivo >= logos.length){
            logoActivo = 0;
        }

        logos[logoActivo].classList.add("activo");

    }, 2500);

}
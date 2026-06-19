/*FORMULARIO*/

const formulario = document.querySelector(".formulario");

if(formulario){

    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();

        const datosFormulario = new FormData(formulario);

        try{

            const respuesta = await fetch(formulario.action, {

                method: "POST",
                body: datosFormulario,
                headers:{
                    Accept:"application/json"
                }

            });

            if(respuesta.ok){

                document
                    .getElementById("mensaje-exito")
                    .classList.add("activo");

                formulario.reset();

            }else{

                alert("Ocurrió un error al enviar el mensaje.");

            }

        }catch(error){

            alert("No se pudo enviar el mensaje.");

        }

    });

}


/* BOTÓN CERRAR MENSAJE */

const btnCerrarMensaje =
document.getElementById("cerrar-mensaje");

if(btnCerrarMensaje){

    btnCerrarMensaje.addEventListener("click", () => {

       


        document
            .getElementById("mensaje-exito")
            .classList.remove("activo");

    });

}


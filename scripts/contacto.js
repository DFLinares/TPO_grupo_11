//validación formulario de contacto//
const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const tipoMensaje = document.getElementById("tipoMensaje");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";

    if (!nombre.value || !apellido.value || !email.value || !tipoMensaje.value || !mensaje.value) {
        warnings += `Complete todos los campos <br>`;
        entrar = true;
    } else {
        if (nombre.value.length < 3) {
            warnings += `El nombre no es válido <br>`;
            entrar = true;
        } else if (!/^[A-Za-z]+$/.test(nombre.value)) {
            warnings += `El nombre debe contener solo letras <br>`;
            entrar = true;
        }

        if (apellido.value.length < 3) {
            warnings += `El apellido no es válido <br>`;
            entrar = true;
        } else if (!/^[A-Za-z]+$/.test(apellido.value)) {
            warnings += `El apellido debe contener solo letras <br>`;
            entrar = true;
        }

        if (!regexEmail.test(email.value)) {
            warnings += `El email no es válido <br>`;
            entrar = true;
        }

        if (tipoMensaje.value.length === 0) {
            warnings += `Seleccione una opción <br>`;
            entrar = true;
        }

        if (mensaje.value.length < 8) {
            warnings += `Danos más detalles de tu consulta <br>`;
            entrar = true;
        }
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        const $form = document.querySelector("#form");
        $form.addEventListener("submit", handleSubmit);
        async function handleSubmit(event) {
            event.preventDefault();
            const form = new FormData(this);
            const response = await fetch(this.action, {
                method: this.method,
                body: form,
                headers: {
                    Accept: "application/json",
                },
            });
            if (response.ok) {
                this.reset();
            }
        }
        alert("Gracias por comunicarte con MUNDO IT");
    }
});

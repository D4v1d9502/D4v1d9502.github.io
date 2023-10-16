const socket = io(); //conexión con Socket.IO

//seleccionando elementos del DOM
const formulario = document.getElementById("formulario");
const input = document.querySelector("#formulario input[type='text']");
const chat = document.getElementById("mensajes");

//envío de mensaje al servidor
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value) {
        socket.emit("nuevoMensaje", {
            mensaje: input.value,
        });
        input.value = "";
    }
});

//mostrando mensaje recibido en pantalla
socket.on("mensajeEnviado", (data) => {
    chat.innerHTML += `<p><b>${data.nombre}: </b> ${data.mensaje}</p>`;
});
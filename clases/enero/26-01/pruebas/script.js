//Creamos una funcion externa
function muestraMensaje() {
    alert('Gracias por pinchar');
}

// Asigno la función externa al elemento
window.onload = function () {
    document.getElementById("pinchable").onclick = muestraMensaje;
}
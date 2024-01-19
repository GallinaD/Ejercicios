function ejecutar() {
    var parrafoElegido = window.prompt (" Seleccione Párrafo (1,2,3): ");
    var parrafo = document.getElementById (parrafoElegido);
    document.write (parrafo.innerHTML); // Escribimos directamente dentro del body (hay que usar innerHTML)
}
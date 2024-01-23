/*
Completar la función muestra de JavaScript para que realice lo siguiente:

Ocultar el enlace Seguir leyendo.
Mostrar el texto incluido dentro del span
*/

function muestra() {
    document.getElementById('enlace1').style.display = 'none';
    document.getElementsByClassName('oculto')[0].style.display = 'block';
    document.getElementsByClassName('oculto')[1].style.display = 'block';
}

/*
Crear un nuevo evento en el enlace2 que llamará a la función oculta().
Dicha función ocultará el enlace2, el texto el span y volverá a mostrar el enlace Seguir leyendo.
*/ 

function oculta() {
    document.getElementById('enlace1').style.display = 'block';
    document.getElementsByClassName('oculto')[0].style.display = 'none';
    document.getElementsByClassName('oculto')[1].style.display = 'none';
}
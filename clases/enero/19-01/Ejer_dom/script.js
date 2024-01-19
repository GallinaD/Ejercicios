// Número de enlaces en la página

let enlaces = document.getElementsByTagName("a");

alert("El número de enlaces en esta página es: " + enlaces.length);

// Dirección a la que enlaza el penúltimo enlace

let penultimoEnlace = enlaces[enlaces.length - 2];

alert("La dirección del penúltimo enlace es: " + penultimoEnlace);

// Numero de enlaces que enlazan a http://prueba

let cont = 0;

for (let i = 0; i < enlaces.length; i++) {
    let enlace = enlaces[i];
    if (enlace.href === "http://prueba/") {
        cont++;
    } 
} 

alert("Número de enlaces que conectan con http://prueba: " + cont);

// Número de enlaces del tercer párrafo

let parrafos = document.getElementsByTagName("p");

let tercerParrafo = parrafos[2];

let linksTercerP = tercerParrafo.getElementsByTagName("a");

alert("El número de enlaces en el tercer párrafo es: " + linksTercerP.length);
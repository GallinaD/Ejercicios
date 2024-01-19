/*
// Punto uno
var numero = parseInt(prompt("Introduzca un número"));

function oper() {
    var cont = 0;

    while (numero > 0) {
        cont++;
        numero = parseInt(numero / 10);
    }
    alert("El número de cifras en el número introducido es: " + cont);
}


// Punto 2

function cadena() {
    let dibujo = "";
    for (let i = 0; i < numero; i++) {
        dibujo += "_ ";
        document.getElementById("patron").innerHTML = dibujo;
    }

}

// Punto 3
/*
function patron() {
    let secuencia = "";
    let asterisco = "*";
    let cruz = "+";
    let piso = "_";

    for (let i = 0; i < 4; i++) {
        secuencia += asterisco + cruz + piso;
        document.getElementById("patron").innerHTML = secuencia;
    }
}
*/
/*
function patron() {
    let secuencia = "";
    let contador = secuencia.length % 3;

    for (let i = 0; i < 12; i++) {
        if (i % 3 == 0) {
            secuencia += "*";
        } else if (i % 3 == 1) {
            secuencia += "+";
        } else {
            secuencia += "_";
        }
    } console.log(secuencia);
}

// Punto 4

/* Derecho
function triangulo() {
    let lienzo = "";
    for (let i = 1; i <= 5; i++) {
         lienzo += "\n";

        for (let j = 0; j < i; j++) {
            lienzo += "*";
        }
        
    }   alert(lienzo);
}
*/
/*
function triangulo() {
    let lienzo = "";
    for (let i = 1; i <= 5; i++) {
        lienzo += "\n";

        for (let j = 6; j > i; j--) {
            lienzo += "*";
        }

    } alert(lienzo);
}

// Punto 5: Una función que devuelva la diferencia en días entre dos fechas del mismo año
*/
let dia1 = parseInt(prompt("Día de la primera fecha:"))
let mes = parseInt(prompt("Mes de la primera fecha:"))
let dia2 = parseInt(prompt("Día de la segunda fecha:"))
let mes2 = parseInt(prompt("Mes de la segunda fecha:"))


function diasMes(mes) {
    switch (mes) {
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
        default:
            return 31;
    }
}

let dias = 0;

if (mes <= mes2) {
    for (let i = mes; i < mes2; i++) { //Funciona en el caso de que el mes 1 sea menor que el 2
        dias += diasMes(i);

    } alert(dias - dia1 + dia2);
} else {                               //Invertido se va a la puta
    for (let i = mes2; i > mes; i++) {
        dias += diasMes(i);

    } console.log(dias);
}
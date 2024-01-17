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
    let barra = "_ "

    for (let i = 0; i < numero; i++) {
        dibujo += barra;    
        document.getElementById("patron").innerHTML = dibujo;        
    }

}

// Punto 3

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

// Punto 4

function triangulo() {

    for (let i = 0; i <= 5; i++) {
        let lienzo = "";

        for (let j = 0; j < i; j++) {
           lienzo += "*";
        }
        console.log(lienzo)    
    }
}


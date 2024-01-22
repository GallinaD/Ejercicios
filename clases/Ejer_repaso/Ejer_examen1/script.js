/*

a. Si son todos diferentes.
b. Si son todos iguales.
c. El mayor.
d. El menor.
e. La media entre ellos (suma de todos, dividida entre la cantidad de números).

*/

let n1 = parseInt(prompt("Dame el primer número"));

let n2 = parseInt(prompt("Dame el segundo número"));

let n3 = parseInt(prompt("Dame el tercer número"));

let numMedia;

// Punto A y B

function igualdad() {
    if (n1 === n2 && n1 === n3) {
        alert("Todos los números son iguales");
    } else {
        alert("Los números son diferentes");
    }
}

// Punto C y D

function numMenor() {
    if (n1 <= n2 && n1 <= n3) {
        alert("El menor es " + n1);
    } else {
        if (n2 < n1 && n2 <= n3) {
            alert("El menor es " + n2);
        } else {
            alert("El menor es " + n3);
        }
    }
}

function numMayor() {
    if (n1 >= n2 && n1 >= n3) {
        alert("El mayor es " + n1);
    } else {
        if (n2 > n1 && n2 >= n3) {
            alert("El mayor es " + n2);
        } else {
            alert("El mayor es " + n3);
        }
    }
}

// Punto E

function media() {
    numMedia = (n1 + n2 + n3) / 3;
    alert("el promedio entre los tres números es " + numMedia);
}
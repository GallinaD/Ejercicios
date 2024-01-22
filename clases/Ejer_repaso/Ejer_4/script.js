// Desarrolle un programa que permita leer un valor cualquiera n y escriba si dicho número es primo o no.

let num = parseInt(prompt("¡Hey, primo! Dame un número"));

function esPrimo() {

    let i = 2;

    if (num <= 1) {
        return alert("¡Tú no eres mi primo!");
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return alert("¡Tú no eres mi primo!");
        } else {
            return alert("¡¿Qué pasa, primo?!");
        }
    }
}

esPrimo(num);
// ejercicio 4
(function () {
    alert("Vamos a iniciar seción con el usuario: pablo y contraseña: clavito");

    let usuario = prompt("Introduce el nombre de usuario:");

    let contraseña = prompt("Introduce la contraseña:");


    if (usuario == "pablo" && contraseña == "clavito") {
        alert("Inicio de seción correcto");
    } else {
        alert("usuario o contraseña incorrectos");
    }


})();

// ejercicio 1
function ejercicio1() {

    var n1 = prompt("Inserta un número");
    var n2 = prompt("Inserta otro número");
    var n3 = prompt("Inserta el último número");

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

//ejercicio 2

function ejercicio2() {
    let frase = prompt("Dame una frase");

    let letra = prompt("Dame una letra");

    let coin = 0;

    for (i = 0; i < frase.length; i++) {

        if (frase[i] == letra) {
            coin += 1;
        }
    }

    alert("número de coincidencias: " + coin)
}

// ejercicio 3

const operacion3 = function ejercicio3() {

    alert("Dame dos números enteros")

    let n1 = prompt('Primer número:');

    let n2 = prompt('Segundo número');

    let oper = prompt('elige una operación (+/-)');

    if (oper == "+") {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        alert(n1 + n2);
    }

    if (oper == "-") {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        alert(n1 - n2);
    }
}


// ejercicio 5

const ejercicio5 = () => {

    let n = prompt("Dame una letra");

    switch (n) {
        case "a":
            alert(7);
            break;
        case "b":
            alert(9);
            break;
        case "c":
            alert(101);
            break;
        default:
            alert("Mala suerte, letra errónea");
    }
}

// ejercicio 6
function ejercicio6() {

    let frase = ["esto", "es", "un", "array", "con", "siete", "palabras"];

    let cambio = false;

    for (let i = frase.length; i > 0; i--) {
        cambio = true;
        for (let j = 0; j < i - 1; j++) {
            if (frase[j] > frase[j + 1]) {
                [frase[j], frase[j + 1]] = [frase[j + 1], frase[j]]
                cambio = false;
            }
        }
        if (cambio) break;
    }

    alert(frase);
}
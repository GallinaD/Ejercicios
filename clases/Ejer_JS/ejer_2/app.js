function buscador(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

let frase = prompt("Escribe una frase");

let letra = prompt("Ahora dame una letra");

let resultado = buscador(frase, letra);

document.getElementById("numero").innerHTML = "La " + letra + " se repite " + resultado + " veces en la frase."
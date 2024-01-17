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
let frase = prompt("Dame una frase");

let letra = prompt("Dame una letra");

let coin = 0;

    for (i=0; i < frase.length; i++) {

        if (frase[i] == letra) {
            coin += 1;
        }
    }

alert("número de coincidencias: " + coin)
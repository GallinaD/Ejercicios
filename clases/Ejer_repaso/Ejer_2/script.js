// Desarrolle un programa que realice el sumatorio de los números enteros comprendidos entre el primer 
//número que quiera el usuario (n1) y el segundo número que quiera el usuario (n2), es decir, n1 +...+ n2.

let n1 = parseInt(prompt("Dame un número entero"));

let n2 = parseInt(prompt("Dame otro, que tengo hambre"));

suma = 0;

aux = 0;

/* Funciona!
if (n1 < n2) {
    for (let i = n1; i <= n2; i++) {
        suma += i;
    } alert("El sumario de los números enteros entre las dos cifras es: " + suma);
} else {
    for (let i = n2; i <= n1; i++) {
        suma += i;
    } alert("El sumario de los números enteros entre las dos cifras es: " + suma);
}
*/

// Vamos a probar haciendo un intercambio

function sumario() {
    for (let i = n1; i <= n2; i++) {
        suma += i;
    } alert("El sumario de los números enteros entre las dos cifras es: " + suma);
}

if (n1<n2) {
    sumario(n1,n2);
} else {
    aux = n1;
    n1 = n2;
    n2 = aux;

    sumario(n1,n1);
}
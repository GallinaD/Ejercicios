// Desarrolle un programa que realice el sumatorio de los números enteros comprendidos 
//entre el 1 y el 10, es decir, 1 + 2 + 3 + …. + 10.

let suma = 0;

function sumario() {
    for (let i = 0; i <= 10; i++) {
        suma += i;
    } alert(suma);
}
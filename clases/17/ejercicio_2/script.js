var numero = parseInt(prompt("introduzca el numero"));

function oper(numero) {
    var cont = 0;

    while (numero > 0) {
        cont++;
        numero = parseInt(numero / 10);
    }
    alert(cont);
}
oper(numero);
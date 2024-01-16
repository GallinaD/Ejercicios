alert("Dame dos números enteros")

let n1 = prompt('Primer número:');

let n2 = prompt('Segundo número');

let oper = prompt('elige una operación (+/-)');

if (oper == "+") {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    alert(n1+n2);
}

if (oper == "-") {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    alert(n1-n2);
}


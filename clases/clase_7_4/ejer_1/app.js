alert("Escribe tres números enteros diferentes")

let n1 = prompt("Primer número:");

let n2 = prompt("Segundo número:");

let n3 = prompt("Tercer número:");

let resultado = "El número más pequeño es: "

if (n1 < n2 && n1 < n3) {
    alert(resultado + n1)
}

if (n2 < n1 && n2 < n3) {
    alert(resultado + n2)
}

if (n3 < n2 && n3 < n1) {
    alert(resultado + n3)
}
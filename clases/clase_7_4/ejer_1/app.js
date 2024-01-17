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
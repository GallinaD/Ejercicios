const n = 9;
var n2 = prompt("Inserta un número");
if (n == n2) {
  alert("Has acertado el número");
} else {
  if (n2 % 3 == 0) {
    alert("No has acertado el número, pero has insertado un número multiplo de 3");
  } else {
    alert("mala suerte");
  }
}
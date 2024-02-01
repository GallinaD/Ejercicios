// 4 columnas; 10 filas

// ---++++---     3 espacios 4 simbolos
// --++++++--     2 espacios 6 simbolos
// -++++++++-     1 espacio  8 simbolos
// ++++++++++     10 simbolos

/*
function hexagono() {
  var dibujo = "";
  for (var i = 2; i <= 5; i++) {
    for (var s = 5 - 1; s >= i; s--) {
      dibujo += (" ");
    }
    for (var j = 1; j <= i; j++) {
      dibujo += ("+")
    }
    dibujo += "\n";
  }
  if (i == 5 + 1) {
    for (var i = 1; i < 5 - 1; i++) {
      for (var s = 1; s <= i; s++) {
        dibujo += (" ");
      }
      for (j = i; j <= 5 - 1; j++) {
        dibujo += ("+");
      }
      dibujo += "\n";
    }
  }
  alert(dibujo);
}
hexagono();
*/
/*
var dibujo = "";

for (let i = 0; i <= 3; i++) {
  let j;
  for ( j = 2; j >= i; j--) {
    dibujo += ("-");
  }
  for (let k = i; k <= 6; k++) {
    dibujo += ("+");
    
  }
  dibujo += "\n";
}
alert(dibujo)
*/

var dibujo = "";
var espacios = 3;
var finK = 6;

for (let i = 0; i <= 3; i++) {
  let j;
  for ( j = 0; j < espacios; j++) {
    dibujo += ("-");
  }
  for (let k = j; k <= finK; k++) {
    dibujo += ("+");
    
  }
  dibujo += "\n";
  espacios--;
  finK++;

}

if (i==6) {
  // ...                                                            
}

alert(dibujo);



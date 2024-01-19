const USERC = "admin";
const PASSC = "1234";

var cont = 1;
var user;
var pass;

do{
  user = prompt("Inserta el usuario");
  pass = prompt("Inserta el pass");
  if(user == USERC && pass == PASSC){
    alert("Bienvenid@");
  }else{
    alert("Usuario y/o contraseña incorrecto. Llevas "+ cont + " intentos, dispones de 3");
  }
  cont++;
}while(cont <= 3 && (user != USERC || pass != PASSC));

/* Solucion 2

const USERC = "admin";
const PASSC = "1234";

var cont = 0;
var user;
var pass;
var entro;
do{
  user = prompt("Inserta el usuario");
  pass = prompt("Inserta el pass");
  entro = (user == USERC && pass == PASSC);
  cont++;
  if(!entro){
    alert("Usuario y/o contraseña incorrecto. Llevas "+ cont + "intentos, dispones de 3");
  }
  
}while(cont < 3 && !entro);
  
}

if(entro){
  alert("Bienvenid@");
} else { 
  alert("Intentos agotados");
}

*/

// Desarrolle un programa que permita leer un valor cualquiera dos valores (n1 y n2) 
// y escriba todos los números primos entre n1 y n2.
/*
let n1 = parseInt(prompt("Dame un número"));

let n2 = parseInt(prompt("Dame otro"));


function esPrimo() {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            false;
        } else {
            return false;
        }
    }
}
*/

function esPrimo(n){
    var i = 2;
    while(n != 1 && n % i !=0){
      i++;
    }
    return n==i;
    /*
      if(n==i){
        return true;
      }else{
        return false;
      }
    */ 
  }
  
  function intervaloPrimos(n1,n2){
    for(var i = n1;i <= n2; i++){
      if(esPrimo(i)){
        console.log(i);
      }
    }
  }
  var n1 = parseInt(prompt("Inserte un número"));
  var n2 = parseInt(prompt("Inserte otro número"));
  if(n1<n2){
    intervaloPrimos(n1,n2);
  }else{
    intervaloPrimos(n2,n1);
  }

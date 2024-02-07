// Ejercicio 1 Crea un array de dos dimensiones (matriz) que contenga números y cadenas solicitados al 
//usuario, muestra por pantalla los elementos cadena que se encuentren en posiciones fila par y columna impar

var matriz = [[1,"Hola", 3],
                [4,4,4],
                [5,"Adios",5]];

    function tieneString(elemento){
        let r = false;
        elemento.forEach(element => {
            r = r || typeof(element) == "string";
        });
        return r;
    }

    var matrizParesString = matriz.filter((element, index) => index % 2 == 0 && tieneString(element));

    var array = [];
    if(matrizParesString.length > 0){
        matrizParesString.forEach(element => element.forEach(e => array.push(e))) ;
    }
    var resultado = array.filter((element, index) => typeof(element) == "string" && (index % matriz[0].length) % 2 == 1);
    console.log(resultado);


// Ejercicio 2 

function getSize() {

    let size = document.getElementById("matrix").value;   
    
    let arreglo = [];
    arreglo[0] = 1;
    arreglo[1] = 1;
    
    for (let i = 2; i < size; i++) {
        arreglo.push(arreglo[i-2] + arreglo[i-1]);
        
    }
    console.log(arreglo);
}

// Ejercicio 3 Solicita al usuario un array de máximo 10 números reales y calcula su media.

function media() {
    let valores = document.getElementById("arreglo2").value;

    let cadena = valores.toString();

    let arreglo = cadena.split(" ");

    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += parseInt(arreglo[i]);

    }console.log("La media del array es: " + suma / arreglo.length);
}

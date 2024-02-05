const contarA = () => {
    var frase = document.querySelector("#frase").value;
    //alert(frase);
    var palabras = frase.split(" ");
    // console.log(palabras[0]);
    // console.log(palabras[2]);
    // console.log(palabras[4]); 
    var cont = 0;
    for (let i = 0; i < palabras.length; i += 2) {

        if (palabras[i].matchAll(/a/g)) {
            cont++
        }

    } console.log(cont)
}

var button = document.getElementsByTagName('input')[1].setAttribute("onclick", "contarA();");
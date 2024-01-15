let frutas = ["manzana", " pera", " melón", " mango"]



function addFrutas() {
    frutas.push(" parchita");
    document.getElementById("arreglo").innerHTML = frutas;
}

function quitarFruta() {
    frutas.pop();
    document.getElementById("arreglo").innerHTML = frutas;
}
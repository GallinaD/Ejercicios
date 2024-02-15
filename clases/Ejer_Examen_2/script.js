// Crear el formulario al cargar la página

document.addEventListener("DOMContentLoaded", () => {
  let formulario = document.createElement("form");

  formulario.setAttribute('style', "width:300px;margin: 15% auto");

  makeForm("Nombre", formulario);
  makeForm("Edad", formulario);
  makeForm("Asignatura", formulario);

  let inputBoton = document.createElement("input");
  inputBoton.innerHTML = "Enviar"
  inputBoton.setAttribute("id", "Aceptar");
  inputBoton.setAttribute("type", "button");
  inputBoton.setAttribute("value", "Aceptar");
  formulario.appendChild(inputBoton);

  document.body.appendChild(formulario);

  // creamos los arrays que guarden la información de los alumnos
  let arrayNom = [];
  let arrayEdad = [];
  let arrayAsig = [];


  // Tabla
  let tabla = document.createElement("table");
  let rowCabecera = document.createElement("tr");
  let thMedia = document.createElement("th");
  thMedia.innerText = "Media de edad de los alumnos";
  let thAsig = document.createElement("th");
  thAsig.innerText = "Asignatura más cursada";
  let rowDatos = document.createElement("tr")
  let datoMedia = document.createElement("td");
  let datoAsig = document.createElement("td");



  document.body.appendChild(tabla);
  tabla.appendChild(rowCabecera);
  tabla.appendChild(rowDatos);
  rowCabecera.appendChild(thMedia);
  rowCabecera.appendChild(thAsig);
  rowDatos.appendChild(datoMedia);
  rowDatos.appendChild(datoAsig);





  inputBoton.addEventListener("click", () => {
    // Obtenemos el valor de los inputs por el id

    let valorNom = document.getElementById("NombreInput").value;
    let valorEdad = document.getElementById("EdadInput").value;
    let valorAsig = document.getElementById("AsignaturaInput").value;

    let getNombre = document.getElementById("NombreInput");
    let getEdad = document.getElementById("EdadInput");
    let getAsig = document.getElementById("AsignaturaInput");

    //Comprobar validaciones y que sea distinto de 0

    let okNombre = false;
    let okEdad = false;    // Uso estas variables para que, al comprobar todos los datos sean true, lo guarde en local storage
    let okAsig = false;



    if (valorNom != 0 && valNombre(valorNom)) {
      getNombre.setAttribute("style", "border-color: green; width:100%;margin: 10px 0px;padding: 5px");
      okNombre = true;
    } else {
      getNombre.setAttribute("style", "border-color: red; width:100%;margin: 10px 0px;padding: 5px");
    }

    if (valorEdad != 0 && valEdad(valorEdad)) {
      getEdad.setAttribute("style", "border-color: green; width:100%;margin: 10px 0px;padding: 5px");
      okEdad = true;
    } else {
      getEdad.setAttribute("style", "border-color: red; width:100%;margin: 10px 0px;padding: 5px");
    }

    if (valorAsig != 0 && valAsignatura(valorAsig)) {
      getAsig.setAttribute("style", "border-color: green; width:100%;margin: 10px 0px;padding: 5px");
      okAsig = true;
    } else {
      getAsig.setAttribute("style", "border-color: red; width:100%;margin: 10px 0px;padding: 5px");
    }

    if (okNombre && okEdad && okAsig) {
      arrayNom.push(valorNom);
      arrayEdad.push(valorEdad);
      arrayAsig.push(valorAsig);

      localStorage.setItem("Nombres", JSON.stringify(arrayNom));
      localStorage.setItem("Edad", JSON.stringify(arrayEdad));
      localStorage.setItem("Asignatura", JSON.stringify(arrayAsig));
    }


    // Obtener la media de edad de los alumnos al precionar el boton
    let mediaTabla = media(arrayEdad);
    datoMedia.innerText = mediaTabla;

    // // Prueba
    let arregloDatos = [];
    asigMas(arrayAsig, arregloDatos);
    datoAsig.innerText = arregloDatos;
    
  })
})

// Función para crear los inputs del formulario

function makeForm(nombre, formulario) {

  let etiqueta = document.createElement("label");
  let texto = document.createTextNode(nombre);
  etiqueta.appendChild(texto);

  var inputElemento = document.createElement("input");
  inputElemento.setAttribute("type", "text");
  inputElemento.setAttribute("id", nombre + "Input");
  inputElemento.setAttribute("placeholder", nombre);
  inputElemento.setAttribute("required", "true");
  inputElemento.setAttribute("style", "width:100%;margin: 10px 0px;padding: 5px");

  formulario.appendChild(etiqueta);

  formulario.appendChild(inputElemento);
  var myBr = document.createElement("br");
  formulario.appendChild(myBr);
}

// Validación del nombre (letras, mayúsculas, ñ/Ñ y espacios)

function valNombre(nombre) {
  for (let i = 0; i < nombre.length; i++) {
    let char = nombre.charCodeAt(i);

    let con1 = char >= 65 && char <= 90;
    let con2 = char >= 97 && char <= 122;
    let con3 = char == 209 || char == 241 || char == 32;

    if (!(con1 || con2 || con3)) return false;
  }

  return true;
}

// Validación edad (números enteros)

function valEdad(edad) {
  for (let i = 0; i < edad.length; i++) {
    let char = edad.charCodeAt(i);

    let con = char >= 48 && char <= 57;

    if (!con) { return false }

  }

  return true;
}

// Validación asignatura (letras y números)

function valAsignatura(asignatura) {
  for (let i = 0; i < asignatura.length; i++) {
    let char = asignatura.charCodeAt(i);

    let con1 = char >= 48 && char <= 57;
    let con2 = char >= 65 && char <= 90;
    let con3 = char >= 97 && char <= 122;
    let con4 = char == 209 || char == 241;

    if (!(con1 || con2 || con3 || con4)) return false;
  }

  return true;
}

// Función que saca la media de un array


function media(array) {
  let contadorArray = 0;

  for (let i = 0; i < array.length; i++) {
    contadorArray += parseInt(array[i]);

  }
  return Math.trunc(contadorArray / array.length);
}


// Función que busca las assignatura más repetida

function asigMas(array,datos){
  array.sort()
  let arregloNorep = [];
  let vecesRep = [];
  let contador = 1;

  for (let i = 0; i < array.length; i++) {
    if(array[i+1]==array[i]){
      contador++;
    } else {
      arregloNorep.push(array[i]);
      vecesRep.push(contador);
      contador = 1;
    }
    
  }

  for (let i = 0; i < arregloNorep.length; i++) {
     datos.push(`${arregloNorep[i]}: ${vecesRep[i]} alumnos ${'\n'}`)
    
  }
  console.log(arregloNorep)
  console.log(vecesRep)
}



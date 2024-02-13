// Crear el formulario al cargar la página
document.addEventListener("DOMContentLoaded", () => {   
    var formulario = document.createElement("form");

    formulario.setAttribute('style', "width:300px;margin: 15% auto");

    makeForm("Nombre", formulario);
    makeForm("Edad", formulario);
    makeForm("Asignatura", formulario);

    var inputBoton = document.createElement("input");
    inputBoton.innerHTML="Enviar"
    inputBoton.setAttribute("id", "Aceptar");
    inputBoton.setAttribute("type", "button");
    inputBoton.setAttribute("value", "Aceptar");
    formulario.appendChild(inputBoton);

    document.body.appendChild(formulario);

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
      var char = nombre.charCodeAt(i);
  
      let con1 = char >= 65 && char <= 90;
      let con2 = char >= 97 && char <= 122;
      let con3 = char == 209 || char == 241 || char == 32;
  
      if (!(con1 || con2 || con3)) return false;
    }
  
    return true;
  }
// Ejercicio 1

var datos = JSON.parse ('[ {"nombre": "Francisco Ramirez","edad": 29,"puesto": "Contable","Emails": ["francisco@gmail.com","francisco@hotmail.es","francisco@thebridgeschool.es"]},{"nombre": "Isabel Pérez","edad": 31,"puesto": "Profesora","Emails": ["isabel@gmail.com","isabel@hotmail.es","isabel@thebridgeschool.es"]}]');

console.log(datos[1].Emails[2]);

// Ejercicio 2 Código para obtener el país de la localidade 8

var datos2 = JSON.parse (' {"localidade 1": {"Continente": "África","País": "Angola","Capital": "Luanda"},"localidade 2": {"Continente": "América do Norte","País": "Estados Unidos","Capital": "Washington DC"},"localidade 3": {"Continente": "América Central","País": "México","Capital": "Cidade do México"},"localidade 4": {"Continente": "América do Sul","País": "Brasil","Capital": "Brasília"},"localidade 5": {"Continente": "Europa","País": "Espanha","Capital": "Madri"},"localidade 6": {"Continente": "Europa","País": "Alemanha","Capital": "Berlim"},"localidade 7": {"Continente": "Oceania","País": "Austrália","Capital": "Camberra"},"localidade 8": {"Continente": "Ásia","País": "Japão","Capital": "Tóquio"}}');

console.log(datos2["localidade 8"]["País"]);

// Ejercicio 3 Código que permite añadir una localidad a tu elección

datos2["localidade 9"] = {"Continente": "America","País": "Canda","Capital": "Ottawa"};

console.log(datos2);

// Ejercicio 4 Modifica la localidade 4, añadiendo el número de habitantes

datos2["localidade 4"].Habitantes = "14";

// Ejercicio 5 Cambia la estructura del JSON de forma que sea más directo acceder a las capitales de las 
//localidades, dado que va a ser el dato que más vamos a consultar
/*

{
    "localidade 1": {
    "Continente": "África",
    "País": "Angola",
    "Capital": "Luanda"
    },
    "localidade 2": {
    "Continente": "América do Norte",
    "País": "Estados Unidos",
    "Capital": "Washington DC"
    },
    "localidade 3": {
    "Continente": "América Central",
    "País": "México",
    "Capital": "Cidade do México"
    },
    "localidade 4": {
    "Continente": "América do Sul",
    "País": "Brasil",
    "Capital": "Brasília"
    },
    "localidade 5": {
    "Continente": "Europa",
    "País": "Espanha",
    "Capital": "Madri"
    },
    "localidade 6": {
    "Continente": "Europa",
    "País": "Alemanha",
    "Capital": "Berlim"
    },
    "localidade 7": {
    "Continente": "Oceania",
    "País": "Austrália",
    "Capital": "Camberra"
    },
    "localidade 8": {
    "Continente": "Ásia",
    "País": "Japão",
    "Capital": "Tóquio"
    }
}
*/

// Imprime por consola la URL de la página.

console.log(document.URL);

// Imprime por consola el dominio de la página.

console.log(document.domain);

// Imprime todos los nodos de imagen.

console.log(document.querySelectorAll('img'))

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.querySelector('#gen-1').innerHTML = "Generasión 1 Pokimon";

//Cambia el color de fondo de la primera generación de Pokimon.

document.querySelector('.infocard-list', '.infocard-list-pkmn-lg').style.background = "pink";

// Sustituye el atributo "src" de todas las imágenes por Nicolás Celdas

let imgPokemons = document.querySelectorAll('img');

for (let i = 0; i < imgPokemons.length; i++) {
    
    document.querySelectorAll('img')[i].setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
}




console.log(document.URL);

console.log(document.querySelectorAll('img'))

document.querySelector('#gen-1').innerHTML = "Generasión 1 Pokimon";

document.querySelector('.infocard-list', '.infocard-list-pkmn-lg').style.background = "pink";

let imgPokemons = document.querySelectorAll('img');

for (let i = 0; i < imgPokemons.length; i++) {
    
    document.querySelectorAll('img')[i].setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
}



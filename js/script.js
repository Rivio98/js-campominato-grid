//Creo una funzione per mettere dentro la grid un quadrato
function createSingleGrid(num) {
    //creo il quadrato come div
    const square = document.createElement('div');
    //aggiungo la classe square al div
    square.classList.add('square');
    //aggiungo il numero dentro il div square
    square.innerText = num;
}

//Recupero il pulsante dall HTML
const button = document.getElementsByName('play');

//Aggiungo l'evento
button.addEventListener('click' function () {

    //Recupero l'elemento che conterrà la griglia
    const grid = document.getElementById('grid');

});


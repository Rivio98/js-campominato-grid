//Creo una funzione per mettere dentro la grid un quadrato
function createSingleSquare(num) {
    //creo il quadrato come div
    const square = document.createElement('div');
    //aggiungo la classe square al div
    square.classList.add('square');
    //aggiungo il numero dentro il div square
    square.innerText = num + 1;
}

//Recupero il pulsante dall HTML
const button = document.getElementsByName('play');

//Aggiungo l'evento
button.addEventListener('click' function () {

    //Recupero l'elemento che conterrà la griglia
    const grid = document.getElementById('grid');
    //ciclo per creare 100 caselle 
    for (let i = 0; i < 100; i++) {
        //chiamo la funzione per creare le caselle
        createSingleSquare(i);
    }
});


// Getting elements from HTML DOM
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const playingTo = document.querySelector('#score-select');

const btnPlayerOne = document.querySelector('#playerOne');
const btnPlayerTwo = document.querySelector('#playerTwo');
const btnReset = document.querySelector('#reset');

let score1 = 0;
let score2 = 0;

// Function for reseting all application parameters
const reset = () => {
    score1 = 0;
    score2 = 0;
    result1.innerHTML = score1;
    result2.innerHTML = score2;
};

// Adding event listeners for buttons
btnPlayerOne.addEventListener('click', (e) => {
    ++score1;
    result1.innerHTML = score1;

    if (score1 === parseInt(playingTo.options[playingTo.selectedIndex].text)) {
        console.log(e);
    }
});

btnPlayerTwo.addEventListener('click', (e) => {
    ++score2;
    result2.innerHTML = score2;
});

// Reset button
btnReset.addEventListener('click', reset);
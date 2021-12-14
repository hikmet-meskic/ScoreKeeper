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
    result1.style.color = 'azure';
    result2.style.color = 'azure';
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disabled = false;
    btnPlayerOne.style.cursor = 'pointer';
    btnPlayerTwo.style.cursor = 'pointer';
};

// Function for disabling buttons 
const disableButtons = () => {
    btnPlayerOne.disabled = true;
    btnPlayerTwo.disabled = true;
    btnPlayerOne.style.cursor = 'not-allowed';
    btnPlayerTwo.style.cursor = 'not-allowed';
}

// Adding event listeners for buttons
btnPlayerOne.addEventListener('click', (e) => {
    ++score1;
    result1.innerHTML = score1;

    if (score1 === parseInt(playingTo.options[playingTo.selectedIndex].text)) {
        result1.style.color = 'gold';
        result2.style.color = 'black';
        disableButtons();
    }
});
btnPlayerTwo.addEventListener('click', (e) => {
    ++score2;
    result2.innerHTML = score2;

    if (score2 === parseInt(playingTo.options[playingTo.selectedIndex].text)) {
        result2.style.color = 'gold';
        result1.style.color = 'black';
        disableButtons();
    }
});

// Elements that reset the game
btnReset.addEventListener('click', reset);
playingTo.addEventListener('change', reset);
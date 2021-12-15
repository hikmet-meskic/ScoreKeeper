// Setting two objects with appropriate properties
const player1 = {
    score: 0,
    result: document.querySelector('#result1'),
    btnPlayer: document.querySelector('#playerOne'),
    playerName: 'Player One'
}
const player2 = {
    score: 0,
    result: document.querySelector('#result2'),
    btnPlayer: document.querySelector('#playerTwo'),
    playerName: 'Player Two'
}

const playingTo = document.querySelector('#score-select');
const btnReset = document.querySelector('#reset');
let won = false;
// Using prompt box to get input from users
function inputPlayerNames() {
    player1.playerName = prompt('Please enter your name\nFirst player', 'Player One');
    player2.playerName = prompt('Please enter your name\nSecond player', 'Player Two');
    player1.playerName.innerText = `+1 ${player1.playerName}`;
    player2.playerName.innerText = `+1 ${player2.playerName}`;
}
inputPlayerNames();

// Function for reseting all application parameters
function reset() {
    player1.score = 0;
    player2.score = 0;
    player1.result.innerHTML = player1.score;
    player2.result.innerHTML = player2.score;
    player1.result.style.color = 'azure';
    player2.result.style.color = 'azure';
    player1.btnPlayer.disabled = false;
    player2.btnPlayer.disabled = false;
    player1.btnPlayer.style.cursor = 'pointer';
    player2.btnPlayer.style.cursor = 'pointer';
    if(won) {
        document.body.removeChild(document.body.lastChild);
        won = false;
    }
}

// Function for disabling buttons 
function disableButtons() {
    player1.btnPlayer.disabled = true;
    player2.btnPlayer.disabled = true;
    player1.btnPlayer.style.cursor = 'not-allowed';
    player2.btnPlayer.style.cursor = 'not-allowed';
}

function addWinner(winner) {
    let h1 = document.createElement('h1');
    h1.innerHTML = `${winner} won the game!`;
    h1.style.textAlign = 'center';
    h1.style.color = 'gold';
    h1.style.textDecoration = 'underline dotted';
    document.body.append(h1);
    won = true;
}
function updateScores(player, opponent) {
    ++player.score;
    player.result.innerHTML = player.score;

    if (player.score === parseInt(playingTo.options[playingTo.selectedIndex].text)) {
        player.result.style.color = 'gold';
        opponent.result.style.color = 'black';
        disableButtons();
        addWinner(player.playerName);
    }
}
// Adding event listeners for buttons
player1.btnPlayer.addEventListener('click', (e) => {
    updateScores(player1, player2);
});
player2.btnPlayer.addEventListener('click', (e) => {
    updateScores(player2, player1);
});

// Elements that reset the game
btnReset.addEventListener('click', reset);
playingTo.addEventListener('change', reset);
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let currentPlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];


const editPlayerModal = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const formInputElement = document.getElementById('playername')
const errorsOutputElement = document.getElementById('config-errors');
const whosTurnIsIt = document.getElementById('active-player-name');
const gameBoard = document.getElementById('active-game');
const gameOver = document.getElementById('game-over');
const winnerName = document.getElementById('winner-name');
const playersTurn = document.getElementById('players-turn');

const editPlayer1BtnElement = document.getElementById('edit-player-1-button');
const editPlayer2BtnElement = document.getElementById('edit-player-2-button');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameBoardListElements = document.querySelectorAll('#game-board li');



editPlayer1BtnElement.addEventListener('click', displayModal)
editPlayer2BtnElement.addEventListener('click', displayModal)

cancelConfigBtnElement.addEventListener('click', closeModal)
backdropElement.addEventListener('click', closeModal)

formElement.addEventListener('submit', modalSubmitButton);

startNewGameBtnElement.addEventListener('click', startNewGame);

for (const gamePieces of gameBoardListElements) {
    gamePieces.addEventListener('click', gameBoardLogic);

}

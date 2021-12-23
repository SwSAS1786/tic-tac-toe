function resetGameStatus() {
    gameIsOver = false;
    currentPlayer = 0;
    currentRound = 1;
    gameOver.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOver.style.display = 'none';
    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            gameBoardListElements[gameBoardIndex].textContent = '';
            gameBoardListElements[gameBoardIndex].classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {

    if (!players[0].name || !players[1].name) { //enteredPlayerName === ''
        alert('Please enter player names to begin!')
        return;
    }

    resetGameStatus();

    whosTurnIsIt.textContent = players[currentPlayer].name;
    gameBoard.style.display = 'block';
}

function switchPlayer() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }

    whosTurnIsIt.textContent = players[currentPlayer].name;

}



function gameBoardLogic(event) {
    if (gameIsOver) {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select an empty field!')
        return;
    } else {
        selectedField.textContent = players[currentPlayer].symbol;
        selectedField.classList.add('disabled');
    }



    gameData[selectedRow][selectedColumn] = currentPlayer + 1;


    const winnerId = checkForGameOver();
    console.log(winnerId)

    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();

}




function checkForGameOver() {
    //checking the rows for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    //checking the columns for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    //checking for top left to bottom right for equality
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[0][0] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    //checking for top right to bottom left for equality
    if (
        gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[0][2] === gameData[2][0]
    ) {
        return gameData[0][2];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    playersTurn.style.display = 'none';
    gameOver.style.display = 'block';

    if (winnerId > 0) {
        gameOver.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;


    } else {
        gameOver.firstElementChild.textContent = "It's a Draw!"
    }
}

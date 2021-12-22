function displayModal(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    editPlayerModal.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closeModal() {
    editPlayerModal.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formInputElement.value = '';
}

function modalSubmitButton(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim(); // '   Steven   ' => 'Steven'

    if (!enteredPlayerName) { //enteredPlayerName === ''
        event.target.firstElementChild.classList.add('error')
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }


    const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`);
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;
    closeModal();
    console.log(players)

}
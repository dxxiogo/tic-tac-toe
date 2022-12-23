const btnContinue = document.querySelector('#continue');
btnContinue.addEventListener('click', () => {
    const namePlayer1 = document.querySelector('#input-player01').value;
    const namePlayer2 = document.querySelector('#input-player02').value;
    if(namePlayer1.length < 1 || namePlayer2.length < 1){
        alert("Insira o nome dos dois jogadores corretamente!");
    } else {
        const bgPlayers = document.querySelector('.bg-players');
        const player1 = document.querySelector('#p1');
        const player2 = document.querySelector('#p2');
        player1.innerText = namePlayer1;
        player2.innerText = namePlayer2;
        bgPlayers.style.display = 'none'

    }
});
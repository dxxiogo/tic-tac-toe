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

const area1 = document.querySelector("#area-1");
const area2 = document.querySelector("#area-2");
const area3 = document.querySelector("#area-3");
const area4 = document.querySelector("#area-4");
const area5 = document.querySelector("#area-5");
const area6 = document.querySelector("#area-6");
const area7 = document.querySelector("#area-7");
const area8 = document.querySelector("#area-8");
const area9 = document.querySelector("#area-9");

function analyzeWinner (firstArea, secondArea, thirdArea) {

    if(firstArea.firstChild.className == secondArea.firstChild.className && firstArea.firstChild.className == thirdArea.firstChild.className){
        const scorePlayer1 = document.querySelector('#player01-score');
        const scorePlayer2 = document.querySelector('#player02-score');
        const classElement = area1.firstChild.className;
        if(classElement == 'x-icon') {
            scorePlayer1.innerText = Number(scorePlayer1.innerText) + 1;
        } else {
            scorePlayer2.innerText = Number(scorePlayer2.innerText) + 1;
        }
    }   
}

const gameAreas = document.querySelectorAll('.area');
let numberOfMoves = 0;

let classElement = 'circle-icon';
gameAreas.forEach((area) => {
    area.addEventListener('click', (eve) => {
        const chosenArea = eve.currentTarget;
        if(chosenArea.childNodes.length < 1){
            if(classElement === 'circle-icon'){
                const circleIcon = document.querySelector('.circle-icon');
                const newCircle = circleIcon.cloneNode(true);
                classElement = 'x-icon';
                chosenArea.append(newCircle);
            } else {
                const xIcon = document.querySelector('.x-icon');
                const newX = xIcon.cloneNode(true);
                classElement = 'circle-icon';
                chosenArea.append(newX);
            } 
        }
        if(numberOfMoves >= 5){
            if(area1.childNodes.length > 0 && area5.childNodes.length > 0 && area9.childNodes.length > 0 ){
                analyzeWinner(area1, area5, area9);
            } else if (area3.childNodes.length > 0 && area5.childNodes.length > 0 && area9.childNodes.length > 0 ){
                analyzeWinner(area3, area5, area9);
            } else if (area4.childNodes.length > 0 && area5.childNodes.length > 0 && area6.childNodes.length > 0 ){
                analyzeWinner(area4, area5, area6);
            } else if (area1.childNodes.length > 0 && area2.childNodes.length > 0 && area3.childNodes.length > 0 ){
                analyzeWinner(area1, area2, area3);
            } else if (area7.childNodes.length > 0 && area8.childNodes.length > 0 && area9.childNodes.length > 0 ){
                analyzeWinner(area7, area8, area9);
            } else if( area1.childNodes.length > 0 && area4.childNodes.length > 0 && area7.childNodes.length > 0 ){
                analyzeWinner(area1, area4, area7);
            } else if(area2.childNodes.length > 0 && area5.childNodes.length > 0 && area8.childNodes.length > 0 ){
                analyzeWinner(area2, area5, area8);
            } else if (area3.childNodes.length > 0 && area6.childNodes.length > 0 && area9.childNodes.length > 0 ){
                analyzeWinner(area3, area6, area9);
            }
        }
    });
});

function resartGame () {
    const res = confirm("Deseja reiniciar o jogo?");
    console.log(res);
    if(res){
        gameAreas.forEach((area) => {
            const elementArea = area.firstChild;
            area.removeChild(elementArea);
        });
    }
}

const restartBtn = document.querySelector('#restart-player');
restartBtn.addEventListener('click', resartGame);


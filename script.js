let playerScore = 0, computerScore = 0;

const playerChoice = document.querySelector('.playerChoice');
const cpuChoice = document.querySelector('.cpuChoice');
const mainMenu = document.querySelector('.backboard');
const playScore = document.querySelector('#playScore');
const cpuScore = document.querySelector('#cpuScore');
const gameOverScreen = document.querySelector('.gameover');
const winnerDelivery = document.querySelector('.victory');

gameOverScreen.style.display = "none";

function computerPlay(){
    choiceNum = Math.floor(Math.random() * (3));
    console.log(choiceNum);
    switch(choiceNum) {
        case 0: return('scissors')
        case 1: return('paper')
        case 2: return('rock')
    }
}

function playRound(playerSelection){
    const computerSelection = computerPlay();
    console.log(computerSelection);
    if (playerSelection.target.id == computerSelection){
        playerChoice.textContent = playerSelection.target.id.toUpperCase();
        cpuChoice.textContent = computerSelection.toUpperCase();
    } else if (playerSelection.target.id == "scissors"){
        if (computerSelection == "paper"){
            playerScore++;
            playerChoice.textContent = "SCISSORS";
            cpuChoice.textContent = "PAPER";
            player.classList.add('winner');
            cpu.classList.add('loser');
            playScore.textContent = playerScore;
            cpuScore.textContent = computerScore;
            checkGameOver();
        } else if (computerSelection == "rock"){
            computerScore++;
            playerChoice.textContent = "SCISSORS";
            cpuChoice.textContent = "ROCK";
            player.classList.add('loser');
            cpu.classList.add('winner');
            playScore.textContent = playerScore;
            cpuScore.textContent = computerScore;
            checkGameOver();
        }
    } else if (playerSelection.target.id == "paper"){
        if (computerSelection == "rock"){
            playerScore++;
            playerChoice.textContent = "PAPER";
            cpuChoice.textContent = "ROCK";
            player.classList.add('winner');
            cpu.classList.add('loser');
            playScore.textContent = playerScore;
            cpuScore.textContent = computerScore;
            checkGameOver();
        } else if (computerSelection == "scissors"){
            computerScore++;
            playerChoice.textContent = "PAPER";
            cpuChoice.textContent = "SCISSORS";
            player.classList.add('loser');
            cpu.classList.add('winner');
            playScore.textContent = playerScore;
            cpuScore.textContent = computerScore;
            checkGameOver();
        }
    } else if (playerSelection.target.id == "rock"){
        if (computerSelection == "scissors"){
            playerScore++;
            playerChoice.textContent = "ROCK";
            cpuChoice.textContent = "SCISSORS";
            player.classList.add('winner');
            cpu.classList.add('loser');
            playScore.textContent = playerScore;
            cpuScore.textContent = computerScore;
        } else if (computerSelection == "paper"){
            computerScore++;
            playerChoice.textContent = "ROCK";
            cpuChoice.textContent = "PAPER";
            player.classList.add('loser');
            cpu.classList.add('winner');
            playScore.textContent = playerScore;
            cpuScore.textContent = computerScore;
            checkGameOver();
        }
    }
}

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        gameOverScreen.style.display = "block";
    }

    if (playerScore === 5) {
        winnerDelivery.textContent = "YOU WIN!";      
    }

    if (computerScore === 5) {
        winnerDelivery.textContent = "YOU LOSE!";   
    }
}

function buttonCheck(e) {
    if (e.target.className !== 'btn') return;

    if (e.target.id === 'reset') {
        resetGame();
    } else if (playerScore < 5 && computerScore < 5) {
        playRound(e);
    } else {
        return;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playScore.textContent = playerScore;
    cpuScore.textContent = computerScore;
    gameOverScreen.style.display = "none";
    playerChoice.textContent = "";
    cpuChoice.textContent = "";
}

function removeTransition(e) {
    if (this.classList.contains('winner')) {
        this.classList.remove('winner')
        return;
     }
    if (this.classList.contains('loser')) {
         this.classList.remove('loser')
         return;
     }
     return;
}

const names = document.querySelectorAll('.name')
names.forEach(name => name.addEventListener('transitionend', removeTransition));

mainMenu.addEventListener('click', buttonCheck);

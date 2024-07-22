// Initialize score
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');
    resultDiv.innerHTML = `You chose ${playerChoice}. The computer chose ${computerChoice}. You ${result}!`;
    scoreDiv.innerHTML = `Player: ${playerScore}, Computer: ${computerScore}`;
}

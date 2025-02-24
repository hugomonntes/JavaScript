let playerScore = 0;
let cpuScore = 0;
let playerChoice = '';
let cpuChoice = '';
let gameStarted = false;


function startGame() {
    gameStarted = true;
    document.getElementById('start-btn').style.display = 'none'; 
}


function choose(choice) {
    if (!gameStarted) return; 

    playerChoice = choice;
    document.querySelectorAll('.choice-btn').forEach(button => button.disabled = true); 
    document.getElementById('cpu-choice').innerHTML = ''; 
    setTimeout(() => {
        cpuChoice = getCpuChoice();
        displayCpuChoice(cpuChoice);
        let result = determineWinner(playerChoice, cpuChoice);
        updateScore(result);
        displayResult(result);
        resetAfterRound();
    }, 500); 
}


function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function displayCpuChoice(choice) {
    const cpuDiv = document.getElementById('cpu-choice');
    cpuDiv.textContent = getEmoji(choice);
}


function getEmoji(choice) {
    if (choice === 'rock') return '🪨';
    if (choice === 'paper') return '📄';
    if (choice === 'scissors') return '✂️';
}


function determineWinner(player, cpu) {
    if (player === cpu) {
        return "Draw";
    } else if (
        (player === 'rock' && cpu === 'scissors') ||
        (player === 'paper' && cpu === 'rock') ||
        (player === 'scissors' && cpu === 'paper')
    ) {
        return "Win";
    } else {
        return "Lose";
    }
}


function updateScore(result) {
    if (result === "Win") {
        playerScore++;
    } else if (result === "Lose") {
        cpuScore++;
    }
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('cpu-score').textContent = cpuScore;
}


function displayResult(result) {
    const resultText = document.getElementById('result-text');
    resultText.textContent = result;
    resultText.classList.remove('win', 'lose', 'draw');
    resultText.classList.add(result.toLowerCase()); 
}


function resetAfterRound() {
    document.querySelectorAll('.choice-btn').forEach(button => button.disabled = false); 
    setTimeout(() => {
        if (playerScore === 3) {
            alert("You win the best of 5!");
            resetGame();
        } else if (cpuScore === 3) {
            alert("CPU wins the best of 5!");
            resetGame();
        }
    }, 1000); 
}


function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('cpu-score').textContent = cpuScore;
    document.getElementById('result-text').textContent = '';
    document.getElementById('cpu-choice').textContent = '';
    gameStarted = false;
    document.getElementById('start-btn').style.display = 'block'; 
}

function startCpuLoader() {
    const cpuDiv = document.getElementById('cpu-choice');
    cpuDiv.classList.add('loader');
    setTimeout(() => {
        cpuDiv.classList.remove('loader'); 
    }, 2000); 
}
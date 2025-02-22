let playerScore = 0;
let cpuScore = 0;
let playerChoice = '';
let cpuChoice = '';
let gameStarted = false;

// Función para iniciar el juego
function startGame() {
    gameStarted = true;
    document.getElementById('start-btn').style.display = 'none'; // Ocultar el botón de start después de iniciar
}

// Función para elegir una jugada
function choose(choice) {
    if (!gameStarted) return; // No permitir elegir antes de iniciar el juego

    playerChoice = choice;
    document.querySelectorAll('.choice-btn').forEach(button => button.disabled = true); // Desactivar botones después de elegir
    document.getElementById('cpu-choice').innerHTML = ''; // Limpiar elección de la CPU
    setTimeout(() => {
        cpuChoice = getCpuChoice();
        displayCpuChoice(cpuChoice);
        let result = determineWinner(playerChoice, cpuChoice);
        updateScore(result);
        displayResult(result);
        resetAfterRound();
    }, 500); // Mostrar la elección de la CPU con 500ms de demora
}

// Función para obtener la elección de la CPU
function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Función para mostrar la elección de la CPU
function displayCpuChoice(choice) {
    const cpuDiv = document.getElementById('cpu-choice');
    cpuDiv.textContent = getEmoji(choice);
}

// Función para obtener el emoji según la elección
function getEmoji(choice) {
    if (choice === 'rock') return '🪨';
    if (choice === 'paper') return '📄';
    if (choice === 'scissors') return '✂️';
}

// Función para determinar el ganador
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

// Función para actualizar el marcador
function updateScore(result) {
    if (result === "Win") {
        playerScore++;
    } else if (result === "Lose") {
        cpuScore++;
    }
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('cpu-score').textContent = cpuScore;
}

// Función para mostrar el resultado
function displayResult(result) {
    const resultText = document.getElementById('result-text');
    resultText.textContent = result;
    resultText.classList.remove('win', 'lose', 'draw');
    resultText.classList.add(result.toLowerCase()); // Establecer el color del mensaje
}

// Función para resetear el juego después de cada ronda
function resetAfterRound() {
    document.querySelectorAll('.choice-btn').forEach(button => button.disabled = false); // Habilitar botones para una nueva ronda
    setTimeout(() => {
        if (playerScore === 3) {
            alert("You win the best of 5!");
            resetGame();
        } else if (cpuScore === 3) {
            alert("CPU wins the best of 5!");
            resetGame();
        }
    }, 1000); // Resetear el juego después de 1 segundo si hay un ganador
}

// Función para reiniciar el juego
function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('cpu-score').textContent = cpuScore;
    document.getElementById('result-text').textContent = '';
    document.getElementById('cpu-choice').textContent = '';
    gameStarted = false;
    document.getElementById('start-btn').style.display = 'block'; // Volver a mostrar el botón de inicio
}

function startCpuLoader() {
    const cpuDiv = document.getElementById('cpu-choice');
    cpuDiv.classList.add('loader');
    setTimeout(() => {
        cpuDiv.classList.remove('loader'); // Detener el loader después de 2 segundos
    }, 2000); // Duración del loader
}
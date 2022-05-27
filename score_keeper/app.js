const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#p2display')
}

const resetBtn = document.querySelector('#reset');
const maxScoreSelect = document.querySelector('#points');
let winningScore = 5;
let gameOver = false;
let displayWinner = document.querySelector('section');
const declare = document.createElement('h2');

maxScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetGame();
})

function resetGame() {
    gameOver = false;
    for (let p of [p1,p2]) {
        p.score = 0; 
        p.display.textContent = 0;
        p.display.classList.remove('span-lose', 'span-win');
        p.button.disabled = false;
        p.button.style.opacity = '1';
        p.button.style.cursor = 'pointer';
    }
    declare.remove();
}

resetBtn.addEventListener('click',resetGame);

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            player.display.classList.add('span-win');
            opponent.display.classList.add('span-lose');
            gameOver = true;
            for (let p of [p1,p2]) {
                p.button.disabled = true;
                p.button.style.opacity = '0.7';
                p.button.style.cursor = 'not-allowed';
            }
            declare.innerText = `Player ${player.button.innerText.slice(-3)} won`;
            displayWinner.appendChild(declare);
        }
    }
}

p1.button.addEventListener('click',() => {
    updateScores(p1,p2);
})

p2.button.addEventListener('click',() => {
    updateScores(p2,p1);
})

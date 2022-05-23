let p1Btn = document.querySelector('#player1');
let p2Btn = document.querySelector("#player2");
let reset = document.querySelector('#reset');

let p1display = document.querySelector('#p1display');
let p2display = document.querySelector('#p2display');

let displayWinner = document.querySelector('#display-winner');


//
let p1Score = 0;
let p2Score = 0;

let select = document.querySelector('#points');
let maxScore = parseInt(select.value);
let isGameOver = false;

//

reset.classList.add('button-disabled');
function resetGame() {
    p1Score = 0;
    p2Score = 0;
    p1display.innerHTML = 0;
    p2display.innerHTML = 0;
    displayWinner.innerHTML = '';
    p1display.style.color = 'black';
    p2display.style.color = 'black';
    isGameOver = false;
    p1Btn.classList.remove('button-disabled');
    p2Btn.classList.remove('button-disabled');
    reset.classList.add('button-disabled');
}

reset.addEventListener('click',resetGame);

select.addEventListener('change',function() {
    maxScore = parseInt(this.value);
    console.log(maxScore);
    resetGame();
})

p1Btn.addEventListener('click',() => {
    if (!isGameOver) {
        reset.classList.remove('button-disabled');
        p1Score++;
        p1display.innerHTML = p1Score;
        if (p1Score===maxScore) {
            isGameOver = true;
            displayWinner.innerHTML = "Player 1 Won";
            p1display.style.color = 'green';
            p2display.style.color = 'red';
            p1Btn.classList.add('button-disabled');
            p2Btn.classList.add('button-disabled');
        }
        
    }
});

p2Btn.addEventListener('click',() => {
    if (!isGameOver) {
        reset.classList.remove('button-disabled');
        p2Score++;
        p2display.innerHTML = p2Score;
        if (p2Score===maxScore) {
            isGameOver = true;
            displayWinner.innerHTML = "Player 2 Won";
            p2display.style.color = 'green';
            p1display.style.color = 'red';
            p1Btn.classList.add('button-disabled');
            p2Btn.classList.add('button-disabled');
        }
        
    }
})
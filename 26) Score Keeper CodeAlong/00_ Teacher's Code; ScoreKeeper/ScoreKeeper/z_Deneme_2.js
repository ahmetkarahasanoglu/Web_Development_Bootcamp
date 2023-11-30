let p1score = 0;
let p2score = 0;

const scoreBoard = document.querySelector("p");
const playingTo = document.querySelector("#playingTo");
const resultWhoWon = document.querySelector("div");
const buttonOfAddP1 = document.querySelector("button:nth-of-type(1)");
const buttonOfAddP2 = document.querySelector("button:nth-of-type(2)");
const resetButton = document.querySelector("button:nth-of-type(3)");
updateScores();

function updateScores() {
    scoreBoard.innerText = `${p1score} - ${p2score}`;
    if(parseInt(playingTo.value) === p1score) {
        resultWhoWon.innerText = "Player 1 won!";
        buttonOfAddP1.disabled = true;
        buttonOfAddP2.disabled = true;
    }
    else if(parseInt(playingTo.value) === p2score) {
        resultWhoWon.innerText = "Player 2 won!";
        buttonOfAddP2.disabled = true;
        buttonOfAddP1.disabled = true;
    }
}

buttonOfAddP1.addEventListener("click", function(){
    p1score++;
    updateScores();
});

buttonOfAddP2.addEventListener("click", function(){
    p2score++;
    updateScores();
});

resetButton.addEventListener("click", function() {
    buttonOfAddP1.disabled = false;
    buttonOfAddP2.disabled = false;
    p1score = 0;
    p2score = 0;
    updateScores();
    resultWhoWon.innerText = "";
    document.querySelector("#initialOption").selected = true;    
})
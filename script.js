const score = document.getElementById("score");
const result = document.getElementById("result");
let playerScore = 0;
let botScore = 0;
let botChoise;

console.group("Bot Choices");

const updateScore = () =>{
    score.innerHTML = playerScore + ":" + botScore;
    botChoise = random(0,3);
    switch (botChoise){
        case 0: botChoise = "Rock";
        break;
        case 1: botChoise = "Scissors";
        break;
        case 2: botChoise = "Paper"
    }
    console.log("The bot is going to chose: " + botChoise);
}

const random = (A, B) => Math.floor(Math.random() * B + A);

const msje = (A,B,C) =>{
    result.innerHTML = A + " beats " + B + " you " + C;
    if (C == "lose"){
        botScore++;
    } else {
        playerScore++;
    }
}

const game = x => {
    if(x == botChoise){
        result.innerHTML = "Tie";
    }else if (x == 'Rock' && botChoise == 'Scissors' || x == 'Paper' && botChoise == 'Rock' || x== 'Scissors' && botChoise == 'Paper'){
        msje(x,botChoise, 'win');
    }else{
        msje(botChoise, x, 'lose')
    }
    updateScore();
}

updateScore();
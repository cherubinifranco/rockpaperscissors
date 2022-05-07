const score = document.getElementById("score");
let playerScore = 0;
let botScore = 0;
let botChoise;

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

const random = (A, B) =>{
    let X = Math.floor(Math.random() * B + A);
    return X;
}

const msje = (A,B,C) =>{
    alert(A + " beats " + B + " you " + C);
    console.log(A + " beats " + B + " you " + C);
    if (C == "lose"){
        botScore++;
    } else {
        playerScore++;
    }
}

const game = x => {
    if(x == botChoise){
        alert("Empate");
        console.log("Empate");
    }else if (x == 'Rock' && botChoise == 'Scissors' || x == 'Paper' && botChoise == 'Rock' || x== 'Scissors' && botChoise == 'Paper'){
        msje(x,botChoise, 'win');
    }else{
        msje(botChoise, x, 'lose')
    }
    updateScore();
}

updateScore();
let gameArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

let playerChoice = function() {
    let userInput = prompt("Enter either rock/paper/scissors");
    console.log(userInput);
    return userInput;   
}

let computerChoice = function() {
    console.log("Computer is thinking...");
    let compInput = Math.round(Math.random()* 3) + 1;
    
    switch(compInput) {
        case 1:
            compInput = "Rock";
            break;
        case 2:
            compInput = "Scissors";
            break;
        case 3:
            compInput = "Paper";
            break;
    }

    console.log(compInput);
}


computerChoice();
playerChoice();
let gameArray = ['Rock', 'Paper', 'Scissors'];
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
    compInput = gameArray[compInput];
    console.log(compInput);
}


computerChoice();
playerChoice();
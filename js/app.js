let gameArray = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let compScore = 0;

let playerChoice = function() {
    let userInput = prompt("Enter either rock/paper/scissors");
    console.log(userInput);
    return userInput;   
}

let computerChoice = function() {
    let compInput = Math.round(Math.random()* 3) + 1;
    compInput = gameArray[compInput];
    console.log(compInput);
    return compInput;
}


function gameManager(computerChoice, playerChoice) {
    computerChoice = computerChoice();
    playerChoice = playerChoice();

    if(computerChoice === playerChoice) {
        console.log("The game was a draw");
    }
    else if(computerChoice === 'Rock' && playerChoice === 'Scissors') {
        console.log('Computer Wins');
    }
    else if(playerChoice === 'Rock' && computerChoice === 'Scissors') {
        console.log('Player Wins');
    }
    else if(computerChoice === 'Paper' && playerChoice === 'Rock') {
        console.log('Computer Wins');
    }
    else if(playerChoice === 'Paper' && computerChoice === 'Rock') {
        console.log('Player WIns');
    }
    else if(computerChoice === "Scissors" && computerChoice === "Paper"){
        console.log("Computer Wins");
    }
    else if(playerChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Player Wins");
    }
}

gameManager(computerChoice, playerChoice);
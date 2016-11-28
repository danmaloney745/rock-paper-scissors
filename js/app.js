$(function(){
    let gameArray = ['Rock', 'Paper', 'Scissors'];
    let playerScore = 0;
    let compScore = 0;
    let playerChoice;

    var buttons = document.querySelectorAll('.myButton');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener('click' , function(event) {
            var playerChooses = this.id.substring(0, this.id.length);
            gameManager(playerChooses);
        })
    }

    // function playerChoice(){
    //     var buttons = document.querySelectorAll('.myButton');
    //     for (var i = 0; i < buttons.length; i++) {
    //         var button = buttons[i];
    //         button.addEventListener('click' , function(event) {
    //             var playerChooses = this.id.substring(0, this.id.length);
    //             gameManager(playerChooses);
    //         })
    //     }

    // };

    //Function that randomises and returns the computers choice
    function computerChoice() {
        let compInput = Math.round(Math.random()* 2) + 0;
        compInput = gameArray[compInput];
        return compInput;
    }

    //Function that calls the two choice functions and compares the values and ouput who wins.
    function gameManager(playerChoice) {
        let computer = computerChoice();
        let player = playerChoice;
        
        console.log(computer);
        console.log(player);

        if(computer === playerChoice) {
            console.log("The game was a draw");
        }
        else if(computer === 'Rock' && player === 'Scissors') {
            console.log('Computer Wins');
            compScore++;
        }
        else if(player === 'Rock' && computer === 'Scissors') {
            console.log('Player Wins');
            playerScore++;
        }
        else if(computer === 'Paper' && player === 'Rock') {
            console.log('Computer Wins');
            compScore++;
        }
        else if(player === 'Paper' && computer === 'Rock') {
            console.log('Player WIns');
            playerScore++;
        }
        else if(computer === "Scissors" && player === "Paper"){
            console.log("Computer Wins");
            compScore++;
        }
        else if(player === "Scissors" && computer === "Paper") {
            console.log("Player Wins");
            playerScore++;
        }
    }
});
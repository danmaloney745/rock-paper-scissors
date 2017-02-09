$(document).ready(function(){
    let gameArray = ['Rock', 'Paper', 'Scissors'];

    //Function that gets the button clicked and stores it as the players choice
    $("#Rock").click(function() {
        let playerChooses = this.id.substring(0, this.id.length);
        compareResults(playerChooses);
    });

    $("#Paper").click(function() {
        let playerChooses = this.id.substring(0, this.id.length);
        compareResults(playerChooses);
    });

    $("#Scissors").click(function() {
        let playerChooses = this.id.substring(0, this.id.length);
        compareResults(playerChooses);
    });

    //Function that randomises and returns the computers choice
    function computerChoice() {
        let compInput = Math.round(Math.random()* 2) + 0;   /*random num between 0 and 2*/
        compInput = gameArray[compInput];
        return compInput;
    }

    //Function that calls the two choice functions and compares the values and ouput who wins.
    function compareResults(playerChoice) {
        let computer = computerChoice();
        let player = playerChoice;
        //Comparisson if/else if  to determine the winner
        if(computer === player) {
            $("#who-wins").html("The game was a tie!");
        }
        else if(computer === 'Rock' && player === 'Scissors') {
            //print to the UI the winner and score
            $("#comp-count").html(parseInt($("#comp-count").html()) + 1);
            $("#who-wins").html("Computer Wins!");
        }
        else if(player === 'Rock' && computer === 'Scissors') {
            $("#player-count").html(parseInt($("#player-count").html()) + 1);
            $("#who-wins").html("Player Wins!");
        }
        else if(computer === 'Paper' && player === 'Rock') {
            $("#comp-count").html(parseInt($("#comp-count").html()) + 1);
            $("#who-wins").html("Computer Wins!");
        }
        else if(player === 'Paper' && computer === 'Rock') {
            $("#player-count").html(parseInt($("#player-count").html()) + 1);
            $("#who-wins").html("Player Wins!");
        }
        else if(computer === "Scissors" && player === "Paper"){
            $("#comp-count").html(parseInt($("#comp-count").html()) + 1);
            $("#who-wins").html("Computer Wins!");
        }
        else if(player === "Scissors" && computer === "Paper") {
            $("#player-count").html(parseInt($("#player-count").html()) + 1);
            $("#who-wins").html("Player Wins!");
        }
    }

    //Run the Application    
});


//References
/*http://stackoverflow.com/questions/1687936/how-to-add-an-increment1-to-the-value-of-an-element-with-jquery*/
/*http://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x*/

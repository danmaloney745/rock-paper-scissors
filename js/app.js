class RockPaperScissors {
    constructor() {
        this.moves = ["Rock", "Paper", "Scissors"];

        this.gameMatrix = [
            ["draw", "player", "computer"],
            ["computer", "draw", "player"],
            ["player", "computer", "draw"]
        ];

        this.moveButtons = $(".myButton");
        this.playerChooses;
        this.computerChooses;

        this.addEventListeners();
    }

    addEventListeners() {
        this.moveButtons.each((i, myButton) => $(myButton).click(this.runGame.bind(this)));
    }

    //Function that gets the button clicked and stores it as the players choice
    playerChoice(){
        this.playerChooses = this.moves.indexOf(event.target.id);
    };

    //Function that randomises and returns the computers choice
    computerChoice() {
        this.computerChooses = Math.floor(Math.random()* 3);   /*random num between 0 and 3*/
    }

    getWinner() {
        this.winner = this.gameMatrix[this.computerChooses][this.playerChooses];
    }
    //Function that calls the two choice functions and compares the values and ouput who wins.
    compareResults() {
        //Comparisson if/else if  to determine the winner
        if(this.computerChooses === this.playerChooses) {
            $("#who-wins").html("The game was a tie!");
        }
        else {
            //print to the UI the winner and score
            $("#who-wins").html(`${this.winner} Wins!`);
            $("#comp-count").html(parseInt($("#comp-count").html()) + 1);
        }
    }

    runGame() {
        this.playerChoice();
        this.computerChoice();
        this.getWinner();
        this.compareResults();
    }
}

$(() => window.rps = new RockPaperScissors());


//References
/*http://stackoverflow.com/questions/1687936/how-to-add-an-increment1-to-the-value-of-an-element-with-jquery*/
/*http://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x*/
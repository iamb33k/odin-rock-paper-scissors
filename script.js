
// create variables for computer options and choice

let computerOptions;
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

// create a function called computerPlay that will randomly return either R, P, or S

function computerPlay(){
    computerOptions = ["rock", "paper", "scissors"];
    computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
}

// function to run round of RPS on click of button if neither player has 5pts

function singleRound(playerChoice, computerChoice){
    if (playerScore < 5 && computerScore < 5){
    computerPlay();
    computerChoice = computerPlay();
    playerChoice = this.value;
    if (playerChoice == "rock" && computerChoice == "paper"){
            computerScore = computerScore + 1;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "Sorry, you lose!";
            return("Sorry, you lose!");
        }
    else if (playerChoice == "rock" && computerChoice == "scissors"){
            playerScore = playerScore + 1;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You win!";
            return("You win!");
        }
    else if (playerChoice == "rock" && computerChoice == "rock"){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "Tie. Please try again!";
            return("Tie.");
        }
    else if (playerChoice == "paper" && computerChoice == "paper"){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "Tie. Please try again!";
            return("Tie.");
        }
    else if (playerChoice == "paper" && computerChoice == "scissors"){
            computerScore = computerScore + 1;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "Sorry, you lose!";
            return("Sorry, you lose!");
        }
    else if (playerChoice == "paper" && computerChoice == "rock"){
            playerScore = playerScore + 1;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You win!";
            return("You win!");
        }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
            playerScore = playerScore + 1;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You win!";
            return("You win!");
        }
    else if (playerChoice == "scissors" && computerChoice == "scissors"){
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "Tie. Please try again!";
            return("Tie.");
        }
    else if (playerChoice == "scissors" && computerChoice == "rock"){
            computerScore = computerScore + 1;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "Sorry, you lose!";
            return("Sorry, you lose!");
        }
    else {
            document.getElementById("message").innerHTML = "Sorry, something went wrong.";
            return("Something went wrong.");
        }
    }

    else{
        document.getElementById("message").innerHTML = "Game over!";
        return("Game Over");
    }
}

//click events for each button

 document.getElementById('rock').addEventListener('click', singleRound);
 document.getElementById('paper').addEventListener('click', singleRound);
 document.getElementById('scissors').addEventListener('click', singleRound);
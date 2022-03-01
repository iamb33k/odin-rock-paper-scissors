
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

// write a function that plays a single round of R, P, or S

function singleRound(playerChoice, computerChoice){
    if (playerChoice == "rock" && computerChoice == "paper"){
            return("Sorry, you lose!");
        }
    else if (playerChoice == "rock" && computerChoice == "scissors"){
            return("You win!");
        }
    else if (playerChoice == "rock" && computerChoice == "rock"){
            return("Tie.");
        }
    else if (playerChoice == "paper" && computerChoice == "paper"){
            return("Tie.");
        }
    else if (playerChoice == "paper" && computerChoice == "scissors"){
            return("Sorry, you lose!");
        }
    else if (playerChoice == "paper" && computerChoice == "rock"){
            return("You win!");
        }
    else if (playerChoice == "scissors" && computerChoice == "paper"){
            return("You win!");
        }
    else if (playerChoice == "scissors" && computerChoice == "scissors"){
            return("Tie.");
        }
    else if (playerChoice == "scissors" && computerChoice == "rock"){
            return("Sorry, you lose!");
        }
    else {
            return("Something went wrong.")
        }
    }

// loop to run the game 5 times

function game(){
let finalArray = []
 for (let i = 0; i <5; i++){
     // computer makes selection
     computerPlay();
     // assign computer's selection to variable
     computerChoice = computerPlay()
     // ask player to make a selection
     const playerChoice = prompt("rock, paper, or scissors?");
     //run playerChoice vs computerChoice
     singleRound(playerChoice, computerChoice);
     //output choices
     console.log(`You chose ${playerChoice} and the computer chose ${computerChoice}`);
     //output result of single round
     console.log(singleRound(playerChoice, computerChoice));
     //update scoreboard and output
     if (singleRound(playerChoice, computerChoice) == "You win!") {
        playerScore =  playerScore + 1;
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
     }
    else if (singleRound(playerChoice, computerChoice) == "Sorry, you lose!") {
        computerScore =  computerScore + 1;
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
     }
     else {
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
     }
    }
    // calculate and display final score
    console.log(`The final score is player: ${playerScore} and computer: ${computerScore}`);

    //display result message
    if (playerScore > computerScore){
        console.log("Congrats! You win!");    
    }
    else if (playerScore < computerScore){
        console.log("Sorry, you lost! Please try again.");
    }
    else if (playerScore = computerScore){
        console.log("You tied! Could be worse...");
    }
    else{
        console.log("Something went wrong. Please try again.");
    }
 }
    
    
    
    
    
    
    


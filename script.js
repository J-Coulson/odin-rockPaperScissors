//global variables to keep score
humanScore = 0;
computerScore = 0;

//randomly returns one of the strings "rock", "paper" or "scissors"
function getComputerChoice(){
    const randomNumber = Math.floor((Math.random() * 3));
    let choice = "";

    if(randomNumber === 0){
        choice = "rock";
    } else if(randomNumber === 1){
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return(choice);
}

//returns "rock", "paper", "scissors" or "Invalid input" based on user input
function getHumanChoice(){
    let userInput = prompt("Choose Rock, Paper or Scissors");
    let lowerCaseInput = userInput.toLowerCase();

    if( lowerCaseInput === "rock" || lowerCaseInput === "paper" || lowerCaseInput === "scissors"){
        return(lowerCaseInput);
    } else {
        console.log("Invalid input, defaulting to rock.")
        return("rock");
    }
}

//Plays a single round of rock paper scissors
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("Draw! Rock matches Rock");
        } else if(computerChoice === "paper"){
            console.log("You Lose. Paper wraps Rock");
            computerScore += 1;
        } else {
            console.log("You Win! Rock blunts Scissors");
            humanScore += 1;
        }
    } else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You Win! Paper wraps Rock");
            humanScore += 1;
        } else if(computerChoice === "paper"){
            console.log("Draw! Paper matches Paper");
        } else {
            console.log("You Lose! Scissors cut Paper");
            computerScore += 1;
        }
    } else {
        if(computerChoice === "rock"){
            console.log("You Lose! Rock blunts Scissors");
            computerScore += 1;
        } else if(computerChoice === "paper"){
            console.log("You Win! Scissors cut Paper");
            humanScore += 1;
        } else {
            console.log("Draw! Scissors matches Scissors");
        } 
    }
}

playRound(getHumanChoice(), getComputerChoice());

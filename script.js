//variables to keep game score
let humanScore = 0;
let computerScore = 0;

//play a round whenever a button gets clicked
const inputPanel = document.querySelector("#inputPanel");
inputPanel.addEventListener('click', (event) => {
    const userChoice = event.target.id;

    if(userChoice === "inputPanel"){
        return;
    }
    playRound(userChoice, getComputerChoice());

    const scoreDiv = document.querySelector("#score");
    scoreDiv.textContent = `Player score: ${humanScore}\nComputer score: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        let gameOver = new CustomEvent("gameOver");
        const finish = document.querySelector("#finish");
        finish.dispatchEvent(gameOver);
    }
});

//display final result when game finishes
const finish = document.querySelector("#finish");
finish.addEventListener('gameOver', (event) => {
    if(humanScore === 5){
        finish.textContent = "Game over, You win!";
    }
    else{
        finish.textContent = "Game over, You lose!";
    }
});



//---Function definitions---//

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

//Plays a single round of rock paper scissors
function playRound(humanChoice, computerChoice){
    const choices = document.querySelector("#choices");
    choices.textContent = `You chose ${humanChoice}, and the computer chose ${computerChoice}`

    const results = document.querySelector("#results");

    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            results.textContent = "Draw! Rock matches Rock";
        } else if(computerChoice === "paper"){
            results.textContent = "You Lose. Paper wraps Rock";
            computerScore += 1;
        } else {
            results.textContent = "You Win! Rock blunts Scissors";
            humanScore += 1;
        }
    } else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            results.textContent = "You Win! Paper wraps Rock";
            humanScore += 1;
        } else if(computerChoice === "paper"){
            results.textContent = "Draw! Paper matches Paper";
        } else {
            results.textContent = "You Lose! Scissors cut Paper";
            computerScore += 1;
        }
    } else {
        if(computerChoice === "rock"){
            results.textContent = "You Lose! Rock blunts Scissors";
            computerScore += 1;
        } else if(computerChoice === "paper"){
            results.textContent = "You Win! Scissors cut Paper";
            humanScore += 1;
        } else {
            results.textContent = "Draw! Scissors matches Scissors";
        } 
    }
}

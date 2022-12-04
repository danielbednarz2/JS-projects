const btn = document.getElementsByClassName("play-game")[0];

let choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
let playerSelection;

let getComputerChoice = () => computerChoice = choices[Math.floor(Math.random() * choices.length)];
let getPlayerChoice = () => playerSelection = prompt("Rock, Paper, Scissors?");

let playRound = () => {
    getComputerChoice();
    getPlayerChoice();

    let winner;

    // Comapre computer generated option to player chosen option to see who wins

    if (computerChoice.toLowerCase() == 'rock') {
        if (playerSelection.toLowerCase() == 'scissors') {
            winner = "Computer" 
        } else if (playerSelection.toLowerCase() == 'paper') {
            winner = "Player"
        } else {
            return console.log("It's a tie.")
        }
    } else if (computerChoice.toLowerCase() == 'scissors') {
        if (playerSelection.toLowerCase() == 'paper') {
            winner = "Computer" 
        } else if (playerSelection.toLowerCase() == 'rock') {
            winner = "Player"
        } else {
            return console.log("It's a tie.")
        }
    } else if (computerChoice.toLowerCase() == 'paper') {
        if (playerSelection.toLowerCase() == 'rock') {
            winner = "Computer" 
        } else if (playerSelection.toLowerCase() == 'scissors') {
            winner = "Player"
        } else {
            return console.log("It's a tie.")
        }
    }
    console.log(`Congrats ${winner}, you've won!`)
} 

btn.addEventListener("click", playRound);
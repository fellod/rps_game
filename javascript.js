let humanScore = 0;
let computerScore = 0;

function playGame() {

    function getComputerChoice() {
        const list = ["rock", "paper", "scissors"];
        const listArray = Math.floor(Math.random() * list.length);
        const randomComputerChoice = list[listArray];
        console.log(`The computer chose ${randomComputerChoice}`);
        return randomComputerChoice;
        
    }
    function getHumanChoice() {
        user = prompt("Choose from the following: \nRock,\nPaper,\nScissors").toLowerCase();
        console.log(`You chose ${user}.`); 
        return user; 
    
    }
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("You win!");
            humanScore += 1;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lose");
            computerScore += 1;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log("You lose");
            computerScore += 1
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("You win!");
            humanScore += 1
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log("You lose");
            computerScore += 1
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You win!");
            humanScore += 1
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie");
        }
        console.log(`your score: ${humanScore}\ncomputer score: ${computerScore}`);
    }
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(humanSelection, computerSelection);
};

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
    console.log("Game over: Congrats on winning the game!!");
} else if (humanScore < computerScore) {
    console.log("Game over: you lose :(");
} else {
    console.log("Game over: draw");
}
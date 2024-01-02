// Randomly get a computer choice
const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

// Play round
let playerChoice;
let playerNum;
let computerChoice;
let computerNum;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playerChoice = "Rock";
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
});
paper.addEventListener("click", () => {
    playerChoice = "Paper";
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
});
scissors.addEventListener("click", () => {
    playerChoice = "Scissors";
    computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
});

const playRound = (playerChoice, computerChoice) => {
    let playerNum, computerNum;

    if (playerChoice === "Rock") playerNum = 0;
    else if (playerChoice === "Paper") playerNum = 1;
    else playerNum = 2;
    if (computerChoice === "Rock") computerNum = 0;
    else if (computerChoice === "Paper") computerNum = 1;
    else computerNum = 2;

    if (playerNum === computerNum) return "Tie";
    else if (computerNum - playerNum === 1 || playerNum - computerNum === 2)
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    else return `You Win! ${playerChoice} beats ${computerChoice}`;
};

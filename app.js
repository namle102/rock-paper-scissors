// GAME ON
let playerChoice;
let computerChoice;
let result;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const body = document.querySelector("body");
const div = document.createElement("div");
const span = document.createElement("span");

rock.addEventListener("click", () => {
    playerChoice = "Rock";
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);

    // Display the current round
    if (result === 1) {
        span.textContent = "Tie";
        span.style.color = "black";
    } else if (result === 0) {
        span.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        span.style.color = "red";
    } else {
        span.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        span.style.color = "green";
    }
    div.appendChild(span);
    body.appendChild(span);
});

paper.addEventListener("click", () => {
    playerChoice = "Paper";
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);

    // Display the current round
    if (result === 1) {
        span.textContent = "Tie";
        span.style.color = "black";
    } else if (result === 0) {
        span.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        span.style.color = "red";
    } else {
        span.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        span.style.color = "green";
    }
    div.appendChild(span);
    body.appendChild(span);
});

scissors.addEventListener("click", () => {
    playerChoice = "Scissors";
    computerChoice = getComputerChoice();
    result = playRound(playerChoice, computerChoice);

    // Display the current round
    if (result === 1) {
        span.textContent = "Tie";
        span.style.color = "black";
    } else if (result === 0) {
        span.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        span.style.color = "red";
    } else {
        span.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        span.style.color = "green";
    }
    div.appendChild(span);
    body.appendChild(span);
});

// HELPER FUNC: Randomly get a computer choice
const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

// HELPER FUNC: Play round
const playRound = (playerChoice, computerChoice) => {
    let playerNum, computerNum;
    let pCount, cCount;

    if (playerChoice === "Rock") playerNum = 0;
    else if (playerChoice === "Paper") playerNum = 1;
    else playerNum = 2;
    if (computerChoice === "Rock") computerNum = 0;
    else if (computerChoice === "Paper") computerNum = 1;
    else computerNum = 2;

    if (playerNum === computerNum) {
        return 1;
    } else if (computerNum - playerNum === 1 || playerNum - computerNum === 2) {
        return 0;
    } else {
        return 2;
    }
};

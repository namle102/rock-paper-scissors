// GAME ON
let playerChoice, computerChoice;
let result;
let pCount = 0,
    cCount = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const body = document.querySelector("body");
const span = document.createElement("span");
const h2 = document.createElement("h2");
const h1 = document.createElement("h1");
const replay = document.createElement("button");

rock.addEventListener("click", () => {
    if (pCount === 5 || cCount === 5) {
        alert("Please Play Again!");
    } else {
        playerChoice = "Rock";
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        displayResult();
        displayTotal();
    }
});

paper.addEventListener("click", () => {
    if (pCount === 5 || cCount === 5) {
        alert("Please Play Again!");
    } else {
        playerChoice = "Paper";
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        displayResult();
        displayTotal();
    }
});

scissors.addEventListener("click", () => {
    if (pCount === 5 || cCount === 5) {
        alert("Please Play Again!");
    } else {
        playerChoice = "Scissors";
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        displayResult();
        displayTotal();
    }
});

// Play again
replay.addEventListener("click", () => {
    pCount = 0;
    cCount = 0;
    body.removeChild(h1);
    body.removeChild(h2);
    body.removeChild(span);
    body.removeChild(replay);
});

// HELPER: Display total
const displayTotal = () => {
    h2.textContent = `${pCount} - ${cCount}`;
    body.appendChild(h2);

    if (pCount === 5 && cCount < 5) {
        h1.textContent = "##### YOU WIN #####";
        replay.textContent = "PLAY AGAIN";
        body.appendChild(h1);
        body.appendChild(replay);
    }
    if (pCount < 5 && cCount === 5) {
        h1.textContent = "##### YOU LOSE #####";
        replay.textContent = "PLAY AGAIN";
        body.appendChild(h1);
        body.appendChild(replay);
    }
};

// HELPER: Display result
const displayResult = () => {
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
    body.appendChild(span);
};

// HELPER: Randomly get a computer choice
const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

// HELPER: Play round
const playRound = (playerChoice, computerChoice) => {
    let playerNum, computerNum;

    if (playerChoice === "Rock") playerNum = 0;
    else if (playerChoice === "Paper") playerNum = 1;
    else playerNum = 2;
    if (computerChoice === "Rock") computerNum = 0;
    else if (computerChoice === "Paper") computerNum = 1;
    else computerNum = 2;

    if (playerNum === computerNum) {
        return 1;
    } else if (computerNum - playerNum === 1 || playerNum - computerNum === 2) {
        cCount++;
        return 0;
    } else {
        pCount++;
        return 3;
    }
};

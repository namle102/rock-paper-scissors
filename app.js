// Randomly get com choice
const getComputerChoice = () => {
    let comChoice;

    let num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) comChoice = "Rock";
    else if (num === 2) comChoice = "Paper";
    else comChoice = "Scissors";

    return comChoice;
};

// Single round play
function playRound(playerSelection, computerSelection) {
    let res;
    const pChoice =
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.substring(1).toLowerCase();
    const cChoice =
        computerSelection.charAt(0).toUpperCase() +
        computerSelection.substring(1).toLowerCase();

    if (pChoice === cChoice) {
        console.log("Ties");
        res = 0;
    } else if (
        (pChoice === "Rock" && cChoice === "Paper") ||
        (pChoice === "Paper" && cChoice === "Scissors") ||
        (pChoice === "Scissors" && cChoice === "Rock")
    ) {
        console.log(`You Lose:  ${cChoice} beats ${pChoice}`);
        res = 1;
    } else {
        console.log(`You Win:   ${pChoice} beats ${cChoice}`);
        res = 2;
    }

    return res;
}

// Game on
function game() {
    let pCount = 0;
    let cCount = 0;
    let final;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        let res = playRound(playerSelection, computerSelection);

        res === 1 && cCount++;
        res === 2 && pCount++;

        console.log(`SCORE:     ${pCount}-${cCount}`);
        console.log(`-----`);
    }

    if (pCount > cCount) final = `\nYOU WIN by ${pCount}-${cCount}`;
    else if (pCount < cCount) final = `\nYOU LOSE by ${pCount}-${cCount}`;
    else final = `\nTIES by ${pCount}-${cCount}`;

    return final;
}
console.log(game());

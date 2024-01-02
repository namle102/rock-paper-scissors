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
    const pChoice = String(playerSelection).toLowerCase();
    const cChoice = String(computerSelection).toLowerCase();
    const pChoiceOut = pChoice.charAt(0).toUpperCase() + pChoice.substring(1);
    const cChoiceOut = cChoice.charAt(0).toUpperCase() + cChoice.substring(1);

    if (pChoice === cChoice)
        return playRound(playerSelection, getComputerChoice());
    else if (
        (pChoice === "rock" && cChoice === "paper") ||
        (pChoice === "paper" && cChoice === "scissors") ||
        (pChoice === "scissors" && cChoice === "rock")
    )
        return `You Lose! ${cChoiceOut} beats ${pChoiceOut}`;
    else return `You Win! ${pChoiceOut} beats ${cChoiceOut}`;
}
const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

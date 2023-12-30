// Randomly get com choice
const getComputerChoice = () => {
    let num = Math.floor(Math.random()*3 + 1); 
    return num;
}

// Stimulate single play round
function playRound(playerSelection, computerSelection) {
    let x = String(playerSelection).toLowerCase(), xNum;
    let y, yNum = computerSelection;
    let res, outcome;

    x = x.charAt(0).toUpperCase() + x.substring(1);
    if (x === "Rock") xNum = 1;
    else if (x === "Paper") xNum = 2;
    else if (x === "Scissors") xNum = 3;
    else xNum = NaN;

    if (yNum === 1) y = "Rock";
    else if (yNum === 2) y = "Paper";
    else y = "Scissors";

    if (xNum === yNum) {
        res = "Tie";
        outcome = 0;
    }
    else if (yNum-xNum === 1) {
        res = `You Lose! ${y} beats ${x}`;
        outcome = -1;
    }
    else if (xNum-yNum === 2) {
        res = `You Lose! ${y} beats ${x}`;
        outcome = -1;
    }
    else if (xNum-yNum === 1) {
        res = `You Win! ${x} beats ${y}`;
        outcome = 1;
    }
    else if (yNum-xNum === 2) {
        res = `You Win! ${x} beats ${y}`;
        outcome = 1;
    }
    else {
        res = "Invalid";
        outcome = NaN;
    }

    console.log("## New Round ##");
    console.log(`Me choice:   ${x}`);
    console.log(`Com choice:  ${y}`);
    console.log(res);
    console.log("\n");
    return outcome;
}

// IIFE stimulate a game
(function() {
    let playerCount = 0, comCount = 0;
    const playerChoicePool = ['rock', 'paper', 'scissors', 'scissors', 'rock'];

    for (let i=0; i<5; i++) {
        const playerSelection = playerChoicePool[i];
        const computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);
        outcome === 1 && playerCount++;
        outcome === -1 && comCount++;
    }

    if (playerCount > comCount) console.log(`You win by ${playerCount} - ${comCount}`);
    else if (playerCount < comCount) console.log(`You lose by ${playerCount} - ${comCount}`);
    else console.log(`You tie by ${playerCount} - ${comCount}`);
})();
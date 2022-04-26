// create a funtion that named computerPlay that randomly returns rock, paper or scissors
function computerPlay() {
    let random = Math.floor(Math.random()*3);
    const choice = ['rock', 'paper', 'scissors'];
    random = choice[random]
    return random
}

// make a function that allow player to play against computer and output result either player won or lost.

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You won! ${playerSelection} beats ${computerSelection}`;        
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You won! ${playerSelection} beats ${computerSelection}`;        
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You won! ${playerSelection} beats ${computerSelection}`;        
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'tie!';       
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'tie!';          
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'tie!';          
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// a function that allow game to play 5 timmes.

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Enter either rock, paper or scissors', '').toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    
}
game();
// create a funtion that named computerPlay that randomly returns rock, paper or scissors
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let random = Math.floor(Math.random()*3);
    const choice = ['rock', 'paper', 'scissors'];
    random = choice[random]
    return random
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerResult.textContent = `Player Score: ${++playerScore}`; 
        result.textContent = `You won ${playerSelection} beats ${computerSelection}`;
        if (playerScore === 5) {
            result.textContent = `Hurray! You won.`;
            result.style.color = 'yellow';
            hideout()
           replaybtn.style.display = 'block'
           replaybtn.addEventListener('click', playAgain)
            
        }             
    } else if (playerSelection === computerSelection ) {
        result.textContent = `it's a tie!`;       
    } else {
        computerResult.textContent = `Computer Score: ${++computerScore}`;
        result.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
        if (computerScore === 5) {
            result.textContent = `Oh no! You lost to a computer.`;
            hideout();
           replaybtn.style.display = 'block'
           replaybtn.addEventListener('click', playAgain)
            
        }
    }
   
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerResult = document.querySelector('.p-score');
const computerResult = document.querySelector('.c-score');
const result = document.querySelector('.result');
const replaybtn = document.querySelector('.play-again');
const date = document.querySelector('#footer-year');

rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);


function playGame(e) {
    playerSelection = e.target.id;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
}
playerResult.textContent = 'Player score: 0';
computerResult.textContent = ' Computer Score: 0';
replaybtn.textContent = 'PLAY AGAIN';
replaybtn.style.display = 'none'
playerResult.style.color = 'red';
computerResult.style.color = 'red';
result.style.color = 'red';

function playAgain() {
    setTimeout(window.location.reload());
}

function hideout() {
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    
}

// footer date 
date.textContent = new Date().getFullYear();
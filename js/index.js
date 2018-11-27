function game()
{
    while (nbRound != 0) {
        playerSelection = prompt('Choose between Rock,Paper or Scissors');
        playerSelection = checkPlayerSelection(playerSelection);
        while(playerSelection === null) {
            alert('Incorrect input.');
            playerSelection = prompt('Choose between Rock,Paper or Scissors');
            playerSelection = checkPlayerSelection(playerSelection);
        }
        computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        nbRound--;
    }
    console.log('End of game');
}

function computerPlay()
{
    let random = Math.floor(Math.random()*3)+1;
    let computer =  (random === 1) ? 'Rock' :
                    (random === 2) ? 'Paper' :
                    'Scissors';
    return computer;
}

function playRound(playerSelection, computerSelection)
{
    let message = null;
    switch (playerSelection) {
        case 'Rock':
            message = useRock(computerSelection);
            break;
    
        case 'Paper':
            message = usePaper(computerSelection);
            break;

        case 'Scissors':
            message = useScissors(computerSelection);
            break;
    }

    return message;
}

function checkPlayerSelection(selection)
{
    let rockRegEx = /rock/i;
    let scissorsRegEx = /scissors/i;
    let paperRegEx = /paper/i;

    return  (rockRegEx.test(selection)) ? 'Rock':
            (scissorsRegEx.test(selection)) ? 'Scissors':
            (paperRegEx.test(selection)) ? 'Paper':
            null;
}

function useRock(computerSelection)
{
    return  (computerSelection === 'Rock') ? 'Draw.':
            (computerSelection === 'Paper') ? 'You Lose! Paper beats Rock.':
            'You Win! Rock beats Scissors.';
}

function useScissors(computerSelection)
{
    return  (computerSelection === 'Scissors') ? 'Draw.':
            (computerSelection === 'Rock') ? 'You Lose! Rock beats Scissors.':
            'You Win! Scissors beats Paper.';
}

function usePaper(computerSelection)
{
    return  (computerSelection === 'Paper') ? 'Draw.':
            (computerSelection === 'Scissors') ? 'You Lose! Scissors beats Paper.':
            'You Win! Paper beats Rock.';
}

const btnPlay = document.querySelector('button');
let nbRound = 5;
btnPlay.addEventListener('click', game);
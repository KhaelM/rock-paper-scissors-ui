function showRoundInformation() {
    let title = document.querySelector('p');
    rounds++;
    title.textContent = "Round "+(rounds);
}

function backToMainMenu() {
    document.body.innerHTML = '<p>Choose a character</p><div class="container"><div class="btn" id="Rock"></div><div class="btn" id="Paper"></div><div class="btn" id="Scissors"></div></div>';
    let hands = document.querySelectorAll('.btn');
    hands.forEach(hand => hand.addEventListener('click', play));
}

function addMainMenuElt() {
    let mainMenuBtn = document.createElement('button');
    mainMenuBtn.textContent = "Back to Character selection";
    mainMenuBtn.style.position = "relative";
    mainMenuBtn.style.left = "500px";
    mainMenuBtn.addEventListener('click', backToMainMenu);
    document.body.append(mainMenuBtn);
}

function addVersusElt(container) {
    let versusElt = document.createElement('h1');
    versusElt.textContent = 'VS';
    versusElt.style.marginRight = '100px';
    container.append(versusElt);
}

function addComputerElt(container, computerSelection) {
    let computerHandElt = document.createElement('div');
    computerHandElt.id = computerSelection;
    computerHandElt.classList.add('btn');
    container.append(computerHandElt);

    let computerHandMsgElt = document.createElement('span');
    computerHandMsgElt.textContent = 'Our Score: '+ computerScore;
    computerHandElt.append(computerHandMsgElt);
}

function computerPlay()
{
    let random = Math.floor(Math.random()*3)+1;
    let computer =  (random === 1) ? 'Rock' :
                    (random === 2) ? 'Paper' :
                    'Scissors';
    return computer;
}

function checkRound() {
    if(rounds !== 5) return;
    document.body.innerHTML = "";
    let thanksElt = document.createElement("h1");
    thanksElt.textContent = 'Thanks for playing';
    document.body.append(thanksElt);
    let userScoreElt = document.createElement("div");
    userScoreElt.textContent = "Your score:"+userScore;
    document.body.append(userScoreElt);
    let computerScoreElt = document.createElement("div");
    computerScoreElt.textContent = "Computer Score"+computerScore;
    document.body.append(computerScoreElt); 
}

function useRock(computerSelection)
{
    showRoundInformation();

    let container = document.querySelector('.container');
    container.innerHTML = "";

    let playerHandElt = document.createElement('div');
    playerHandElt.id = "Rock";
    playerHandElt.classList.add('btn');
    container.append(playerHandElt);

    let userHandMsgElt = document.createElement('span');
    userHandMsgElt.textContent = 'Your Score: '+ (userScore+1);
    playerHandElt.append(userHandMsgElt);

    addVersusElt(container);
    addComputerElt(container,computerSelection);

    let resultElt = document.createElement('div');

    switch(computerSelection) {
        case 'Rock': 
            resultElt.textContent = 'Draw';
            break;
        case 'Paper':
            resultElt.textContent = 'You Lose! Paper beats Rock.';
            computerScore++;
            break;
        case 'Scissors':
            resultElt.textContent = 'You Win! Rock beats Scissors.';
            userScore++;
            break;
    }
    document.body.append(resultElt);
    
    addMainMenuElt();
    checkRound();
}

function useScissors(computerSelection)
{
    showRoundInformation();

    let container = document.querySelector('.container');
    container.innerHTML = "";

    let playerHandElt = document.createElement('div');
    playerHandElt.id = "Scissors";
    playerHandElt.classList.add('btn');
    container.append(playerHandElt);

    let userHandMsgElt = document.createElement('span');
    userHandMsgElt.textContent = 'Your Score: '+ (userScore+1);
    playerHandElt.append(userHandMsgElt);

    addVersusElt(container);
    addComputerElt(container,computerSelection);

    let resultElt = document.createElement('div');

    switch(computerSelection) {
        case 'Rock': 
            resultElt.textContent = 'You Lose! Rock beats Scissors.';
            computerScore++;
            break;
        case 'Paper':
            resultElt.textContent = 'You Win! Scissors beats Paper.';
            userScore++;
            break;
        case 'Scissors':
            resultElt.textContent = 'Draw';
            break;
    }
    document.body.append(resultElt);

    addMainMenuElt();
    checkRound();
}

function usePaper(computerSelection)
{
    showRoundInformation();

    let container = document.querySelector('.container');
    container.innerHTML = "";

    let playerHandElt = document.createElement('div');
    playerHandElt.id = "Paper";
    playerHandElt.classList.add('btn');
    container.append(playerHandElt);

    let userHandMsgElt = document.createElement('span');
    userHandMsgElt.textContent = 'Your Score: '+ (userScore+1);
    playerHandElt.append(userHandMsgElt);

    addVersusElt(container);
    addComputerElt(container,computerSelection);

    let resultElt = document.createElement('div');

    switch(computerSelection) {
        case 'Rock': 
            resultElt.textContent = 'You Win! Paper beats Rock.';
            userScore++;
            break;
        case 'Paper':
            resultElt.textContent = 'Draw';
            break;
        case 'Scissors':
            resultElt.textContent = 'You Lose! Scissors beats Paper.';
            computerScore++;
            break;
    }
    document.body.append(resultElt);

    addMainMenuElt();
    checkRound();
}

function play(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    switch(playerSelection) {
        case 'Rock':
            useRock(computerSelection);
            break;
        case 'Paper':
            usePaper(computerSelection);
            break;
        case 'Scissors':
            useScissors(computerSelection);
            break;
    }
}

let rounds = 0;
let userScore = 0;
let computerScore = 0;

const hands = document.querySelectorAll('.btn');
hands.forEach(hand => hand.addEventListener('click', play));
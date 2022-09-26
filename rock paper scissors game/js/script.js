const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0,0];
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(e){
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    
    let result = checkWinner(playerSelection, computerSelection);
    if (result === 'You'){
        result += ' wins!';
        winnerScores[0]++;
    }

    if (result === 'Computer'){
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!'
    }

    score.innerHTML = '<br>Player(you) - ' + winnerScores[0]+ ' Computer - ' + winnerScores[1];
    messenger(result + '<br><br>' + 'Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong>');
}

function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'You';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'You';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'You';
        }
    }
}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}
let playerScore = 0;
let computerScore = 0;

const pScore = document.querySelector('#p-score');
const cScore = document.querySelector('#c-score');


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        break;
      case "paper":
        computerScore++;
        cScore.innerHTML = computerScore;
        break;
      case "scissors":
        playerScore++;
        pScore.innerHTML = playerScore;
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        playerScore++;
        pScore.innerHTML = playerScore;
        break;
      case "paper":
        break;
      case "scissors":
        computerScore++;
        cScore.innerHTML = computerScore;
        break;
    }
  } else {
    switch (computerSelection) {
      case "rock":
        computerScore++;
        cScore.innerHTML = computerScore;
        break;
      case "paper":
        playerScore++;
        pScore.innerHTML = playerScore;
        break;
      case "scissors":
        break;
    }
  }
}


function getComputerChoice() {
  const list = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * list.length);
  let choice = list[index];
  return choice;
}

function endGame() {
  if (playerScore === 5) {
    swal({title: "Good job!", text: "You win the game", icon: 
"success", button: "Play Again"}).then(function(){ 
   location.reload();
   }
);
  } else if (computerScore === 5) {
    swal({title: "Better luck next time!", text: "You lose the game", icon: 
"error", button: "Play Again"}).then(function(){ 
   location.reload();
   }
);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn1 = document.querySelector('#btn1');
  btn1.addEventListener('click', () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    endGame();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btn2 = document.querySelector('#btn2');
  btn2.addEventListener('click', () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    endGame();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btn3 = document.querySelector('#btn3');
  btn3.addEventListener('click', () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    endGame();
    })
  });


   
   
  



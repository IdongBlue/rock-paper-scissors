function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return "You Draw! Rock matches Rock";
        break;
      case "paper":
        return "You Lose! Paper beats Rock";
        break;
      case "scissors":
        return "You Win! Rock beats Scissors";
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return "You Win! Paper Beats Rock";
        break;
      case "paper":
        return "You Draw! Paper Matches Paper";
        break;
      case "scissors":
        return "You Lose! Scissors Beats Paper";
        break;
    }
  } else {
    switch (computerSelection) {
      case "rock":
        return "You Lose! Rock Beats Scissors";
        break;
      case "paper":
        return "You Win! Scissors Beats Paper!";
        break;
      case "scissors":
        return "You Draw! Scissors Matches Scissors";
        break;
    }
  }
}

function game() {
  let result = 0;

  for (let i = 0; i < 5; i++) {
    function getComputerChoice() {
      const list = ["rock", "paper", "scissors"];
      let index = Math.floor(Math.random() * list.length);
      let choice = list[index];
      return choice;
    }

    function getPlayerChoice() {
      while (true) {
        let choice = prompt("rock, paper, or scissors");
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
          return choice;
          break;
        }
      }
    }

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    var play = playRound(playerSelection, computerSelection);
    console.log(play);
    if (play.charAt(4) === "W") {
      result++;
    } else if (play.charAt(4) === "D") {
      result += 0.5;
    }
  }

  if (result > 2.5) {
    console.log(`You win the game with a result of ${result}/5`);
  } else if (result < 2.5) {
    console.log(`You lose the game with a result of ${result}/5`);
  } else {
    console.log(`You draw the game with a result of ${result}/5`);
  }
}

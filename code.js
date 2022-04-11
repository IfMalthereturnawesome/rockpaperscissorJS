function computerPlay() {
  let random = Math.floor(Math.random() * (2 + 1) + 1);

  if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissor";
  } else if (random === 3) {
    return "rock";
  }
}

function singeRound(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissor") {
    console.log("You win !, rock beats scissors");
    return 1;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("You loose, paper beats rocks");
    return 2;
  } else if (playerChoice === "paper" && computerChoice === "scissor") {
    console.log("You loose, scissor beats paper");
    return 2;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("You win , " + "paper " + "beats " + "rock");
    return 1;
  } else if (playerChoice === "scissor" && computerChoice === "rock") {
    console.log(computerChoice);

    console.log("You loose, rock beats scissor");
    return 2;
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    console.log("You win , scissor beats paper");
    return 1;
  } else {
    console.log("Its a tie!");
    return 0;
  }
}

function game() {
  let playerChoice = prompt();

  let computer = computerPlay();

  let games;
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    games = singeRound(playerChoice, computer);

    if (games === 1) {
      playerScore = playerScore + 1;
      console.log(computerScore + " computerScore");
      console.log(playerScore + " playerScore");
      i++;
    } else if (games === 2) {
      computerScore = computerScore + 1;
      console.log(computerScore + " computerScore");
      console.log(playerScore + " playerScore");
      i++;
    } else {
    }

    if (i === 5 && computerScore > playerScore) {
      console.log(
        "Computer wins with: " +
          "PlayerScore: " +
          playerScore +
          " ComputerScore: " +
          computerScore
      );
      break;
    } else if (computerScore < playerScore && i === 5) {
      console.log(
        "You win with the score: " +
          "PlayerScore: " +
          playerScore +
          " ComputerScore: " +
          computerScore
      );
      break;
    } else if (i != 5) {
      playerChoice = prompt();
      computer = computerPlay();
      i--;
    }
  }
}

let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const choices = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("reset");

const options = ["rock", "paper", "scissors"];

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const computerChoice = options[Math.floor(Math.random() * 3)];
    playRound(userChoice, computerChoice);
  });
});

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultEl.textContent = "Make your move!";
});

function playRound(user, computer) {
  if (user === computer) {
    resultEl.textContent = `It's a draw! You both chose ${user}`;
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    playerScore++;
    resultEl.textContent = `You win! ${user} beats ${computer}`;
  } else {
    computerScore++;
    resultEl.textContent = `You lose! ${computer} beats ${user}`;
  }
  updateScore();
}

function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

const diceImages = [
   "dice1.png",
  "dice2.png",
   "dice3.png",
    "dice4.png",
     "dice5.png",
      "dice6.png"
];

function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const result = document.getElementById("result");

  // Random rolls (1–6)
  const roll1 = Math.floor(Math.random() * 6);
  const roll2 = Math.floor(Math.random() * 6);

  // Show dice images immediately
  dice1.src = diceImages[roll1];
  dice2.src = diceImages[roll2];

  // Decide winner
  if (roll1 > roll2) {
    result.textContent = "🏆 Player 1 Wins!";
  } else if (roll2 > roll1) {
    result.textContent = "🏆 Player 2 Wins!";
  } else {
    result.textContent = "🤝 It's a Draw!";
  }
}
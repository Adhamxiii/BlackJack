let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let msgEl = document.getElementById("msg-el");
let sumEL = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  Name : "A",
  Chips : 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips

document
  .getElementById("start")
  .addEventListener("click", function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    isAlive = true;
    renderGame();
  });

function getRandomCard() {
  let rn = Math.floor(Math.random() * 13) + 1;
  if (rn === 1) {
    return 11;
  } else if (rn > 10) {
    return 10;
  } else {
    return rn;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }
  sumEL.textContent = "Sum: " + sum;

  if (sum <= 20) {
    msg = "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    msg = "You're out of the game!";
    isAlive = false;
  }
  msgEl.textContent = msg;
}

document.getElementById("new").addEventListener("click", function newCard() {
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
});
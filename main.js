//Variables
var discardPile = document.querySelector('.discard-pile');
var gameMsg = document.querySelector('.msg');
var gameMsgBox = document.querySelector('.game-msg');
var winPlayerOne = document.querySelector('.player-one');
var winPlayerTwo = document.querySelector('.player-two');
var newGame;

//Event Listeners
document.addEventListener('keydown', checkPlayerMove);



//Functions
window.addEventListener('load', startNewGame);

function startNewGame() {
  newGame = new Game();
  newGame.shuffleDeck(newGame.allCards);
  newGame.dealCards();
  newGame.currentTurn = newGame.firstPlayer;
};

function checkPlayerMove(e) {
  if (e.key === 'q') {
    newGame.addToDiscardPile(newGame.firstPlayer);
  } else if (e.key === 'p') {
    newGame.addToDiscardPile(newGame.secondPlayer);
  } else if (e.key === 'f') {
    newGame.slapCards(newGame.firstPlayer);
  } else if (e.key === 'j') {
    newGame.slapCards(newGame.secondPlayer);
  }
};


function renderDiscard() {
  discardPile.classList.remove('hidden');
  var topCardIndex = newGame.cardsInDiscardPile.length - 1;
  var cardImage = newGame.cardsInDiscardPile[topCardIndex];
  discardPile.innerHTML = `<img class="discard-pile" src="./assets/${cardImage}.png">`;
}

function removeDiscardPile() {
  discardPile.classList.add('hidden');
  //Message for good slap
}

function renderMsg(player) {
  gameMsgBox.classList.remove('hidden');
  var playerNum = findPlayerNum(player).playerNum;
  var otherPlayerNum = findPlayerNum(player).otherPlayerNum;
  if (newGame.cardsInDiscardPile.length >= 3 && newGame.checkForSandwich()) {
    gameMsg.innerText = `SANDWICH! PLAYER ${playerNum} TAKES THE PILE!`;
  } else if (newGame.cardsInDiscardPile.length === 2 && newGame.checkForDoubles()) {
    gameMsg.innerText = `DOUBLE! PLAYER ${playerNum} TAKES THE PILE!`;
  } else if (newGame.checkForJack()) {
    gameMsg.innerText = `SLAPJACK! PLAYER ${playerNum} TAKES THE PILE!`;
  } else {
    gameMsg.innerText = `BAD SLAP! PLAYER ${playerNum} FORFEITS A CARD TO PLAYER ${otherPlayerNum}!`;
  }
}

function findPlayerNum(player) {
  if (newGame.firstPlayer === player) {
    playerNum = 1;
    otherPlayerNum = 2;
  } else if (newGame.secondPlayer === player) {
    playerNum = 2;
    otherPlayerNum = 1;
  }
  return {
    playerNum, otherPlayerNum
  };
}

function removeMsg() {
  gameMsgBox.classList.add('hidden');
}

// function renderWinnerMsg() {
//   var playerNum = 1;
//   gameMsg.innerText = `${playerNum} WINS!`;
// }

function updateWinCount(player) {
  if (player === newGame.firstPlayer) {
    winPlayerOne.innerText = player.wins;
  } else if (player === newGame.secondPlayer) {
    winPlayerTwo.innerText = player.wins;
  }
}

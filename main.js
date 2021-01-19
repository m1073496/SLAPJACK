//Variables
var discardPile = document.querySelector('.discard-pile');
var gameMsg = document.querySelector('.msg');
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

function renderSlapJackMsg() {
  var playerNum = 1;
  gameMsg.innerText = `SLAPJACK! PLAYER ${playerNum} TAKES THE PILE!`;
}

function renderDoubleMsg() {
  var playerNum = 1;
  gameMsg.innerText = `DOUBLE! PLAYER ${playerNum} TAKES THE PILE!`;
}

function renderSandwichMsg() {
  var playerNum = 1;
  gameMsg.innerText = `SANDWICH! PLAYER ${playerNum} TAKES THE PILE!`;
}

function renderBadSlapMsg() {
  var playerNum = 1;
  gameMsg.innerText = `BAD SLAP! PLAYER ${playerNum} FORFEITS A CARD TO PLAYER ${playerNum}!`;
}

function renderWinnerMsg() {
  var playerNum = 1;
  gameMsg.innerText = `${playerNum} WINS!`;
}

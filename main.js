//Variables
var discardPile = document.querySelector('.discard-pile');
var gameMsg = document.querySelector('.msg');
var gameMsgBox = document.querySelector('.game-msg');
var stackOne = document.querySelector('.stack-one');
var stackTwo = document.querySelector('.stack-two');
var winsPlayerOne = document.querySelector('.player-one');
var winsPlayerTwo = document.querySelector('.player-two');
var newGameButton = document.querySelector('.new-game-button');
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

function cloak(element) {
  element.classList.add('hidden');
}

function reveal(element) {
  element.classList.remove('hidden');
}

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
  reveal(discardPile);
  var topCardIndex = newGame.cardsInDiscardPile.length - 1;
  var cardImage = newGame.cardsInDiscardPile[topCardIndex];
  discardPile.innerHTML = `<img class="discard-pile" src="./assets/${cardImage}.png">`;
}

function renderMsg(player) {
  reveal(gameMsgBox);
  var playerNum = findPlayerNum(player).playerNum;
  var otherPlayerNum = findPlayerNum(player).otherPlayerNum;
  if (newGame.cardsInDiscardPile.length >= 3 && newGame.checkForSandwich()) {
    gameMsg.innerText = `SANDWICH! PLAYER ${playerNum} TAKES THE PILE!`;
  } else if (newGame.cardsInDiscardPile.length >= 2 && newGame.checkForDoubles()) {
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

function renderWin(player) {
  if (player === newGame.firstPlayer) {
    winsPlayerOne.innerText = player.wins;
    gameMsg.innerText = `PLAYER 1 WINS!`;
    reveal(gameMsgBox);
    reveal(newGameButton);
  } else if (player === newGame.secondPlayer) {
    winsPlayerTwo.innerText = player.wins;
    gameMsg.innerText = `PLAYER 2 WINS!`;
    reveal(gameMsgBox);
    reveal(newGameButton);
  }
}

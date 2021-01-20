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
window.addEventListener('load', startNewGame);
newGameButton.addEventListener('click', startNewGame);


//Functions
function startNewGame() {
  newGame = new Game();
  newGame.shuffleDeck(newGame.allCards);
  newGame.dealCards();
  reveal(stackOne);
  reveal(stackTwo);
  cloak(discardPile);
  cloak(newGameButton);
  gameMsg.innerText = `SLAPJACK!`;
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
  cloak(gameMsgBox);
  var topCardIndex = newGame.cardsInDiscardPile.length - 1;
  var cardImage = newGame.cardsInDiscardPile[topCardIndex];
  discardPile.innerHTML = `<img class="discard-pile" src="./assets/${cardImage}.png">`;
}

function renderMsg(player) {
  reveal(gameMsgBox);
  var checkBothHands = (newGame.firstPlayer.hand.length !== 0 && newGame.secondPlayer.hand.length !== 0);
  var playerNum = findPlayerNum(player).playerNum;
  var otherPlayerNum = findPlayerNum(player).otherPlayerNum;
  if (newGame.cardsInDiscardPile.length >= 3 && checkBothHands && checkForSandwich()) {
    gameMsg.innerText = `SANDWICH! PLAYER ${playerNum} TAKES THE PILE!`;
  } else if (newGame.cardsInDiscardPile.length >= 2 && checkBothHands && checkForDoubles()) {
    gameMsg.innerText = `DOUBLE! PLAYER ${playerNum} TAKES THE PILE!`;
  } else if (checkForJack()) {
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


 function checkValidity() {
    if (newGame.cardsInDiscardPile.length >= 3) {
      return (checkForJack() || checkForDoubles() || checkForSandwich());
    } else if (newGame.cardsInDiscardPile.length >= 2) {
      return (checkForJack() || checkForDoubles());
    } else {
      return (checkForJack());
    }
  }

  function checkForJack() {
    var topCard = newGame.cardsInDiscardPile[newGame.cardsInDiscardPile.length - 1];
    var splitString = topCard.split('-');
    return (splitString[1] === 'jack');
  }

  function checkForDoubles() {
    var topCard = newGame.cardsInDiscardPile[newGame.cardsInDiscardPile.length - 1];
    var secondCard = newGame.cardsInDiscardPile[newGame.cardsInDiscardPile.length - 2];
    var splitFirst = topCard.split('-');
    var splitSecond = secondCard.split('-');
    return (splitFirst[1] === splitSecond[1]);
  }

  function checkForSandwich() {
    var topCard = newGame.cardsInDiscardPile[newGame.cardsInDiscardPile.length - 1];
    var thirdCard = newGame.cardsInDiscardPile[newGame.cardsInDiscardPile.length - 3];
    var splitFirst = topCard.split('-');
    var splitThird = thirdCard.split('-');
    return (splitFirst[1] === splitThird[1]);
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

function validSlap(player) {
  renderMsg(player);
  cloak(discardPile);
  reveal(stackOne);
  player.takePile(newGame, player);
}

function winGame(player) {
  cloak(discardPile);
  reveal(newGameButton);
  newGame.updateWinCount(player);
}

function invalidSlap(player) {
  renderMsg(player);
  if (findPlayerNum(player).playerNum === 1) {
    reveal(stackTwo);
    newGame.secondPlayer.hand.push(player.badSlap(player));
  } else if (findPlayerNum(player).playerNum === 2) {
    reveal(stackOne);
    newGame.firstPlayer.hand.push(player.badSlap(player));
  }
}

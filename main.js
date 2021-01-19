//Variables
var discardPile = document.querySelector('.discard-pile');
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


function renderDiscard(cardString) {
  discardPile.classList.remove('hidden');
  discardPile.innerHTML = `<img class="discard-pile" src="./assets/green-jack.png">`;
}
//I need a function that will display the card that corresponds to the string that a Player
//discards on the DOM, in place of the center cardDeck
//I should build a function that replaces that HTML element, innerHTML, with my image

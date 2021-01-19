//Variables
var newGame;

//Event Listeners
document.addEventListener('keydown', checkPlayerMove);



//Functions
window.onload = function() {
  newGame = new Game();
  newGame.shuffleDeck(newGame.allCards);
  newGame.dealCards();
  newGame.currentTurn = newGame.firstPlayer;
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

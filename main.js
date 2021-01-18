//Variables
var newGame;

//Event Listeners
document.addEventListener('keydown', checkPlayerMove);



//Functions
window.onload = function() {
  newGame = new Game();
  newGame.shuffleDeck();
  newGame.dealCards();
  newGame.currentTurn = newGame.firstPlayer;
}


function checkPlayerMove(e) {
  if (e.key === 'q' || e.key === 'p') {
    newGame.addToDiscardPile(e);
  } else if (e.key === 'f' || e.key === 'j') {
    newGame.slapCards(e);
  }
};

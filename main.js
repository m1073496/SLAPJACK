//Variables
var newGame;

//Event Listeners
document.addEventListener('keydown', checkPlayerMove);



//Functions
window.onload = function() {
  newGame = new Game();
  newGame.shuffleDeck();
  newGame.dealCards();
}


function checkPlayerMove(e) {
  if (e.key === 'q' || e.key === 'p') {
    playerDiscard(e);
  }
};

function playerDiscard(e) {
  if (e.key === 'q' && newGame.firstPlayer.hand != 0) {
    newGame.addToDiscardPile(e);
  } else if (e.key === 'p' && newGame.secondPlayer.hand != 0) {
    newGame.addToDiscardPile(e);
  }
};

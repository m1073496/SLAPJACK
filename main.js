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
  } else if (e.key === 'f' || e.key === 'j') {
    playerSlap(e);
  }
};

function playerDiscard(e) {
  newGame.addToDiscardPile(e);
};

function playerSlap(e) {
  newGame.slapCards(e);
}

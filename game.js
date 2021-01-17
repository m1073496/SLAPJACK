class Game {
  constructor() {
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
    this.allCards = [/*this should remain static throughout the course of the game*/];
    this.cardsInDiscardPile = [];
    this.currentTurn = /*this will be overwritten frequently with either player1 or player2 instances at a given time */;
  }

  shuffleDeck() {
    //this will randomize the cards
  }

  dealCards(player1, player2) {
    //this will push cards into each player's player.hand array
  }

  startNewGame() {
    //this will reset the deck and players (perhaps a new card deck shuffle as well)
  }

  discard(player) {
    //this will remove a card from player.hand array, push card into this.cardsInDiscardPile
  }

  slapCards() {
    //conditionals for legal slaps (JACKS, doubles, sandwiches)
  }

  updateWinCount(player) {
    //this will update player.wins property
  }

};

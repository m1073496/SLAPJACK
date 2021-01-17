class Game {
  constructor() {
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
    this.allCards = allCards;
    this.cardsInDiscardPile = [];
    // this.currentTurn = /*this will be overwritten frequently with either player1 or player2 instances at a given time */;
  }

  shuffleDeck() {
    for (var i = this.allCards.length -1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      [this.allCards[i], this.allCards[randomIndex]] = [this.allCards[randomIndex], this.allCards[i]];
    }
    return this.allCards;
  }

  dealCards() {
    var currentDeck = this.shuffleDeck();
    for (var i = 0; i < currentDeck.length; i + 2) {
        this.firstPlayer.hand.push(currentDeck[i]);
        currentDeck.splice(i, 1);
        this.secondPlayer.hand.push(currentDeck[i]);
        currentDeck.splice(i, 1);
    }
    this.secondPlayer.hand.pop();
  }

  startNewGame() {
    //this will reset the deck and players (perhaps a new card deck shuffle as well)
    this.allCards = allCards;
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
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

}

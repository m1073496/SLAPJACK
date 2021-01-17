class Game {
  constructor() {
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
    this.allCards = allCards;
    this.cardsInPlay = [];
    this.cardsInDiscardPile = [];
    // this.currentTurn = /*this will be overwritten frequently with either player1 or player2 instances at a given time */;
  }

  shuffleDeck() {
    if (this.cardsInPlay.length === 0 && this.firstPlayer.hand.length === 0 && this.secondPlayer.hand.length === 0) {
      for (var i = this.allCards.length -1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        [this.allCards[i], this.allCards[randomIndex]] = [this.allCards[randomIndex], this.allCards[i]];
        this.cardsInPlay.push(this.allCards[randomIndex]);
      }
      return this.cardsInPlay;
    }
  }

  dealCards() {
    if (this.cardsInPlay.length !== 0) {
      var currentDeck = this.cardsInPlay;
      for (var i = 0; i < currentDeck.length; i + 2) {
        this.firstPlayer.hand.push(currentDeck[i]);
        currentDeck.splice(i, 1);
        this.secondPlayer.hand.push(currentDeck[i]);
        currentDeck.splice(i, 1);
      }
    }
  }

  startNewGame() {
    //this will reset the deck and players (perhaps a new card deck shuffle as well)
    this.allCards = allCards;
    this.cardsInPlay = [];
    this.cardsInDiscardPile = [];
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
  }

  addToDiscardPile(e) {
    //Need a conditional to check if player has cards left in hand before allowing playCard method to fire
    if (e.key === 'q' && this.firstPlayer.hand.length != 0) {
      this.cardsInDiscardPile.push(this.firstPlayer.playCard());
    } else if (e.key === 'p' && this.secondPlayer.hand.length != 0) {
      this.cardsInDiscardPile.push(this.secondPlayer.playCard());
    }
  }

  slapCards(e) {
    //conditionals for legal slaps (JACKS, doubles, sandwiches)
  }

  updateWinCount(player) {
    //this will update player.wins property
  }

}

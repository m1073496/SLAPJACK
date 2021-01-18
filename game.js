class Game {
  constructor() {
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
    this.allCards = allCards;
    this.cardsInPlay = [];
    this.cardsInDiscardPile = [];
    this.currentTurn;
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
    //Need a conditional to block players from discarding out of turn, unless that player's hand.length === 0
    //If one player is out of cards, the other player continues to discard. If they run out of cards before Jack appears
    //they take the discard pile, shuffle, and continue to discard
    //If one player is out of cards, the only valid slap is for Jacks
    if (e.key === 'q' && this.firstPlayer.hand.length != 0 && this.currentTurn === this.firstPlayer) {
      this.cardsInDiscardPile.push(this.firstPlayer.playCard());
      this.currentTurn = this.secondPlayer;
    } else if (e.key === 'p' && this.secondPlayer.hand.length != 0 && this.currentTurn === this.secondPlayer) {
      this.cardsInDiscardPile.push(this.secondPlayer.playCard());
      this.currentTurn = this.firstPlayer;
    }
  }

  slapCards(e) {
    //Need a conditional to disallow slapping if no cards in this.cardsInDiscardPile
    if (e.key === 'f') {
      console.log("hello");
      //check the legality of the slap
      //fire corresponding firstPlayer method
    } else if (e.key === 'j') {
      console.log("goodbye");
      //check the legality of the slap
      //fire corresponding secondPlayer method
    }
  }

  updateWinCount(player) {
    //this will update player.wins property
    //player wins when other player is out of cards and fails to slap the next Jack that arises
    //OR player wins when other player is out of cards and slaps anything other than a Jack
  }


}

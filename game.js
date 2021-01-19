class Game {
  constructor() {
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
    this.allCards = allCards;
    this.cardsInPlay = [];
    this.cardsInDiscardPile = [];
    this.currentTurn;
  }

  shuffleDeck(cardDeck) {
    if (this.cardsInPlay.length === 0) {
      for (var i = cardDeck.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[randomIndex]] = [cardDeck[randomIndex], cardDeck[i]];
        this.cardsInPlay.push(cardDeck[i]);
      }
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
    if (e.key === 'q' && this.firstPlayer.hand.length !== 0 && this.currentTurn === this.firstPlayer) {
      this.cardsInDiscardPile.push(this.firstPlayer.playCard());
      console.log(this.cardsInDiscardPile);
      this.currentTurn = this.secondPlayer;
      this.checkTurn();
    } else if (e.key === 'p' && this.secondPlayer.hand.length !== 0 && this.currentTurn === this.secondPlayer) {
      this.cardsInDiscardPile.push(this.secondPlayer.playCard());
      console.log(this.cardsInDiscardPile);
      this.currentTurn = this.firstPlayer;
      this.checkTurn();
    }
  }

  checkTurn() {
    if (this.firstPlayer.hand.length === 0) {
      this.currentTurn = this.secondPlayer;
    } else if (this.secondPlayer.hand.length === 0) {
      this.currentTurn = this.firstPlayer;
    }
  }

  slapCards(e) {
    if (e.key === 'f' && this.cardsInDiscardPile.length !== 0 && this.secondPlayer.hand.length !== 0 && this.checkValidity()) {
      this.firstPlayer.takePile(this, this.firstPlayer);
      console.log("GOOD SLAP");
    } else if (e.key === 'f' && this.cardsInDiscardPile.length !== 0 && this.secondPlayer.hand.length === 0 && this.checkForJack()) {
      this.firstPlayer.wins++;
    } else if (e.key === 'f') {
      console.log("BAD SLAP");
      this.secondPlayer.hand.push(this.firstPlayer.badSlap(this.firstPlayer));
    } else if (e.key === 'j' && this.cardsInDiscardPile.length !== 0 && this.firstPlayer.hand.length !== 0 && this.checkValidity()) {
      this.secondPlayer.takePile(this, this.secondPlayer);
      console.log("GOOD SLAP");
    } else if (e.key === 'j' && this.cardsInDiscardPile.length !== 0 && this.firstPlayer.hand.length === 0 && this.checkForJack()) {
      this.secondPlayer.wins++;
    } else if (e.key === 'j') {
      this.firstPlayer.hand.push(this.secondPlayer.badSlap(this.secondPlayer));
      console.log("BAD SLAP");
    }
  }

  checkValidity() {
    if (this.cardsInDiscardPile.length >= 3) {
      return (this.checkForJack() || this.checkForDoubles() || this.checkForSandwich());
    } else if (this.cardsInDiscardPile.length === 2) {
      return (this.checkForJack() || this.checkForDoubles());
    } else {
      return (this.checkForJack());
    }
  }

  checkForJack() {
    var topCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 1];
    var splitString = topCard.split(' ');
    return (splitString[1] === 'Jack');
  }

  checkForDoubles() {
    var topCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 1];
    var secondCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 2];
    var splitFirst = topCard.split(' ');
    var splitSecond = secondCard.split(' ');
    return (splitFirst[1] === splitSecond[1]);
  }

  checkForSandwich() {
    var topCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 1];
    var thirdCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 3];
    var splitFirst = topCard.split(' ');
    var splitThird = thirdCard.split(' ');
    return (splitFirst[1] === splitThird[1]);
  }

  updateWinCount(player) {
    //this will update player.wins property
    //player wins when other player is out of cards and fails to slap the next Jack that arises
    //OR player wins when other player is out of cards and slaps anything other than a Jack
  }


}

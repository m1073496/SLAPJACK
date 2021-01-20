class Game {
  constructor() {
    this.firstPlayer = new Player();
    this.secondPlayer = new Player();
    this.allCards = allCards;
    this.shuffledCards = [];
    this.cardsInDiscardPile = [];
    this.currentTurn = this.firstPlayer;
  }

  shuffleDeck(cardDeck) {
    if (this.shuffledCards.length === 0) {
      for (var i = cardDeck.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[randomIndex]] = [cardDeck[randomIndex], cardDeck[i]];
        this.shuffledCards.push(cardDeck[i]);
      }
    }
  }

  dealCards() {
    if (this.shuffledCards.length !== 0) {
      var shuffledDeck = this.shuffledCards;
      for (var i = 0; i < shuffledDeck.length; i + 2) {
        this.firstPlayer.hand.push(shuffledDeck[i]);
        shuffledDeck.splice(i, 1);
        this.secondPlayer.hand.push(shuffledDeck[i]);
        shuffledDeck.splice(i, 1);
      }
    }
  }

  resetGame() {
    startNewGame();
  }

  addToDiscardPile(player) {
    cloak(gameMsgBox);
    if (player === this.firstPlayer && player.hand.length !== 0 && this.currentTurn === player) {
      this.cardsInDiscardPile.push(this.firstPlayer.playCard());
      this.currentTurn = this.secondPlayer;
      this.checkTurn(player);
      renderDiscard();
    } else if (player === this.secondPlayer && player.hand.length !== 0 && this.currentTurn === player) {
      this.cardsInDiscardPile.push(this.secondPlayer.playCard());
      this.currentTurn = this.firstPlayer;
      this.checkTurn(player);
      renderDiscard();
    }
  }

  checkTurn(player) {
    var firstHand = this.firstPlayer.hand.length;
    var secondHand = this.secondPlayer.hand.length;
    if (firstHand === 0 && secondHand === 0) {
      this.currentTurn = player;
      cloak(stackOne);
      cloak(stackTwo);
    } else if (firstHand === 0 && secondHand !== 0) {
      this.currentTurn = this.secondPlayer;
      cloak(stackOne);
    } else if (secondHand === 0 && firstHand !== 0) {
      this.currentTurn = this.firstPlayer;
      cloak(stackTwo);
    }
  }


  slapCards(player) {
    if (player === this.firstPlayer && this.cardsInDiscardPile.length !== 0 && this.secondPlayer.hand.length !== 0 && this.checkValidity()) {
      validSlap(player);
    } else if (player === this.firstPlayer && this.cardsInDiscardPile.length !== 0 && this.secondPlayer.hand.length === 0 && this.checkForJack()) {
      winGame(player);
    } else if (player === this.firstPlayer && player.hand.length === 0) {
      reveal(newGameButton);
      this.updateWinCount(this.secondPlayer);
    } else if (player === this.firstPlayer) {
      invalidSlap(player);
    } else if (player === this.secondPlayer && this.cardsInDiscardPile.length !== 0 && this.firstPlayer.hand.length !== 0 && this.checkValidity()) {
      validSlap(player);
    } else if (player === this.secondPlayer && this.cardsInDiscardPile.length !== 0 && this.firstPlayer.hand.length === 0 && this.checkForJack()) {
      winGame(player);
    } else if (player === this.secondPlayer && player.hand.length === 0) {
      reveal(newGameButton);
      this.updateWinCount(this.firstPlayer);
    } else if (player === this.secondPlayer) {
      invalidSlap(player);
    }
  }

  checkValidity() {
    if (this.cardsInDiscardPile.length >= 3) {
      return (this.checkForJack() || this.checkForDoubles() || this.checkForSandwich());
    } else if (this.cardsInDiscardPile.length >= 2) {
      return (this.checkForJack() || this.checkForDoubles());
    } else {
      return (this.checkForJack());
    }
  }

  checkForJack() {
    var topCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 1];
    var splitString = topCard.split('-');
    return (splitString[1] === 'jack');
  }

  checkForDoubles() {
    var topCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 1];
    var secondCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 2];
    var splitFirst = topCard.split('-');
    var splitSecond = secondCard.split('-');
    return (splitFirst[1] === splitSecond[1]);
  }

  checkForSandwich() {
    var topCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 1];
    var thirdCard = this.cardsInDiscardPile[this.cardsInDiscardPile.length - 3];
    var splitFirst = topCard.split('-');
    var splitThird = thirdCard.split('-');
    return (splitFirst[1] === splitThird[1]);
  }

  updateWinCount(player) {
    if (player == this.firstPlayer) {
      this.firstPlayer.wins++;
      renderWin(player);
    } else if (player == this.secondPlayer) {
      this.secondPlayer.wins++;
      renderWin(player);
    }
  }

//Shuffle discard pile and give it back to last player
  // var shuffleDiscardPile = this.shuffleDeck(this.cardsInDiscardPile);
  // this.cardsInDiscardPile = [];
  // player.hand = this.shuffledCards;
  // this.shuffledCards = [];
  // cloak(discardPile);
  // if (this.currentTurn === this.firstPlayer) {
  //   reveal(stackOne);
  // } else if (this.currentTurn === this.secondPlayer) {
  //   reveal(stackTwo);
  // }

}

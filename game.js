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
      renderDiscard();
      this.checkTurn(player);
    } else if (player === this.secondPlayer && player.hand.length !== 0 && this.currentTurn === player) {
      this.cardsInDiscardPile.push(this.secondPlayer.playCard());
      this.currentTurn = this.firstPlayer;
      renderDiscard();
      this.checkTurn(player);
    }
  }

  checkTurn(player) {
    var firstHand = this.firstPlayer.hand.length;
    var secondHand = this.secondPlayer.hand.length;
    if (firstHand === 0 && secondHand === 0) {
      this.currentTurn = player;
      cloak(stackOne);
      cloak(stackTwo);
      cloak(discardPile);
      shuffleDiscardPile(player);
      renderPlayerDeck(player);
    } else if (firstHand === 0 && secondHand !== 0) {
      this.currentTurn = this.secondPlayer;
      cloak(stackOne);
    } else if (secondHand === 0 && firstHand !== 0) {
      this.currentTurn = this.firstPlayer;
      cloak(stackTwo);
    }
  }

  slapCards(player) {
    if (player === this.firstPlayer) {
      checkPlayerOneSlap(player);
    } else if (player === this.secondPlayer) {
      checkPlayerTwoSlap(player);
    }
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

}

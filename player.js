class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
      var card = this.hand.splice(0, 1);
      return card.toString();
  }

  saveWinsToStorage() {
    //this will save this.wins value to local storage
  }

  slapJack(game, player) {
    for (var i = 0; i < game.cardsInDiscardPile.length; i++) {
      var cardString = game.cardsInDiscardPile[i].toString();
      player.hand.push(cardString);
    }
    game.shuffleDeck(player.hand);
    player.hand = game.cardsInPlay;
    game.cardsInPlay = [];
    game.cardsInDiscardPile = [];
  }

  slapDouble() {
    //two cards in a row with the same number, or King/Queen/jack/Ace
  }

  slapSandwich() {
    //card with integer x, card with integer y, card with integer x
    //card with suit x, card with suit y, card with suit x
  }

  badSlap() {
    //slap that is not a Jack/double/sandwich
    //Player who slaps loses the card on top of their hand,
    //this card goes to the bottom of the other player's hand
  }

}

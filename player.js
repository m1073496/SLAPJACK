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

  takePile(game, player) {
    for (var i = 0; i < game.cardsInDiscardPile.length; i++) {
      player.hand.push(game.cardsInDiscardPile[i]);
    }
    game.shuffleDeck(player.hand);
    player.hand = game.cardsInPlay;
    game.cardsInPlay = [];
    game.cardsInDiscardPile = [];
  }

  badSlap() {
    //slap that is not a Jack/double/sandwich
    //Player who slaps loses the card on top of their hand,
    //this card goes to the bottom of the other player's hand
  }

}

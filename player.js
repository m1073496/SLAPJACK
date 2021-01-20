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
    player.hand = game.shuffledCards;
    game.shuffledCards = [];
    game.cardsInDiscardPile = [];
  }

  badSlap(player) {
    var removedCard = player.hand.splice(0, 1);
    return removedCard.toString();
  }

}

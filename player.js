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
  }

  takePile(game, player) {
    shuffleDiscardPile(player);
  }

  badSlap(player) {
    var removedCard = player.hand.splice(0, 1);
    return removedCard.toString();
  }
}

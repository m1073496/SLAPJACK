class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
      return this.hand.splice(0, 1);
  }

  saveWinsToStorage() {
    //this will save this.wins value to local storage
  }

  slapJack() {
    //player takes all cards in discard pile, entire hand gets shuffled
    //other player goes next
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

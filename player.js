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

}

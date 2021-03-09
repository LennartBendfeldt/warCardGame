// Create deck class
export default class Deck {
    constructor() {
      this.deck = [];
      
      //values and suits
      const suits = ["♠", "♣", "♥", "♦"];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      
      //create deck
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push([values[value], suits[suit]]);
        }
      }
      
    }
  }                               
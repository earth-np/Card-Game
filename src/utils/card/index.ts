import * as _ from 'lodash'

export class Deck {
  private static starterCard:number[] = [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]
  private cards:number[] = []
  constructor() {
    this.cards = [..._.shuffle(Deck.starterCard)]
  }
  getAllCard = () => this.cards
  drawCard = () => this.cards.pop()

}

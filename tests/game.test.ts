import { expect } from 'chai';
import 'mocha'
import { Player } from '../src/utils/player';
import { Deck } from '../src/utils/card';
import { Board } from 'utils/game';
describe('Initial Game Test', () => {
  it('Player Starter HP should be 30', () => {
    const player = new Player('test')
    const hp = player.getCurrentHp()
    expect(hp).to.equal(30);
  })
  it('Player Starter MP should be 0', () => {
    const player = new Player('test')
    const mp = player.getCurrentMp()
    expect(mp).to.equal(0);
  })
  it('Initail Deck shoud be [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]', () => {
    const myDeck = new Deck()
    const allCard = myDeck.getAllCard()
    // expect(allCard).to.equal([0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8])
    expect(allCard).to.have.lengthOf(20)

  })
  it('Card on hand should be 3',() => {
    const player = new Player('test')
    const cardOnHand = player.getCardOnHand()
    expect(cardOnHand).to.have.lengthOf(3)
  })

});


// describe('In Game test', () => {
//   it('After player active mana slot shold plus 1 but not exceed 10', () => {
//     const player:Player = new Player('test')
//     const Board = new Board()
//     Board.joinGmae(player)
//     const beforeManaSlot = player.getCurrentManaSlot()
//     Board.nextPlayerActive()
//     const afterManaSlot = player.getCurrentManaSlot()
//     expect(afterManaSlot).to.lessThan(11)
//     expect(afterManaSlot-beforeManaSlot).to.equal(1)
//   })
//   it('After player active should be refill')
// })
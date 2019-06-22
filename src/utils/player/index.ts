import * as _ from "lodash";
import { Deck } from "../card";
import { getInput } from "../inputFromKeyboard";

export class Player {
  private static startHp: number = 30;
  name = ''
  private slotMp: number = 0;
  private hp: number = null;
  private mp: number = null;
  private playerDeck: Deck = null;
  private cardOnHand: number[] = [];
  private ability:any = {}
  private active = false;
  constructor(name) {
    this.name = name
    this.hp = Player.startHp;
    this.mp = this.slotMp;
    this.playerDeck = new Deck();
    this.drawCard();
    this.drawCard();
    this.drawCard();
  }
  addAbility = (skill) => {
    this.ability = skill
  }
  getDamage = (damage) => this.hp - damage  < 0 ? this.hp = 0 : this.hp -= damage
  getCurrentHp = () => this.hp;
  getCurrentMp = () => this.mp;
  getCurrentManaSlot = () => this.slotMp;
  drawCard = () => {
    const card: number = this.playerDeck.drawCard();
    this.cardOnHand.push(card);
  };
  getCardOnHand = () => this.cardOnHand;
  endTurnCondition = () => {
    console.log('card on hand',this.cardOnHand.length);
    let condition = null;
    (this.cardOnHand.length === 0 || this.getCurrentMp() <= 0 )? (condition = true) : (condition = false);
    return condition;
  };
  doAction = (actions: string) => {
    const action:string[] = actions.split(' ')
    const command = action[0]
    if(command === 'cast'){
      const card = +action[1]
      this.cardOnHand = this.cardOnHand.splice(card,1)
      this.mp -= card
      this.ability.attackOpposite(card)
    }
    else if (command === 'end'){

    }
    else {

    }
  };
  playTurn = async () => {
    this.slotMp += 1;
    this.mp = this.slotMp;
    this.drawCard();
    while (!(this.endTurnCondition())) {
      console.log(`Your current HP: ${this.getCurrentHp()} MP: ${this.getCurrentMp()}/${this.getCurrentManaSlot()} Hand ${this.cardOnHand}`);
      // const actions:any = await getInput("Your action: ");
      const actions = 'cast 0'
      this.doAction(actions);
    }
  };
}

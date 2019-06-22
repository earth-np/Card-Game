import * as _ from "lodash";
import { Deck } from "../card";
import { getInput } from "../inputFromKeyboard";

export class Player {
  private static startHp: number = 30;
  name = "";
  private slotMp: number = 0;
  private hp: number = null;
  private mp: number = null;
  private playerDeck: Deck = null;
  private cardOnHand: number[] = [];
  private ability: any = {};
  private active = false;
  constructor(name) {
    this.name = name;
    this.hp = Player.startHp;
    this.mp = this.slotMp;
    this.playerDeck = new Deck();
    this.drawCard();
    this.drawCard();
    this.drawCard();
  }
  addAbility = skill => {
    this.ability = skill;
  };
  getDamage = damage =>{ console.log(`Player: ${this.name} HP:${this.getCurrentHp()}/30`);
    this.hp - damage < 0 ? (this.hp = 0) : (this.hp -= damage);}
  getCurrentHp = () => this.hp;
  getCurrentMp = () => this.mp;
  getCurrentManaSlot = () => this.slotMp;
  drawCard = () => {
    const card: number = this.playerDeck.drawCard();
    this.cardOnHand.push(card);
  };
  getCardOnHand = () => this.cardOnHand;
  endTurnCondition = () => {
    let condition = null;
    this.cardOnHand.length === 0 || this.getCurrentMp() <= 0
      ? (condition = true)
      : (condition = false);
    if (condition) console.log("END TURN");
    return condition;
  };
  doAction = (actions: string) => {
    const action: string[] = actions.split(" ");
    const command = action[0];
    if (command === "cast") {
      const index = +action[1];
      if (index >= this.cardOnHand.length) {
        console.log("plz choose card on your hand");
        return;
      }
      if (this.cardOnHand[index] > this.mp) {
        console.log("not enough mana");
        return;
      }

      const card = this.cardOnHand.splice(index, 1)[0];
      this.mp -= card;
      this.ability.attackOpposite(card);
    } else if (command === "end") {
      this.mp = 0;
    } else {
    }
  };
  playTurn = async () => {
    return new Promise(async (resolve, reject) => {
      this.slotMp += 1;
      this.mp = this.slotMp;
      this.drawCard();
      while (!this.endTurnCondition()) {
        console.log(
          `Your current HP: ${this.getCurrentHp()} MP: ${this.getCurrentMp()}/${this.getCurrentManaSlot()} Hand ${
            this.cardOnHand
          }`
        );
        const actions: any = await getInput.questionAsync("Your action: ");
        this.doAction(actions);
      }
      resolve();
    });
  };
}

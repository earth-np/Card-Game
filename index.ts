import { getInput } from "./src/utils/inputFromKeyboard";
import { Player } from "./src/utils/player";
import { Board } from "./src/utils/game";

const P1 = new Player('Earth')
const P2 = new Player('Pang')
const Game = new Board()

Game.playerJoinGame(P1)
Game.playerJoinGame(P2)
// Game.playerJoinGame(P3)
Game.startGame()
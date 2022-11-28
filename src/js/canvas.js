import Game from "./components/Game";
import Player from "./components/Player";

import { addListenersKeyDown } from "./utils/listeners";
import { addListenersKeyUp } from "./utils/listeners";



let currentGame = new Game(Player);
currentGame.start();

const currentPlayer = currentGame.getPlayer();





addListenersKeyDown(currentPlayer);
addListenersKeyUp(currentPlayer);


//мне не нравится, что все это лежит кучей
//возможно, нам надо создать ещё один класс типа Session
//и запускать все внутри него

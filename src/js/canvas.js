import Game from "./components/Game";
import Player from "./components/Player";

import { addListenersKeyDown } from "./utils/listeners";
import { addListenersKeyUp } from "./utils/listeners";



let currentGame = new Game(
    Player, 
    addListenersKeyUp, 
    addListenersKeyDown
);

currentGame.start();

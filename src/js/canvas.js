import Game from "./components/Game";
import Player from "./components/Player";
import Controller from "./components/Controller";
import ContextManager from "./components/ContextManager";

import { addListenersKeyDown } from "./utils/listeners";
import { addListenersKeyUp } from "./utils/listeners";

let currentGame = new Game(
    Player,
    Controller,
    ContextManager,
    addListenersKeyUp, 
    addListenersKeyDown
);


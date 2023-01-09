import Game from "./components/Game";
import Player from "./components/Player";
import Controller from "./components/Controller";
import ContextManager from "./components/ContextManager";
import ImageManager from "./components/ImageManager";

import { addListenersKeyDown } from "./utils/listeners";
import { addListenersKeyUp } from "./utils/listeners";

let currentGame = new Game(
    Player,
    Controller,
    ContextManager,
    ImageManager,
    addListenersKeyUp, 
    addListenersKeyDown
);


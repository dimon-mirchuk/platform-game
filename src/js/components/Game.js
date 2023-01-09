// entities
import Platform from "./Platform";

// maps
import { PlatformMap } from "../utils/levels";
import { ConditionMap } from "../utils/levels";
import { introData } from "../utils/levels";

// resources
import playerImg from "../../img/player/normalPlayer.png";

export default class Game {
    constructor ( player, controller, contextManager, imageManager, listenerUp, listenerDown ) {
        this.player = player;
        this.controller = controller;
        this.contextManager = contextManager;
        this.imageManager = imageManager;
        this.listenUp = listenerUp;
        this.listenDown = listenerDown;

        this.stats = {
            name: undefined,
            gravity: 0.5,
            lvl: 0,
        }

        this.intro = true;

        this.setup();
    }

    setup() {
        this.contextManager = new this.contextManager();
        this.gameContext = this.contextManager.getGameContext();
        this.managerContext = this.contextManager.getManagerContext();
        this.imageManager = new this.imageManager(this.managerContext);

        this.listenUp(this, false, false);

        this.startIntro();
    }

    levelup() {
        this.stats.lvl = this.stats.lvl + 1;
    }

    startIntro() {

        console.log('____', 'зашли в интро')

        if (introData[this.stats.lvl].introDone) {
            this.intro = false;
            console.log('____', 'закончили интро')
        } 

        if (introData[this.stats.lvl].input) {
            //take name
            console.log('____', 'зашли в инпут')
        } 

        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

        if (introData[this.stats.lvl].srcName && this.intro) {
            console.log('____', 'показываем интро')
            this.showImage(introData[this.stats.lvl].srcName);
        } else {

            if (this.player.gravity) {
                console.log('____', 'начинаем уровень')
                this.startNewLevel();
            } else {
                console.log('____', 'начинаем игру')
                this.startGame();
            }
        }
    }

    showImage(name) {
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.contextManager.showManagerContext();

        if (this.controller.currAnimId) {
            this.controller.stop();
            console.log('____', 'остановили движок')
        }

        this.imageManager.showImage(name);
    }

    winLevel() {
        console.log('____', 'выиграли уровень')
        this.showLevelResult();
    }

    showLevelResult() {
        this.controller.stop();
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.contextManager.showManagerContext();

        if (this.player.awaited === this.player.activated) {
            this.showImage('winlevel')
            console.log('____', 'выиграли уровень - молдец')
        }
        else {
            this.showImage('nevergiveup')
            console.log('____', 'выиграли уровень - не молдец')
        }

        if (introData[this.stats.lvl+1].finish) {
            this.winGame();
        }

    }

    winGame() {
        this.controller.stop();
        this.showImage('wingame');
        // удалить листенеры
    }

    startGame() {
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

        this.player = new this.player(
            this.gameContext, 
            this.stats.gravity,
            this.winLevel.bind(this),
            playerImg
        );

        this.controller = new this.controller(this.gameContext);

        this.sprites = [this.player.getSprite()];

        this.listenDown(this.player, false, false);
        this.listenUp(this.player, false, false);

        this.startNewLevel();
    }

    startNewLevel() {
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

        this.player.begin();
        this.contextManager.showGameContext();
        this.player.setLevelConditions(ConditionMap[this.stats.lvl]);

        const platforms = PlatformMap[this.stats.lvl].map(element => {
            return new Platform(this.gameContext, element.x, element.y, element.name)
        });

        this.controller.animate([this.player, ...platforms, ...this.sprites], this.stats.lvl);
    }

}

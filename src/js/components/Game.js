// entities
import Platform from "./Platform";

// maps
import { PlatformMap } from "../utils/levels";
import { ConditionMap } from "../utils/levels";
import { introData } from "../utils/levels";

// resources
import playerImg from "../../img/player/normalPlayer.png";

import intro0 from "../../img/intro/intro1.jpg";
import intro1 from "../../img/intro/intro2.jpg";
import intro2 from "../../img/intro/intro3.jpg";
import intro4 from "../../img/intro/intro5.jpg";
import intro6 from "../../img/intro/intro6.jpg";
import intro7 from "../../img/intro/intro7.jpg";

import nevergiveup from "../../img/intro/nevergiveup.jpg";
import timeout from "../../img/intro/timeout.jpg";
import wingame from "../../img/intro/wingame.jpg";
import winlevel from "../../img/intro/winlevel.jpg";
import bugs from "../../img/intro/bugs.jpg";



export default class Game {
    constructor ( player, controller, contextManager, listenerUp, listenerDown ) {
        this.player = player;
        this.controller = controller;
        this.contextManager = contextManager;
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
            this.showImg(introData[this.stats.lvl].srcName);
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

    showImg(name) {
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.contextManager.showManagerContext();

        if (this.controller.currAnimId) {
            this.controller.stop();
            console.log('____', 'остановили движок')
        }

        const img = this.changeImg(name);
        
        if (img.complete) {
            this.managerContext.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
        } else {
            img.onload = () => {
                this.managerContext.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
            }
        }
        this.managerContext.globalAlpha = 0.5
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
            this.showImg('winlevel')
            console.log('____', 'выиграли уровень - молдец')
        }
        else {
            this.showImg('nevergiveup')
            console.log('____', 'выиграли уровень - не молдец')
        }

        if (introData[this.stats.lvl+1].finish) {
            this.winGame();
        }

    }

    winGame() {
        this.controller.stop();
        this.showImg('wingame');
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

    changeImg(name) {

        let img = new Image();

        switch(name) {
            case 'intro0':
                img.src = intro0;
                break;
            case 'intro1':
                img.src = intro1;
                break;
            case 'intro2':
                img.src = intro2;
                break;
            case 'intro4':
                img.src = intro4;
                break;
            case 'intro6':
                img.src = intro6;
                break;
            case 'intro7':
                img.src = intro7;
                break;   
            case 'bugs':
                img.src = bugs;
                break;
            case 'timeout':
                img.src = timeout;
                break;
            case 'nevergiveup':
                img.src = nevergiveup;
                break;
            case 'winlevel':
                img.src = winlevel;
                break;   
            case 'wingame':
                img.src = wingame;
                break;
            default:
                img.src = intro0;
        }

        return img;
    }

}

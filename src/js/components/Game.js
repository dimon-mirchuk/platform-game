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
        this.input = false;

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

        //console.log('STAGE:', 'зашли в интро')

        if (introData[this.stats.lvl].introDone) {
            this.intro = false;
            //console.log('STAGE:', 'закончили интро')
        } 

        if (introData[this.stats.lvl].input) {
            //take name
            //console.log('STAGE:', 'зашли в инпут')
            // 00 this.getName();
        } 

        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

        if (introData[this.stats.lvl].srcName && this.intro) {
            //console.log('STAGE:', 'показываем интро')
            this.showImage(introData[this.stats.lvl].srcName);
        } else {

            if (this.player.gravity) {
                //console.log('STAGE:', 'начинаем уровень')
                this.startNewLevel();
            } else {
                //console.log('STAGE:', 'начинаем игру')
                this.startGame();
            }
        }
    }

    showImage(name) {
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.contextManager.showManagerContext();

        if (this.controller.currAnimId) {
            this.controller.stop();
            //console.log('STAGE:', 'остановили движок')
        }

        this.imageManager.showImage(name);
    }

    winLevel() {
        //console.log('STAGE:', 'выиграли уровень')
        this.showLevelResult();
    }

    showLevelResult() {
        this.controller.stop();
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.contextManager.showManagerContext();

        if (this.player.awaited === this.player.activated) {
            this.showImage('winlevel')
            //console.log('STAGE:', 'выиграли уровень - молдец')
        }
        else {
            this.showImage('nevergiveup')
            //console.log('STAGE:', 'выиграли уровень - не молдец')
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

    getName() {
        this.input = true;
        
        const body = document.getElementById('body');

        const wrapperDiv = document.createElement('div');
        wrapperDiv.setAttribute('style', 'position:absolute; width:100vw; height:100vh; display:flex;');
        wrapperDiv.setAttribute('id', 'wrapperDiv');
        body.appendChild(wrapperDiv);
        
        const conteinerDiv = document.createElement('div');
        conteinerDiv.setAttribute('style', 'width:300px; height:300px; background:black; z-index: 5;')
        wrapperDiv.appendChild(conteinerDiv);

        const input = document.createElement('input');
        input.setAttribute('type', 'text')
        conteinerDiv.appendChild(input);
        input.focus();
    }

    // isName(smt) {
    //     if (smt) {

    //     }
    // }

    setName() {
        const inputElement = document.querySelector('input');

        if(inputElement.value && inputElement.value !== '') {
            this.stats.name = inputElement.value;
            console.log(this.stats.name);
            console.log('!!!!')
            //this.input = false;
            //document.getElementById('wrapperDiv').remove();
            //this.levelup();

        } else {
            inputElement.setAttribute('style', 'border: 2px solid red')
        }

        //console.log('name:', )

        //document.querySelector('input').setAttribute('style', 'border: 2px solid red')

        // console.log("setName")
        
        // if (document.querySelector('input').value === '') {
        //     console.log("input value ''")
        //     document.querySelector('input').setAttribute('style', 'border: 2px solid red')
            
        // } else {
        //     this.stats.name = document.querySelector('input').value
        //     this.input = false;
        //     console.log("input value", document.querySelector('input').value)
        // }
    }

}

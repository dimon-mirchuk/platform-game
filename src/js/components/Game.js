// entities
import Platform from "./Platform";

// maps
import { PlatformMap } from "../utils/levels";
import { ConditionMap } from "../utils/levels";
import { introData } from "../utils/levels";

// resources

export default class Game {
    constructor ( player, controller, contextManager, imageManager, eventManager ) {
        this.player = player;
        this.controller = controller;
        this.contextManager = contextManager;
        this.imageManager = imageManager;
        this.eventManager = eventManager;

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
        this.eventManager = new this.eventManager();

        this.setShowTime();

        this.startIntro();
    }

    levelup() {
        this.stats.lvl = this.stats.lvl + 1;
    }

    setShowTime() {
        console.log('___setShowTime___')

        // глушим движок
        if (this.controller.currAnimId) this.controller.stop();
        // удалить старые листенеры 
        this.eventManager.removeListener();
        // отчистить все контексты
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
        // переключить на менежера
        this.contextManager.showManagerContext();
        // повесить один листенер
        this.eventManager.addListener(this, 'keyup');
    }

    setPlayTime() {
        console.log('___setPlayTime___')

        // удалить старые листенеры 
        this.eventManager.removeListener();
        // отчистить все контексты
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
        // переключить на игру
        this.contextManager.showGameContext();
        // повесить листенеры
        this.eventManager.addListener(this.player, 'keyup');
    }

    startIntro() {

        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

        //console.log('STAGE:', 'зашли в интро')

        if (introData[this.stats.lvl].introDone) {
            this.intro = false;
            //console.log('STAGE:', 'закончили интро')
        } 

        if (introData[this.stats.lvl].input) {
            //take name
            //console.log('STAGE:', 'зашли в инпут')
            this.getName();
        } 

        if (introData[this.stats.lvl].srcName && this.intro) {
            //console.log('STAGE:', 'показываем интро')
            this.imageManager.showImage(introData[this.stats.lvl].srcName);
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

    winLevel() {
        //console.log('STAGE:', 'выиграли уровень')
        this.showLevelResult();
    }

    showLevelResult() {
        this.setShowTime();

        if (this.player.awaited === this.player.activated) {
            this.imageManager.showImage('winlevel')
            //console.log('STAGE:', 'выиграли уровень - молдец')
        }
        else {
            this.imageManager.showImage('nevergiveup')
            //console.log('STAGE:', 'выиграли уровень - не молдец')
        }

        if (introData[this.stats.lvl+1].finish) {
            this.winGame();
        }

    }

    winGame() {
        this.setShowTime();
        this.imageManager.showImage('wingame');

        // удалить листенеры
        this.eventManager.removeListener();
    }

    startGame() {

        this.player = new this.player(
            this.gameContext, 
            this.stats.gravity,
            this.winLevel.bind(this),
            //playerImg
            this.setPlayerSkin(this.stats.name)
        );

        this.controller = new this.controller(this.gameContext);

        this.sprites = [this.player.getSprite()];

        this.startNewLevel();
    }

    startNewLevel() {
        this.setPlayTime();

        this.player.begin();
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

    setName() {
        const inputElement = document.querySelector('input');

        if (inputElement.value.trim().length) {
            this.stats.name = inputElement.value.trim();
            //this.setPlayerStats
            this.input = false;
            document.getElementById('wrapperDiv').remove();
            this.levelup();
            this.startIntro();
        } 
        else {
            inputElement.setAttribute('style', 'border: 2px solid red')
        }
    }

    setPlayerSkin(name) {
        switch(name) {
            case 'Андрей':
                return this.imageManager.changeImage('Андрей')
            case 'Дима':
            case 'Дмитрий':
            case 'Димас':
            case 'Димон':
            case 'Димочка':
                return this.imageManager.changeImage('Дима')
            default:
                return this.imageManager.changeImage('Имя')
        }
    }

}

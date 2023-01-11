// entities
import Platform from "./Platform";


// maps
import { PlatformMap } from "../utils/levels";
import { ConditionMap } from "../utils/levels";
import { introData } from "../utils/levels";

// resources

export default class Game {
    constructor ( player, playerCustom, controller, contextManager, imageManager, eventManager, depression ) {
        this.player = player;
        this.playerCustomizer = playerCustom;
        this.controller = controller;
        this.contextManager = contextManager;
        this.imageManager = imageManager;
        this.eventManager = eventManager;
        this.depression = depression;

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
        this.playerCustomizer = new this.playerCustomizer(this.imageManager);

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

            this.input = true;
            this.playerCustomizer.getPlayerName();
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
        this.showLevelResult(false);
    }

    loseLevel() {
        this.showLevelResult(true);
    }

    showLevelResult(dead) {
        this.setShowTime();

        if (this.player.awaited === this.player.activated && !dead) {
            this.imageManager.showImage('winlevel')
            //console.log('STAGE:', 'выиграли уровень - молдец')
        }
        else if (dead) {
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
        console.log('START', this.stats)

        this.player = new this.player(
            this.gameContext,
            this.imageManager,
            this.stats.gravity,
            this.winLevel.bind(this),
            this.loseLevel.bind(this),
            this.playerCustomizer.setPlayerSkin(this.stats.name),
            this.playerCustomizer.getSkinId(),
        );

        this.controller = new this.controller(this.gameContext);

        this.depression = new this.depression(
            this.gameContext, 
            this.stats.gravity,
            this.imageManager.changeImage('depression'),
            this.loseLevel.bind(this),
        )

        this.sprites = [this.player.getSprite(), this.depression.getSprite()];

        this.startNewLevel();
    }

    startNewLevel() {
        this.setPlayTime();

        this.player.begin();
        this.depression.begin();
        this.player.setLevelConditions(ConditionMap[this.stats.lvl]);

        const platforms = PlatformMap[this.stats.lvl].map(element => {
            return new Platform(this.gameContext, element.x, element.y, element.name)
        });

        this.player.setDependentEntities([...platforms, this.depression]);

        this.controller.animate([this.player, this.depression, ...platforms, ...this.sprites], this.stats.lvl);
    }
    
    setStats(name) {    
        this.input = false;
        this.stats.name = name;
    }

}




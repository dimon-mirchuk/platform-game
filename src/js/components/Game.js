// entities
import Platform from "./Platform";
import Collectable from "./Collectable";
import Bug from "./Bug"

// maps
import { PlatformMap } from "../utils/levels";
import { BugsMap } from "../utils/levels";
import { BoosterMap } from "../utils/levels";
import { introData } from "../utils/levels";

export default class Game {
    constructor ( player, playerCustom, controller, contextManager, imageManager, eventManager, depression, collisionManager, menu ) {
        this.player = player;
        this.playerCustomizer = playerCustom;
        this.controller = controller;
        this.contextManager = contextManager;
        this.imageManager = imageManager;
        this.eventManager = eventManager;
        this.depression = depression;
        this.collisionManager = collisionManager;
        this.menu = menu;

        this.stats = {
            name: undefined,
            gravity: 0.5,
            lvl: 0,
        }

        this.intro = true;
        this.input = false;

        this.last = 'win';

        this.setup();
    }

    setup() {
        this.contextManager = new this.contextManager();
        this.gameContext = this.contextManager.getGameContext();
        this.managerContext = this.contextManager.getManagerContext();
        this.imageManager = new this.imageManager(this.managerContext);
        this.eventManager = new this.eventManager();
        this.playerCustomizer = new this.playerCustomizer(this.imageManager);
        this.collisionManager = new this.collisionManager();
        this.menu = new this.menu(this.imageManager);
        this.eventManager.setMenu(this.menu);

        this.setShowTime();

        this.startIntro();
    }

    levelup() {
        this.stats.lvl = this.stats.lvl + 1;
    }

    setShowTime() {
        if (this.controller.currAnimId) this.controller.stop();
        this.eventManager.removeListener();
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
        this.contextManager.showManagerContext();
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.eventManager.addListener(this, 'keyup');
    }

    setPlayTime() { 
        this.eventManager.removeListener();
        this.contextManager.showGameContext();
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
        this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
        this.eventManager.addListener(this.player, 'keyup');
    }

    startIntro() {
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

        if (introData[this.stats.lvl].introDone) {
            this.intro = false;
        } 

        if (introData[this.stats.lvl].input) {
            this.input = true;
            this.playerCustomizer.getPlayerName();
        } 

        if (introData[this.stats.lvl].srcName && this.intro) {
            this.imageManager.showImage(introData[this.stats.lvl].srcName);
        } else {
            if (this.player.gravity) {
                this.startNewLevel();
            } else {
                this.startGame();
            }
        }
    }

    winLevel() {
        this.last = 'win';
        this.showLevelResult();
    }

    loseLevel() {
        this.last = 'lose';
        this.showLevelResult();
    }

    showLevelResult() {
        this.setShowTime();

        if (this.last === 'win') {
            this.imageManager.showImage('winlevel')

        } else if (this.last === 'lose') {
            this.imageManager.showImage('nevergiveup')
        }

        if (introData[this.stats.lvl+1].finish) {
            this.winGame();
        }
    }
    
    winGame() {
        this.setShowTime();
        this.imageManager.showImage('wingame');

        this.eventManager.removeListener();
    }

    startGame() {
        this.player = new this.player(
            this.gameContext,
            this.imageManager,
            this.stats.gravity,
            this.winLevel.bind(this),
            this.loseLevel.bind(this),
            this.playerCustomizer.setPlayerSkin(this.stats.name),
            this.playerCustomizer.getSkinId(),
        );

        this.controller = new this.controller(this.gameContext, this.collisionManager, this.imageManager);
        this.menu.setCallbacks(this.controller.stop.bind(this.controller), this.controller.continue.bind(this.controller))

        this.depression = new this.depression(
            this.gameContext, 
            this.imageManager.changeImage('depression'),
            this.loseLevel.bind(this),
        )

        this.gameSprites = [this.player.getSprite(), this.depression.getSprite()];

        this.startNewLevel();
    }

    startNewLevel() {

        let bugs = [];
        let collectable = [];
        let bugSprites = [];
        let platforms = [];
        this.sprites = [];

        this.setPlayTime();

        this.player.begin(); 
        this.depression.begin();
        //this.player.setLevelConditions(ConditionMap[this.stats.lvl]);

        platforms = PlatformMap[this.stats.lvl].map(element => {
            return new Platform(this.gameContext, element.x, element.y, element.name)
        });

        // platforms = PlatformMap[this.stats.lvl].map(element => {
        //     return new Platforma(this.gameContext, element.x, element.y, element.w, element.h)
        // });

        collectable = BoosterMap[this.stats.lvl].map(element => {
            return new Collectable(this.gameContext, element.x, element.y, element.w, element.h, element.name, element.finish)
        });

        bugs = BugsMap[this.stats.lvl].map(element => {
            return new Bug(this.gameContext, element.x, element.y, this.imageManager.changeImage(element.name), element.name, element.magnet, this.stats.gravity, this.imageManager)
        });

        bugSprites = bugs.map((element)=>{
            return element.getSprite();
        })

        this.sprites = [...this.gameSprites, ...bugSprites];

        this.collisionManager.setData(this.player, platforms, bugs, this.depression, collectable);

        this.player.setDependentEntities([...platforms, this.depression, ...bugs, ...collectable]);

        this.controller.animate([this.player, this.depression, ...platforms, ...bugs, ...collectable, ...this.sprites], this.stats.lvl);
    }
    
    setStats(name) {    
        this.input = false;
        this.stats.name = name;
    }

}




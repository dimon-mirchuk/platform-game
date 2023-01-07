import Platform from "./Platform";

import { PlatformMap } from "../utils/levels";
import { ConditionMap } from "../utils/levels";

import playerImg from "../../img/player/normalPlayer.png";


const introData = {
    0: { context: false, srcName: 'intro1'},
    1: { context: false, srcName: 'intro2', input: true },
    2: { context: false, srcName: 'intro3'},
    3: { context: true },
    4: { context: false, srcName: 'intro4'},
    5: { context: true },
    6: { context: false, srcName: 'intro5'},
    7: { context: false, srcName: 'intro6'},
    8: { context: true },
    9: { context: true },
    10: { context: true },
    11: { context: true },
};



export default class Game {
    constructor ( player, controller, contextManager, listenerUp, listenerDown ) {
        this.player = player;
        this.controller = controller;
        this.contextManager = contextManager;
        this.listenUp = listenerUp;
        this.listenDown = listenerDown;

        this.gameContext = null;

        this.stats = {
            name: undefined,
            gravity: 0.5,
            lvl: 0,
        }

       //this.startIntroduction();
       //this.setup();

       this.test();
    }

    test() {
        this.contextManager = new this.contextManager();
        this.gameContext = this.contextManager.getGameContext();

        this.run();
    }

    run() {
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

        this.contextManager.showGameContext();


        this.stats.lvl = 3;
        this.startNewLevel();

        setTimeout(()=>{
            this.listenDown(this.player, false, true);
            this.listenUp(this.player, false, true);
        }, 5000)
    }

    

    startIntroduction() {

        // const image = document.createElement('img');
        // image.src  = startImage;
        // image.setAttribute('width', '1280px');
        // image.setAttribute('height', '720px');
        // image.setAttribute('position', 'absolute');
        // image.setAttribute('top', '20%');
        // image.setAttribute('left', '20%');

        // document.getElementById('body').setAttribute('margin', '0 auto');
        // document.getElementById('body').appendChild(image);
        // const listenerID = this.listenDown(this);
    }

    setup() {
        //const canvas = document.querySelector('canvas');
        // const canvas = document.getElementById('gameplay');
        // this.context = canvas.getContext('2d');

        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;

        //спросить имя и дать бусты андрею и диме
        //this.stats.name = prompt('Как вас зовут?')
        //alert(this.stats.name)

        //вывести правила 
        //...

        this.player = new this.player(
            this.gameContext, 
            this.stats.gravity,
            this.winLevel.bind(this),
            playerImg
        );

        this.controller = new this.controller(this.gameContext);
        //
        //здесь должен быть вызов this.setupSprites()
        this.sprites = [this.player.getSprite()];

        this.listenDown(this.player);
        this.listenUp(this.player);

        //this.start();

        //=======
        // this.context2 = canvas.getContext('2d');
        // const emg = new Image();
        // emg.src = startImage;
        // this.context2.drawImage(startImage, window.innerWidth, window.innerHeight)
    }

    start() {
        // это уже последний или еще нет?
        this.startNewLevel();
    }

    startNewLevel() {
        this.player.setLevelConditions(ConditionMap[this.stats.lvl]);

        const platforms = PlatformMap[this.stats.lvl].map(element => {
            return new Platform(this.gameContext, element.x, element.y, element.name)
        });

        this.controller.animate([this.player, ...platforms, ...this.sprites], this.stats.lvl);
    }

    winLevel() {
        // поздравления
        // ...

        // плюс уровень
        this.stats.lvl = this.stats.lvl + 1;
        console.log('level', this.stats.lvl)

        // повторить сначала
        this.start();
    }

    winGame() {
        // финальные поздравления
        // конец
    }

    lose() {
        // предложить попробовать еще раз

        // если да
        // повторить сначала
        this.start();

        // если нет
        // утешение)
    }

    setupSprites(){
        //вынести логику по спрайтам
    }
}
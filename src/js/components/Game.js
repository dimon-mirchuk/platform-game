import Platform from "./Platform";
import { PlatformMap } from "../utils/levels";
import { conditionMap } from "../utils/levels";
import emage from "../../img/surface/default/tile01.png"
//import emage from "../../img/player/normalPlayer.png"

import playerImg from "../../img/player/normalPlayer.png";
import startImage from "../../img/intro/startImage1.jpg";



const introductionImages = [
    { imageUrl: "../../img/startImage1.jpg", input: false }, 
    { imageUrl: "../../img/startImage1.jpg", input: false },
    { imageUrl: "../../img/startImage1.jpg", input: false },
    { imageUrl: "../../img/startImage1.jpg", input: false },
];

// const PlatformMapZ = {
//     0: [{x: 200, y: 100, url: "../../img/surface/default/tile01.png"}, {x: 300, y: 200, url: "../../img/surface/default/tile01.png"}, {x: 400, y: 300, url: "../../img/surface/default/tile01.png"}],
//     1: [{x: 400, y: 300, url: "../../img/surface/default/tile02.png"}, {x: 400, y: 100, url: "../../img/surface/default/tile02.png"}, {x: 400, y: 500, url: "../../img/surface/default/tile02.png"}],
//     2: [{x: 0, y: 100, url: "../../img/surface/default/tile01.png"}, {x: 0, y: 200, url: "../../img/surface/default/tile02.png"}, {x: 0, y: 300, url: "../../img/surface/default/tile01.png"}],
//     3: [{x: 200, y: 100, url: "../../img/surface/default/tile02.png"}, {x: 300, y: 200, url: "../../img/surface/default/tile02.png"}, {x: 400, y: 300, url: "../../img/surface/default/tile01.png"}],

// };

const PlatformMapZ = {
    0: [{x: 200, y: 100, name: "tile1"}, {x: 300, y: 200, name: "tile2"}, {x: 400, y: 300, name: "tile1"}],
    1: [{x: 400, y: 300, url: "tile2"}, {x: 400, y: 100, url: "tile2"}, {x: 400, y: 500, url: "tile2"}],
    2: [{x: 0, y: 100, url: "tile1"}, {x: 0, y: 200, url: "tile2"}, {x: 0, y: 300, url: "tile1"}],
    3: [{x: 200, y: 100, url: "tile2"}, {x: 300, y: 200, url: "tile2"}, {x: 400, y: 300, url: "tile1"}],

};


export default class Game {
    constructor ( player, controller, listenerUp, listenerDown ) {
        this.player = player;
        this.controller = controller;
        this.listenUp = listenerUp;
        this.listenDown = listenerDown;

        this.context = null;

        this.stats = {
            name: undefined,
            gravity: 0.5,
            lvl: 0,
        }

       //this.startIntroduction();
       this.setup();
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
        const canvas = document.querySelector('canvas');
        this.context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //спросить имя и дать бусты андрею и диме
        //this.stats.name = prompt('Как вас зовут?')
        //alert(this.stats.name)

        //вывести правила 
        //...

        this.player = new this.player(
            this.context, 
            this.stats.gravity,
            this.winLevel.bind(this),
            playerImg
        );

        this.controller = new this.controller(this.context);
        //
        //здесь должен быть вызов this.setupSprites()
        this.sprites = [this.player.getSprite()];

        this.listenDown(this.player);
        this.listenUp(this.player);

        this.start();
    }

    start() {
        // это уже последний или еще нет?
        this.startNewLevel();
    }

    startNewLevel() {
        this.player.setLevelConditions(conditionMap[this.stats.lvl]);

        const platforms = PlatformMapZ[this.stats.lvl].map(element => {
            console.log("______________________________", typeof emage)
            console.log(typeof element.url)
            //const i = import(emage)
            return new Platform(this.context, element.x, element.y, element.name)
            //return new Platform(this.context, element, element.url)
        });

        console.log(platforms)
        
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
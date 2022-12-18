import Platform from "./Platform";
import { PlatformMap } from "../utils/levels";
import { conditionMap } from "../utils/levels";

import playerImg from "../../img/playerr.png";
import startImage from "../../img/startImage1.jpg";

const introductionImages = [
    { imageUrl: "../../img/startImage1.jpg", input: false }, 
    { imageUrl: "../../img/startImage1.jpg", input: false },
    { imageUrl: "../../img/startImage1.jpg", input: false },
    { imageUrl: "../../img/startImage1.jpg", input: false },
];

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

        this.startIntroduction();
    }

    startIntroduction() {

        const image = document.createElement('img');
        image.src  = startImage;
        image.setAttribute('width', '1280px');
        image.setAttribute('height', '720px');
        image.setAttribute('position', 'absolute');
        image.setAttribute('top', '20%');
        image.setAttribute('left', '20%');

        document.getElementById('body').setAttribute('margin', '0 auto');
        document.getElementById('body').appendChild(image);
        const listenerID = this.listenDown(this);
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

        const platforms = PlatformMap[this.stats.lvl].map(element => {
            return new Platform(this.context, element)
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
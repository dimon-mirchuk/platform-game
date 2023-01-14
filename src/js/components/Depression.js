import Sprite from "./Sprite";

export default class Depression {
    constructor(context, img, loseCallback) {
        this.position = {
            x: 100,
            y: 300,
        }

        this.width = 240;
        this.height = 240;

        this.context = context;
        this.spriteImg = img;
        this.loseCallback = loseCallback;

        this.velocity = {
            x: 2,
            y: 0,
        }

        this.start();
    }

    start() {
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    
        setInterval(() => { 
            this.velocity.x = this.velocity.x + 2; 
        }, 4000)
    }

    update() {
        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);

        this.position.x = this.position.x + this.velocity.x;
    }

    killHuman() {
        this.loseCallback();
    }

    animate() {
        this.update();
    }

    getSprite() {
        return this.sprite.get();
    }

    begin() {      
        this.position.x = 100
        this.position.y = 300
        this.velocity.x = 1; 
    }

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 
}
import Sprite from "./Sprite";

export default class Bug {
    constructor(context, x, y, img, skinId) {
        this.position = {
            x,
            y,
        }

        this.width = 240;
        this.height = 240;

        this.context = context;

        this.spriteImg = img;

        this.velocity = {
            x: 3,
            y: 0,
        }

        this.skinId = skinId;
        this.rotate = false;

        console.log('баг создан')

        this.start();
    }

    start() {
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }

    update() {
        console.log('Баг позишн', this.position)

        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);

        //this.position.y += this.velocity.y;
        //this.position.x = this.position.x + this.velocity.x;

        // if (this.position.y + this.height + this.velocity.y <= 
        //     this.context.canvas.height) {
        //         this.velocity.y += this.gravity;
        //     }
        // else {
        //     this.velocity.y = 0;
        // }    
        
    }

    animate() {
        this.update();
    }

    getSprite() {
        return this.sprite.get();
    }

    beKilled() {
        
    }

    stop() {

    }

    goLeft() {}

    goRight() {}

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 
}
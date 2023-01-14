import Sprite from "./Sprite";

export default class Bug {
    constructor(context, x, y, img, skinId, magnet, gravity, imageManager) {
        this.position = {
            x,
            y,
        }

        this.width = 240;
        this.height = 240;
        this.gravity = gravity;
        this.context = context;
        this.spriteImg = img;

        this.velocity = {
            x: 3,
            y: 0,
        }

        this.skinId = skinId;

        this.path = 0;
        this.magnet = magnet
        this.magnet2 = this.magnet;

        this.killed = false;

        this.imageManager = imageManager;

        this.start();
    }

    start() {
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }

    update() {
        if (this.path !== this.magnet && this.path > this.magnet) {
            this.path = this.path - 1;
            this.goLeft();
        } else {
            this.magnet = this.magnet2;
        }

        if (this.path !== this.magnet && this.path < this.magnet) {
            this.path = this.path + 1;
            this.goRight();
        } else {
            this.magnet = -this.magnet2;
        }

        if (this.killed) {
            this.stop();
            this.beKilled();
        }

        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);
        
    }

    animate() {
        this.update();
    }

    getSprite() {
        return this.sprite.get();
    }

    beKilled() {
        this.position.y = this.position.y + 10

        this.sprite.updateImage(
            this.imageManager.changeImage(`bugDead`)
        )
    }

    stop() {
        this.velocity.x = 0;
    }

    goLeft() {
        this.position.x -= this.velocity.x;

        this.sprite.updateImage(
            this.imageManager.changeImage(`${this.skinId}L`)
        )
    }

    goRight() {
        this.position.x += this.velocity.x;

        this.sprite.updateImage(
            this.imageManager.changeImage(`${this.skinId}R`)
        )
    }

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 
}

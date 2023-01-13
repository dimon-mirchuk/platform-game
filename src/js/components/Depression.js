import Sprite from "./Sprite";

export default class Depression {
    constructor(context, gravity, img, loseCallback) {
        this.position = {
            x: 100,
            y: 300,
        }

        this.width = 240;
        this.height = 240;

        this.context = context;
        //this.gravity = gravity;

        this.spriteImg = img;
        this.loseCallback = loseCallback;

        this.velocity = {
            x: 3,
            y: 0,
        }

        this.start();
    }

    start() {
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }

    update() {
        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);

        //this.position.y += this.velocity.y;
        this.position.x = this.position.x + this.velocity.x;

        //console.log('depression апдейт', this.position.x)

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

    begin() {      
        this.position.x = 100
        this.position.y = 300
        this.velocity.x = 3; 

        // СУПЕР ВАЖНО
        // 3
        // 5
        // setInterval(()=>{ 
        //     this.velocity.x = this.velocity.x + 1; 
        // }, 3000)
    }

    killHuman() {
        this.loseCallback();
    }

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 
}
import Sprite from "./Sprite";

export default class Player {
    constructor(context, gravity, winCallback, img) {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.keys = {
            right: {
                pressed: false,
            },
            left: {
                pressed: false,
            },
        }

        this.width = 240;
        this.height = 240;

        this.awaited = 0;
        this.activated = 0;

        this.context = context;
        this.gravity = gravity;

        this.winCallback = winCallback;
        this.spriteImg = img;
        console.log(this.spriteUrl)
        this.start();
    }

    start() {
        console.log(this.spriteImg)
        console.log(typeof this.spriteImg)
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }

    update() {
        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= 
            this.context.canvas.height) {
                this.velocity.y += this.gravity;
            }
        else {
            this.velocity.y = 0;
        }    
        
    }

    animate() {
        this.update();

        console.log('________', this.position)

        if (this.keys.left.pressed) {
            this.goLeft();
        }
        else if (this.keys.right.pressed) {
            this.goRight();
        }
        else this.stop();
    }

    jump() {
        const jumpCondition = this.velocity.y === 0 && (this.position.y + this.height + this.velocity.y >= this.context.canvas.height);

        if (jumpCondition) {
            this.jumping = true;
            this.velocity.y -= 15;

            setTimeout(() => {
                this.jumping = false;
            }, 500);

        }

        this.activate();
    }

    doubleJump() {

        if (this.jumping) {
            this.velocity.y -= 10;
            this.jumping = false;
        }
        
    }

    goLeft() {
        this.velocity.x = -5;
    }

    goRight() {
        this.velocity.x = 5;
    }

    stop() {
        this.velocity.x = 0
    }

    activate() {
        this.activated = this.activated + 1;

        if (this.awaited === this.activated) {
            this.winCallback();
        } 
    }

    setLevelConditions(awaited){
        this.activated = 0;
        this.awaited = awaited;
    }

    getSprite(){
        return this.sprite.get();
    }

    begin(){
        this.stop();

        this.keys.left.pressed = false;
        this.keys.right.pressed = false;
        
        this.position.x = 100
        this.position.y = 100
        this.velocity.y = 0;
    }

}

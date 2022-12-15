import Sprite from "./Sprite";

export default class Player {
    constructor(context, gravity, winCallback, url) {
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

        this.width = 48;
        this.height = 48;

        this.awaited = 0;
        this.activated = 0;

        this.context = context;
        this.gravity = gravity;

        this.winCallback = winCallback;
        this.spriteUrl = url;

        this.start();
    }

    start() {
        const img = new Image();
        img.src = this.spriteUrl;

        this.sprite = new Sprite(this.context, img, 4, 6, 48, 48, this.position.x, this.position.y);
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
            this.velocity.y -= 15;
        }

        this.activate();
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

}

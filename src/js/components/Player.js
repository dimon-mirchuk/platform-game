import Sprite from "./Sprite";

export default class Player {
    constructor(context, imageManager, gravity, winCallback, loseCallback, img, skinId) {
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
            up: {
                pressed: false,
            }
        }

        this.width = 110;
        this.height = 240;

        this.awaited = 0;
        this.activated = 0;

        this.prevVelocityRatio = 5;
        this.velocityRatio = 5;

        this.context = context;
        this.imageManager = imageManager;
        this.gravity = gravity;
        this.skin = skinId;

        this.winCallback = winCallback;
        this.loseCallback = loseCallback;
        this.spriteImg = img;

        this.bugsFixed = 0;

        this.horizon = this.context.canvas.height;

        this.start();
    }

    start() {
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }

    update(horizon) {
        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= horizon) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }    
    }

    animate() {
        this.update(this.horizon);

        if (this.position.y > this.context.canvas.height + this.height) this.die();

        if (this.keys.left.pressed && this.position.x > 799) {
            this.goLeft();

        } else if (this.keys.left.pressed && this.position.x <= 799) {
            this.stopX();

            if (this.keys.left.pressed) {
                this.dependent.forEach(element => {
                    element.moveRight(this.velocityRatio);
                });
            }
        }
        else if (this.keys.right.pressed && this.position.x < 800) {
            this.goRight();
        }
        else if (this.keys.right.pressed && this.position.x >= 800) {
            this.stopX();

            if (this.keys.right.pressed) {
                this.dependent.forEach(element => {
                    element.moveLeft(this.velocityRatio);
                });
            }
        }
        else {
            this.stopX();
        }
    }

    jump() {
        const jumpCondition = this.position.y + this.height + this.velocity.y >= this.horizon;

        if (jumpCondition) {
            this.jumping = true;
            this.velocity.y -= 15;

            setTimeout(() => {
                this.jumping = false;
            }, 1000);
        }
    }

    doubleJump(forced, param) {
        if (this.jumping && !this.keys.up.pressed) {
            this.velocity.y -= 10;
            this.jumping = false;
        }    

        if (forced) {
            this.velocity.y -= param;
        }
    }

    goLeft() {
        this.velocity.x = -this.velocityRatio;
        
        this.sprite.updateImage(
            this.imageManager.changeImage(`${this.skin}L`)
        )
    }

    goRight() {
        this.velocity.x = this.velocityRatio;

        this.sprite.updateImage(
            this.imageManager.changeImage(`${this.skin}R`)
        )
    }

    stopX() {
        this.velocity.x = 0
    }

    stopY() {
        this.velocity.y = 0        
    }

    activate() {
        this.activated = this.activated + 1;

        if (this.awaited === this.activated) {
            this.winCallback();
        } 
    }

    setLevelConditions(awaited) {
        this.activated = 0;
        this.awaited = awaited;
    }

    getSprite() {
        return this.sprite.get();
    }

    begin() {
        this.stopX();

        this.keys.left.pressed = false;
        this.keys.right.pressed = false;
        this.keys.up.pressed = false;
        this.setVelocityRatio(5);

        this.bugsFixed = 0;


        this.sprite.updateImage(
            this.imageManager.changeImage(`${this.skin}R`)
        )
        
        this.position.x = 800
        this.position.y = 100
        this.velocity.y = 0;
    }

    fixBug() {
        this.bugsFixed = this.bugsFixed + 1; 
    }

    setDependentEntities(args) {
        this.dependent = args;
    }

    setVelocityRatio(x) {
        if (x === 0 && this.velocityRatio !== 0) {
            this.prevVelocityRatio = this.velocityRatio;
            this.velocityRatio = x
        } else {
            this.velocityRatio = x
        }
    }

    getVelocityRatio() {
        return this.velocityRatio;
    }

    die() {
        this.loseCallback();
    }
}

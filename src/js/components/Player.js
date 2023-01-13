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

        //66
        //this.width = 240;
        // ! this.width = 220;
        this.width = 110;
        this.height = 240;

        this.awaited = 0;
        this.activated = 0;

        this.velocityRatio = 5;

        this.context = context;
        this.imageManager = imageManager;
        this.gravity = gravity;
        this.skin = skinId;

        this.winCallback = winCallback;
        this.loseCallback = loseCallback;
        this.spriteImg = img;


        this.horizon = this.context.canvas.height;

        //this.id = 'player';

        this.start();
    }

    start() {
        console.log('this.skin', this.skin)
        this.sprite = new Sprite(this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }

    update(horizon) {
        this.sprite.update();
        this.sprite.updatePosition(this.position.x, this.position.y);

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= 
            horizon) {
                this.velocity.y += this.gravity;
            }
        else {
            this.velocity.y = 0;
        }    
        
    }

    animate() {
        this.update(this.horizon);

        if (this.position.y > this.context.canvas.height + this.height) {
            this.die();
        }

        //console.log('________ this.position', this.position)
        //console.log('________ this.horizon', this.horizon)
        //console.log('!!!,', this.dependent, typeof this.dependent)

        if (this.keys.left.pressed && this.position.x > 799) {
            this.goLeft();
        }
        else if (this.keys.left.pressed && this.position.x <= 799) {
            this.stopX();

            if (this.keys.left.pressed) {
                // 88 console.log(this.dependent)
                this.dependent.forEach(element => {
                   // element.moveRight(this.velocity.x);
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
                // 88 console.log(this.dependent)
                this.dependent.forEach(element => {
                    //element.moveLeft(this.velocity.x);
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
            }, 500);
        }

        this.activate();
    }

    doubleJump() {
        if (this.jumping && !this.keys.up.pressed) {
            this.velocity.y -= 10;
            this.jumping = false;
        }    
    }

    goLeft() {
        this.velocity.x = -this.velocityRatio;

        //console.log('go left', `${this.skin}L`)
        
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
            //this.loseCallback();
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

        this.sprite.updateImage(
            this.imageManager.changeImage(`${this.skin}R`)
        )
        
        this.position.x = 800
        this.position.y = 100
        this.velocity.y = 0;
    }

    setDependentEntities(args) {
        this.dependent = args;
    }

    setVelocityRatio(x) {
        this.velocityRatio = x
    }

    die() {
        this.loseCallback();
    }
}

export default class Player {
    constructor(context, gravity, winCallback) {
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

        this.width = 100;
        this.height = 100;

        this.awaited = 0;
        this.activated = 0;

        this.context = context;
        this.gravity = gravity;

        this.winCallback = winCallback;
    }

    draw() {
        this.context.fillStyle = 'blue';
        this.context.fillRect(
            this.position.x, 
            this.position.y, 
            this.width,
            this.height
        )
    }

    update() {
        this.draw();

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

}
export default class Player {
    constructor(context, gravity) {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y: 1,
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

        this.hp = 3;
        this.hws = 0;

        this.context = context;
        this.gravity = gravity;
    }

    draw() {
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
        requestAnimationFrame(this.animate.bind(this));
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
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

}
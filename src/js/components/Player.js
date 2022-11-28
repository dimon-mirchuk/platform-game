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
    }

}
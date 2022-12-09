export default class Platform {
    constructor(context, position) {
        this.position = {
            x: position.x,
            y: position.y,
        };

        this.width = 170;
        this.height = 120;

        this.context = context;
    }

    draw() {
        this.context.fillStyle = 'red';

        this.context.fillRect(
            this.position.x, 
            this.position.y, 
            this.width,
            this.height
        )
    }

    animate() {
        this.draw();        
    }
}
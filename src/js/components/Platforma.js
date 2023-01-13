import tile1 from "../../img/surface/default/tile01.png"
import tile2 from "../../img/surface/default/tile02.png"

export default class Platforma {
    constructor(context, x, y, width, height) {
        this.position = {
            x,
            y,
        };

        this.width = width;
        this.height = height;

        this.context = context;

        this.id = 'platform';
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

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 
}
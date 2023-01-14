import lafore from "../../img/collectable/lafore.png"
import deadline from "../../img/collectable/deadline.png"

export default class Collectable {
    constructor(context, x, y, w, h, name, finish) {
        this.position = {
            x,
            y,
        }

        this.width = w;
        this.height = h;

        this.context = context;
        this.name = name;

        this.finish = finish;
        this.collected = false;

        this.start();
    }

    start() {
        this.image = new Image();
        this.changeDecor();
    }

    draw() {
        if (this.image.src) {
            if (this.image.complete) {
                this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
            } else {
                this.image.onload = () => {
                    this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
                }
            }
        }
    }

    animate() {
        if (!this.collected) this.draw();
    }

    changeDecor() {
        switch(this.name) {
            case 'deadline':
                this.image.src = deadline;
                break;
            case 'lafore':
                this.image.src = lafore;
                break;
            default:
        }
    }

    beCollected() {
        this.position.x = 0;
        this.position.y = 0;
        this.collected = true;
    }

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 
}

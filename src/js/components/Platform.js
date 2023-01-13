import tile1 from "../../img/surface/default/tile01.png"
import tile2 from "../../img/surface/default/tile02.png"

export default class Platform {
    constructor( context, x, y, name ) {
        this.position = {
            x,
            y,
        };

        this.context = context;
        this.name = name;

        this.width = 270;
        this.height = 270;

        this.start();

        this.id = 'platform';
    }

    start() {
        this.image = new Image();
        this.changeDecor();
    }

    draw() {
        if (this.image.complete) {
            this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        } else {
            this.image.onload = () => {
                this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
            }
        }
    }

    animate() {
        this.draw();        
    }

    changeDecor() {
        switch(this.name) {
            case 'tile1':
                this.image.src = tile1;
                break;
            case 'tile2':
                this.image.src = tile2;
                break;
            default:
                this.image.src = tile1;
        }
    }

    moveRight(v) {
        this.position.x = this.position.x + v;
    } 

    moveLeft(v) {
        this.position.x = this.position.x - v;
    } 
}
//import emage from "../../img/surface/default/tile01.png"
import tile1 from "../../img/surface/default/tile01.png"
import tile2 from "../../img/surface/default/tile02.png"

export default class Platform {
    constructor(context, x, y, name) {
        this.position = {
            x,
            y,
        };

        // this.width = 170;
        // this.height = 120;
        //this.width = 1181;
        //this.height = 1181;

        this.width = 270;
        this.height = 270;


        this.context = context;


        this.name = name;



        this.start();
    }

    start() {
        //console.log(1111111111111111111111)
        //++
        // this.image = document.createElement('img');
        // this.image.src = this.url;

        this.image = new Image();

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

    draw() {
        //console.log(22222222222222222222222222222)
        //console.log(this.image)
        // this.context.fillStyle = 'red';

        // this.context.fillRect(
        //     this.position.x, 
        //     this.position.y, 
        //     this.width,
        //     this.height
        // )

        console.log(this.url)

        console.log(this.image)

        //++
        // this.image.onload = () => {
        //     this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        // }

        //this.context.drawImage(this.image, 0, 0, this.width, this.height)

        //+++
        // this.image.onload = () =>{
        //     this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        //     console.log('DONE');
        // }
        if (this.image.complete) {
            this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        } else {
            this.image.onload = () => {
                this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
            }
        }
        

    }

    animate() {
        this.draw();        
    }
}
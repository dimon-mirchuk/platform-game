//import emage from "../../img/surface/default/tile01.png"

export default class Platform {
    constructor(context, position, url) {
        this.position = {
            x: position.x,
            y: position.y,
        };

        // this.width = 170;
        // this.height = 120;
        //this.width = 1181;
        //this.height = 1181;

        this.width = 270;
        this.height = 270;


        this.context = context;

        this.url = url;

        this.start();
    }

    start() {
        //console.log(1111111111111111111111)
        //++
        // this.image = document.createElement('img');
        // this.image.src = this.url;

        this.image = new Image();
        this.image.src = this.url;
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
export default class Player {
    constructor(context){
        this.position = {
            x: 100,
            y: 100,
        }
        this.width = 100;
        this.height = 100;

        this.hp = 3;
        this.hws = 0;

        this.context = context;
    }

    draw() {
        console.log(this.context);

        this.context.fillRect(
            this.position.x, 
            this.position.y, 
            this.width,
            this.height
        )
    }

}
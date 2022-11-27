import Player from "./Player";

export default class Game {
    constructor(){
        
    }

    start() {       
        console.log('game started');

        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        const player = new Player(context).draw();
        

    }

    win() {}

    lose() {}


}
export default class Game {
    constructor(){

    }

    start() {
        console.log('tut1');
        
        const canvas = document.querySelector('canvas');
        canvas.getContext('2d');

        console.log('tut2', canvas);
    }

    win() {}

    lose() {}


}
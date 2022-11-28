
export default class Game {
    constructor(player) {
        this.player = player;
        this.gravity = 0.5;
        this.lvl = 0;
    }

    start() {
        console.log('game started', this.player);

        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        const player = new this.player(context, this.gravity);
        player.draw();
        player.animate();


    }

    win() {}

    lose() {}


}
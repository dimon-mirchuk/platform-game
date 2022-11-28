
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

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.player = new this.player(context, this.gravity);

        this.player.draw();
        this.player.animate();


    }

    win() {}

    lose() {}

    getPlayer() {
        return this.player;
    }


}
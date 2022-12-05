
export default class Game {
    constructor(player, listenerUp, listenerDown) {
        this.player = player;
        this.listenUp = listenerUp;
        this.listenDown = listenerDown;

        this.gravity = 0.5;
        this.lvl = 0;
    }

    setup(name) {
        //спросить имя и дать бусты андрею и диме
        //вывести правила
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

        this.listenDown(this.player);
        this.listenUp(this.player);
    }

    win() {}

    lose() {}
}
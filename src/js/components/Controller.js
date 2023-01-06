export default class Controller {
    constructor(context) {
        this.context = context;
        this.lvl = 0;
        this.currAnimId = null;
    }

    animate(args, currLvl) {

        if (this.lvl !== currLvl) {
            this.lvl = currLvl;
            cancelAnimationFrame(this.currAnimId);
        }

        this.currAnimId = requestAnimationFrame(this.animate.bind(this, args));
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        args.forEach(el => el.animate())      
    }
}
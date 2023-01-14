export default class Controller {
    constructor(context, collisionManager) {
        this.context = context;
        this.lvl = 0;
        this.currAnimId = null;

        this.collisionManager = collisionManager;
    }

    animate(args, currLvl) {
        this.args = args;

        if (this.lvl !== currLvl) {
            this.lvl = currLvl;
            cancelAnimationFrame(this.currAnimId);
        }

        this.currAnimId = requestAnimationFrame(this.animate.bind(this, args));
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        this.collisionManager.checkPlatformCollision(args[0].getVelocityRatio());
        this.collisionManager.checkBugCollision();
        this.collisionManager.checkDepressionCollision();
        this.collisionManager.checkCollectableCollision();

        args.forEach(el => el.animate())      
    }

    stop() {
        if (this.currAnimId) cancelAnimationFrame(this.currAnimId);
    }

    continue() {
        this.animate(this.args, this.lvl)
    }
}
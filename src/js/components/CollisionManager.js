export default class CollisionManager {
    constructor() {
        this.nearest = [];
    }

    setData(player, platforms, bugs, depression, collectable) {
        this.player = player;
        this.platforms = platforms;
        this.bugs = bugs;
        this.depression = depression;
        this.collectable = collectable;
    }

    findNearest(arr) {
        this.nearest = [];

        arr.forEach(( element ) => {
            if (this.player.position.x + this.player.width >= element.position.x &&
                !(this.player.position.x > element.position.x + element.width)) {
                this.nearest.push(element);
            }
        })
    }

    checkPlatformCollision(velocityRatio = 5) { 
        this.findNearest(this.platforms);

        if (this.nearest.length > 0) {

            this.nearest.forEach(( element ) => {
                if (element.position.y + velocityRatio < this.player.position.y + this.player.height && element.position.x > this.player.position.x ) {
                    if (this.player.keys.right.pressed && element.position.y + element.height >= this.player.position.y) {
                        this.player.setVelocityRatio(0);
                    } else if (!this.player.keys.right.pressed) {
                        this.player.setVelocityRatio(this.player.prevVelocityRatio);
                    }

                } else if (element.position.y + velocityRatio < this.player.position.y + this.player.height && element.position.x < this.player.position.x ) {
                    if (this.player.keys.left.pressed && element.position.y + element.height >= this.player.position.y) {
                        this.player.setVelocityRatio(0);
                    } else if (!this.player.keys.left.pressed) {
                        this.player.setVelocityRatio(this.player.prevVelocityRatio);
                    }
                } else {
                    this.player.setVelocityRatio(velocityRatio);
                    this.player.horizon = element.position.y;
                } 
            })  
        }

        if (this.nearest.length === 0) {
            this.player.horizon = this.player.context.canvas.height + 500; 
        }
    }

    checkBugCollision() {
        this.findNearest(this.bugs);

        if (this.nearest.length > 0) {
            this.nearest.forEach(( element ) => {
                if (this.player.position.y + this.player.height - element.position.y <= 80  && this.player.position.y + this.player.height - element.position.y >= 60) {
                    this.player.horizon = element.position.y;
                    this.player.doubleJump(true, 5);

                    element.killed = true;
                    this.player.fixBug();

                    this.player.horizon = this.player.context.canvas.height;
                }
            }) 
        }
    }

    checkDepressionCollision() {
        if (this.depression.position.x + this.depression.width >= this.player.position.x) {
            this.player.die()
        }
    }

    checkCollectableCollision() {
        this.findNearest(this.collectable);

        if (this.nearest.length > 0) {
            this.nearest.forEach(( element ) => {
                if (element.finish) {
                    this.player.winCallback();
                }
                if ((this.player.position.y <= element.position.y && element.position.y <= this.player.position.y + this.player.height)||
                (this.player.position.y <= element.position.y + element.height && element.position.y + element.height <= this.player.position.y + this.player.hight)) {

                    element.beCollected();
                    const prevV = this.player.getVelocityRatio();
                    this.player.setVelocityRatio(prevV + 3); 
                } 
            })
        }
    }
}
export default class Sprite {
    constructor(context, image, ticksPerFrame, numberOfFrames, width, height, positionX, positionY, ratio) {
        this.context = context;

        this.image = image;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = ticksPerFrame || 0;
        this.numberOfFrames = numberOfFrames || 1;

        this.width = width;
        this.height = height;

        this.positionX = positionX;
        this.positionY = positionY;

        this.ratio = ratio;
    }

    update() {
        this.tickCount++;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    animate() {
        this.update();

        this.context.drawImage(
            this.image, 
            this.ratio * this.frameIndex,
            0,
            this.ratio,
            this.ratio,
            this.positionX, 
            this.positionY, 
            this.width,
            this.height
        )
    }

    get(){
        return this;
    }

    updatePosition(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
    } 

    updateImage(newImage) {
        this.image = newImage;
    }
}
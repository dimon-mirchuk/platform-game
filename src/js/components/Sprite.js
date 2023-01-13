export default class Sprite {
    constructor(context, image, ticksPerFrame, numberOfFrames, width, height, positionX, positionY, ratio, id='not important') {
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

        this.id = id;
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

        if (this.id = 'player') {
            this.positionX = posX - 70;
            this.positionY = posY;
        } else {
            this.positionX = posX;
            this.positionY = posY;
        }

        
    } 

    updateImage(newImage) {
        this.image = newImage;
    }
}
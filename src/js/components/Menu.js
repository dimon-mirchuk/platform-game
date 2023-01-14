export default class Menu {
    constructor(imageManager) {
        this.pause = false;
        this.music = true;

        this.imageManager = imageManager;
    }

    changePause(stateTime) {
        if (this.pause && stateTime === 'playtime') {
            this.imageManager.hideImage();
            this.controllerStart();
            this.pause = false;

        } else if (!this.pause && stateTime === 'playtime'){
            this.controllerStop();
            this.imageManager.showImage('intro0')
            this.pause = true;
        } 

        return this.pause;
    }

    changeMusic() {
        if (this.music) {
            console.log('выключили музыку')
        } else {
            console.log('включили музыку')
        }
    }

    setCallbacks(stop, start){
        this.controllerStop = stop;
        this.controllerStart = start;
    }

}
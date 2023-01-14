export default class EventManager {
    constructor() {
       this.object = null; 
       this.event = null;
       this.time = null;
       this.functionUp = null;
       this.functionDown = null;

       this.pause = false 
    }

    setMenu (menu) {
        this.menu = menu;
    }

    addListener(obj, event) {
        this.object = obj;
        
        this.time = this.object.keys ? 'playtime' : 'showtime';

        if (this.time === 'showtime') {
            this.event = event;
            this.functionUp = this.checkerUp.bind(this);

            addEventListener(this.event, this.functionUp);
        } else if (this.time === 'playtime') {
            this.event = {
                0: 'keyup',
                1: 'keydown',
            } 

            this.functionUp = this.checkerUp.bind(this);
            this.functionDown = this.checkerDown.bind(this);

            addEventListener(this.event[0], this.functionUp);
            addEventListener(this.event[1], this.functionDown);
        }
    }

    removeListener() {

        if (this.time === 'showtime') {
            removeEventListener(this.event, this.functionUp);
        } else if (this.time === 'playtime') {
            removeEventListener(this.event[0], this.functionUp);
            removeEventListener(this.event[1], this.functionDown);
        }
    }

    checkerDown({ code }) {
        try {
            switch(code) {
                case 'ArrowUp':
                case 'KeyW':
                    if (this.time === 'playtime') {
                        this.object.jumping ? this.object.doubleJump() : this.object.jump();
                        this.object.keys.up.pressed = true;
                    }
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    if (this.time === 'playtime') this.object.keys.right.pressed = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    if (this.time === 'playtime') this.object.keys.left.pressed = true;
                    break;
                default:
            }
        } catch (err) { 
            console.log('Ну а вы что хотели, это же демо:', err)
        }
    }

    checkerUp({ code }) {
        try {
            switch(code) {
                case 'ArrowUp':
                case 'KeyW':
                    if (this.time === 'playtime') this.object.keys.up.pressed = false;
                break;
                case 'ArrowRight':
                case 'KeyD':
                    if (this.time === 'playtime') this.object.keys.right.pressed = false;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    if (this.time === 'playtime') this.object.keys.left.pressed = false;        
                    break;
                case 'Space':
                    if (this.time === 'showtime' && !this.pause) {

                        if (this.object.intro && !this.object.input) {

                            if (this.object.last === 'win') {

                                this.object.levelup();
                                this.object.startIntro();
                            } else {

                                this.object.startIntro();
                            }
                        } 
                        else if (!this.object.intro && !this.object.input) {

                            if (this.object.last === 'win') {

                                this.object.levelup();
                                this.object.startNewLevel();
                            } else {

                                this.object.startNewLevel();
                            }
                        } else if (this.object.input) {
                            this.object.playerCustomizer.setPlayerName(
                                this.object.setStats.bind(this.object),
                                this.object.levelup.bind(this.object),
                                this.object.startIntro.bind(this.object),
                            );
                        }      
                    }
                    break;
                case 'Escape':
                    if (this.time === 'playtime') {
                        this.pause = true; 
                        this.pause = this.menu.changePause(this.time);
                    }                   
                    break;
                default:
            }
        } catch (err) { 
            console.log('Ну а вы что хотели, это же демо:', err)
        }
    }
}
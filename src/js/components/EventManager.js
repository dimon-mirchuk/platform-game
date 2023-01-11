export default class EventManager {
    constructor() {
       this.object = null; 
       this.event = null;
       this.time = null;
       this.functionUp = null;
       this.functionDown = null;
    }

    addListener(obj, event) {
        this.object = obj;
        this.time = this.object.keys ? 'playtime' : 'showtime';

        if (this.time === 'showtime') {
            this.event = event;
            this.functionUp = this.checkerUp.bind(this);

            addEventListener(this.event, this.functionUp);

            console.log('___EventManager___', 'listener added:', this.time, this.event);
        }
        else if (this.time === 'playtime') {
            this.event = {
                0: 'keyup',
                1: 'keydown',
            } 

            this.functionUp = this.checkerUp.bind(this);
            this.functionDown = this.checkerDown.bind(this);

            addEventListener(this.event[0], this.functionUp);
            addEventListener(this.event[1], this.functionDown);

            console.log('___EventManager___', 'listenerS added:', this.time, this.event);
        }

    }

    removeListener() {

        if (this.time === 'showtime') {
            removeEventListener(this.event, this.functionUp);

            console.log('___EventManager___', 'listener removed');
        }
        else if (this.time === 'playtime') {
            removeEventListener(this.event[0], this.functionUp);
            removeEventListener(this.event[1], this.functionDown);

            console.log('___EventManager___', 'listenerS removed');
        }
    }

    checkerDown({ code }) {
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':
                if (this.time === 'playtime') this.object.jump(); 
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
    }

    checkerUp({ code }) {
        switch(code) {
            case 'ArrowRight':
            case 'KeyD':
                if (this.time === 'playtime') this.object.keys.right.pressed = false;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                if (this.time === 'playtime') this.object.keys.left.pressed = false;        
                break;
            case 'Space':
                if (this.time === 'showtime') {
                    if (this.object.intro && !this.object.input) {
                        this.object.levelup();
                        this.object.startIntro();
                    } 
                    else if (!this.object.intro && !this.object.input) {
                        this.object.levelup();
                        this.object.startNewLevel();
                    } 
                    else if (this.object.input) {
                        this.object.playerCustomizer.setPlayerName(
                            this.object.setStats.bind(this.object),
                            this.object.levelup.bind(this.object),
                            this.object.startIntro.bind(this.object),
                        );
                    }      
                }
                break;
            default:
        }
    }
}
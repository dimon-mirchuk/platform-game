import intro0 from "../../img/intro/intro1.png";
import intro1 from "../../img/intro/intro2.png";
import intro2 from "../../img/intro/intro3.png";
import intro4 from "../../img/intro/intro5.png";

import nevergiveup from "../../img/intro/nevergiveup.png";
import wingame from "../../img/intro/wingame.png";
import winlevel from "../../img/intro/winlevel.png";

import normalPlayerR from "../../img/player/normalPlayerR.png";
import normalPlayerL from "../../img/player/normalPlayerL.png";
import dimaPlayerR from "../../img/player/dimaPlayerR.png"
import dimaPlayerL from "../../img/player/dimaPlayerL.png"

import depression from "../../img/creatures/depression.png"
import bug from "../../img/creatures/bug.png"
import bugL from "../../img/creatures/bugL.png"
import deadBug from "../../img/creatures/deadBug.png"

import background from "../../img/background.png"

export default class ImageManager {
    constructor ( managerContext ) {
        this.managerContext = managerContext;
    }

    showImage(name) {
        const image = this.changeImage(name);
        
        if (image.complete) {
            this.managerContext.drawImage(image, 0, 0, 1920, 1080)
        } else {
            image.onload = () => {
                this.managerContext.drawImage(image, 0, 0, 1920, 1080)
            }
        }
    }

    changeImage(name) {

        let image = new Image();

        switch(name) {
            case 'intro0':
                image.src = intro0;
                break;
            case 'intro1':
                image.src = intro1;
                break;
            case 'intro2':
                image.src = intro2;
                break;
            case 'intro4':
                image.src = intro4;
                break;
            case 'intro6':
                image.src = intro6;
                break;
            case 'intro7':
                image.src = intro7;
                break;   
            case 'nevergiveup':
                image.src = nevergiveup;
                break;
            case 'winlevel':
                image.src = winlevel;
                break;   
            case 'wingame':
                image.src = wingame;
                break;
            case 'Дима':
            case 'dimaPlayerR':
                image.src = dimaPlayerR;
                break;
            case 'dimaPlayerL':
                image.src = dimaPlayerL;
                break;
            case 'Имя':
            case 'normalPlayerR':
                image.src = normalPlayerR;
                break;
            case 'normalPlayerL':
                image.src = normalPlayerL;
                break;
            case 'depression':
                image.src = depression;
                break;
            case 'bugL':
                image.src = bugL;
                break;
            case 'bug':
            case 'bugR':
                image.src = bug;
                break;
            case 'bugDead':
                image.src = deadBug;
                break;
            case 'background':
                image.src = background;
                break;
            default:
        }

        return image;
    }

    hideImage() {
        this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
    }
}
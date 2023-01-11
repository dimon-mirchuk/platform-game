import intro0 from "../../img/intro/intro1.jpg";
import intro1 from "../../img/intro/intro2.jpg";
import intro2 from "../../img/intro/intro3.jpg";
import intro4 from "../../img/intro/intro5.jpg";
import intro6 from "../../img/intro/intro6.jpg";
import intro7 from "../../img/intro/intro7.jpg";

import nevergiveup from "../../img/intro/nevergiveup.jpg";
import timeout from "../../img/intro/timeout.jpg";
import wingame from "../../img/intro/wingame.jpg";
import winlevel from "../../img/intro/winlevel.jpg";
import bugs from "../../img/intro/bugs.jpg";

import normalPlayer from "../../img/player/normalPlayer.png";
import dimaPlayer from "../../img/player/dimaPlayer.png"

import depression from "../../img/creatures/depression.png"

export default class ImageManager {
    constructor ( managerContext ) {
        this.managerContext = managerContext;
    }

    showImage(name) {

        const image = this.changeImage(name);
        
        if (image.complete) {
            this.managerContext.drawImage(image, 0, 0, window.innerWidth, window.innerHeight)
        } else {
            image.onload = () => {
                this.managerContext.drawImage(image, 0, 0, window.innerWidth, window.innerHeight)
            }
        }
        this.managerContext.globalAlpha = 0.5
    }

    changeImage(name) {

        let image = new Image();

        console.log(name)

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
            case 'bugs':
                image.src = bugs;
                break;
            case 'timeout':
                image.src = timeout;
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
            case 'Андрей':
                image.src = wingame;
                break;
            case 'Дима':
                image.src = dimaPlayer;
                break;
            case 'Имя':
                image.src = normalPlayer;
                break;
            case 'depression':
                image.src = depression;
                break;
            default:
        }

        return image;
    }
}
export default class PlayerCustomizer {
    constructor(imageManager) {
        this.imageManager = imageManager;
        this.skinId = null;
    }

    getPlayerName() {
        const body = document.getElementById('body');

        const wrapperDiv = document.createElement('div');
        wrapperDiv.setAttribute('style', 'position:absolute; width:100vw; height:100vh; display:flex;');
        wrapperDiv.setAttribute('id', 'wrapperDiv');
        body.appendChild(wrapperDiv);
        
        const conteinerDiv = document.createElement('div');
        conteinerDiv.setAttribute('style', 'width:300px; height:300px; background:black; z-index: 5;')
        wrapperDiv.appendChild(conteinerDiv);

        const input = document.createElement('input');
        input.setAttribute('type', 'text')
        conteinerDiv.appendChild(input);
        input.focus();
    }

    setPlayerName(setStats, levelup, startIntro) {
        const inputElement = document.querySelector('input');

        if (inputElement.value.trim().length) {

            document.getElementById('wrapperDiv').remove();
            
            setStats(inputElement.value.trim());
            levelup();
            startIntro();
        } 
        else {           
            inputElement.setAttribute('style', 'border: 2px solid red');
        }
    }

    setPlayerSkin(name) {
        const universalName = name.toLowerCase();
        console.log(313131, universalName)
        switch(universalName) {
            case 'андрей':
            case 'кобец':
            case 'кобеза':
            case 'kobezzza':
                this.skinId = 'andreyPlayer'
                return this.imageManager.changeImage('Андрей')
            case 'дима':
            case 'дмитрий':
            case 'димас':
            case 'димон':
            case 'димочка':
                
                this.skinId = 'dimaPlayer'
                console.log('!!!!!!!!!!!!!!!!', this.skinId)
                return this.imageManager.changeImage('Дима')
            default:
                this.skinId = 'normalPlayer'
                return this.imageManager.changeImage('Имя')
        }
    }

    getSkinId() {
        console.log('getSkinId', this.skinId)
        return this.skinId;
    }

}
export default class PlayerCustomizer {
    constructor(imageManager) {
        this.imageManager = imageManager;
        this.skinId = null;
    }

    getPlayerName() {
        const body = document.getElementById('body');

        const wrapperDiv = document.createElement('div');
        wrapperDiv.setAttribute('style', 'position: absolute; display: flex; left: 299px; top: 452px;');
        wrapperDiv.setAttribute('id', 'wrapperDiv');
        body.appendChild(wrapperDiv);
        
        const conteinerDiv = document.createElement('div');
        conteinerDiv.setAttribute('style', 'width: 528px; height: 300px; z-index: 5;')
        wrapperDiv.appendChild(conteinerDiv);

        const input = document.createElement('input');
        input.setAttribute('type', 'text')
        input.setAttribute('style', 'width: 552px; height: 81px; padding: 20px 21px; font-size: 76px;')
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
        } else {           
            inputElement.setAttribute('style', 'width: 552px; height: 81px; padding: 20px 21px; font-size: 76px;border: 2px solid red');
        }
    }

    setPlayerSkin(name) {
        const universalName = name.toLowerCase();

        switch(universalName) {
            case 'дима':
            case 'дмитрий':
            case 'димас':
            case 'димон':
            case 'димочка':
                this.skinId = 'dimaPlayer'
                return this.imageManager.changeImage('Дима')
            default:
                this.skinId = 'normalPlayer'
                return this.imageManager.changeImage('Имя')
        }
    }

    getSkinId() {
        return this.skinId;
    }

}
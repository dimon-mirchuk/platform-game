export default class ContextManager {
    constructor() {
        //ссылки на объекты контекста
        this.gameContext = null;
        this.managerContext = null;

        //ссылка на объект текущ контекста (один из двух)
        this.activeContext = null;

        this.setupContexts();
    }

    setupContexts() {
        //нода
        this.gameNode = document.getElementById('gameplay');

        if (this.gameNode.getContext('2d')) {

            this.gameContext = this.gameNode.getContext('2d');
            this.gameNode.width = window.innerWidth;
            this.gameNode.height = window.innerHeight;
            this.gameNode.setAttribute('style', 'z-index:0; position:absolute;');
            this.gameContext.fillStyle = "blue";
            this.gameContext.fillRect(0, 0, this.gameNode.width, this.gameNode.height);
            
            this.managerNode = document.getElementById('management');
            this.managerContext = this.managerNode.getContext('2d');
            this.managerNode.width = window.innerWidth;
            this.managerNode.height = window.innerHeight;
            this.managerNode.setAttribute('style', 'z-index:0; position:absolute;');
            this.managerContext.fillStyle = "red";
            this.managerContext.fillRect(0, 0, this.managerNode.width, this.managerNode.height);

            this.activeContext = this.managerContext;
        } 
        else {
            alert('Ваш браузер полный отстой! Установите другой или попробуйте обновить этот :(');
        }
    }

    getGameContext() {
        return this.gameContext;
    }

    getManagerContext() {
        return this.managerContext;
    }

    getActiveContext() {
        return this.activeContext;
    }

    showGameContext() {
        this.gameNode.setAttribute('style', 'z-index:1; position:absolute;');
        this.managerNode.setAttribute('style', 'z-index:0; position:absolute;');

        this.activeContext = this.gameContext;
    }

    showManagerContext() {
        this.gameNode.setAttribute('style', 'z-index:0; position:absolute;');
        this.managerNode.setAttribute('style', 'z-index:1; position:absolute;');

        this.activeContext = this.managerContext;
    }
}



import Game from "./components/Game";

try{
    let newGame = new Game();

    console.log(1, newGame);

    newGame.start();
}
catch(e){
    console.log(e)
}



//let newGame = new Game().start();


// const canvas = document.querySelector('canvas');
// const context = canvas.getContext('2d');
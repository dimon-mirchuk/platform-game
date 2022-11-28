export function addListenersKeyDown(player){
    addEventListener('keydown', ({ code }) => {      
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':
                player.jump();
                console.log('UP');
                break;
            case 'ArrowRight':
            case 'KeyD':
                player.keys.right.pressed = true;
                //player.goRight();
                console.log('RIGHT');
                break;
            case 'ArrowDown':
            case 'KeyS':
                console.log('DOWN');
                break;
            case 'ArrowLeft':
            case 'KeyA':
                player.keys.left.pressed = true;
                console.log('LEFT');
                break;
            case 'Space':
                console.log('JUMP');
                break;
            default:
                console.log(code);
        }
    })
}

export function addListenersKeyUp(player){
    addEventListener('keyup', ({ code }) => {      
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':
                //player.jump();
                console.log('UP');
                break;
            case 'ArrowRight':
            case 'KeyD':
                player.keys.right.pressed = false;
                console.log('RIGHT');
                break;
            case 'ArrowDown':
            case 'KeyS':
                console.log('DOWN');
                break;
            case 'ArrowLeft':
            case 'KeyA':
                player.keys.left.pressed = false;
                console.log('LEFT');
                break;
            case 'Space':
                console.log('JUMP');
                break;
            default:
                console.log(code);
        }
    })
}
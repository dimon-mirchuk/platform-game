export function addListenersKeyDown(player){
    addEventListener('keydown', ({ code }) => {      
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':
                player.jump();
                break;
            case 'ArrowRight':
            case 'KeyD':
                player.keys.right.pressed = true;
                break;
            case 'ArrowDown':
            case 'KeyS':
                console.log('DOWN');
                break;
            case 'ArrowLeft':
            case 'KeyA':
                player.keys.left.pressed = true;
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
                console.log('UP');
                break;
            case 'ArrowRight':
            case 'KeyD':
                player.keys.right.pressed = false;
                break;
            case 'ArrowDown':
            case 'KeyS':
                console.log('DOWN');
                break;
            case 'ArrowLeft':
            case 'KeyA':
                player.keys.left.pressed = false;
                break;
            case 'Space':
                console.log('JUMP');
                break;
            default:
                console.log(code);
        }
    })
}
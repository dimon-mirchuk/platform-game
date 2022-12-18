export function addListenersKeyDown(player){
    addEventListener('keydown', ({ code }) => {      
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':

                player.jump ? 
                player.jump() 
                : null;

                break;
            case 'ArrowRight':
            case 'KeyD':

                player.keys ? 
                player.keys.right.pressed = true 
                : null;

                break;
            case 'ArrowDown':
            case 'KeyS':

                console.log('DOWN');

                break;
            case 'ArrowLeft':
            case 'KeyA':

                player.keys ? 
                player.keys.left.pressed = true
                : null;

                break;
            case 'Space':
                console.log('JUMP');
                break;
            case 'Enter':
                console.log('EEEEEEEEEEESSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTT');
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

                player.keys ? 
                player.keys.right.pressed = false 
                : null;

                break;
            case 'ArrowDown':
            case 'KeyS':

                console.log('DOWN');

                break;
            case 'ArrowLeft':
            case 'KeyA':

                player.keys ? 
                player.keys.left.pressed = false
                : null;
                
                break;
            case 'Space':
                console.log('JUMP');
                break;
            default:
                console.log(code);
        }
    })
}
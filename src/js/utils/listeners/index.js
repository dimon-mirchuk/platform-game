export function addListenersKeyDown(obj){
    addEventListener('keydown', ({ code }) => {      
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':

                obj.jump ? 
                obj.jump() 
                : null;

                break;
            case 'ArrowRight':
            case 'KeyD':

                obj.keys ? 
                obj.keys.right.pressed = true 
                : null;

                break;
            case 'ArrowDown':
            case 'KeyS':

                console.log('DOWN');

                break;
            case 'ArrowLeft':
            case 'KeyA':

                obj.keys ? 
                obj.keys.left.pressed = true
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

export function addListenersKeyUp(obj){
    addEventListener('keyup', ({ code }) => {      
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':

                console.log('UP');

                break;
            case 'ArrowRight':
            case 'KeyD':

                obj.keys ? 
                obj.keys.right.pressed = false 
                : null;

                break;
            case 'ArrowDown':
            case 'KeyS':

                console.log('DOWN');

                break;
            case 'ArrowLeft':
            case 'KeyA':

                obj.keys ? 
                obj.keys.left.pressed = false
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
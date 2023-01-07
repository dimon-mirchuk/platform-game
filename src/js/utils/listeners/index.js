export function addListenersKeyDown(obj, once, kill){

    function check({ code }) {         
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
    }

    if (!kill && once) {
        console.log('на один раз')
        window.addEventListener('keydown', check, {once: true})
    }
    else if (!kill && !once) {
        console.log('на много раз')
        window.addEventListener('keydown', check)
    }
    else if (kill) {
        console.log('убрано :)')
        window.removeEventListener('keydown', check)
    } 

}

export function addListenersKeyUp(obj, once, kill) {

    function check({ code }) { 
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
    }

    if (!kill && once) {
        console.log('на один раз')
        window.addEventListener('keyup', check, {once: true})
    }
    else if (!kill && !once) {
        console.log('на много раз')
        window.addEventListener('keyup', check)
    }
    else if (kill) {
        console.log('убрано :)')
        window.removeEventListener('keyup', check)
    } 
}




// export function addListenersKeyDown(obj, once, kill){
//     addEventListener('keydown', ({ code }) => {      
//         switch(code) {
//             case 'ArrowUp':
//             case 'KeyW':

//                 obj.jump ? 
//                 obj.jump() 
//                 : null;

//                 break;
//             case 'ArrowRight':
//             case 'KeyD':

//                 obj.keys ? 
//                 obj.keys.right.pressed = true 
//                 : null;

//                 break;
//             case 'ArrowDown':
//             case 'KeyS':

//                 console.log('DOWN');

//                 break;
//             case 'ArrowLeft':
//             case 'KeyA':

//                 obj.keys ? 
//                 obj.keys.left.pressed = true
//                 : null;

//                 break;
//             case 'Space':
//                 console.log('JUMP');
//                 break;
//             case 'Enter':
//                 console.log('EEEEEEEEEEESSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTT');
//                 break;
//             default:
//                 console.log(code);
//         }
//     })

//     console.log(id)
// }

// export function addListenersKeyUp(obj){
//     addEventListener('keyup', ({ code }) => {      
//         switch(code) {
//             case 'ArrowUp':
//             case 'KeyW':

//                 console.log('UP');

//                 break;
//             case 'ArrowRight':
//             case 'KeyD':

//                 obj.keys ? 
//                 obj.keys.right.pressed = false 
//                 : null;

//                 break;
//             case 'ArrowDown':
//             case 'KeyS':

//                 console.log('DOWN');

//                 break;
//             case 'ArrowLeft':
//             case 'KeyA':

//                 obj.keys ? 
//                 obj.keys.left.pressed = false
//                 : null;
                
//                 break;
//             case 'Space':
//                 console.log('JUMP');
//                 break;
//             default:
//                 console.log(code);
//         }
//     })
// }
export function addListenersKeyDown(obj, once, kill){
    const check = function ({ code }) {  
    //function check({ code }) {       
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
                break;
            case 'ArrowLeft':
            case 'KeyA':
                obj.keys ? 
                obj.keys.left.pressed = true
                : null;
                break;
            case 'Space':
                break;
            case 'Enter':
                break;
            default:
        }
    }

    if (!kill && once) {
        //console.log('на один раз')
        window.addEventListener('keydown', check, {once: true})
    }
    else if (!kill && !once) {
        //console.log('на много раз')
        window.addEventListener('keydown', check)
    }
    else if (kill) {
        //console.log('убрано :)')
        window.removeEventListener('keydown', check)
    } 

}

export function addListenersKeyUp(obj, once, kill) {

    function check({ code }) { 
        switch(code) {
            case 'ArrowUp':
            case 'KeyW':
                break;
            case 'ArrowRight':
            case 'KeyD':
                obj.keys ? 
                obj.keys.right.pressed = false 
                : null;
                break;
            case 'ArrowDown':
            case 'KeyS':
                break;
            case 'ArrowLeft':
            case 'KeyA':
                obj.keys ? 
                obj.keys.left.pressed = false
                : null;          
                break;
            case 'Space':
                if (obj.contextManager){
                    console.log('_______', obj.stats.lvl)
                    if (obj.contextManager.getActiveContext().canvas.id === 'management' && obj.intro){
                        obj.levelup();
                        obj.startIntro();
                    } else if (!obj.intro) {
                        obj.levelup();
                        obj.startNewLevel();
                    }
                    console.log('_______', obj.stats.lvl)
                }
                break;
            default:
        }
    }

    if (!kill && once) {
        window.addEventListener('keyup', check, {once: true})
    }
    else if (!kill && !once) {
        window.addEventListener('keyup', check)
    }
    else if (kill) {
        window.removeEventListener('keyup', check)
    } 
}

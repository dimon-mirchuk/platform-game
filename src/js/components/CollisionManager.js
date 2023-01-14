// export default class CollisionManager {
//     constructor() {
//         this.nearest = [];
//     }

//     //setData(player, platforms, depression, bugs, finish, hw) {
//     setData(player, platforms) {

//         this.player = player;
//         this.platforms = platforms;
//     }

//     findNearest() {
//         this.nearest = [];

//         this.platforms.forEach(( element ) => {
//             if (this.player.position.x + this.player.width >= element.position.x &&
//                 !(this.player.position.x > element.position.x + element.width)) {
//                 this.nearest.push(element);
//             }

//         })
//     }

//     checkPlatformCollision() { 
//         this.findNearest(this.platforms);

//         console.log(this.nearest)

//         this.nearest.forEach(( element ) => {

//             console.log('ЗАШЛИ')
//             // касается сверху ???
//             if (this.player.position.y === element.position.y + element.height) {
//                 console.log('________веерх')
//             }

//             // касается справа 
//             if (this.player.position.x + this.player.width === element.position.x) {
//                 //if (this.player.keys.right.pressed && element.position.y + element.height >= this.player.position.y) {
//                 if (this.player.keys.right.pressed) {
//                     this.player.setVelocityRatio(0);
                    

//                 }
//                 else {
//                     this.player.setVelocityRatio(5);

//                 }

//                 console.log('________справа ')
//             }

//             // касается снизу
//             if (this.player.position.y + this.player.height + 5 <= element.position.y) {
//                 this.player.horizon = element.position.y;
//                 console.log('________снизу ')
//             }

//             // касается слева
//             if (this.player.position.x  === element.position.x + element.width) {
//                 if (this.player.keys.left.pressed) {
//                     this.player.setVelocityRatio(0);

//                 }
//                 else {
//                     this.player.setVelocityRatio(5);

//                 }
//                 console.log('________сktdf ')
//             }

//         })

//     }

//     handleCollision() {

//     }
// }






//Работает (можно отключить)


export default class CollisionManager {
    constructor() {
        this.nearest = [];
    }

    //setData(player, platforms, depression, bugs, finish, hw) {
    setData(player, platforms, bugs, depression, collectable) {

        this.player = player;
        this.platforms = platforms;
        this.bugs = bugs;
        this.depression = depression;
        this.collectable = collectable;

    }

    findNearest(arr) {
        this.nearest = [];

        arr.forEach(( element ) => {
            if (this.player.position.x + this.player.width >= element.position.x &&
                !(this.player.position.x > element.position.x + element.width)) {
                this.nearest.push(element);
            }

        })
    }

    checkPlatformCollision(velocityRatio = 5) { 
        this.findNearest(this.platforms);

        if (this.nearest.length > 0) {

            this.nearest.forEach(( element ) => {

                if (element.position.y + velocityRatio < this.player.position.y + this.player.height && element.position.x > this.player.position.x ) {
                        console.log(1)
                    if (this.player.keys.right.pressed && element.position.y + element.height >= this.player.position.y) {
                        this.player.setVelocityRatio(0);
                        console.log(2)
                    }
                    else if(!this.player.keys.right.pressed) {
                        this.player.setVelocityRatio(this.player.prevVelocityRatio);
                        console.log(3)
                    }
                    

                } else if (element.position.y + velocityRatio < this.player.position.y + this.player.height && element.position.x < this.player.position.x ) {
                    console.log(4)
                    if (this.player.keys.left.pressed && element.position.y + element.height >= this.player.position.y) {
                        this.player.setVelocityRatio(0);
                        console.log(5)
                    }
                    else if(!this.player.keys.left.pressed) {
                        this.player.setVelocityRatio(this.player.prevVelocityRatio);
                        console.log(6)
                    }
                } 
                else {
                    console.log(8)
                    this.player.setVelocityRatio(velocityRatio);
                    this.player.horizon = element.position.y;
                } 


            })  
        }

        if (this.nearest.length === 0) {
            this.player.horizon = this.player.context.canvas.height + 500; 
        }

    }

    checkBugCollision() {
        this.findNearest(this.bugs);

        //console.log('this.nearest',this.nearest)

        if (this.nearest.length > 0) {

            this.nearest.forEach(( element ) => {
                // console.log('this.player.position.y',this.player.position.y)
                // console.log('element.position.y', element.position.y)
                // console.log('this.nearest', this.nearest)

                //if (this.player.position.y + this.player.height == element.position.y) {
                if (this.player.position.y + this.player.height - element.position.y <= 80  && this.player.position.y + this.player.height - element.position.y >= 60) {
                    // console.log('element.killed', element.killed)
                    // console.log('element',element)

                    //this.player.horizon = element.position.y;
                    //console.log('____________________________this.player.position.y',this.player.position.y, this.player.height)
                    //console.log('_________________________________element.position.y', element.position.y)
                    //console.log('this.player.position.y + this.player.height - element.position.y', this.player.position.y + this.player.height - element.position.y)

                    this.player.horizon = element.position.y;
                    this.player.doubleJump(true, 5)

                    element.killed = true;

                    this.player.fixBug();

                    this.player.horizon = this.player.context.canvas.height;

                    

                    // console.log('element.killed',element.killed)
                    //this.player.bounce();

                    //this.player.doubleJump(true, this.player.position.y + this.player.height);this.player
                    // this.player.gravity = 0; 
                    // this.player.stopY();
                    // this.player.jump();
                    //this.player.fixBug();
                    //this.player.gravity = 0.5; 
                    // console.log('this.player.bugsFixed', this.player.bugsFixed)

                    //console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||')
                }else {
                    //console.log('я туууууууууууууууууууут')
                }
            }) 
            
        }

    }

    checkDepressionCollision() {
        if (this.depression.position.x + this.depression.width >= this.player.position.x) {
            this.player.die()
        }
    }

    checkCollectableCollision() {

        this.findNearest(this.collectable);

        //console.log('this.nearest', this.nearest)

        if (this.nearest.length > 0) {
            this.nearest.forEach(( element ) => {
                if (element.finish) {
                    this.player.winLevel();
                }

                if ((this.player.position.y <= element.position.y && element.position.y <= this.player.position.y + this.player.height)||
                (this.player.position.y <= element.position.y + element.height && element.position.y + element.height <= this.player.position.y + this.player.hight)) {

                    element.beCollected();

                    const prevV = this.player.getVelocityRatio();
                    this.player.setVelocityRatio(prevV + 3);
                    
                } 
            })
        }
    }
}
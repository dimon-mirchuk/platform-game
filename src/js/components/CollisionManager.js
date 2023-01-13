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
    setData(player, platforms) {

        this.player = player;
        this.platforms = platforms;
    }

    findNearest() {
        this.nearest = [];

        this.platforms.forEach(( element ) => {
            if (this.player.position.x + this.player.width >= element.position.x &&
                !(this.player.position.x > element.position.x + element.width)) {
                this.nearest.push(element);
            }

        })
    }

    checkPlatformCollision() { 
        this.findNearest(this.platforms);

        this.nearest.forEach(( element ) => {

            if (element.position.y + 5 < this.player.position.y + this.player.height && element.position.x > this.player.position.x ) {
                    console.log(1)
                if (this.player.keys.right.pressed && element.position.y + element.height >= this.player.position.y) {
                    this.player.setVelocityRatio(0);
                    console.log(2)
                }
                else {
                    this.player.setVelocityRatio(5);
                    console.log(3)
                }
                

            } else if (element.position.y + 5 < this.player.position.y + this.player.height && element.position.x < this.player.position.x ) {
                console.log(4)
                if (this.player.keys.left.pressed && element.position.y + element.height >= this.player.position.y) {
                    this.player.setVelocityRatio(0);
                    console.log(5)
                }
                else {
                    this.player.setVelocityRatio(5);
                    console.log(6)
                }
            } 
            // else if (this.player.position.x + this.player.width > element.position.x && this.player.position.x < element.position.x + element.width && this.player.position.y === element.position.y + element.height) {
            //     console.log(7)
            //     this.player.die()
            // }
            else {
                console.log(8)
                this.player.setVelocityRatio(5);
                this.player.horizon = element.position.y;
            } 


        })  

        if (this.nearest.length === 0) {
            this.player.horizon = this.player.context.canvas.height + 500; 
        }

    }

    handleCollision() {

    }
}

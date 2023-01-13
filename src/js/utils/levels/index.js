export const PlatformMap = {
    3: [{x: 100, y: 800, name: "tile1", w: 200, h: 200},{x: 200, y: 800, name: "tile1", w: 3000, h: 200}, {x: 1200, y: 600, name: "tile1", w: 200, h: 200},{x: 1800, y: 0, name: "tile1", w: 200, h: 200},],
    5: [{x: 400, y: 300, url: "tile2"}, {x: 400, y: 100, url: "tile2"}, {x: 400, y: 500, url: "tile2"}],
    8: [{x: 0, y: 100, url: "tile1"}, {x: 0, y: 200, url: "tile2"}, {x: 0, y: 300, url: "tile1"}],
    9: [{x: 200, y: 100, url: "tile2"}, {x: 300, y: 200, url: "tile2"}, {x: 400, y: 300, url: "tile1"}],

};

export const BugsMap = {
    3: [ {x: 100, y: 560, name: "bug", magnet: 100}],
    //{x: 800, y: 600, name: "bug"},
};

export const BoosterMap = {
    0: [{},{},{}],
    
};

export const ConditionMap = {
    3: 30,
    5: 10,
    8: 20,
    9: 3
};

export const introData = {
    0: { srcName: 'intro0'},
    1: { srcName: 'intro1', input: true },
    2: { srcName: 'intro2'},
    3: {},
    4: { srcName: 'intro4'},
    5: {},
    6: { srcName: 'intro6'},
    7: { srcName: 'intro7'},
    8: { introDone: true },
    9: {},
    10: {finish: true},
    11: {},
};



// if (this.player.keys.right.pressed) {

//     this.platforms.forEach(( element ) => {

//         if (element.position.x - this.player.width === 800 && element.position.y <= this.player.position.y + this.player.height) {

//             if (element.position.y <= this.player.position.y + this.player.height && ) {
//                 this.player.stopY();
//             } 
            
//             this.player.setVelocityRatio(0);
//         }

        
//         // else if () {

//         // }

//     })


// } 
export const PlatformMap = {
    3: [{x: 200, y: 100, name: "tile1"}, {x: 300, y: 200, name: "tile2"}, {x: 400, y: 300, name: "tile1"}],
    5: [{x: 400, y: 300, url: "tile2"}, {x: 400, y: 100, url: "tile2"}, {x: 400, y: 500, url: "tile2"}],
    8: [{x: 0, y: 100, url: "tile1"}, {x: 0, y: 200, url: "tile2"}, {x: 0, y: 300, url: "tile1"}],
    9: [{x: 200, y: 100, url: "tile2"}, {x: 300, y: 200, url: "tile2"}, {x: 400, y: 300, url: "tile1"}],

};

export const EnemyMap = {
    0: [{},{},{}],
    
};

export const BoosterMap = {
    0: [{},{},{}],
    
};

export const ConditionMap = {
    3: 3,
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
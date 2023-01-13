export const PlatformMap = {
    3: [{x: 100, y: 800, name: "tile1", w: 200, h: 200},{x: 0, y: 800, name: "tile1", w: 5000, h: 200}, {x: 1200, y: 600, name: "tile1", w: 200, h: 200},{x: 1800, y: 0, name: "tile1", w: 200, h: 200},],
    5: [{x: 400, y: 300, url: "tile2"}, {x: 400, y: 100, url: "tile2"}, {x: 400, y: 500, url: "tile2"}],
    8: [{x: 0, y: 100, url: "tile1"}, {x: 0, y: 200, url: "tile2"}, {x: 0, y: 300, url: "tile1"}],
    9: [{x: 200, y: 100, url: "tile2"}, {x: 300, y: 200, url: "tile2"}, {x: 400, y: 300, url: "tile1"}],

};

export const BugsMap = {
    3: [ {x: 100, y: 560, name: "bug", magnet: 100}],
    5: [ {x: 100, y: 560, name: "bug", magnet: 100}],
    8: [ {x: 100, y: 560, name: "bug", magnet: 100}],
    9: [ {x: 100, y: 560, name: "bug", magnet: 100}],

};

export const BoosterMap = {
    3: [{x: 100, y: 300, w: 70, h: 100, name: "lafore", finish: false},{x: 500, y: 700, w: 70, h: 100, name: "lafore", finish: false},{x: 1200, y: 400, w: 70, h: 100, name: "lafore", finish: false}, ],
    5: [{x: 400, y: 300, url: "tile2"}, {x: 400, y: 100, url: "tile2"}, {x: 400, y: 500, url: "tile2"}],
    8: [{x: 0, y: 100, url: "tile1"}, {x: 0, y: 200, url: "tile2"}, {x: 0, y: 300, url: "tile1"}],
    9: [{x: 200, y: 100, url: "tile2"}, {x: 300, y: 200, url: "tile2"}, {x: 400, y: 300, url: "tile1"}],
    
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

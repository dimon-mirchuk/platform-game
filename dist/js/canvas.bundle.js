/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/player/normalPlayer.png":
/*!*****************************************!*\
  !*** ./src/img/player/normalPlayer.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "115ce22ca5d749ba67a1a75d87e4d7df.png");

/***/ }),

/***/ "./src/img/surface/default/tile01.png":
/*!********************************************!*\
  !*** ./src/img/surface/default/tile01.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "27bc0f442bd71760b9a4681459f647aa.png");

/***/ }),

/***/ "./src/img/surface/default/tile02.png":
/*!********************************************!*\
  !*** ./src/img/surface/default/tile02.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2b2853e7885e7d8ad524a629af838530.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Game */ "./src/js/components/Game.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Player */ "./src/js/components/Player.js");
/* harmony import */ var _components_Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Controller */ "./src/js/components/Controller.js");
/* harmony import */ var _components_ContextManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ContextManager */ "./src/js/components/ContextManager.js");
/* harmony import */ var _utils_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/listeners */ "./src/js/utils/listeners/index.js");






var currentGame = new _components_Game__WEBPACK_IMPORTED_MODULE_0__["default"](_components_Player__WEBPACK_IMPORTED_MODULE_1__["default"], _components_Controller__WEBPACK_IMPORTED_MODULE_2__["default"], _components_ContextManager__WEBPACK_IMPORTED_MODULE_3__["default"], _utils_listeners__WEBPACK_IMPORTED_MODULE_4__["addListenersKeyUp"], _utils_listeners__WEBPACK_IMPORTED_MODULE_4__["addListenersKeyDown"]);

/***/ }),

/***/ "./src/js/components/ContextManager.js":
/*!*********************************************!*\
  !*** ./src/js/components/ContextManager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var ContextManager = /*#__PURE__*/function () {
  function ContextManager() {
    _classCallCheck(this, ContextManager);
    //ссылки на объекты контекста
    this.gameContext = null;
    this.managerContext = null;

    //ссылка на объект текущ контекста (один из двух)
    this.activeContext = null;
    this.setupContexts();
  }
  _createClass(ContextManager, [{
    key: "setupContexts",
    value: function setupContexts() {
      //нода
      this.gameNode = document.getElementById('gameplay');
      if (this.gameNode.getContext('2d')) {
        this.gameContext = this.gameNode.getContext('2d');
        this.gameNode.width = window.innerWidth;
        this.gameNode.height = window.innerHeight;
        this.gameNode.setAttribute('style', 'z-index:0; position:absolute;');
        this.gameContext.fillStyle = "blue";
        this.gameContext.fillRect(0, 0, this.gameNode.width, this.gameNode.height);
        this.managerNode = document.getElementById('management');
        this.managerContext = this.managerNode.getContext('2d');
        this.managerNode.width = window.innerWidth;
        this.managerNode.height = window.innerHeight;
        this.managerNode.setAttribute('style', 'z-index:0; position:absolute;');
        this.managerContext.fillStyle = "red";
        this.managerContext.fillRect(0, 0, this.managerNode.width, this.managerNode.height);
        this.activeContext = this.managerContext;
      } else {
        alert('Ваш браузер полный отстой! Установите другой или попробуйте обновить этот :(');
      }
    }
  }, {
    key: "getGameContext",
    value: function getGameContext() {
      return this.gameContext;
    }
  }, {
    key: "getManagerContext",
    value: function getManagerContext() {
      return this.managerContext;
    }
  }, {
    key: "getActiveContext",
    value: function getActiveContext() {
      return this.activeContext;
    }
  }, {
    key: "showGameContext",
    value: function showGameContext() {
      this.gameNode.setAttribute('style', 'z-index:1; position:absolute;');
      this.managerNode.setAttribute('style', 'z-index:0; position:absolute;');
      this.activeContext = this.gameContext;
    }
  }, {
    key: "showManagerContext",
    value: function showManagerContext() {
      this.gameNode.setAttribute('style', 'z-index:0; position:absolute;');
      this.managerNode.setAttribute('style', 'z-index:1; position:absolute;');
      this.activeContext = this.managerContext;
    }
  }]);
  return ContextManager;
}();


/***/ }),

/***/ "./src/js/components/Controller.js":
/*!*****************************************!*\
  !*** ./src/js/components/Controller.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Controller = /*#__PURE__*/function () {
  function Controller(context) {
    _classCallCheck(this, Controller);
    this.context = context;
    this.lvl = 0;
    this.currAnimId = null;
  }
  _createClass(Controller, [{
    key: "animate",
    value: function animate(args, currLvl) {
      if (this.lvl !== currLvl) {
        this.lvl = currLvl;
        cancelAnimationFrame(this.currAnimId);
      }
      this.currAnimId = requestAnimationFrame(this.animate.bind(this, args));
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      args.forEach(function (el) {
        return el.animate();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.currAnimId) {
        cancelAnimationFrame(this.currAnimId);
      }
    }
  }]);
  return Controller;
}();


/***/ }),

/***/ "./src/js/components/Game.js":
/*!***********************************!*\
  !*** ./src/js/components/Game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform */ "./src/js/components/Platform.js");
/* harmony import */ var _utils_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/levels */ "./src/js/utils/levels/index.js");
/* harmony import */ var _img_player_normalPlayer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/player/normalPlayer.png */ "./src/img/player/normalPlayer.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var introData = {
  0: {
    context: false,
    srcName: 'intro1'
  },
  1: {
    context: false,
    srcName: 'intro2',
    input: true
  },
  2: {
    context: false,
    srcName: 'intro3'
  },
  3: {
    context: true
  },
  4: {
    context: false,
    srcName: 'intro4'
  },
  5: {
    context: true
  },
  6: {
    context: false,
    srcName: 'intro5'
  },
  7: {
    context: false,
    srcName: 'intro6'
  },
  8: {
    context: true
  },
  9: {
    context: true
  },
  10: {
    context: true
  },
  11: {
    context: true
  }
};
var Game = /*#__PURE__*/function () {
  function Game(player, controller, contextManager, listenerUp, listenerDown) {
    _classCallCheck(this, Game);
    this.player = player;
    this.controller = controller;
    this.contextManager = contextManager;
    this.listenUp = listenerUp;
    this.listenDown = listenerDown;
    this.gameContext = null;
    this.stats = {
      name: undefined,
      gravity: 0.5,
      lvl: 0
    };

    //this.startIntroduction();
    //this.setup();

    this.test();
  }
  _createClass(Game, [{
    key: "test",
    value: function test() {
      this.contextManager = new this.contextManager();
      this.gameContext = this.contextManager.getGameContext();
      this.run();
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;
      this.player = new this.player(this.gameContext, this.stats.gravity, this.winLevel.bind(this), _img_player_normalPlayer_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
      this.controller = new this.controller(this.gameContext);
      this.sprites = [this.player.getSprite()];
      this.listenDown(this.player, false, false);
      this.listenUp(this.player, false, false);
      this.contextManager.showGameContext();
      this.stats.lvl = 3;
      this.startNewLevel();
      setTimeout(function () {
        _this.listenDown(_this.player, false, true);
        _this.listenUp(_this.player, false, true);
      }, 5000);
    }
  }, {
    key: "startIntroduction",
    value: function startIntroduction() {

      // const image = document.createElement('img');
      // image.src  = startImage;
      // image.setAttribute('width', '1280px');
      // image.setAttribute('height', '720px');
      // image.setAttribute('position', 'absolute');
      // image.setAttribute('top', '20%');
      // image.setAttribute('left', '20%');

      // document.getElementById('body').setAttribute('margin', '0 auto');
      // document.getElementById('body').appendChild(image);
      // const listenerID = this.listenDown(this);
    }
  }, {
    key: "setup",
    value: function setup() {
      //const canvas = document.querySelector('canvas');
      // const canvas = document.getElementById('gameplay');
      // this.context = canvas.getContext('2d');

      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;

      //спросить имя и дать бусты андрею и диме
      //this.stats.name = prompt('Как вас зовут?')
      //alert(this.stats.name)

      //вывести правила 
      //...

      this.player = new this.player(this.gameContext, this.stats.gravity, this.winLevel.bind(this), _img_player_normalPlayer_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
      this.controller = new this.controller(this.gameContext);
      //
      //здесь должен быть вызов this.setupSprites()
      this.sprites = [this.player.getSprite()];
      this.listenDown(this.player);
      this.listenUp(this.player);

      //this.start();

      //=======
      // this.context2 = canvas.getContext('2d');
      // const emg = new Image();
      // emg.src = startImage;
      // this.context2.drawImage(startImage, window.innerWidth, window.innerHeight)
    }
  }, {
    key: "start",
    value: function start() {
      // это уже последний или еще нет?
      this.startNewLevel();
    }
  }, {
    key: "startNewLevel",
    value: function startNewLevel() {
      var _this2 = this;
      this.player.setLevelConditions(_utils_levels__WEBPACK_IMPORTED_MODULE_1__["ConditionMap"][this.stats.lvl]);
      var platforms = _utils_levels__WEBPACK_IMPORTED_MODULE_1__["PlatformMap"][this.stats.lvl].map(function (element) {
        return new _Platform__WEBPACK_IMPORTED_MODULE_0__["default"](_this2.gameContext, element.x, element.y, element.name);
      });
      this.controller.animate([this.player].concat(_toConsumableArray(platforms), _toConsumableArray(this.sprites)), this.stats.lvl);
    }
  }, {
    key: "winLevel",
    value: function winLevel() {
      // поздравления
      // ...

      // плюс уровень
      this.stats.lvl = this.stats.lvl + 1;
      console.log('level', this.stats.lvl);

      // повторить сначала
      this.start();
    }
  }, {
    key: "winGame",
    value: function winGame() {
      // финальные поздравления
      // конец
    }
  }, {
    key: "lose",
    value: function lose() {
      // предложить попробовать еще раз

      // если да
      // повторить сначала
      this.start();

      // если нет
      // утешение)
    }
  }, {
    key: "setupSprites",
    value: function setupSprites() {
      //вынести логику по спрайтам
    }
  }]);
  return Game;
}();


/***/ }),

/***/ "./src/js/components/Platform.js":
/*!***************************************!*\
  !*** ./src/js/components/Platform.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
/* harmony import */ var _img_surface_default_tile01_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/surface/default/tile01.png */ "./src/img/surface/default/tile01.png");
/* harmony import */ var _img_surface_default_tile02_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/surface/default/tile02.png */ "./src/img/surface/default/tile02.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var Platform = /*#__PURE__*/function () {
  function Platform(context, x, y, name) {
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.context = context;
    this.name = name;
    this.width = 270;
    this.height = 270;
    this.start();
  }
  _createClass(Platform, [{
    key: "start",
    value: function start() {
      this.image = new Image();
      this.changeDecor();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;
      if (this.image.complete) {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      } else {
        this.image.onload = function () {
          _this.context.drawImage(_this.image, _this.position.x, _this.position.y, _this.width, _this.height);
        };
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.draw();
    }
  }, {
    key: "changeDecor",
    value: function changeDecor() {
      switch (this.name) {
        case 'tile1':
          this.image.src = _img_surface_default_tile01_png__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;
        case 'tile2':
          this.image.src = _img_surface_default_tile02_png__WEBPACK_IMPORTED_MODULE_1__["default"];
          break;
        default:
          this.image.src = _img_surface_default_tile01_png__WEBPACK_IMPORTED_MODULE_0__["default"];
      }
    }
  }]);
  return Platform;
}();


/***/ }),

/***/ "./src/js/components/Player.js":
/*!*************************************!*\
  !*** ./src/js/components/Player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ "./src/js/components/Sprite.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(context, gravity, winCallback, url) {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.keys = {
      right: {
        pressed: false
      },
      left: {
        pressed: false
      }
    };
    this.width = 240;
    this.height = 240;
    this.awaited = 0;
    this.activated = 0;
    this.context = context;
    this.gravity = gravity;
    this.winCallback = winCallback;
    this.spriteUrl = url;
    this.start();
  }
  _createClass(Player, [{
    key: "start",
    value: function start() {
      var img = new Image();
      img.src = this.spriteUrl;
      this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, img, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }
  }, {
    key: "update",
    value: function update() {
      this.sprite.update();
      this.sprite.updatePosition(this.position.x, this.position.y);
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= this.context.canvas.height) {
        this.velocity.y += this.gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.update();
      if (this.keys.left.pressed) {
        this.goLeft();
      } else if (this.keys.right.pressed) {
        this.goRight();
      } else this.stop();
    }
  }, {
    key: "jump",
    value: function jump() {
      var jumpCondition = this.velocity.y === 0 && this.position.y + this.height + this.velocity.y >= this.context.canvas.height;
      if (jumpCondition) {
        this.velocity.y -= 15;
      }
      this.activate();
    }
  }, {
    key: "goLeft",
    value: function goLeft() {
      this.velocity.x = -5;
    }
  }, {
    key: "goRight",
    value: function goRight() {
      this.velocity.x = 5;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.velocity.x = 0;
    }
  }, {
    key: "activate",
    value: function activate() {
      this.activated = this.activated + 1;
      if (this.awaited === this.activated) {
        this.winCallback();
      }
    }
  }, {
    key: "setLevelConditions",
    value: function setLevelConditions(awaited) {
      this.activated = 0;
      this.awaited = awaited;
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      return this.sprite.get();
    }
  }]);
  return Player;
}();


/***/ }),

/***/ "./src/js/components/Sprite.js":
/*!*************************************!*\
  !*** ./src/js/components/Sprite.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Sprite = /*#__PURE__*/function () {
  function Sprite(context, image, ticksPerFrame, numberOfFrames, width, height, positionX, positionY, ratio) {
    _classCallCheck(this, Sprite);
    this.context = context;
    this.image = image;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = ticksPerFrame || 0;
    this.numberOfFrames = numberOfFrames || 1;
    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;
    this.ratio = ratio;
  }
  _createClass(Sprite, [{
    key: "update",
    value: function update() {
      this.tickCount++;
      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;
        if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex++;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.update();
      this.context.drawImage(this.image, this.ratio * this.frameIndex, 0, this.ratio, this.ratio, this.positionX, this.positionY, this.width, this.height);
    }
  }, {
    key: "get",
    value: function get() {
      return this;
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(posX, posY) {
      this.positionX = posX;
      this.positionY = posY;
    }
  }, {
    key: "updateImage",
    value: function updateImage(newImage) {
      this.image = newImage;
    }
  }]);
  return Sprite;
}();


/***/ }),

/***/ "./src/js/utils/levels/index.js":
/*!**************************************!*\
  !*** ./src/js/utils/levels/index.js ***!
  \**************************************/
/*! exports provided: PlatformMap, EnemyMap, BoosterMap, ConditionMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformMap", function() { return PlatformMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyMap", function() { return EnemyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoosterMap", function() { return BoosterMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionMap", function() { return ConditionMap; });
var PlatformMap = {
  3: [{
    x: 200,
    y: 100,
    name: "tile1"
  }, {
    x: 300,
    y: 200,
    name: "tile2"
  }, {
    x: 400,
    y: 300,
    name: "tile1"
  }],
  5: [{
    x: 400,
    y: 300,
    url: "tile2"
  }, {
    x: 400,
    y: 100,
    url: "tile2"
  }, {
    x: 400,
    y: 500,
    url: "tile2"
  }],
  8: [{
    x: 0,
    y: 100,
    url: "tile1"
  }, {
    x: 0,
    y: 200,
    url: "tile2"
  }, {
    x: 0,
    y: 300,
    url: "tile1"
  }],
  9: [{
    x: 200,
    y: 100,
    url: "tile2"
  }, {
    x: 300,
    y: 200,
    url: "tile2"
  }, {
    x: 400,
    y: 300,
    url: "tile1"
  }]
};
var EnemyMap = {
  0: [{}, {}, {}]
};
var BoosterMap = {
  0: [{}, {}, {}]
};
var ConditionMap = {
  3: 3,
  5: 10,
  8: 20
};

/***/ }),

/***/ "./src/js/utils/listeners/index.js":
/*!*****************************************!*\
  !*** ./src/js/utils/listeners/index.js ***!
  \*****************************************/
/*! exports provided: addListenersKeyDown, addListenersKeyUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListenersKeyDown", function() { return addListenersKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListenersKeyUp", function() { return addListenersKeyUp; });
function addListenersKeyDown(obj, once, kill) {
  function check(_ref) {
    var code = _ref.code;
    switch (code) {
      case 'ArrowUp':
      case 'KeyW':
        obj.jump ? obj.jump() : null;
        break;
      case 'ArrowRight':
      case 'KeyD':
        obj.keys ? obj.keys.right.pressed = true : null;
        break;
      case 'ArrowDown':
      case 'KeyS':
        console.log('DOWN');
        break;
      case 'ArrowLeft':
      case 'KeyA':
        obj.keys ? obj.keys.left.pressed = true : null;
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
    console.log('на один раз');
    window.addEventListener('keydown', check, {
      once: true
    });
  } else if (!kill && !once) {
    console.log('на много раз');
    window.addEventListener('keydown', check);
  } else if (kill) {
    console.log('убрано :)');
    window.removeEventListener('keydown', check);
  }
}
function addListenersKeyUp(obj, once, kill) {
  function check(_ref2) {
    var code = _ref2.code;
    switch (code) {
      case 'ArrowUp':
      case 'KeyW':
        console.log('UP');
        break;
      case 'ArrowRight':
      case 'KeyD':
        obj.keys ? obj.keys.right.pressed = false : null;
        break;
      case 'ArrowDown':
      case 'KeyS':
        console.log('DOWN');
        break;
      case 'ArrowLeft':
      case 'KeyA':
        obj.keys ? obj.keys.left.pressed = false : null;
        break;
      case 'Space':
        console.log('JUMP');
        break;
      default:
        console.log(code);
    }
  }
  if (!kill && once) {
    console.log('на один раз');
    window.addEventListener('keyup', check, {
      once: true
    });
  } else if (!kill && !once) {
    console.log('на много раз');
    window.addEventListener('keyup', check);
  } else if (kill) {
    console.log('убрано :)');
    window.removeEventListener('keyup', check);
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

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
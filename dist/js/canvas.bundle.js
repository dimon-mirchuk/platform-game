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

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82be28fdb9782baa37f05ac62415dc67.png");

/***/ }),

/***/ "./src/img/collectable/deadline.png":
/*!******************************************!*\
  !*** ./src/img/collectable/deadline.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f17908a1053119c17be35641bb5abf95.png");

/***/ }),

/***/ "./src/img/collectable/lafore.png":
/*!****************************************!*\
  !*** ./src/img/collectable/lafore.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "50b3aa617838831d6dcfb9a8f99abaf4.png");

/***/ }),

/***/ "./src/img/creatures/bug.png":
/*!***********************************!*\
  !*** ./src/img/creatures/bug.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dbe21763294f170a733d914e7dcdbb2f.png");

/***/ }),

/***/ "./src/img/creatures/bugL.png":
/*!************************************!*\
  !*** ./src/img/creatures/bugL.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "85bd8ad81260bf03a646f04868504386.png");

/***/ }),

/***/ "./src/img/creatures/deadBug.png":
/*!***************************************!*\
  !*** ./src/img/creatures/deadBug.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "34aedc9680efee8a09e313b2b8afda5b.png");

/***/ }),

/***/ "./src/img/creatures/depression.png":
/*!******************************************!*\
  !*** ./src/img/creatures/depression.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2ecf4577b4ec810968719eece269de3d.png");

/***/ }),

/***/ "./src/img/intro/intro1.png":
/*!**********************************!*\
  !*** ./src/img/intro/intro1.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d3347997970e24c5555977e94b508c8d.png");

/***/ }),

/***/ "./src/img/intro/intro2.png":
/*!**********************************!*\
  !*** ./src/img/intro/intro2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9fec4c0c34305e8384db34cbe662a16.png");

/***/ }),

/***/ "./src/img/intro/intro3.png":
/*!**********************************!*\
  !*** ./src/img/intro/intro3.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9a3746a8fdacd6cedc7f42d0b0968e45.png");

/***/ }),

/***/ "./src/img/intro/intro5.png":
/*!**********************************!*\
  !*** ./src/img/intro/intro5.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b6faafa67bac44a8057325626d38f881.png");

/***/ }),

/***/ "./src/img/intro/nevergiveup.png":
/*!***************************************!*\
  !*** ./src/img/intro/nevergiveup.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a1a6fde196eb029c0900477cfe8aa8b3.png");

/***/ }),

/***/ "./src/img/intro/wingame.png":
/*!***********************************!*\
  !*** ./src/img/intro/wingame.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7ece00cbf98ce909d3befef6df1b0b41.png");

/***/ }),

/***/ "./src/img/intro/winlevel.png":
/*!************************************!*\
  !*** ./src/img/intro/winlevel.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8cf6a6b61afdf3045094febeb31a21d6.png");

/***/ }),

/***/ "./src/img/player/dimaPlayerL.png":
/*!****************************************!*\
  !*** ./src/img/player/dimaPlayerL.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "674b1fdd21ace2b669f62db73df23cf9.png");

/***/ }),

/***/ "./src/img/player/dimaPlayerR.png":
/*!****************************************!*\
  !*** ./src/img/player/dimaPlayerR.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ccb5a89387071fe1dfb8f42b4f2f63c1.png");

/***/ }),

/***/ "./src/img/player/normalPlayerL.png":
/*!******************************************!*\
  !*** ./src/img/player/normalPlayerL.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c69a875858b87424222616e6d8563549.png");

/***/ }),

/***/ "./src/img/player/normalPlayerR.png":
/*!******************************************!*\
  !*** ./src/img/player/normalPlayerR.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "749d4df5acc6df96479e6040ef2363cc.png");

/***/ }),

/***/ "./src/img/surface/default/tile01.png":
/*!********************************************!*\
  !*** ./src/img/surface/default/tile01.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e599983cf8d0fa0a3cc0b6a021798505.png");

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
/* harmony import */ var _components_ImageManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageManager */ "./src/js/components/ImageManager.js");
/* harmony import */ var _components_EventManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EventManager */ "./src/js/components/EventManager.js");
/* harmony import */ var _components_PlayerCustomizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PlayerCustomizer */ "./src/js/components/PlayerCustomizer.js");
/* harmony import */ var _components_Depression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Depression */ "./src/js/components/Depression.js");
/* harmony import */ var _components_CollisionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CollisionManager */ "./src/js/components/CollisionManager.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Menu */ "./src/js/components/Menu.js");










var currentGame = new _components_Game__WEBPACK_IMPORTED_MODULE_0__["default"](_components_Player__WEBPACK_IMPORTED_MODULE_1__["default"], _components_PlayerCustomizer__WEBPACK_IMPORTED_MODULE_6__["default"], _components_Controller__WEBPACK_IMPORTED_MODULE_2__["default"], _components_ContextManager__WEBPACK_IMPORTED_MODULE_3__["default"], _components_ImageManager__WEBPACK_IMPORTED_MODULE_4__["default"], _components_EventManager__WEBPACK_IMPORTED_MODULE_5__["default"], _components_Depression__WEBPACK_IMPORTED_MODULE_7__["default"], _components_CollisionManager__WEBPACK_IMPORTED_MODULE_8__["default"], _components_Menu__WEBPACK_IMPORTED_MODULE_9__["default"]);

/***/ }),

/***/ "./src/js/components/Bug.js":
/*!**********************************!*\
  !*** ./src/js/components/Bug.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bug; });
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ "./src/js/components/Sprite.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bug = /*#__PURE__*/function () {
  function Bug(context, x, y, img, skinId, magnet, gravity, imageManager) {
    _classCallCheck(this, Bug);

    this.position = {
      x: x,
      y: y
    };
    this.width = 240;
    this.height = 240;
    this.gravity = gravity;
    this.context = context;
    this.spriteImg = img;
    this.velocity = {
      x: 3,
      y: 0
    };
    this.skinId = skinId;
    this.path = 0;
    this.magnet = magnet;
    this.magnet2 = this.magnet;
    this.killed = false;
    this.imageManager = imageManager;
    this.start();
  }

  _createClass(Bug, [{
    key: "start",
    value: function start() {
      this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.path !== this.magnet && this.path > this.magnet) {
        this.path = this.path - 1;
        this.goLeft();
      } else {
        this.magnet = this.magnet2;
      }

      if (this.path !== this.magnet && this.path < this.magnet) {
        this.path = this.path + 1;
        this.goRight();
      } else {
        this.magnet = -this.magnet2;
      }

      if (this.killed) {
        this.stop();
        this.beKilled();
      }

      this.sprite.update();
      this.sprite.updatePosition(this.position.x, this.position.y);
    }
  }, {
    key: "animate",
    value: function animate() {
      this.update();
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      return this.sprite.get();
    }
  }, {
    key: "beKilled",
    value: function beKilled() {
      this.position.y = this.position.y + 10;
      this.sprite.updateImage(this.imageManager.changeImage("bugDead"));
    }
  }, {
    key: "stop",
    value: function stop() {
      this.velocity.x = 0;
    }
  }, {
    key: "goLeft",
    value: function goLeft() {
      this.position.x -= this.velocity.x;
      this.sprite.updateImage(this.imageManager.changeImage("".concat(this.skinId, "L")));
    }
  }, {
    key: "goRight",
    value: function goRight() {
      this.position.x += this.velocity.x;
      this.sprite.updateImage(this.imageManager.changeImage("".concat(this.skinId, "R")));
    }
  }, {
    key: "moveRight",
    value: function moveRight(v) {
      this.position.x = this.position.x + v;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(v) {
      this.position.x = this.position.x - v;
    }
  }]);

  return Bug;
}();



/***/ }),

/***/ "./src/js/components/Collectable.js":
/*!******************************************!*\
  !*** ./src/js/components/Collectable.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collectable; });
/* harmony import */ var _img_collectable_lafore_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/collectable/lafore.png */ "./src/img/collectable/lafore.png");
/* harmony import */ var _img_collectable_deadline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/collectable/deadline.png */ "./src/img/collectable/deadline.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Collectable = /*#__PURE__*/function () {
  function Collectable(context, x, y, w, h, name, finish) {
    _classCallCheck(this, Collectable);

    this.position = {
      x: x,
      y: y
    };
    this.width = w;
    this.height = h;
    this.context = context;
    this.name = name;
    this.finish = finish;
    this.collected = false;
    this.start();
  }

  _createClass(Collectable, [{
    key: "start",
    value: function start() {
      this.image = new Image();
      this.changeDecor();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      if (this.image.src) {
        if (this.image.complete) {
          this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        } else {
          this.image.onload = function () {
            _this.context.drawImage(_this.image, _this.position.x, _this.position.y, _this.width, _this.height);
          };
        }
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      if (!this.collected) this.draw();
    }
  }, {
    key: "changeDecor",
    value: function changeDecor() {
      switch (this.name) {
        case 'deadline':
          this.image.src = _img_collectable_deadline_png__WEBPACK_IMPORTED_MODULE_1__["default"];
          break;

        case 'lafore':
          this.image.src = _img_collectable_lafore_png__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;

        default:
      }
    }
  }, {
    key: "beCollected",
    value: function beCollected() {
      this.position.x = 0;
      this.position.y = 0;
      this.collected = true;
    }
  }, {
    key: "moveRight",
    value: function moveRight(v) {
      this.position.x = this.position.x + v;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(v) {
      this.position.x = this.position.x - v;
    }
  }]);

  return Collectable;
}();



/***/ }),

/***/ "./src/js/components/CollisionManager.js":
/*!***********************************************!*\
  !*** ./src/js/components/CollisionManager.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollisionManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CollisionManager = /*#__PURE__*/function () {
  function CollisionManager() {
    _classCallCheck(this, CollisionManager);

    this.nearest = [];
  }

  _createClass(CollisionManager, [{
    key: "setData",
    value: function setData(player, platforms, bugs, depression, collectable) {
      this.player = player;
      this.platforms = platforms;
      this.bugs = bugs;
      this.depression = depression;
      this.collectable = collectable;
    }
  }, {
    key: "findNearest",
    value: function findNearest(arr) {
      var _this = this;

      this.nearest = [];
      arr.forEach(function (element) {
        if (_this.player.position.x + _this.player.width >= element.position.x && !(_this.player.position.x > element.position.x + element.width)) {
          _this.nearest.push(element);
        }
      });
    }
  }, {
    key: "checkPlatformCollision",
    value: function checkPlatformCollision() {
      var _this2 = this;

      var velocityRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      this.findNearest(this.platforms);

      if (this.nearest.length > 0) {
        this.nearest.forEach(function (element) {
          if (element.position.y + velocityRatio < _this2.player.position.y + _this2.player.height && element.position.x > _this2.player.position.x) {
            if (_this2.player.keys.right.pressed && element.position.y + element.height >= _this2.player.position.y) {
              _this2.player.setVelocityRatio(0);
            } else if (!_this2.player.keys.right.pressed) {
              _this2.player.setVelocityRatio(_this2.player.prevVelocityRatio);
            }
          } else if (element.position.y + velocityRatio < _this2.player.position.y + _this2.player.height && element.position.x < _this2.player.position.x) {
            if (_this2.player.keys.left.pressed && element.position.y + element.height >= _this2.player.position.y) {
              _this2.player.setVelocityRatio(0);
            } else if (!_this2.player.keys.left.pressed) {
              _this2.player.setVelocityRatio(_this2.player.prevVelocityRatio);
            }
          } else {
            _this2.player.setVelocityRatio(velocityRatio);

            _this2.player.horizon = element.position.y;
          }
        });
      }

      if (this.nearest.length === 0) {
        this.player.horizon = this.player.context.canvas.height + 500;
      }
    }
  }, {
    key: "checkBugCollision",
    value: function checkBugCollision() {
      var _this3 = this;

      this.findNearest(this.bugs);

      if (this.nearest.length > 0) {
        this.nearest.forEach(function (element) {
          if (_this3.player.position.y + _this3.player.height - element.position.y <= 80 && _this3.player.position.y + _this3.player.height - element.position.y >= 60) {
            _this3.player.horizon = element.position.y;

            _this3.player.doubleJump(true, 5);

            element.killed = true;

            _this3.player.fixBug();

            _this3.player.horizon = _this3.player.context.canvas.height;
          }
        });
      }
    }
  }, {
    key: "checkDepressionCollision",
    value: function checkDepressionCollision() {
      if (this.depression.position.x + this.depression.width >= this.player.position.x) {
        this.player.die();
      }
    }
  }, {
    key: "checkCollectableCollision",
    value: function checkCollectableCollision() {
      var _this4 = this;

      this.findNearest(this.collectable);

      if (this.nearest.length > 0) {
        this.nearest.forEach(function (element) {
          if (element.finish) {
            _this4.player.winCallback();
          }

          if (_this4.player.position.y <= element.position.y && element.position.y <= _this4.player.position.y + _this4.player.height || _this4.player.position.y <= element.position.y + element.height && element.position.y + element.height <= _this4.player.position.y + _this4.player.hight) {
            element.beCollected();

            var prevV = _this4.player.getVelocityRatio();

            _this4.player.setVelocityRatio(prevV + 3);
          }
        });
      }
    }
  }]);

  return CollisionManager;
}();



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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ContextManager = /*#__PURE__*/function () {
  function ContextManager() {
    _classCallCheck(this, ContextManager);

    this.gameContext = null;
    this.managerContext = null;
    this.activeContext = null;
    this.setupContexts();
  }

  _createClass(ContextManager, [{
    key: "setupContexts",
    value: function setupContexts() {
      this.gameNode = document.getElementById('gameplay');

      if (this.gameNode.getContext('2d')) {
        this.gameContext = this.gameNode.getContext('2d');
        this.gameNode.width = 1920;
        this.gameNode.height = 1080;
        this.gameNode.setAttribute('style', 'z-index:0; position:absolute;');
        this.gameContext.fillStyle = "blue";
        this.gameContext.fillRect(0, 0, this.gameNode.width, this.gameNode.height);
        this.managerNode = document.getElementById('management');
        this.managerContext = this.managerNode.getContext('2d');
        this.managerNode.width = 1920;
        this.managerNode.height = 1080;
        this.managerNode.setAttribute('style', 'z-index:0; position:absolute;');
        this.managerContext.fillStyle = "yellow";
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller(context, collisionManager, imageManager) {
    _classCallCheck(this, Controller);

    this.context = context;
    this.lvl = 0;
    this.currAnimId = null;
    this.imageManager = imageManager;
    this.collisionManager = collisionManager;
  }

  _createClass(Controller, [{
    key: "animate",
    value: function animate(args, currLvl) {
      this.args = args;

      if (this.lvl !== currLvl) {
        this.lvl = currLvl;
        cancelAnimationFrame(this.currAnimId);
      }

      this.currAnimId = requestAnimationFrame(this.animate.bind(this, args));
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.imageManager.showImage('background');
      this.collisionManager.checkPlatformCollision(args[0].getVelocityRatio());
      this.collisionManager.checkBugCollision();
      this.collisionManager.checkDepressionCollision();
      this.collisionManager.checkCollectableCollision();
      args.forEach(function (el) {
        return el.animate();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.currAnimId) cancelAnimationFrame(this.currAnimId);
    }
  }, {
    key: "continue",
    value: function _continue() {
      this.animate(this.args, this.lvl);
    }
  }]);

  return Controller;
}();



/***/ }),

/***/ "./src/js/components/Depression.js":
/*!*****************************************!*\
  !*** ./src/js/components/Depression.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Depression; });
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ "./src/js/components/Sprite.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Depression = /*#__PURE__*/function () {
  function Depression(context, img, loseCallback) {
    _classCallCheck(this, Depression);

    this.position = {
      x: 100,
      y: 300
    };
    this.width = 240;
    this.height = 240;
    this.context = context;
    this.spriteImg = img;
    this.loseCallback = loseCallback;
    this.velocity = {
      x: 2,
      y: 0
    };
    this.start();
  }

  _createClass(Depression, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
      setInterval(function () {
        _this.velocity.x = _this.velocity.x + 2;
      }, 4000);
    }
  }, {
    key: "update",
    value: function update() {
      this.sprite.update();
      this.sprite.updatePosition(this.position.x, this.position.y);
      this.position.x = this.position.x + this.velocity.x;
    }
  }, {
    key: "killHuman",
    value: function killHuman() {
      this.loseCallback();
    }
  }, {
    key: "animate",
    value: function animate() {
      this.update();
    }
  }, {
    key: "getSprite",
    value: function getSprite() {
      return this.sprite.get();
    }
  }, {
    key: "begin",
    value: function begin() {
      this.position.x = 100;
      this.position.y = 300;
      this.velocity.x = 1;
    }
  }, {
    key: "moveRight",
    value: function moveRight(v) {
      this.position.x = this.position.x + v;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(v) {
      this.position.x = this.position.x - v;
    }
  }]);

  return Depression;
}();



/***/ }),

/***/ "./src/js/components/EventManager.js":
/*!*******************************************!*\
  !*** ./src/js/components/EventManager.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    this.object = null;
    this.event = null;
    this.time = null;
    this.functionUp = null;
    this.functionDown = null;
    this.pause = false;
  }

  _createClass(EventManager, [{
    key: "setMenu",
    value: function setMenu(menu) {
      this.menu = menu;
    }
  }, {
    key: "addListener",
    value: function addListener(obj, event) {
      this.object = obj;
      this.time = this.object.keys ? 'playtime' : 'showtime';

      if (this.time === 'showtime') {
        this.event = event;
        this.functionUp = this.checkerUp.bind(this);
        addEventListener(this.event, this.functionUp);
      } else if (this.time === 'playtime') {
        this.event = {
          0: 'keyup',
          1: 'keydown'
        };
        this.functionUp = this.checkerUp.bind(this);
        this.functionDown = this.checkerDown.bind(this);
        addEventListener(this.event[0], this.functionUp);
        addEventListener(this.event[1], this.functionDown);
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener() {
      if (this.time === 'showtime') {
        removeEventListener(this.event, this.functionUp);
      } else if (this.time === 'playtime') {
        removeEventListener(this.event[0], this.functionUp);
        removeEventListener(this.event[1], this.functionDown);
      }
    }
  }, {
    key: "checkerDown",
    value: function checkerDown(_ref) {
      var code = _ref.code;

      try {
        switch (code) {
          case 'ArrowUp':
          case 'KeyW':
            if (this.time === 'playtime') {
              this.object.jumping ? this.object.doubleJump() : this.object.jump();
              this.object.keys.up.pressed = true;
            }

            break;

          case 'ArrowRight':
          case 'KeyD':
            if (this.time === 'playtime') this.object.keys.right.pressed = true;
            break;

          case 'ArrowLeft':
          case 'KeyA':
            if (this.time === 'playtime') this.object.keys.left.pressed = true;
            break;

          default:
        }
      } catch (err) {
        console.log('Ну а вы что хотели, это же демо:', err);
      }
    }
  }, {
    key: "checkerUp",
    value: function checkerUp(_ref2) {
      var code = _ref2.code;

      try {
        switch (code) {
          case 'ArrowUp':
          case 'KeyW':
            if (this.time === 'playtime') this.object.keys.up.pressed = false;
            break;

          case 'ArrowRight':
          case 'KeyD':
            if (this.time === 'playtime') this.object.keys.right.pressed = false;
            break;

          case 'ArrowLeft':
          case 'KeyA':
            if (this.time === 'playtime') this.object.keys.left.pressed = false;
            break;

          case 'Space':
            if (this.time === 'showtime' && !this.pause) {
              if (this.object.intro && !this.object.input) {
                if (this.object.last === 'win') {
                  this.object.levelup();
                  this.object.startIntro();
                } else {
                  this.object.startIntro();
                }
              } else if (!this.object.intro && !this.object.input) {
                if (this.object.last === 'win') {
                  this.object.levelup();
                  this.object.startNewLevel();
                } else {
                  this.object.startNewLevel();
                }
              } else if (this.object.input) {
                this.object.playerCustomizer.setPlayerName(this.object.setStats.bind(this.object), this.object.levelup.bind(this.object), this.object.startIntro.bind(this.object));
              }
            }

            break;

          case 'Escape':
            if (this.time === 'playtime') {
              this.pause = true;
              this.pause = this.menu.changePause(this.time);
            }

            break;

          default:
        }
      } catch (err) {
        console.log('Ну а вы что хотели, это же демо:', err);
      }
    }
  }]);

  return EventManager;
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
/* harmony import */ var _Collectable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collectable */ "./src/js/components/Collectable.js");
/* harmony import */ var _Bug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bug */ "./src/js/components/Bug.js");
/* harmony import */ var _utils_levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/levels */ "./src/js/utils/levels/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// entities


 // maps






var Game = /*#__PURE__*/function () {
  function Game(player, playerCustom, controller, contextManager, imageManager, eventManager, depression, collisionManager, menu) {
    _classCallCheck(this, Game);

    this.player = player;
    this.playerCustomizer = playerCustom;
    this.controller = controller;
    this.contextManager = contextManager;
    this.imageManager = imageManager;
    this.eventManager = eventManager;
    this.depression = depression;
    this.collisionManager = collisionManager;
    this.menu = menu;
    this.stats = {
      name: undefined,
      gravity: 0.5,
      lvl: 0
    };
    this.intro = true;
    this.input = false;
    this.last = 'win';
    this.setup();
  }

  _createClass(Game, [{
    key: "setup",
    value: function setup() {
      this.contextManager = new this.contextManager();
      this.gameContext = this.contextManager.getGameContext();
      this.managerContext = this.contextManager.getManagerContext();
      this.imageManager = new this.imageManager(this.managerContext);
      this.eventManager = new this.eventManager();
      this.playerCustomizer = new this.playerCustomizer(this.imageManager);
      this.collisionManager = new this.collisionManager();
      this.menu = new this.menu(this.imageManager);
      this.eventManager.setMenu(this.menu);
      this.setShowTime();
      this.startIntro();
    }
  }, {
    key: "levelup",
    value: function levelup() {
      this.stats.lvl = this.stats.lvl + 1;
    }
  }, {
    key: "setShowTime",
    value: function setShowTime() {
      if (this.controller.currAnimId) this.controller.stop();
      this.eventManager.removeListener();
      this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
      this.contextManager.showManagerContext();
      this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
      this.eventManager.addListener(this, 'keyup');
    }
  }, {
    key: "setPlayTime",
    value: function setPlayTime() {
      this.eventManager.removeListener();
      this.contextManager.showGameContext();
      this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
      this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
      this.eventManager.addListener(this.player, 'keyup');
    }
  }, {
    key: "startIntro",
    value: function startIntro() {
      this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].introDone) {
        this.intro = false;
      }

      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].input) {
        this.input = true;
        this.playerCustomizer.getPlayerName();
      }

      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].srcName && this.intro) {
        this.imageManager.showImage(_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].srcName);
      } else {
        if (this.player.gravity) {
          this.startNewLevel();
        } else {
          this.startGame();
        }
      }
    }
  }, {
    key: "winLevel",
    value: function winLevel() {
      this.last = 'win';
      this.showLevelResult();
    }
  }, {
    key: "loseLevel",
    value: function loseLevel() {
      this.last = 'lose';
      this.showLevelResult();
    }
  }, {
    key: "showLevelResult",
    value: function showLevelResult() {
      this.setShowTime();

      if (this.last === 'win') {
        this.imageManager.showImage('winlevel');
      } else if (this.last === 'lose') {
        this.imageManager.showImage('nevergiveup');
      }

      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl + 1].finish) {
        this.winGame();
      }
    }
  }, {
    key: "winGame",
    value: function winGame() {
      this.setShowTime();
      this.imageManager.showImage('wingame');
      this.eventManager.removeListener();
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.player = new this.player(this.gameContext, this.imageManager, this.stats.gravity, this.winLevel.bind(this), this.loseLevel.bind(this), this.playerCustomizer.setPlayerSkin(this.stats.name), this.playerCustomizer.getSkinId());
      this.controller = new this.controller(this.gameContext, this.collisionManager, this.imageManager);
      this.menu.setCallbacks(this.controller.stop.bind(this.controller), this.controller["continue"].bind(this.controller));
      this.depression = new this.depression(this.gameContext, this.imageManager.changeImage('depression'), this.loseLevel.bind(this));
      this.gameSprites = [this.player.getSprite(), this.depression.getSprite()];
      this.startNewLevel();
    }
  }, {
    key: "startNewLevel",
    value: function startNewLevel() {
      var _this = this;

      var bugs = [];
      var collectable = [];
      var bugSprites = [];
      var platforms = [];
      this.sprites = [];
      this.setPlayTime();
      this.player.begin();
      this.depression.begin(); //this.player.setLevelConditions(ConditionMap[this.stats.lvl]);

      platforms = _utils_levels__WEBPACK_IMPORTED_MODULE_3__["PlatformMap"][this.stats.lvl].map(function (element) {
        return new _Platform__WEBPACK_IMPORTED_MODULE_0__["default"](_this.gameContext, element.x, element.y, element.name);
      }); // platforms = PlatformMap[this.stats.lvl].map(element => {
      //     return new Platforma(this.gameContext, element.x, element.y, element.w, element.h)
      // });

      collectable = _utils_levels__WEBPACK_IMPORTED_MODULE_3__["BoosterMap"][this.stats.lvl].map(function (element) {
        return new _Collectable__WEBPACK_IMPORTED_MODULE_1__["default"](_this.gameContext, element.x, element.y, element.w, element.h, element.name, element.finish);
      });
      bugs = _utils_levels__WEBPACK_IMPORTED_MODULE_3__["BugsMap"][this.stats.lvl].map(function (element) {
        return new _Bug__WEBPACK_IMPORTED_MODULE_2__["default"](_this.gameContext, element.x, element.y, _this.imageManager.changeImage(element.name), element.name, element.magnet, _this.stats.gravity, _this.imageManager);
      });
      bugSprites = bugs.map(function (element) {
        return element.getSprite();
      });
      this.sprites = [].concat(_toConsumableArray(this.gameSprites), _toConsumableArray(bugSprites));
      this.collisionManager.setData(this.player, platforms, bugs, this.depression, collectable);
      this.player.setDependentEntities([].concat(_toConsumableArray(platforms), [this.depression], _toConsumableArray(bugs), _toConsumableArray(collectable)));
      this.controller.animate([this.player, this.depression].concat(_toConsumableArray(platforms), _toConsumableArray(bugs), _toConsumableArray(collectable), _toConsumableArray(this.sprites)), this.stats.lvl);
    }
  }, {
    key: "setStats",
    value: function setStats(name) {
      this.input = false;
      this.stats.name = name;
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/js/components/ImageManager.js":
/*!*******************************************!*\
  !*** ./src/js/components/ImageManager.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageManager; });
/* harmony import */ var _img_intro_intro1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/intro/intro1.png */ "./src/img/intro/intro1.png");
/* harmony import */ var _img_intro_intro2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/intro/intro2.png */ "./src/img/intro/intro2.png");
/* harmony import */ var _img_intro_intro3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/intro/intro3.png */ "./src/img/intro/intro3.png");
/* harmony import */ var _img_intro_intro5_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/intro/intro5.png */ "./src/img/intro/intro5.png");
/* harmony import */ var _img_intro_nevergiveup_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/intro/nevergiveup.png */ "./src/img/intro/nevergiveup.png");
/* harmony import */ var _img_intro_wingame_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/intro/wingame.png */ "./src/img/intro/wingame.png");
/* harmony import */ var _img_intro_winlevel_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/intro/winlevel.png */ "./src/img/intro/winlevel.png");
/* harmony import */ var _img_player_normalPlayerR_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/player/normalPlayerR.png */ "./src/img/player/normalPlayerR.png");
/* harmony import */ var _img_player_normalPlayerL_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/player/normalPlayerL.png */ "./src/img/player/normalPlayerL.png");
/* harmony import */ var _img_player_dimaPlayerR_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/player/dimaPlayerR.png */ "./src/img/player/dimaPlayerR.png");
/* harmony import */ var _img_player_dimaPlayerL_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/player/dimaPlayerL.png */ "./src/img/player/dimaPlayerL.png");
/* harmony import */ var _img_creatures_depression_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/creatures/depression.png */ "./src/img/creatures/depression.png");
/* harmony import */ var _img_creatures_bug_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/creatures/bug.png */ "./src/img/creatures/bug.png");
/* harmony import */ var _img_creatures_bugL_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/creatures/bugL.png */ "./src/img/creatures/bugL.png");
/* harmony import */ var _img_creatures_deadBug_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/creatures/deadBug.png */ "./src/img/creatures/deadBug.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/background.png */ "./src/img/background.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


















var ImageManager = /*#__PURE__*/function () {
  function ImageManager(managerContext) {
    _classCallCheck(this, ImageManager);

    this.managerContext = managerContext;
  }

  _createClass(ImageManager, [{
    key: "showImage",
    value: function showImage(name) {
      var _this = this;

      var image = this.changeImage(name);

      if (image.complete) {
        this.managerContext.drawImage(image, 0, 0, 1920, 1080);
      } else {
        image.onload = function () {
          _this.managerContext.drawImage(image, 0, 0, 1920, 1080);
        };
      }
    }
  }, {
    key: "changeImage",
    value: function changeImage(name) {
      var image = new Image();

      switch (name) {
        case 'intro0':
          image.src = _img_intro_intro1_png__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;

        case 'intro1':
          image.src = _img_intro_intro2_png__WEBPACK_IMPORTED_MODULE_1__["default"];
          break;

        case 'intro2':
          image.src = _img_intro_intro3_png__WEBPACK_IMPORTED_MODULE_2__["default"];
          break;

        case 'intro4':
          image.src = _img_intro_intro5_png__WEBPACK_IMPORTED_MODULE_3__["default"];
          break;

        case 'intro6':
          image.src = intro6;
          break;

        case 'intro7':
          image.src = intro7;
          break;

        case 'nevergiveup':
          image.src = _img_intro_nevergiveup_png__WEBPACK_IMPORTED_MODULE_4__["default"];
          break;

        case 'winlevel':
          image.src = _img_intro_winlevel_png__WEBPACK_IMPORTED_MODULE_6__["default"];
          break;

        case 'wingame':
          image.src = _img_intro_wingame_png__WEBPACK_IMPORTED_MODULE_5__["default"];
          break;

        case 'Дима':
        case 'dimaPlayerR':
          image.src = _img_player_dimaPlayerR_png__WEBPACK_IMPORTED_MODULE_9__["default"];
          break;

        case 'dimaPlayerL':
          image.src = _img_player_dimaPlayerL_png__WEBPACK_IMPORTED_MODULE_10__["default"];
          break;

        case 'Имя':
        case 'normalPlayerR':
          image.src = _img_player_normalPlayerR_png__WEBPACK_IMPORTED_MODULE_7__["default"];
          break;

        case 'normalPlayerL':
          image.src = _img_player_normalPlayerL_png__WEBPACK_IMPORTED_MODULE_8__["default"];
          break;

        case 'depression':
          image.src = _img_creatures_depression_png__WEBPACK_IMPORTED_MODULE_11__["default"];
          break;

        case 'bugL':
          image.src = _img_creatures_bugL_png__WEBPACK_IMPORTED_MODULE_13__["default"];
          break;

        case 'bug':
        case 'bugR':
          image.src = _img_creatures_bug_png__WEBPACK_IMPORTED_MODULE_12__["default"];
          break;

        case 'bugDead':
          image.src = _img_creatures_deadBug_png__WEBPACK_IMPORTED_MODULE_14__["default"];
          break;

        case 'background':
          image.src = _img_background_png__WEBPACK_IMPORTED_MODULE_15__["default"];
          break;

        default:
      }

      return image;
    }
  }, {
    key: "hideImage",
    value: function hideImage() {
      this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
    }
  }]);

  return ImageManager;
}();



/***/ }),

/***/ "./src/js/components/Menu.js":
/*!***********************************!*\
  !*** ./src/js/components/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(imageManager) {
    _classCallCheck(this, Menu);

    this.pause = false;
    this.music = true;
    this.imageManager = imageManager;
  }

  _createClass(Menu, [{
    key: "changePause",
    value: function changePause(stateTime) {
      if (this.pause && stateTime === 'playtime') {
        this.imageManager.hideImage();
        this.controllerStart();
        this.pause = false;
      } else if (!this.pause && stateTime === 'playtime') {
        this.controllerStop();
        this.imageManager.showImage('intro0');
        this.pause = true;
      }

      return this.pause;
    }
  }, {
    key: "changeMusic",
    value: function changeMusic() {
      if (this.music) {
        console.log('выключили музыку');
      } else {
        console.log('включили музыку');
      }
    }
  }, {
    key: "setCallbacks",
    value: function setCallbacks(stop, start) {
      this.controllerStop = stop;
      this.controllerStart = start;
    }
  }]);

  return Menu;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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
    this.id = 'platform';
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
          this.image.src = tile2;
          break;

        default:
          this.image.src = _img_surface_default_tile01_png__WEBPACK_IMPORTED_MODULE_0__["default"];
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight(v) {
      this.position.x = this.position.x + v;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(v) {
      this.position.x = this.position.x - v;
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player = /*#__PURE__*/function () {
  function Player(context, imageManager, gravity, winCallback, loseCallback, img, skinId) {
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
      },
      up: {
        pressed: false
      }
    };
    this.width = 110;
    this.height = 240;
    this.awaited = 0;
    this.activated = 0;
    this.prevVelocityRatio = 5;
    this.velocityRatio = 5;
    this.context = context;
    this.imageManager = imageManager;
    this.gravity = gravity;
    this.skin = skinId;
    this.winCallback = winCallback;
    this.loseCallback = loseCallback;
    this.spriteImg = img;
    this.bugsFixed = 0;
    this.horizon = this.context.canvas.height;
    this.start();
  }

  _createClass(Player, [{
    key: "start",
    value: function start() {
      this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }
  }, {
    key: "update",
    value: function update(horizon) {
      this.sprite.update();
      this.sprite.updatePosition(this.position.x, this.position.y);
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= horizon) {
        this.velocity.y += this.gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      this.update(this.horizon);
      if (this.position.y > this.context.canvas.height + this.height) this.die();

      if (this.keys.left.pressed && this.position.x > 799) {
        this.goLeft();
      } else if (this.keys.left.pressed && this.position.x <= 799) {
        this.stopX();

        if (this.keys.left.pressed) {
          this.dependent.forEach(function (element) {
            element.moveRight(_this.velocityRatio);
          });
        }
      } else if (this.keys.right.pressed && this.position.x < 800) {
        this.goRight();
      } else if (this.keys.right.pressed && this.position.x >= 800) {
        this.stopX();

        if (this.keys.right.pressed) {
          this.dependent.forEach(function (element) {
            element.moveLeft(_this.velocityRatio);
          });
        }
      } else {
        this.stopX();
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      var _this2 = this;

      var jumpCondition = this.position.y + this.height + this.velocity.y >= this.horizon;

      if (jumpCondition) {
        this.jumping = true;
        this.velocity.y -= 15;
        setTimeout(function () {
          _this2.jumping = false;
        }, 1000);
      }
    }
  }, {
    key: "doubleJump",
    value: function doubleJump(forced, param) {
      if (this.jumping && !this.keys.up.pressed) {
        this.velocity.y -= 10;
        this.jumping = false;
      }

      if (forced) {
        this.velocity.y -= param;
      }
    }
  }, {
    key: "goLeft",
    value: function goLeft() {
      this.velocity.x = -this.velocityRatio;
      this.sprite.updateImage(this.imageManager.changeImage("".concat(this.skin, "L")));
    }
  }, {
    key: "goRight",
    value: function goRight() {
      this.velocity.x = this.velocityRatio;
      this.sprite.updateImage(this.imageManager.changeImage("".concat(this.skin, "R")));
    }
  }, {
    key: "stopX",
    value: function stopX() {
      this.velocity.x = 0;
    }
  }, {
    key: "stopY",
    value: function stopY() {
      this.velocity.y = 0;
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
  }, {
    key: "begin",
    value: function begin() {
      this.stopX();
      this.keys.left.pressed = false;
      this.keys.right.pressed = false;
      this.keys.up.pressed = false;
      this.setVelocityRatio(5);
      this.bugsFixed = 0;
      this.sprite.updateImage(this.imageManager.changeImage("".concat(this.skin, "R")));
      this.position.x = 800;
      this.position.y = 100;
      this.velocity.y = 0;
    }
  }, {
    key: "fixBug",
    value: function fixBug() {
      this.bugsFixed = this.bugsFixed + 1;
    }
  }, {
    key: "setDependentEntities",
    value: function setDependentEntities(args) {
      this.dependent = args;
    }
  }, {
    key: "setVelocityRatio",
    value: function setVelocityRatio(x) {
      if (x === 0 && this.velocityRatio !== 0) {
        this.prevVelocityRatio = this.velocityRatio;
        this.velocityRatio = x;
      } else {
        this.velocityRatio = x;
      }
    }
  }, {
    key: "getVelocityRatio",
    value: function getVelocityRatio() {
      return this.velocityRatio;
    }
  }, {
    key: "die",
    value: function die() {
      this.loseCallback();
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/js/components/PlayerCustomizer.js":
/*!***********************************************!*\
  !*** ./src/js/components/PlayerCustomizer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerCustomizer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayerCustomizer = /*#__PURE__*/function () {
  function PlayerCustomizer(imageManager) {
    _classCallCheck(this, PlayerCustomizer);

    this.imageManager = imageManager;
    this.skinId = null;
  }

  _createClass(PlayerCustomizer, [{
    key: "getPlayerName",
    value: function getPlayerName() {
      var body = document.getElementById('body');
      var wrapperDiv = document.createElement('div');
      wrapperDiv.setAttribute('style', 'position: absolute; display: flex; left: 299px; top: 452px;');
      wrapperDiv.setAttribute('id', 'wrapperDiv');
      body.appendChild(wrapperDiv);
      var conteinerDiv = document.createElement('div');
      conteinerDiv.setAttribute('style', 'width: 528px; height: 300px; z-index: 5;');
      wrapperDiv.appendChild(conteinerDiv);
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('style', 'width: 552px; height: 81px; padding: 20px 21px; font-size: 76px;');
      conteinerDiv.appendChild(input);
      input.focus();
    }
  }, {
    key: "setPlayerName",
    value: function setPlayerName(setStats, levelup, startIntro) {
      var inputElement = document.querySelector('input');

      if (inputElement.value.trim().length) {
        document.getElementById('wrapperDiv').remove();
        setStats(inputElement.value.trim());
        levelup();
        startIntro();
      } else {
        inputElement.setAttribute('style', 'width: 552px; height: 81px; padding: 20px 21px; font-size: 76px;border: 2px solid red');
      }
    }
  }, {
    key: "setPlayerSkin",
    value: function setPlayerSkin(name) {
      var universalName = name.toLowerCase();

      switch (universalName) {
        case 'дима':
        case 'дмитрий':
        case 'димас':
        case 'димон':
        case 'димочка':
          this.skinId = 'dimaPlayer';
          return this.imageManager.changeImage('Дима');

        default:
          this.skinId = 'normalPlayer';
          return this.imageManager.changeImage('Имя');
      }
    }
  }, {
    key: "getSkinId",
    value: function getSkinId() {
      return this.skinId;
    }
  }]);

  return PlayerCustomizer;
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = /*#__PURE__*/function () {
  function Sprite(context, image, ticksPerFrame, numberOfFrames, width, height, positionX, positionY, ratio) {
    var id = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'not important';

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
    this.id = id;
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
      if (this.id = 'player') {
        this.positionX = posX - 70;
        this.positionY = posY;
      } else {
        this.positionX = posX;
        this.positionY = posY;
      }
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
/*! exports provided: PlatformMap, BugsMap, BoosterMap, ConditionMap, introData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformMap", function() { return PlatformMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugsMap", function() { return BugsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoosterMap", function() { return BoosterMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionMap", function() { return ConditionMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introData", function() { return introData; });
var PlatformMap = {
  3: [{
    x: -540,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: -270,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 0,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 270,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 540,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 810,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 1350,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 1890,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 2160,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 2430,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 2700,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 2970,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }],
  5: [{
    x: -540,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: -270,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 0,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 270,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 540,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 810,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 1080,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 1620,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 2160,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 2700,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 3240,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 3510,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 4050,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 4320,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 4860,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 5130,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 5400,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 5670,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 6480,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 6750,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 7020,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 7290,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 7560,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 7830,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 8640,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 8910,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 9180,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 9990,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 10530,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 10800,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 11340,
    y: 600,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 11610,
    y: 600,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 12150,
    y: 500,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 12420,
    y: 500,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 13230,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 13500,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 13770,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 14040,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 14310,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 15120,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 15390,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 16200,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 16470,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 17280,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 17550,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 17820,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 18900,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 19170,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 19440,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 20520,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 20790,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 21060,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 21330,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 21600,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 21870,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 22950,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 23220,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 23490,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 23760,
    y: 700,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 25110,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 25380,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 25650,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 25920,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 26190,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }, {
    x: 26460,
    y: 800,
    name: "tile1",
    w: 270,
    h: 270
  }]
};
var BugsMap = {
  3: [],
  5: [{
    x: 5330,
    y: 560,
    name: "bug",
    magnet: 100
  }, {
    x: 7230,
    y: 560,
    name: "bug",
    magnet: 100
  }, {
    x: 23620,
    y: 460,
    name: "bug",
    magnet: 100
  }]
};
var BoosterMap = {
  3: [{
    x: 2500,
    y: 0,
    w: 100,
    h: 700,
    name: "deadline",
    finish: true
  }, {
    x: 1200,
    y: 400,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }],
  5: [{
    x: 26500,
    y: 0,
    w: 100,
    h: 700,
    name: "deadline",
    finish: true
  }, {
    x: 1450,
    y: 500,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 3350,
    y: 500,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 5500,
    y: 400,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 7200,
    y: 460,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 10300,
    y: 440,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 12400,
    y: 360,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 16400,
    y: 400,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 18200,
    y: 400,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 23520,
    y: 400,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }]
};
var ConditionMap = {
  3: 3,
  5: 10
};
var introData = {
  0: {
    srcName: 'intro0'
  },
  1: {
    srcName: 'intro1',
    input: true
  },
  2: {
    srcName: 'intro2'
  },
  3: {},
  4: {
    srcName: 'intro4'
  },
  5: {},
  6: {
    finish: true
  }
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
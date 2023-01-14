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

/***/ "./src/img/intro/bugs.jpg":
/*!********************************!*\
  !*** ./src/img/intro/bugs.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a58b32ae36ab93e87c491c327a44acbd.jpg");

/***/ }),

/***/ "./src/img/intro/intro1.jpg":
/*!**********************************!*\
  !*** ./src/img/intro/intro1.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3f6d0a6d65f84b5055c09fd5f46fab51.jpg");

/***/ }),

/***/ "./src/img/intro/intro2.jpg":
/*!**********************************!*\
  !*** ./src/img/intro/intro2.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c201e1a24a03d654799ca2fa21482f06.jpg");

/***/ }),

/***/ "./src/img/intro/intro3.jpg":
/*!**********************************!*\
  !*** ./src/img/intro/intro3.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "909c4e3ab10cd202cdff8c579564f037.jpg");

/***/ }),

/***/ "./src/img/intro/intro5.jpg":
/*!**********************************!*\
  !*** ./src/img/intro/intro5.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3f7e550bf527ef79c9f62f8aed3b121c.jpg");

/***/ }),

/***/ "./src/img/intro/intro6.jpg":
/*!**********************************!*\
  !*** ./src/img/intro/intro6.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "67f5ecedb48c0be5370848b17c4c745a.jpg");

/***/ }),

/***/ "./src/img/intro/intro7.jpg":
/*!**********************************!*\
  !*** ./src/img/intro/intro7.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1fef0561948f630376c3098a80527e59.jpg");

/***/ }),

/***/ "./src/img/intro/nevergiveup.jpg":
/*!***************************************!*\
  !*** ./src/img/intro/nevergiveup.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d2e901d97d4b214bb43bffaf79e7cd19.jpg");

/***/ }),

/***/ "./src/img/intro/timeout.jpg":
/*!***********************************!*\
  !*** ./src/img/intro/timeout.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2181fad9028d3f87bfb83111195a4f7c.jpg");

/***/ }),

/***/ "./src/img/intro/wingame.jpg":
/*!***********************************!*\
  !*** ./src/img/intro/wingame.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01585ba7f81753b8d5c9d854e0defd33.jpg");

/***/ }),

/***/ "./src/img/intro/winlevel.jpg":
/*!************************************!*\
  !*** ./src/img/intro/winlevel.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0329abc04609b758174b756c319e8217.jpg");

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

/***/ "./src/img/player/normalPlayerR.png":
/*!******************************************!*\
  !*** ./src/img/player/normalPlayerR.png ***!
  \******************************************/
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
/* harmony import */ var _components_ImageManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageManager */ "./src/js/components/ImageManager.js");
/* harmony import */ var _components_EventManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EventManager */ "./src/js/components/EventManager.js");
/* harmony import */ var _components_PlayerCustomizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PlayerCustomizer */ "./src/js/components/PlayerCustomizer.js");
/* harmony import */ var _components_Depression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Depression */ "./src/js/components/Depression.js");
/* harmony import */ var _components_Bug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Bug */ "./src/js/components/Bug.js");
/* harmony import */ var _components_CollisionManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CollisionManager */ "./src/js/components/CollisionManager.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Menu */ "./src/js/components/Menu.js");










//import CollisionM from "./components/CollisionM"


var currentGame = new _components_Game__WEBPACK_IMPORTED_MODULE_0__["default"](_components_Player__WEBPACK_IMPORTED_MODULE_1__["default"], _components_PlayerCustomizer__WEBPACK_IMPORTED_MODULE_6__["default"], _components_Controller__WEBPACK_IMPORTED_MODULE_2__["default"], _components_ContextManager__WEBPACK_IMPORTED_MODULE_3__["default"], _components_ImageManager__WEBPACK_IMPORTED_MODULE_4__["default"], _components_EventManager__WEBPACK_IMPORTED_MODULE_5__["default"], _components_Depression__WEBPACK_IMPORTED_MODULE_7__["default"], _components_Bug__WEBPACK_IMPORTED_MODULE_8__["default"], _components_CollisionManager__WEBPACK_IMPORTED_MODULE_9__["default"],
//CollisionM,
_components_Menu__WEBPACK_IMPORTED_MODULE_10__["default"]);

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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Bug = /*#__PURE__*/function () {
  function Bug(context, x, y, img, skinId, magnet, gravity) {
    _classCallCheck(this, Bug);
    this.position = {
      x: x,
      y: y
    };
    this.width = 240;
    this.height = 240;
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
    this.gravity = gravity;
    this.killed = false;
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

      //console.log('BUUUUUG',this.killed)
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
    }
  }, {
    key: "goRight",
    value: function goRight() {
      this.position.x += this.velocity.x;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
      if (!this.collected) {
        this.draw();
      }
    }
  }, {
    key: "changeDecor",
    value: function changeDecor() {
      switch (this.name) {
        case 'deadline':
          this.image.src = deadline;
          break;
        case 'lafore':
          this.image.src = _img_collectable_lafore_png__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;
        default:
          this.image.src = null;
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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
var CollisionManager = /*#__PURE__*/function () {
  function CollisionManager() {
    _classCallCheck(this, CollisionManager);
    this.nearest = [];
  }

  //setData(player, platforms, depression, bugs, finish, hw) {
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
            console.log(1);
            if (_this2.player.keys.right.pressed && element.position.y + element.height >= _this2.player.position.y) {
              _this2.player.setVelocityRatio(0);
              console.log(2);
            } else if (!_this2.player.keys.right.pressed) {
              _this2.player.setVelocityRatio(_this2.player.prevVelocityRatio);
              console.log(3);
            }
          } else if (element.position.y + velocityRatio < _this2.player.position.y + _this2.player.height && element.position.x < _this2.player.position.x) {
            console.log(4);
            if (_this2.player.keys.left.pressed && element.position.y + element.height >= _this2.player.position.y) {
              _this2.player.setVelocityRatio(0);
              console.log(5);
            } else if (!_this2.player.keys.left.pressed) {
              _this2.player.setVelocityRatio(_this2.player.prevVelocityRatio);
              console.log(6);
            }
          } else {
            console.log(8);
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

      //console.log('this.nearest',this.nearest)

      if (this.nearest.length > 0) {
        this.nearest.forEach(function (element) {
          // console.log('this.player.position.y',this.player.position.y)
          // console.log('element.position.y', element.position.y)
          // console.log('this.nearest', this.nearest)

          //if (this.player.position.y + this.player.height == element.position.y) {
          if (_this3.player.position.y + _this3.player.height - element.position.y <= 80 && _this3.player.position.y + _this3.player.height - element.position.y >= 60) {
            // console.log('element.killed', element.killed)
            // console.log('element',element)

            //this.player.horizon = element.position.y;
            //console.log('____________________________this.player.position.y',this.player.position.y, this.player.height)
            //console.log('_________________________________element.position.y', element.position.y)
            //console.log('this.player.position.y + this.player.height - element.position.y', this.player.position.y + this.player.height - element.position.y)

            _this3.player.horizon = element.position.y;
            _this3.player.doubleJump(true, 5);
            element.killed = true;
            _this3.player.fixBug();
            _this3.player.horizon = _this3.player.context.canvas.height;

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
          } else {
            //console.log('я туууууууууууууууууууут')
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

      //console.log('this.nearest', this.nearest)

      if (this.nearest.length > 0) {
        this.nearest.forEach(function (element) {
          if (element.finish) {
            _this4.player.winLevel();
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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Controller = /*#__PURE__*/function () {
  function Controller(context, collisionManager) {
    _classCallCheck(this, Controller);
    this.context = context;
    this.lvl = 0;
    this.currAnimId = null;
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
      this.collisionManager.checkPlatformCollision(args[0].getVelocityRatio());
      this.collisionManager.checkBugCollision();
      //this.collisionManager.checkDepressionCollision();
      this.collisionManager.checkCollectableCollision();
      args.forEach(function (el) {
        return el.animate();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log('++++++++++++++++++++');
      if (this.currAnimId) {
        cancelAnimationFrame(this.currAnimId);
      }
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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Depression = /*#__PURE__*/function () {
  function Depression(context, gravity, img, loseCallback) {
    _classCallCheck(this, Depression);
    this.position = {
      x: 100,
      y: 300
    };
    this.width = 240;
    this.height = 240;
    this.context = context;
    //this.gravity = gravity;

    this.spriteImg = img;
    this.loseCallback = loseCallback;
    this.velocity = {
      x: 3,
      y: 0
    };
    this.start();
  }
  _createClass(Depression, [{
    key: "start",
    value: function start() {
      this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__["default"](this.context, this.spriteImg, 8, 4, 240, 240, this.position.x, this.position.y, 240);
    }
  }, {
    key: "update",
    value: function update() {
      this.sprite.update();
      this.sprite.updatePosition(this.position.x, this.position.y);

      //this.position.y += this.velocity.y;
      this.position.x = this.position.x + this.velocity.x;

      //console.log('depression апдейт', this.position.x)

      // if (this.position.y + this.height + this.velocity.y <= 
      //     this.context.canvas.height) {
      //         this.velocity.y += this.gravity;
      //     }
      // else {
      //     this.velocity.y = 0;
      // }    
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
      this.velocity.x = 3;

      // СУПЕР ВАЖНО
      // 3
      // 5
      // setInterval(()=>{ 
      //     this.velocity.x = this.velocity.x + 1; 
      // }, 3000)
    }
  }, {
    key: "killHuman",
    value: function killHuman() {
      this.loseCallback();
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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
        console.log('___EventManager___', 'listener added:', this.time, this.event);
      } else if (this.time === 'playtime') {
        this.event = {
          0: 'keyup',
          1: 'keydown'
        };
        this.functionUp = this.checkerUp.bind(this);
        this.functionDown = this.checkerDown.bind(this);
        addEventListener(this.event[0], this.functionUp);
        addEventListener(this.event[1], this.functionDown);
        console.log('___EventManager___', 'listenerS added:', this.time, this.event);
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener() {
      if (this.time === 'showtime') {
        removeEventListener(this.event, this.functionUp);
        console.log('___EventManager___', 'listener removed');
      } else if (this.time === 'playtime') {
        removeEventListener(this.event[0], this.functionUp);
        removeEventListener(this.event[1], this.functionDown);
        console.log('___EventManager___', 'listenerS removed');
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
            console.log(111111111111);
            if (this.time === 'showtime' && !this.pause) {
              //if (this.time === 'showtime') {
              console.log(222222222222);
              if (this.object.intro && !this.object.input) {
                console.log(33333333333333);
                console.log('this.object.last ', this.object.last);
                if (this.object.last === 'win') {
                  this.object.levelup();
                  this.object.startIntro();
                  console.log(444444444444444);
                } else {
                  this.object.startIntro();
                  console.log(5555555555555555);
                }

                // this.object.levelup();
                // this.object.startIntro();
              } else if (!this.object.intro && !this.object.input) {
                if (this.object.last === 'win') {
                  this.object.levelup();
                  this.object.startNewLevel();
                } else {
                  this.object.startNewLevel();
                }
                // this.object.levelup();
                // this.object.startNewLevel();
              } else if (this.object.input) {
                this.object.playerCustomizer.setPlayerName(this.object.setStats.bind(this.object), this.object.levelup.bind(this.object), this.object.startIntro.bind(this.object));
              }
            }
            break;
          case 'Escape':
            console.log("ESC");
            //console.log(this.menu)
            //if (this.menu) {
            console.log('this.time', this.time);
            if (this.time === 'playtime') {
              this.pause = true;
              this.pause = this.menu.changePause(this.time);
              console.log('this.pause', this.pause);
            }

            //}

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
/* harmony import */ var _Platforma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platforma */ "./src/js/components/Platforma.js");
/* harmony import */ var _Collectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collectable */ "./src/js/components/Collectable.js");
/* harmony import */ var _utils_levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/levels */ "./src/js/utils/levels/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// entities




// maps






// resources
var Game = /*#__PURE__*/function () {
  function Game(player, playerCustom, controller, contextManager, imageManager, eventManager, depression, bug, collisionManager, menu) {
    _classCallCheck(this, Game);
    this.player = player;
    this.playerCustomizer = playerCustom;
    this.controller = controller;
    this.contextManager = contextManager;
    this.imageManager = imageManager;
    this.eventManager = eventManager;
    this.depression = depression;
    this.bug = bug;
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
      console.log('___setShowTime___');

      // глушим движок
      if (this.controller.currAnimId) this.controller.stop();
      // удалить старые листенеры 
      this.eventManager.removeListener();
      // отчистить все контексты
      this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
      this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
      // переключить на менежера
      this.contextManager.showManagerContext();
      // повесить один листенер
      this.eventManager.addListener(this, 'keyup');
    }
  }, {
    key: "setPlayTime",
    value: function setPlayTime() {
      console.log('___setPlayTime___');

      // удалить старые листенеры 
      this.eventManager.removeListener();
      // отчистить все контексты
      this.gameContext.clearRect(0, 0, this.gameContext.canvas.width, this.gameContext.canvas.height);
      this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);
      // переключить на игру
      this.contextManager.showGameContext();
      // повесить листенеры
      this.eventManager.addListener(this.player, 'keyup');
    }
  }, {
    key: "startIntro",
    value: function startIntro() {
      this.managerContext.clearRect(0, 0, this.managerContext.canvas.width, this.managerContext.canvas.height);

      //console.log('STAGE:', 'зашли в интро')

      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].introDone) {
        this.intro = false;
        //console.log('STAGE:', 'закончили интро')
      }

      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].input) {
        //take name
        //console.log('STAGE:', 'зашли в инпут')

        this.input = true;
        this.playerCustomizer.getPlayerName();
      }
      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].srcName && this.intro) {
        //console.log('STAGE:', 'показываем интро')
        this.imageManager.showImage(_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl].srcName);
      } else {
        if (this.player.gravity) {
          //console.log('STAGE:', 'начинаем уровень')
          this.startNewLevel();
        } else {
          //console.log('STAGE:', 'начинаем игру')
          this.startGame();
        }
      }
    }
  }, {
    key: "winLevel",
    value: function winLevel() {
      //console.log('STAGE:', 'выиграли уровень')
      this.last = 'win';
      console.log(this.last, '________________this.last');
      this.showLevelResult();
    }
  }, {
    key: "loseLevel",
    value: function loseLevel() {
      this.last = 'lose';
      console.log(this.last, '________________this.last');
      this.showLevelResult();
    }
  }, {
    key: "showLevelResult",
    value: function showLevelResult() {
      this.setShowTime();
      if (this.last === 'win') {
        this.imageManager.showImage('winlevel');
        //console.log('STAGE:', 'выиграли уровень - молдец')
      } else if (this.last === 'lose') {
        this.imageManager.showImage('nevergiveup');
        //console.log('STAGE:', 'выиграли уровень - не молдец')
      }

      if (_utils_levels__WEBPACK_IMPORTED_MODULE_3__["introData"][this.stats.lvl + 1].finish) {
        this.winGame();
      }
    }

    // showLevelResult(dead) {
    //     this.setShowTime();

    //     if (this.player.awaited === this.player.activated && !dead) {
    //         this.imageManager.showImage('winlevel')
    //         //console.log('STAGE:', 'выиграли уровень - молдец')
    //     }
    //     else if (dead) {
    //         this.imageManager.showImage('nevergiveup')
    //         //console.log('STAGE:', 'выиграли уровень - не молдец')
    //     }

    //     if (introData[this.stats.lvl+1].finish) {
    //         this.winGame();
    //     }

    // }
  }, {
    key: "winGame",
    value: function winGame() {
      this.setShowTime();
      this.imageManager.showImage('wingame');

      // удалить листенеры
      this.eventManager.removeListener();
    }
  }, {
    key: "startGame",
    value: function startGame() {
      console.log('START', this.stats);
      this.player = new this.player(this.gameContext, this.imageManager, this.stats.gravity, this.winLevel.bind(this), this.loseLevel.bind(this), this.playerCustomizer.setPlayerSkin(this.stats.name), this.playerCustomizer.getSkinId());
      this.controller = new this.controller(this.gameContext, this.collisionManager);
      this.menu.setCallbacks(this.controller.stop.bind(this.controller), this.controller["continue"].bind(this.controller));
      //this.eventManager.setControllerStop(this.controller.stop.bind(this.controller));
      //this.eventManager.setControllerStart(this.controller.continue.bind(this.controller));

      this.depression = new this.depression(this.gameContext, this.stats.gravity, this.imageManager.changeImage('depression'), this.loseLevel.bind(this));
      this.sprites = [this.player.getSprite(), this.depression.getSprite()];
      this.startNewLevel();
    }
  }, {
    key: "startNewLevel",
    value: function startNewLevel() {
      var _this = this;
      this.setPlayTime();
      this.player.begin();
      this.depression.begin();
      this.player.setLevelConditions(_utils_levels__WEBPACK_IMPORTED_MODULE_3__["ConditionMap"][this.stats.lvl]);

      // const platforms = PlatformMap[this.stats.lvl].map(element => {
      //     return new Platform(this.gameContext, element.x, element.y, element.name)
      // });

      var platforms = _utils_levels__WEBPACK_IMPORTED_MODULE_3__["PlatformMap"][this.stats.lvl].map(function (element) {
        return new _Platforma__WEBPACK_IMPORTED_MODULE_1__["default"](_this.gameContext, element.x, element.y, element.w, element.h);
      });
      var collectable = _utils_levels__WEBPACK_IMPORTED_MODULE_3__["BoosterMap"][this.stats.lvl].map(function (element) {
        return new _Collectable__WEBPACK_IMPORTED_MODULE_2__["default"](_this.gameContext, element.x, element.y, element.w, element.h, element.name, element.finish);
      });
      var bugs = _utils_levels__WEBPACK_IMPORTED_MODULE_3__["BugsMap"][this.stats.lvl].map(function (element) {
        //console.log('+++++++++',element)
        return new _this.bug(_this.gameContext, element.x, element.y, _this.imageManager.changeImage(element.name), element.name, element.magnet, _this.stats.gravity);
      });
      var bugSprites = bugs.map(function (element) {
        return element.getSprite();
      });
      this.sprites = [].concat(_toConsumableArray(this.sprites), _toConsumableArray(bugSprites));

      // + collectable
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
/* harmony import */ var _img_intro_intro1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/intro/intro1.jpg */ "./src/img/intro/intro1.jpg");
/* harmony import */ var _img_intro_intro2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/intro/intro2.jpg */ "./src/img/intro/intro2.jpg");
/* harmony import */ var _img_intro_intro3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/intro/intro3.jpg */ "./src/img/intro/intro3.jpg");
/* harmony import */ var _img_intro_intro5_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/intro/intro5.jpg */ "./src/img/intro/intro5.jpg");
/* harmony import */ var _img_intro_intro6_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/intro/intro6.jpg */ "./src/img/intro/intro6.jpg");
/* harmony import */ var _img_intro_intro7_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/intro/intro7.jpg */ "./src/img/intro/intro7.jpg");
/* harmony import */ var _img_intro_nevergiveup_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/intro/nevergiveup.jpg */ "./src/img/intro/nevergiveup.jpg");
/* harmony import */ var _img_intro_timeout_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/intro/timeout.jpg */ "./src/img/intro/timeout.jpg");
/* harmony import */ var _img_intro_wingame_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/intro/wingame.jpg */ "./src/img/intro/wingame.jpg");
/* harmony import */ var _img_intro_winlevel_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/intro/winlevel.jpg */ "./src/img/intro/winlevel.jpg");
/* harmony import */ var _img_intro_bugs_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/intro/bugs.jpg */ "./src/img/intro/bugs.jpg");
/* harmony import */ var _img_player_normalPlayerR_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/player/normalPlayerR.png */ "./src/img/player/normalPlayerR.png");
/* harmony import */ var _img_player_dimaPlayerR_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/player/dimaPlayerR.png */ "./src/img/player/dimaPlayerR.png");
/* harmony import */ var _img_player_dimaPlayerL_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/player/dimaPlayerL.png */ "./src/img/player/dimaPlayerL.png");
/* harmony import */ var _img_creatures_depression_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/creatures/depression.png */ "./src/img/creatures/depression.png");
/* harmony import */ var _img_creatures_bug_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../img/creatures/bug.png */ "./src/img/creatures/bug.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
















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
        this.managerContext.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
      } else {
        image.onload = function () {
          _this.managerContext.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
        };
      }
      this.managerContext.globalAlpha = 0.5;
    }
  }, {
    key: "changeImage",
    value: function changeImage(name) {
      var image = new Image();
      console.log('__________________________', name);
      switch (name) {
        case 'intro0':
          image.src = _img_intro_intro1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;
        case 'intro1':
          image.src = _img_intro_intro2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
          break;
        case 'intro2':
          image.src = _img_intro_intro3_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
          break;
        case 'intro4':
          image.src = _img_intro_intro5_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
          break;
        case 'intro6':
          image.src = _img_intro_intro6_jpg__WEBPACK_IMPORTED_MODULE_4__["default"];
          break;
        case 'intro7':
          image.src = _img_intro_intro7_jpg__WEBPACK_IMPORTED_MODULE_5__["default"];
          break;
        case 'bugs':
          image.src = _img_intro_bugs_jpg__WEBPACK_IMPORTED_MODULE_10__["default"];
          break;
        case 'timeout':
          image.src = _img_intro_timeout_jpg__WEBPACK_IMPORTED_MODULE_7__["default"];
          break;
        case 'nevergiveup':
          image.src = _img_intro_nevergiveup_jpg__WEBPACK_IMPORTED_MODULE_6__["default"];
          break;
        case 'winlevel':
          image.src = _img_intro_winlevel_jpg__WEBPACK_IMPORTED_MODULE_9__["default"];
          break;
        case 'wingame':
          image.src = _img_intro_wingame_jpg__WEBPACK_IMPORTED_MODULE_8__["default"];
          break;
        case 'Андрей':
          image.src = _img_intro_wingame_jpg__WEBPACK_IMPORTED_MODULE_8__["default"];
          break;
        case 'Дима':
        case 'dimaPlayerR':
          image.src = _img_player_dimaPlayerR_png__WEBPACK_IMPORTED_MODULE_12__["default"];
          break;
        case 'dimaPlayerL':
          image.src = _img_player_dimaPlayerL_png__WEBPACK_IMPORTED_MODULE_13__["default"];
          break;
        case 'Имя':
        case 'normalPlayerR':
        case 'normalPlayerL':
          image.src = _img_player_normalPlayerR_png__WEBPACK_IMPORTED_MODULE_11__["default"];
          break;
        case 'depression':
          image.src = _img_creatures_depression_png__WEBPACK_IMPORTED_MODULE_14__["default"];
          break;
        case 'bugL':
          image.src = _img_creatures_depression_png__WEBPACK_IMPORTED_MODULE_14__["default"];
          break;
        case 'bug':
        case 'bugR':
          image.src = _img_creatures_bug_png__WEBPACK_IMPORTED_MODULE_15__["default"];
          break;
        case 'bugDead':
          image.src = _img_creatures_depression_png__WEBPACK_IMPORTED_MODULE_14__["default"];
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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
        //} else {
        //this.controllerStop();
        // let f = this.contextManager.showManageContext.bind(this.contextManager);
        // f();

        // this.setshow();
        // this.imageManager.showImage('intro0')
        // this.pause = true;

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
          this.image.src = _img_surface_default_tile02_png__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/***/ "./src/js/components/Platforma.js":
/*!****************************************!*\
  !*** ./src/js/components/Platforma.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platforma; });
/* harmony import */ var _img_surface_default_tile01_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/surface/default/tile01.png */ "./src/img/surface/default/tile01.png");
/* harmony import */ var _img_surface_default_tile02_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/surface/default/tile02.png */ "./src/img/surface/default/tile02.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var Platforma = /*#__PURE__*/function () {
  function Platforma(context, x, y, width, height) {
    _classCallCheck(this, Platforma);
    this.position = {
      x: x,
      y: y
    };
    this.width = width;
    this.height = height;
    this.context = context;
    this.id = 'platform';
  }
  _createClass(Platforma, [{
    key: "draw",
    value: function draw() {
      this.context.fillStyle = 'red';
      this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "animate",
    value: function animate() {
      this.draw();
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
  return Platforma;
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

    //66
    //this.width = 240;
    // ! this.width = 220;
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

    //this.id = 'player';

    this.start();
  }
  _createClass(Player, [{
    key: "start",
    value: function start() {
      console.log('this.skin', this.skin);
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
      console.log('___________________________-', this.velocityRatio);
      this.update(this.horizon);
      if (this.position.y > this.context.canvas.height + this.height) {
        this.die();
      }

      //console.log('________ this.position', this.position)
      //console.log('________ this.horizon', this.horizon)
      //console.log('!!!,', this.dependent, typeof this.dependent)

      if (this.keys.left.pressed && this.position.x > 799) {
        this.goLeft();
      } else if (this.keys.left.pressed && this.position.x <= 799) {
        this.stopX();
        if (this.keys.left.pressed) {
          // 88 console.log(this.dependent)
          this.dependent.forEach(function (element) {
            // element.moveRight(this.velocity.x);
            element.moveRight(_this.velocityRatio);
          });
        }
      } else if (this.keys.right.pressed && this.position.x < 800) {
        this.goRight();
      } else if (this.keys.right.pressed && this.position.x >= 800) {
        this.stopX();
        if (this.keys.right.pressed) {
          // 88 console.log(this.dependent)
          this.dependent.forEach(function (element) {
            //element.moveLeft(this.velocity.x);
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
      this.activate();
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

      //console.log('go left', `${this.skin}L`)

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
        //this.loseCallback();
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
      this.bugsFixed = 0;
      this.sprite.updateImage(this.imageManager.changeImage("".concat(this.skin, "R")));
      this.position.x = 800;
      this.position.y = 100;
      this.velocity.y = 0;
    }

    // bounce() {
    //     this.stopY();
    //     this.velocity.y = this.velocity.y - 5;
    // }
  }, {
    key: "fixBug",
    value: function fixBug() {
      console.log('FIXED A BUG');
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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
      wrapperDiv.setAttribute('style', 'position:absolute; width:100vw; height:100vh; display:flex;');
      wrapperDiv.setAttribute('id', 'wrapperDiv');
      body.appendChild(wrapperDiv);
      var conteinerDiv = document.createElement('div');
      conteinerDiv.setAttribute('style', 'width:300px; height:300px; background:black; z-index: 5;');
      wrapperDiv.appendChild(conteinerDiv);
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
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
        inputElement.setAttribute('style', 'border: 2px solid red');
      }
    }
  }, {
    key: "setPlayerSkin",
    value: function setPlayerSkin(name) {
      var universalName = name.toLowerCase();
      console.log(313131, universalName);
      switch (universalName) {
        case 'андрей':
        case 'кобец':
        case 'кобеза':
        case 'kobezzza':
          this.skinId = 'andreyPlayer';
          return this.imageManager.changeImage('Андрей');
        case 'дима':
        case 'дмитрий':
        case 'димас':
        case 'димон':
        case 'димочка':
          this.skinId = 'dimaPlayer';
          console.log('!!!!!!!!!!!!!!!!', this.skinId);
          return this.imageManager.changeImage('Дима');
        default:
          this.skinId = 'normalPlayer';
          return this.imageManager.changeImage('Имя');
      }
    }
  }, {
    key: "getSkinId",
    value: function getSkinId() {
      console.log('getSkinId', this.skinId);
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
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
    x: 100,
    y: 800,
    name: "tile1",
    w: 200,
    h: 200
  }, {
    x: 0,
    y: 800,
    name: "tile1",
    w: 5000,
    h: 200
  }, {
    x: 1200,
    y: 600,
    name: "tile1",
    w: 200,
    h: 200
  }, {
    x: 1800,
    y: 0,
    name: "tile1",
    w: 200,
    h: 200
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
var BugsMap = {
  3: [{
    x: 100,
    y: 560,
    name: "bug",
    magnet: 100
  }],
  5: [{
    x: 100,
    y: 560,
    name: "bug",
    magnet: 100
  }],
  8: [{
    x: 100,
    y: 560,
    name: "bug",
    magnet: 100
  }],
  9: [{
    x: 100,
    y: 560,
    name: "bug",
    magnet: 100
  }]
};
var BoosterMap = {
  3: [{
    x: 100,
    y: 300,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 500,
    y: 700,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
  }, {
    x: 1200,
    y: 400,
    w: 70,
    h: 100,
    name: "lafore",
    finish: false
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
var ConditionMap = {
  3: 30,
  5: 10,
  8: 20,
  9: 3
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
    srcName: 'intro6'
  },
  7: {
    srcName: 'intro7'
  },
  8: {
    introDone: true
  },
  9: {},
  10: {
    finish: true
  },
  11: {}
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
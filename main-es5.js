function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/CustomObject.ts":
  /*!*********************************!*\
    !*** ./src/app/CustomObject.ts ***!
    \*********************************/

  /*! exports provided: CustomObject */

  /***/
  function srcAppCustomObjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomObject", function () {
      return CustomObject;
    });

    var CustomObject = /*#__PURE__*/function (_Phaser$GameObjects$R) {
      _inherits(CustomObject, _Phaser$GameObjects$R);

      var _super = _createSuper(CustomObject);

      function CustomObject(scene, x, y, width, height, fillColor) {
        var _this;

        _classCallCheck(this, CustomObject);

        _this = _super.call(this, scene, x, y, width, height, fillColor);
        scene.add.existing(_assertThisInitialized(_this));
        scene.physics.add.existing(_assertThisInitialized(_this));

        _this.body.setCollideWorldBounds(true);

        _this.objectCursors = scene.input.keyboard.createCursorKeys();

        _this.setOrigin(0, 0);

        _this.initialX = x;
        _this.initialY = y;
        return _this;
      }

      _createClass(CustomObject, [{
        key: "preUpdate",
        value: function preUpdate(time, delta) {
          this.movement();
          this.checkHealth();
        }
      }, {
        key: "getDamage",
        value: function getDamage(dmg) {
          this.health -= dmg;
          this.setPosition(this.initialX, this.initialY);
        }
      }, {
        key: "checkHealth",
        value: function checkHealth() {
          if (this.health <= 0) {
            console.log(":[");
            this.destroy();
          }
        }
      }, {
        key: "movement",
        value: function movement() {
          if (this.objectCursors.left.isDown) {
            this.body.setVelocityX(-160);
          } else if (this.objectCursors.right.isDown) {
            this.body.setVelocityX(160);
          } else {
            this.body.setVelocityX(0);
          }

          if (this.objectCursors.up.isDown && this.body.touching.down) {
            this.body.setVelocityY(-300);
          }
        }
      }, {
        key: "personalScore",
        get: function get() {
          if (this._personalScore === undefined) {
            this._personalScore = 0;
          }

          return this._personalScore;
        },
        set: function set(v) {
          this._personalScore = v;
        }
      }, {
        key: "health",
        get: function get() {
          if (this._health === undefined) {
            this._health = 3;
          }

          return this._health;
        },
        set: function set(v) {
          this._health = v;
        }
      }]);

      return CustomObject;
    }(Phaser.GameObjects.Rectangle);
    /***/

  },

  /***/
  "./src/app/EnemyObject.ts":
  /*!********************************!*\
    !*** ./src/app/EnemyObject.ts ***!
    \********************************/

  /*! exports provided: EnemyObject */

  /***/
  function srcAppEnemyObjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnemyObject", function () {
      return EnemyObject;
    });
    /* harmony import */


    var _CustomObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./CustomObject */
    "./src/app/CustomObject.ts");

    var EnemyObject = /*#__PURE__*/function (_Phaser$GameObjects$R2) {
      _inherits(EnemyObject, _Phaser$GameObjects$R2);

      var _super2 = _createSuper(EnemyObject);

      function EnemyObject(scene, x, y, width, height, fillColor, playerRef) {
        var _this2;

        _classCallCheck(this, EnemyObject);

        _this2 = _super2.call(this, scene, x, y, width, height, fillColor);
        scene.add.existing(_assertThisInitialized(_this2));
        scene.physics.add.existing(_assertThisInitialized(_this2));
        _this2.body.allowGravity = false;

        _this2.setOrigin(0, 0);

        scene.physics.add.overlap(playerRef, _assertThisInitialized(_this2), _this2.overlapAction, null, null);
        return _this2;
      }

      _createClass(EnemyObject, [{
        key: "preUpdate",
        value: function preUpdate(time, delta) {}
      }, {
        key: "overlapAction",
        value: function overlapAction(referenced, that) {
          if (referenced instanceof _CustomObject__WEBPACK_IMPORTED_MODULE_0__["CustomObject"]) {
            referenced.getDamage(1);
          }
        }
      }]);

      return EnemyObject;
    }(Phaser.GameObjects.Rectangle);
    /***/

  },

  /***/
  "./src/app/PointObject.ts":
  /*!********************************!*\
    !*** ./src/app/PointObject.ts ***!
    \********************************/

  /*! exports provided: PointsObject */

  /***/
  function srcAppPointObjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointsObject", function () {
      return PointsObject;
    });
    /* harmony import */


    var _CustomObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./CustomObject */
    "./src/app/CustomObject.ts");

    var PointsObject = /*#__PURE__*/function (_Phaser$GameObjects$R3) {
      _inherits(PointsObject, _Phaser$GameObjects$R3);

      var _super3 = _createSuper(PointsObject);

      function PointsObject(scene, x, y, width, height, fillColor, playerRef) {
        var _this3;

        _classCallCheck(this, PointsObject);

        _this3 = _super3.call(this, scene, x, y, width, height, fillColor);
        scene.add.existing(_assertThisInitialized(_this3));
        scene.physics.add.existing(_assertThisInitialized(_this3));
        _this3.body.allowGravity = false;

        _this3.setOrigin(0, 0);

        scene.physics.add.overlap(playerRef, _assertThisInitialized(_this3), _this3.overlapAction, null, null);
        return _this3;
      }

      _createClass(PointsObject, [{
        key: "preUpdate",
        value: function preUpdate(time, delta) {}
      }, {
        key: "overlapAction",
        value: function overlapAction(referenced, that) {
          if (referenced instanceof _CustomObject__WEBPACK_IMPORTED_MODULE_0__["CustomObject"]) {
            referenced.personalScore += 100;
            that.destroy();
          }
        }
      }]);

      return PointsObject;
    }(Phaser.GameObjects.Rectangle);
    /***/

  },

  /***/
  "./src/app/TextObject.ts":
  /*!*******************************!*\
    !*** ./src/app/TextObject.ts ***!
    \*******************************/

  /*! exports provided: TextObject */

  /***/
  function srcAppTextObjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextObject", function () {
      return TextObject;
    });

    var TextObject = /*#__PURE__*/function (_Phaser$GameObjects$T) {
      _inherits(TextObject, _Phaser$GameObjects$T);

      var _super4 = _createSuper(TextObject);

      function TextObject(scene, x, y, refered, style) {
        var _this4;

        _classCallCheck(this, TextObject);

        _this4 = _super4.call(this, scene, x, y, '', style);
        scene.add.existing(_assertThisInitialized(_this4));

        _this4.setOrigin(0, 0);

        _this4.referedFunc = refered; //this.referedObject=refered;

        return _this4;
      }

      _createClass(TextObject, [{
        key: "preUpdate",
        value: function preUpdate(time, delta) {
          this.setText(this.referedFunc());
        }
      }]);

      return TextObject;
    }(Phaser.GameObjects.Text);
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'phaser-angular-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-game");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./game/game.component */
    "./src/app/game/game.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ctrlphs.service.ts":
  /*!************************************!*\
    !*** ./src/app/ctrlphs.service.ts ***!
    \************************************/

  /*! exports provided: CtrlphsService */

  /***/
  function srcAppCtrlphsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CtrlphsService", function () {
      return CtrlphsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CtrlphsService = /*#__PURE__*/function () {
      function CtrlphsService(http) {
        _classCallCheck(this, CtrlphsService);

        this.http = http;
        this.dataUrl = 'static-pages/MyFile.json';
      }

      _createClass(CtrlphsService, [{
        key: "getData",
        value: function getData(name) {
          return this.http.get(this.dataUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            return x.find(function (xx) {
              return xx.Name === name;
            });
          }));
        }
      }]);

      return CtrlphsService;
    }();

    CtrlphsService.ɵfac = function CtrlphsService_Factory(t) {
      return new (t || CtrlphsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CtrlphsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CtrlphsService,
      factory: CtrlphsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtrlphsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/game/game.component.ts":
  /*!****************************************!*\
    !*** ./src/app/game/game.component.ts ***!
    \****************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! phaser */
    "./node_modules/phaser/src/phaser.js");
    /* harmony import */


    var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _mainScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mainScene */
    "./src/app/mainScene.ts");
    /* harmony import */


    var _ctrlphs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ctrlphs.service */
    "./src/app/ctrlphs.service.ts");

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent(ctrlphsService) {
        _classCallCheck(this, GameComponent);

        this.ctrlphsService = ctrlphsService;
        this.config = {
          type: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.AUTO,
          height: 600,
          width: 800,
          //scene: [MainScene],
          parent: 'gameContainer',
          backgroundColor: '#dddddd',
          physics: {
            "default": 'arcade',
            arcade: {
              gravity: {
                y: 300
              }
            }
          }
        };
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.phaserGame = new phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Game(this.config);
        }
      }, {
        key: "callScene",
        value: function callScene(sceneName) {
          this.loadScene(sceneName);
        }
      }, {
        key: "loadScene",
        value: function loadScene(sceneName) {
          var _this5 = this;

          this.ctrlphsService.getData(sceneName).subscribe(function (x) {
            if (_this5.phaserGame.scene.getScenes(true).length) {
              var nm = _this5.phaserGame.scene.getScenes(true)[0].scene.key;

              _this5.phaserGame.scene.stop(nm);

              _this5.phaserGame.scene.remove(nm);
            }

            _this5.phaserGame.scene.add(sceneName, new _mainScene__WEBPACK_IMPORTED_MODULE_2__["MainScene"](x));

            _this5.phaserGame.scene.start(sceneName);
          });
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ctrlphs_service__WEBPACK_IMPORTED_MODULE_3__["CtrlphsService"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      decls: 7,
      vars: 0,
      consts: [[1, "gameSection"], ["id", "gameContainer"], [3, "click"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_3_listener() {
            return ctx.callScene("sceneA");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "scene a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_5_listener() {
            return ctx.callScene("sceneB");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "scene b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game',
          templateUrl: './game.component.html',
          styleUrls: ['./game.component.css']
        }]
      }], function () {
        return [{
          type: _ctrlphs_service__WEBPACK_IMPORTED_MODULE_3__["CtrlphsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainScene.ts":
  /*!******************************!*\
    !*** ./src/app/mainScene.ts ***!
    \******************************/

  /*! exports provided: MainScene */

  /***/
  function srcAppMainSceneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainScene", function () {
      return MainScene;
    });
    /* harmony import */


    var _CustomObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./CustomObject */
    "./src/app/CustomObject.ts");
    /* harmony import */


    var _EnemyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./EnemyObject */
    "./src/app/EnemyObject.ts");
    /* harmony import */


    var _PointObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./PointObject */
    "./src/app/PointObject.ts");
    /* harmony import */


    var _TextObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./TextObject */
    "./src/app/TextObject.ts");

    var MainScene = /*#__PURE__*/function (_Phaser$Scene) {
      _inherits(MainScene, _Phaser$Scene);

      var _super5 = _createSuper(MainScene);

      function MainScene(dataScene) {
        var _this6;

        _classCallCheck(this, MainScene);

        _this6 = _super5.call(this, {
          key: dataScene.Name
        });
        _this6.currentDataScene = dataScene;
        return _this6;
      }

      _createClass(MainScene, [{
        key: "create",
        value: function create() {
          var _this7 = this;

          this.platforms = this.physics.add.staticGroup();
          this.commonFoes = this.add.group();
          this.points = this.add.group();
          this.texts = this.add.group();
          this.square = new _CustomObject__WEBPACK_IMPORTED_MODULE_0__["CustomObject"](this.scene.scene, this.currentDataScene.InitialLocation.x, this.currentDataScene.InitialLocation.y, 100, 100, 0x0074ff);
          this.loadPlatforms(this.currentDataScene.Platforms);
          this.loadEnemies(this.currentDataScene.Enemies);
          this.loadPoints(this.currentDataScene.Points);
          this.texts.add(new _TextObject__WEBPACK_IMPORTED_MODULE_3__["TextObject"](this.scene.scene, 0, 0, function () {
            return "Score: ".concat(_this7.square.personalScore, " Health: ").concat(_this7.square.health);
          }, {
            fontSize: '16px',
            color: '#000'
          }));
        }
      }, {
        key: "preload",
        value: function preload() {}
      }, {
        key: "update",
        value: function update() {}
      }, {
        key: "loadEnemies",
        value: function loadEnemies(enemies) {
          var _iterator = _createForOfIteratorHelper(enemies),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var enemy = _step.value;
              this.commonFoes.add(new _EnemyObject__WEBPACK_IMPORTED_MODULE_1__["EnemyObject"](this.scene.scene, enemy.x, enemy.y, 50, 50, 0x940900, this.square));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "loadPlatforms",
        value: function loadPlatforms(platforms) {
          var _iterator2 = _createForOfIteratorHelper(platforms),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var platform = _step2.value;
              this.platforms.add(this.add.rectangle(platform.x, platform.y, platform.width, 100, 0x00b940).setOrigin(0, 0));
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.physics.add.collider(this.square, this.platforms);
        }
      }, {
        key: "loadPoints",
        value: function loadPoints(points) {
          var _iterator3 = _createForOfIteratorHelper(points),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var point = _step3.value;
              this.points.add(new _PointObject__WEBPACK_IMPORTED_MODULE_2__["PointsObject"](this.scene.scene, point.x, point.y, 50, 50, 0xfff237, this.square));
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }]);

      return MainScene;
    }(Phaser.Scene);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\oscar\Documents\WebDev\PhaserAngular\phaser-angular-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
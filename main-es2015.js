(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CustomObject.ts":
/*!*********************************!*\
  !*** ./src/app/CustomObject.ts ***!
  \*********************************/
/*! exports provided: CustomObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomObject", function() { return CustomObject; });
class CustomObject extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, fillColor) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.objectCursors = scene.input.keyboard.createCursorKeys();
        this.setOrigin(0, 0);
        this.initialX = x;
        this.initialY = y;
    }
    get personalScore() {
        if (this._personalScore === undefined) {
            this._personalScore = 0;
        }
        return this._personalScore;
    }
    set personalScore(v) {
        this._personalScore = v;
    }
    get health() {
        if (this._health === undefined) {
            this._health = 3;
        }
        return this._health;
    }
    set health(v) {
        this._health = v;
    }
    preUpdate(time, delta) {
        this.movement();
        this.checkHealth();
    }
    getDamage(dmg) {
        this.health -= dmg;
        this.setPosition(this.initialX, this.initialY);
    }
    checkHealth() {
        if (this.health <= 0) {
            console.log(":[");
            this.destroy();
        }
    }
    movement() {
        if (this.objectCursors.left.isDown) {
            this.body.setVelocityX(-160);
        }
        else if (this.objectCursors.right.isDown) {
            this.body.setVelocityX(160);
        }
        else {
            this.body.setVelocityX(0);
        }
        if (this.objectCursors.up.isDown && this.body.touching.down) {
            this.body.setVelocityY(-300);
        }
    }
}


/***/ }),

/***/ "./src/app/EnemyObject.ts":
/*!********************************!*\
  !*** ./src/app/EnemyObject.ts ***!
  \********************************/
/*! exports provided: EnemyObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyObject", function() { return EnemyObject; });
/* harmony import */ var _CustomObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomObject */ "./src/app/CustomObject.ts");

class EnemyObject extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, fillColor, playerRef) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setOrigin(0, 0);
        scene.physics.add.overlap(playerRef, this, this.overlapAction, null, null);
    }
    preUpdate(time, delta) {
    }
    overlapAction(referenced, that) {
        if (referenced instanceof _CustomObject__WEBPACK_IMPORTED_MODULE_0__["CustomObject"]) {
            referenced.getDamage(1);
        }
    }
}


/***/ }),

/***/ "./src/app/PointObject.ts":
/*!********************************!*\
  !*** ./src/app/PointObject.ts ***!
  \********************************/
/*! exports provided: PointsObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsObject", function() { return PointsObject; });
/* harmony import */ var _CustomObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomObject */ "./src/app/CustomObject.ts");

class PointsObject extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y, width, height, fillColor, playerRef) {
        super(scene, x, y, width, height, fillColor);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.setOrigin(0, 0);
        scene.physics.add.overlap(playerRef, this, this.overlapAction, null, null);
    }
    preUpdate(time, delta) {
    }
    overlapAction(referenced, that) {
        if (referenced instanceof _CustomObject__WEBPACK_IMPORTED_MODULE_0__["CustomObject"]) {
            referenced.personalScore += 100;
            that.destroy();
        }
    }
}


/***/ }),

/***/ "./src/app/TextObject.ts":
/*!*******************************!*\
  !*** ./src/app/TextObject.ts ***!
  \*******************************/
/*! exports provided: TextObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextObject", function() { return TextObject; });
class TextObject extends Phaser.GameObjects.Text {
    constructor(scene, x, y, refered, style) {
        super(scene, x, y, '', style);
        scene.add.existing(this);
        this.setOrigin(0, 0);
        this.referedFunc = refered;
        //this.referedObject=refered;
    }
    preUpdate(time, delta) {
        this.setText(this.referedFunc());
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");




class AppComponent {
    constructor() {
        this.title = 'phaser-angular-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-game");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ctrlphs.service.ts":
/*!************************************!*\
  !*** ./src/app/ctrlphs.service.ts ***!
  \************************************/
/*! exports provided: CtrlphsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtrlphsService", function() { return CtrlphsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CtrlphsService {
    constructor(http) {
        this.http = http;
        this.dataUrl = 'static-pages/MyFile.json';
    }
    getData(name) {
        return this.http.get(this.dataUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => { return x.find(xx => xx.Name === name); }));
    }
}
CtrlphsService.ɵfac = function CtrlphsService_Factory(t) { return new (t || CtrlphsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CtrlphsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CtrlphsService, factory: CtrlphsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtrlphsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mainScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mainScene */ "./src/app/mainScene.ts");
/* harmony import */ var _ctrlphs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ctrlphs.service */ "./src/app/ctrlphs.service.ts");





class GameComponent {
    constructor(ctrlphsService) {
        this.ctrlphsService = ctrlphsService;
        this.config = {
            type: phaser__WEBPACK_IMPORTED_MODULE_1___default.a.AUTO,
            height: 600,
            width: 800,
            //scene: [MainScene],
            parent: 'gameContainer',
            backgroundColor: '#dddddd',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 }
                }
            }
        };
    }
    ngOnInit() {
        this.phaserGame = new phaser__WEBPACK_IMPORTED_MODULE_1___default.a.Game(this.config);
    }
    callScene(sceneName) {
        this.loadScene(sceneName);
    }
    loadScene(sceneName) {
        this.ctrlphsService.getData(sceneName).subscribe(x => {
            if (this.phaserGame.scene.getScenes(true).length) {
                let nm = this.phaserGame.scene.getScenes(true)[0].scene.key;
                this.phaserGame.scene.stop(nm);
                this.phaserGame.scene.remove(nm);
            }
            this.phaserGame.scene.add(sceneName, new _mainScene__WEBPACK_IMPORTED_MODULE_2__["MainScene"](x));
            this.phaserGame.scene.start(sceneName);
        });
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ctrlphs_service__WEBPACK_IMPORTED_MODULE_3__["CtrlphsService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 7, vars: 0, consts: [[1, "gameSection"], ["id", "gameContainer"], [3, "click"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_3_listener() { return ctx.callScene("sceneA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "scene a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_5_listener() { return ctx.callScene("sceneB"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "scene b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return [{ type: _ctrlphs_service__WEBPACK_IMPORTED_MODULE_3__["CtrlphsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mainScene.ts":
/*!******************************!*\
  !*** ./src/app/mainScene.ts ***!
  \******************************/
/*! exports provided: MainScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScene", function() { return MainScene; });
/* harmony import */ var _CustomObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomObject */ "./src/app/CustomObject.ts");
/* harmony import */ var _EnemyObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnemyObject */ "./src/app/EnemyObject.ts");
/* harmony import */ var _PointObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointObject */ "./src/app/PointObject.ts");
/* harmony import */ var _TextObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextObject */ "./src/app/TextObject.ts");




class MainScene extends Phaser.Scene {
    constructor(dataScene) {
        super({ key: dataScene.Name });
        this.currentDataScene = dataScene;
    }
    create() {
        this.platforms = this.physics.add.staticGroup();
        this.commonFoes = this.add.group();
        this.points = this.add.group();
        this.texts = this.add.group();
        this.square = new _CustomObject__WEBPACK_IMPORTED_MODULE_0__["CustomObject"](this.scene.scene, this.currentDataScene.InitialLocation.x, this.currentDataScene.InitialLocation.y, 100, 100, 0x0074ff);
        this.loadPlatforms(this.currentDataScene.Platforms);
        this.loadEnemies(this.currentDataScene.Enemies);
        this.loadPoints(this.currentDataScene.Points);
        this.texts.add(new _TextObject__WEBPACK_IMPORTED_MODULE_3__["TextObject"](this.scene.scene, 0, 0, (() => { return `Score: ${this.square.personalScore} Health: ${this.square.health}`; }), { fontSize: '16px', color: '#000' }));
    }
    preload() {
    }
    update() {
    }
    loadEnemies(enemies) {
        for (let enemy of enemies) {
            this.commonFoes.add(new _EnemyObject__WEBPACK_IMPORTED_MODULE_1__["EnemyObject"](this.scene.scene, enemy.x, enemy.y, 50, 50, 0x940900, this.square));
        }
    }
    loadPlatforms(platforms) {
        for (let platform of platforms) {
            this.platforms.add(this.add.rectangle(platform.x, platform.y, platform.width, 100, 0x00b940).setOrigin(0, 0));
        }
        this.physics.add.collider(this.square, this.platforms);
    }
    loadPoints(points) {
        for (let point of points) {
            this.points.add(new _PointObject__WEBPACK_IMPORTED_MODULE_2__["PointsObject"](this.scene.scene, point.x, point.y, 50, 50, 0xfff237, this.square));
        }
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\oscar\Documents\WebDev\PhaserAngular\phaser-angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
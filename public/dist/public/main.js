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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lyrics/lyrics.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lyrics/lyrics.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"align\">\n\n  <input type=\"text\" [(ngModel)]=\"artist\" placeholder=\" Enter artist's name\" class=\"align\" id=\"ip2\">\n  </div>\n  <div class=\"align\">\n \n  <input type=\"text\" [(ngModel)]=\"title\" placeholder=\" Enter name of song\" class=\"align\" id=\"ip2\">\n  </div>\n  <div class=\"align\">\n  <button ion-button round (click)=\"getLyrics()\" >\n    Get Lyrics\n  </button>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playing/playing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playing/playing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Party Playing</title>\n\n  <!-- Compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n\n  <!-- Compiled and minified JavaScript -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n\n  <!-- Icons -->\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n</head>\n\n<body>\n  <mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n\n    <!-- SideNav elements here -->\n    <mat-sidenav class = \"blue-bg\" style = \"text-align: center;\" #sidenav mode=\"side\">\n      <div class=\"row\" style=\"z-index:1\">\n        <a  *ngIf=\"PL !== null\" routerLink=\"/{{PL.id}}/search/{{socketId}}\" class=\"waves-effect waves-light btn charcoal-bg\" style=\"    \n        margin-top: 10%;\n    left: -6%;\n    margin-bottom: 11%;\n    padding-left: 13%;\n    padding-right: 12%;\">🔎 Search</a>\n\n\n\n        <a *ngIf=\"PL !== null\" routerLink=\"/{{PL.id}}/playlist/{{socketId}}\" class=\"waves-effect waves-light btn charcoal-bg\" style=\"\n                                        \n                                        position: relative;\n    margin-top: 9%;\n    left: -7%;\n    padding-left: 8%;\n    padding-right: 9%;\n    border-radius: 6%;\">🎶 Playlist</a>\n      </div>\n\n\n      <div *ngIf=\"PL !== null\">\n        <h5 class=\"down\" style=\"font-weight: bold\">🎤 {{PL.id}}'s singers 🎤</h5>\n        <div *ngFor=\"let user of PL.users\">\n          <p class=\"pad-3\" style=\"text-align: center\">{{user.substring(1, 7)}}</p>\n          <div class=\"charcoal-f divider\">\n          </div>\n        </div>\n      </div>\n\n    </mat-sidenav>\n\n    <!-- Main Content here -->\n    <mat-sidenav-content class=\"charcoal-bg\">\n\n      <p><button class=\"sideNavTrigger btn\" style=\"background-color: #00A8E0\" mat-button (click)=\"sidenav.toggle()\"><i\n            class=\" material-icons\">menu</i></button></p>\n\n\n      <!-- Spot for video -->\n      <div class=\"container youtube-player\" *ngIf=\"videoID\">\n    <section class=\"panel panel-info\">\n     \n      <div class=\"panel-body\">\n        <!-- {{videoID}} -->\n        <youtube-player\n          videoId=\"{{videoID}}\"\n          (ready)=\"savePlayer($event)\"\n          (change)=\"onStateChange($event)\"\n          width=\"303\"\n          height=\"80\"\n          \n        >\n        </youtube-player>\n      </div>\n    </section>\n\n\n  </div>\n          <!-- DIV FOR HECTOR/JOSH -->\n          <!-- <div style = \"height: 100px; width: 303px; background-color:black\">\n          </div> -->\n\n          <!-- <div class=\"pad-10\" style = \"background-color: #00A8E0; margin-top: 2%; margin-bottom: -2%;\">\n              <p class=\"white-f overflow\"></p>\n            </div> -->\n            <div class = \"center\">\n        \n              \n                <ack-webcam\n              [options] = \"options\"\n            \n              ></ack-webcam>\n            </div>\n\n\n  \n\n\n\n      <!-- Div for lyrics -->\n   <div class=\"pad-10\" style = \"margin-top: -5%;\"> \n        <p class=\"white-f overflow\" *ngIf = \"currLyrics != ''\">\n          {{currLyrics}}\n        \n        </p>\n      </div>\n\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</body>\n\n</html> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Party Playing</title>\n\n  <!-- Compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n\n  <!-- Compiled and minified JavaScript -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n\n  <!-- Icons -->\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n</head>\n\n<body>\n  <mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n\n    <!-- SideNav elements here -->\n    <mat-sidenav class=\"blue-bg\" style=\"text-align: center;\" #sidenav mode=\"side\" [(opened)]=\"opened\"\n      (opened)=\"events.push('open!')\" (closed)=\"events.push('close!')\">\n      <div class=\"row\" style=\"z-index:1\">\n          <a  *ngIf=\"PL !== null\" routerLink=\"/{{PL.id}}/search/{{socketId}}\" class=\"waves-effect waves-light btn charcoal-bg\" style=\"    \n          margin-top: 10%;\n      left: -6%;\n      margin-bottom: 11%;\n      padding-left: 13%;\n      padding-right: 12%;\">🔎 Search</a>\n  \n  \n  \n          <a *ngIf=\"PL !== null\" routerLink=\"/{{PL.id}}/playing/{{socketId}}\" class=\"waves-effect waves-light btn charcoal-bg\" style=\"\n                                          \n                                          position: relative;\n      margin-top: 9%;\n      left: -7%;\n      padding-left: 8%;\n      padding-right: 9%;\n      border-radius: 6%;\">🎶 Playing</a>\n        </div>\n\n      <div *ngIf=\"PL !== null\">\n        <h5 class=\"down\" style=\"font-weight: bold\">🎤 {{PL.id}}'s singers 🎤</h5>\n        <div *ngFor=\"let user of PL.users\">\n          <p class=\"pad-4\" style=\"text-align: center\">{{user.substring(1, 7)}}</p>\n          <div class=\"charcoal-f divider\">\n          </div>\n        </div>\n      </div>\n\n    </mat-sidenav>\n\n    <!-- Main Content here -->\n    <mat-sidenav-content class=\"charcoal-bg\">\n\n      <p><button class=\"sideNavTrigger btn\" style=\"background-color: #00A8E0\" mat-button (click)=\"sidenav.toggle()\"><i\n            class=\" material-icons\">menu</i></button></p>\n\n\n      <!-- Div for lyrics -->\n      <div class=\"pad-10\">\n        <div class=\"white-f overflow\">\n\n  <div class=\"row\">\n        <div class=\"card-panel lighten-2\" style=\"background-color: #00A8E0;\" *ngFor=\"let song of PL.songs\">{{song.videoTitle}}\n            <span style = \"color: #222831;\"> Sung by: {{song.singer}}</span>\n        </div>\n      </div>\n        </div>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</body>\n\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n<script src=\"https://apis.google.com/js/client.js?onload=handleClientLoad\"></script>\n<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js\"></script>\n<script src=\"https://apis.google.com/js/client.js?onload=googleApiClientReady\"></script>\n<script src=\"jquery-3.4.1.min.js\"></script>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js\"></script>\n<link href=\"https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap\" rel=\"stylesheet\">\n<script src=\"https://code.jquery.com/jquery-3.4.1.js\" integrity=\"sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=\"\n  crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js\"></script>\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<body style = \"background-color: #222831\">\n  <div class=\"mx-auto\">\n    <div class=\"row\">\n      <div class = \"col-1\"></div>\n      <div class=\"col-10\">\n      <div class=\"container\"><h3 style = \"color: #00A8E0\">Search</h3></div>\n      <div class=\"card mb-4\">\n        <div class=\"card-header\">\n            <form (submit)=\"myFunction()\">\n                <div class=\"form-row align-items-center\">\n                  <div class=\"col-md-12\">\n                    <input class=\"form-control mx-auto d-inline-block mb-2\" name=\"query\"\n                  [(ngModel)]=\"search.query1\" type=\"text\" placeholder=\"Artist\" />\n                  </div>\n                  <div class=\"col-md-12\">\n                      <input class=\"form-control mx-auto d-inline-block mb-2\" name=\"query2\"\n                    [(ngModel)]=\"search.query2\" type=\"text\" placeholder=\"Song Title\" />\n                    </div>\n                  <div class=\"col-sm-4\">\n                      <button type=\"submit\" class=\"btn\" style = \"background-color: #00A8E0\">Find</button>\n                  </div>\n                </div>\n              </form>\n            <!-- <form (submit)=\"myFunction()\">\n                <div class=\"input-group\">\n                    <input class=\"form-control mx-auto d-inline-block\" name=\"query\"\n                    [(ngModel)]=\"search.query\" type=\"text\" placeholder=\"Look for Songs\" />\n                    <div class=\"input-group-append\">\n                      <button type=\"submit\" class=\"btn\" style = \"background-color: #00A8E0\">Find</button>\n                    </div>\n                  </div>\n              </form> -->\n            <div class=\"overflow-auto\" *ngIf=\"search != null\">\n              <!-- <div id =\"results\"> -->\n                  <div id =\"results1\"></div>\n                  <div id =\"results2\"></div>\n                  <div id =\"results3\"></div>\n                  <div id =\"results4\"></div>\n                  <div id =\"results5\"></div>\n                  <div id =\"results6\"></div>\n                  <div id =\"results7\"></div>\n                  <div id =\"results8\"></div>\n                  <div id =\"results9\"></div>\n                  <div id =\"results10\"></div>\n\n              <!-- </div> -->\n                <!-- <div id=\"results\" *ngFor=\"let result of searchResults\">\n                  <p style = \"color:white\">{{result.snippet.title}}</p>\n                </div> -->\n            </div>\n\n          <!-- <form #form action=\"http://www.youtube.com/results\" method=\"get\" target=\"_blank\">\n            <div class=\"input-group\">\n              <input class=\"form-control mx-auto d-inline-block\" name=\"search_query\" type=\"text\" placeholder=\"Look for Playlists\" />\n              <div class=\"input-group-append\">\n                <button type=\"submit\" class=\"btn btn-danger\" (click)=\"form.submit()\">Find</button>\n              </div>\n            </div>\n          </form> -->\n\n        </div>\n      \n        </div>\n      </div>\n    </div>\n    <div class = \"col-1\"></div>\n  </div>\n</body>\n</html>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Welcome Page</title>\n\n    <!-- Compiled and minified CSS -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\">\n\n    <!-- Compiled and minified JavaScript -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n\n    <!-- Icons From Materialize -->\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    <!-- Format: <i class=\"material-icons\">add</i> -->\n    <link href=\"https://fonts.googleapis.com/css?family=Mansalva&display=swap\" rel=\"stylesheet\">\n\n</head>\n\n<body>\n    <div class=\"container row\" style = \"text-align: center\">\n        <header>\n            \n        </header>\n\n        <main class=\"row\">\n            <div class=\"selection col s7 white-bg border-rad blue-border\" style=\"position: relative; padding: 0; left:21.5%; margin-top: 35px;\">\n                <h5 class=\"m-top-0 blue-bg center\"> Join Party</h5>\n                <form (submit)=\"joinRoom()\" class=\"row\">\n                    <div>\n                        <input class=\"col s8 center push-s2\" placeholder=\"Room Name\" type=\"text\" name=\"room\" [(ngModel)]=\"roomName\">\n                    </div> <br> <br> <br>\n                    <button style=\"left: 22%;\" class=\"col push-s4 btn waves blue-bg\">Enter Room</button>\n                </form>\n            </div>\n            <div>\n\n                    <img src=\"assets/img/shareoke.png\" width=\"280px\" height=\"320px\" style = \"margin-top: 7%\">\n            </div>\n\n        </main>\n\n\n\n\n\n    </div>\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _playing_playing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playing/playing.component */ "./src/app/playing/playing.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");







// import { SingStarComponent } from './sing-star/sing-star.component'
const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"],
    },
    {
        path: ':room/playing/:user',
        component: _playing_playing_component__WEBPACK_IMPORTED_MODULE_5__["PlayingComponent"],
    },
    {
        path: ':room/search/:user',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
    },
    {
        path: ':room/playlist/:user',
        component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");





let AppComponent = class AppComponent {
    constructor(_httpService, _router, _socket) {
        this._httpService = _httpService;
        this._router = _router;
        this._socket = _socket;
        this.title = 'shar-E-oke';
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-webcam */ "./node_modules/ack-angular-webcam/index.js");
/* harmony import */ var ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _playing_playing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playing/playing.component */ "./src/app/playing/playing.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var ng_gapi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-gapi */ "./node_modules/ng-gapi/lib/index.js");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lyrics/lyrics.component */ "./src/app/lyrics/lyrics.component.ts");















// Hector
// const config: SocketIoConfig = { url: '10.64.5.159:3333', options: {} };
// Jose
// const config: SocketIoConfig = { url: '10.64.5.216:3333', options: {} };
// Jamey
// const config: SocketIoConfig = { url: '172.20.10.2.:3333', options: {} };
const config = { url: '10.64.5.163:3333', options: {} };
// const config: SocketIoConfig = { url: '10.64.5.163:3333', options: {} };
// JOSH.... JOOOOOOOOOSH!!!!!!!!!!!!!
// const config: SocketIoConfig = { url: '192.168.43.19:3333', options: {} };


// SideNav




let gapiClientConfig = {
    client_id: "CLIENT_ID",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    scope: [
        "https://www.googleapis.com/auth/analytics.readonly",
        "https://www.googleapis.com/auth/analytics"
    ].join(" ")
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
            _playing_playing_component__WEBPACK_IMPORTED_MODULE_9__["PlayingComponent"],
            _playing_playing_component__WEBPACK_IMPORTED_MODULE_9__["SafePipe"],
            _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_16__["PlaylistComponent"],
            _lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_19__["LyricsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_11__["NgxYoutubePlayerModule"].forRoot(),
            // YoutubePlayerModule,npm i ngx-youtube-player
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3__["WebCamModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            ng_gapi__WEBPACK_IMPORTED_MODULE_15__["GoogleApiModule"].forRoot({
                provide: ng_gapi__WEBPACK_IMPORTED_MODULE_15__["NG_GAPI_CONFIG"],
                useValue: gapiClientConfig
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_8__["ZXingScannerModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_14__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");



var io;
let DataServiceService = class DataServiceService {
    constructor() { }
    getVideoChunks() {
        this.socket.on('broadcast', (res) => {
            this.observer.next(res.data);
        });
        return this.createObservable();
    }
    createObservable() {
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.observer = observer;
        });
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMessage);
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'Socket.io server error');
    }
};
DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataServiceService);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    createPlaylist(playlist) {
        return this._http.post('/api/playlist', playlist);
    }
    getPlaylist(id) {
        return this._http.get('/api/playlist/' + id);
    }
    updatePlaylist(playlist) {
        return this._http.put(`/api/playlist/${playlist.id}`, playlist);
    }
    deletePlaylist(id) {
        return this._http.delete('/api/playlist/' + id);
    }
    getSongLyrics(artist, song) {
        return this._http.get(`/api/lyrics/${artist}/${song}`);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/lyrics/lyrics.component.css":
/*!*********************************************!*\
  !*** ./src/app/lyrics/lyrics.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x5cmljcy9seXJpY3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/lyrics/lyrics.component.ts":
/*!********************************************!*\
  !*** ./src/app/lyrics/lyrics.component.ts ***!
  \********************************************/
/*! exports provided: LyricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricsComponent", function() { return LyricsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LyricsComponent = class LyricsComponent {
    constructor(http) {
        this.http = http;
        this.data = {};
        this.url = 'https://api.lyrics.ovh/v1/';
    }
    ngOnInit() {
        throw new Error("Method not implemented.");
    }
    getLyrics() {
        this.http.get(this.url + this.artist + '/' + this.title).subscribe(data => {
            this.data = data;
            this.lyrics = data['lyrics'];
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
};
LyricsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LyricsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lyrics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lyrics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lyrics/lyrics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lyrics.component.css */ "./src/app/lyrics/lyrics.component.css")).default]
    })
], LyricsComponent);



/***/ }),

/***/ "./src/app/playing/playing.component.css":
/*!***********************************************!*\
  !*** ./src/app/playing/playing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background-color: #222831;\n}\n\n/* Charcoal: 222831 */\n\n/* Att Blue 00A8E0 */\n\n.blue-f {\n    color: #00A8E0;\n}\n\n.blue-bg {\n    background-color: #00A8E0;\n}\n\n.charcoal-bg {\n    background-color: #222831;\n}\n\n.down {\n    margin-top: 22%;\n}\n\n.white-bg {\n    background-color: white;\n}\n\n.white-f {\n    color: white;\n    font-size: 16px;\n}\n\n.m-top-0 {\n    margin-top: 0;\n}\n\n.pad-0 {\n    padding: 0;\n}\n\n.overflow {\n        overflow: auto;\n      height: 233px;\n}\n\n.pad-10 {\n    padding: 10%;\n}\n\n.blue-border {\n    border: 4px solid #00A8E0;\n    border-radius: 5%;\n}\n\n.example-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.sideNavTrigger {\n    margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWluZy9wbGF5aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEscUJBQXFCOztBQUVyQixvQkFBb0I7O0FBRXBCO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7UUFDUSxjQUFjO01BQ2hCLGFBQWE7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGxheWluZy9wbGF5aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xufVxuXG4vKiBDaGFyY29hbDogMjIyODMxICovXG5cbi8qIEF0dCBCbHVlIDAwQThFMCAqL1xuXG4uYmx1ZS1mIHtcbiAgICBjb2xvcjogIzAwQThFMDtcbn1cblxuLmJsdWUtYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE4RTA7XG59XG5cbi5jaGFyY29hbC1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcbn1cblxuLmRvd24ge1xuICAgIG1hcmdpbi10b3A6IDIyJTtcbn1cblxuLndoaXRlLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLndoaXRlLWYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tLXRvcC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucGFkLTAge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5vdmVyZmxvdyB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAyMzNweDtcbn1cblxuLnBhZC0xMCB7XG4gICAgcGFkZGluZzogMTAlO1xufVxuLmJsdWUtYm9yZGVyIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDBBOEUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5zaWRlTmF2VHJpZ2dlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/playing/playing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/playing/playing.component.ts ***!
  \**********************************************/
/*! exports provided: SafePipe, PlayingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingComponent", function() { return PlayingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");






// Added Activated Route and Params to get the Document

// Bringing in The Socket

let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' })
], SafePipe);

let PlayingComponent = class PlayingComponent {
    constructor(_route, _router, _socket, _httpService, _dataService) {
        this._route = _route;
        this._router = _router;
        this._socket = _socket;
        this._httpService = _httpService;
        this._dataService = _dataService;
        this.options = { video: true, audio: true };
        this.title = 'app';
        this.id = '';
        this.PL = null;
        this.shouldRun = true;
        this.playTheNextSong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currLyrics = '';
        this.counter = 0;
        this.autoPlay = "?autoplay=1";
        this.videoString = "https://www.youtube.com/embed/";
    }
    ngOnChanges() {
        console.log("CHANGE");
        if (this.counter <= 9) {
            this.it = this.videoID;
        }
    }
    onSuccess(stream) {
        console.log('capturing video stream');
    }
    ;
    onError(err) {
        console.log(err);
    }
    ;
    onStateChange(event) {
        console.log(this.videoID);
        let self = this;
        this.ytEvent = event.data;
        if (event.data == 0 && this.PL.songs.length > 0) {
            this.lyricsExist = true;
            console.log("OVER");
            this.currState = event.data;
            this.playTheNextSong.emit(this.currState);
            console.log(this.videoID);
            console.log(this.it);
            this.currLyrics = this.PL.songs[0].lyrics;
            this.it = this.PL.songs.shift();
            JSON.stringify(this.it);
            this.player.loadVideoById(this.it);
            this.counter = 0;
        }
        // else {
        //   this.lyricsExist = false;
        // }
        // this.playVideo();
        this.currState = 1;
    }
    savePlayer(player) {
        this.player = player;
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
    ngOnInit() {
        // Get room name from URL, save above and send to server to join room.
        this._route.params
            .subscribe((params) => {
            console.log("Params: ", params);
            this.roomName = params.room;
            this.socketId = params.user;
            let self = this;
            this._httpService.getPlaylist(params.room)
                .subscribe((data) => {
                this.PL = data[0];
                console.log('Playlist: ', this.PL);
                this.firstSong(this.PL);
            });
        });
    }
    firstSong(playlist) {
        this.PL = playlist;
        if (playlist.songs.length > 0) {
            this.lyricsExist = true;
            this.videoID = this.PL.songs[0].videoId;
            this.currLyrics = this.PL.songs[0].lyrics;
            this.PL.songs.shift();
        }
    }
    // genBase64( webcam:WebCamComponent ){
    //   webcam.getBase64()
    //   .then( base=>this.base64=base)
    //   .catch( e=>console.error(e) )
    // }
    //get HTML5 FormData object and pretend to post to server
    // genPostData( webcam:WebCamComponent ){
    //   webcam.captureAsFormData({fileName:'file.jpg'})
    //   .then( formData=>this.postFormData(formData) )
    //   .catch( e=>console.error(e) )
    // }
    //a pretend process that would post the webcam photo taken
    // postFormData(formData){
    //   const config = {
    //     method:"post",
    //     url:"http://www.aviorsciences.com/",
    //     body: formData
    //   }
    //   const request = new Request(config)
    //   return this.http.request( request )
    // }
    onCamError(err) { }
    onCamSuccess() { }
};
PlayingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlayingComponent.prototype, "playTheNextSong", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayingComponent.prototype, "videoID", void 0);
PlayingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playing/playing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playing.component.css */ "./src/app/playing/playing.component.css")).default]
    })
], PlayingComponent);



/***/ }),

/***/ "./src/app/playlist/playlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/playlist/playlist.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background-color: #222831;\n}\n\n/* Charcoal: 222831 */\n\n/* Att Blue 00A8E0 */\n\n.blue-f {\n    color: #00A8E0;\n}\n\n.blue-bg {\n    background-color: #00A8E0;\n}\n\n.charcoal-bg {\n    background-color: #222831;\n}\n\n.down {\n    margin-top: 22%;\n}\n\n.white-bg {\n    background-color: white;\n}\n\n.white-f {\n    color: white;\n    font-size: 16px;\n}\n\n.m-top-0 {\n    margin-top: 0;\n}\n\n.pad-0 {\n    padding: 0;\n}\n\n.overflow {\n        overflow: auto;\n      height: 500px;\n}\n\n.pad-10 {\n    padding: 10%;\n}\n\n.blue-border {\n    border: 4px solid #00A8E0;\n    border-radius: 5%;\n}\n\n.example-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.sideNavTrigger {\n    margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxxQkFBcUI7O0FBRXJCLG9CQUFvQjs7QUFFcEI7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtRQUNRLGNBQWM7TUFDaEIsYUFBYTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wbGF5bGlzdC9wbGF5bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcbn1cblxuLyogQ2hhcmNvYWw6IDIyMjgzMSAqL1xuXG4vKiBBdHQgQmx1ZSAwMEE4RTAgKi9cblxuLmJsdWUtZiB7XG4gICAgY29sb3I6ICMwMEE4RTA7XG59XG5cbi5ibHVlLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOEUwO1xufVxuXG4uY2hhcmNvYWwtYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XG59XG5cbi5kb3duIHtcbiAgICBtYXJnaW4tdG9wOiAyMiU7XG59XG5cbi53aGl0ZS1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi53aGl0ZS1mIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubS10b3AtMCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnBhZC0wIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ub3ZlcmZsb3cge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIGhlaWdodDogNTAwcHg7XG59XG5cbi5wYWQtMTAge1xuICAgIHBhZGRpbmc6IDEwJTtcbn1cbi5ibHVlLWJvcmRlciB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAwQThFMDtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uc2lkZU5hdlRyaWdnZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");





let PlaylistComponent = class PlaylistComponent {
    constructor(_route, _router, _socket, _httpService) {
        this._route = _route;
        this._router = _router;
        this._socket = _socket;
        this._httpService = _httpService;
        this.events = [];
        this.PL = null;
        this.shouldRun = true;
    }
    ngOnInit() {
        // Get room name from URL, save above and send to server to join room.
        this._route.params
            .subscribe((params) => {
            console.log("Params: ", params);
            this.roomName = params.room;
            this.socketId = params.user;
            this._httpService.getPlaylist(params.room)
                .subscribe((data) => {
                this.PL = data[0];
                console.log('Playlist: ', this.PL);
            });
        });
    }
};
PlaylistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist.component.css */ "./src/app/playlist/playlist.component.css")).default]
    })
], PlaylistComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    text-align: center;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_gapi_lib_GoogleApiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-gapi/lib/GoogleApiService */ "./node_modules/ng-gapi/lib/GoogleApiService.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



// Bringing in The Socket

// Added Activated Route and Params to get the Document



let SearchComponent = class SearchComponent {
    constructor(_httpService, _socket, _router, _route, gapiService, http) {
        this._httpService = _httpService;
        this._socket = _socket;
        this._router = _router;
        this._route = _route;
        this.gapiService = gapiService;
        this.http = http;
        // [x: string]: any;
        this.PL = null;
        this.search = {
            query1: '',
            query2: ''
        };
        this.AddSong = {
            lyrics: '',
            singer: '',
            videoId: '',
            videoTitle: '',
        };
        // allPlaylistSongs = [];
        this.weGotResults = false;
        this.searchResults = [];
        this.newSong = {
            link: "",
            name: ""
        };
        this.SongId = null;
        this.playing = false;
        this.lyricSearch = {
            artist: '',
            song: '',
        };
        this.errors = [];
        this.data = {};
        this.count = 0;
        this.url = 'https://api.lyrics.ovh/v1/';
        gapiService.onLoad().subscribe(() => {
            // Here we can use gapi
            // console.log(gapi['client']);
            gapi['client'].setApiKey('AIzaSyATzcCfAIeopl21V4K7C_2vxiVTb1OFzcI');
        });
    }
    ngOnInit() {
        this._route.params
            .subscribe((params) => {
            console.log("Params: ", params);
            this.roomName = params.room;
            this.socketId = params.user;
            this._httpService.getPlaylist(params.room)
                .subscribe((data) => {
                this.PL = data[0];
                console.log('Playlist: ', this.PL);
            });
        });
        this.lyricSearch = {
            artist: '',
            song: '',
        };
    }
    getLyrics() {
        let artist = this.search.query1.split(' ').join('_');
        console.log(artist);
        let song = this.search.query2.split(' ').join('_');
        console.log(song);
        this.http.get(this.url + artist + '/' + song).subscribe(data => {
            this.data = data;
            this.lyrics = data['lyrics'];
            console.log(this.lyrics);
        }, err => {
            console.log(err);
        });
    }
    onSubmit(title, id) {
        this.AddSong.singer = this.socketId;
        this.AddSong.videoId = id;
        this.AddSong.videoTitle = title;
        this.AddSong.lyrics = this.lyrics;
        while (this.AddSong.lyrics == '') {
            this.count++;
        }
        console.log(this.count);
        this.PL.songs.push(this.AddSong);
        this._httpService.updatePlaylist(this.PL)
            .subscribe((data) => {
            let self = this;
            if (data.hasOwnProperty('errors')) {
                this.errors = data.errors;
                console.log(this.errors);
                console.log('errors are here!');
            }
            else {
                if (self.PL.songs.length == 1) {
                    //play song
                    console.log(self.PL);
                    this._router.navigate([`/${this.roomName}/`, 'playing', `${this.socketId}`]);
                }
                else {
                    this._router.navigate([`/${this.roomName}/`, 'playlist', `${this.socketId}`]);
                }
            }
        });
        this.AddSong = {
            singer: '',
            videoId: '',
            videoTitle: '',
            lyrics: ''
        };
    }
    makeRequest(q) {
        this.getLyrics();
        let self = this;
        console.log("hereeeee");
        this.weGotResults = true;
        this.searchResults = [];
        var request = gapi['client']['youtube'].search.list({
            q: q,
            part: 'snippet',
            maxResults: 10,
            type: 'video'
        });
        // console.log("hi")
        request.execute(function (response) {
            console.log("also here");
            var srchItems = response.result.items;
            // self.searchResults = self.searchResults.concat(srchItems);
            $('#results').empty();
            self.newSong.link = '';
            let counter = 1;
            $.each(srchItems, function (index, item) {
                let vidTitle = item.snippet.title;
                let vidThumburl = item.snippet.thumbnails.default.url;
                let vidThumbimg = '<pre><img  id="' + item.id.videoId + '" name="' + item.snippet.title + '" src="' + vidThumburl + '" alt="No  Image Available." style="width:300px;height:240px"></pre>';
                $(`#results${counter}`).append('<pre>' + '<p style = "color: #222831; text-align:center; width: 75%;">' + vidTitle + '</p>' + vidThumbimg + '<h1>➕</h1>' + '</pre>').on('click', function () {
                    self.onSubmit(item.snippet.title, item.id.videoId);
                    $("#videoInput").val(item.snippet.title);
                    self.newSong.link = item.id.videoId;
                    self.newSong.name = item.snippet.title;
                });
                counter += 1;
            });
        });
    }
    myFunction() {
        console.log(this.search.query1);
        console.log(window['gapi']);
        let query = this.search.query1 + ' AND ' + this.search.query2 + ' instrumental';
        this.keyWordsearch(query);
    }
    ;
    keyWordsearch(name) {
        console.log("here");
        let self = this;
        gapi['client'].load('youtube', 'v3', function () {
            console.log("here");
            let info = '{ "data": [{"name":' + `"${name}"` + '}] }';
            console.log(info);
            JSON.stringify(info);
            console.log(info);
            let data = JSON.parse(info);
            $.each(data["data"], function (index, value) {
                self.makeRequest(value["name"]);
            });
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ng_gapi_lib_GoogleApiService__WEBPACK_IMPORTED_MODULE_5__["GoogleApiService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background-color: #222831; \n    font-family: 'Mansalva', cursive;\n}\n\n/* Charcoal: 222831 */\n\n/* Att Blue 00A8E0 */\n\n.blue-f {\n    color: #00A8E0;\n    font-size: 50px;\n}\n\n.blue-bg {\n    background-color: #00A8E0;\n}\n\n.charcoal-bg {\n    background-color: #222831;\n}\n\n.white-bg {\n    background-color: white;\n}\n\n.m-top-0 {\n    margin-top: 0;\n}\n\n.pad-0 {\n    padding: 0;\n}\n\n.blue-border {\n    border: 4px solid #00A8E0;\n    border-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDOztBQUVBLHFCQUFxQjs7QUFDckIsb0JBQW9COztBQUNwQjtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7IFxuICAgIGZvbnQtZmFtaWx5OiAnTWFuc2FsdmEnLCBjdXJzaXZlO1xufVxuXG4vKiBDaGFyY29hbDogMjIyODMxICovXG4vKiBBdHQgQmx1ZSAwMEE4RTAgKi9cbi5ibHVlLWYge1xuICAgIGNvbG9yOiAjMDBBOEUwO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmJsdWUtYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE4RTA7XG59XG4uY2hhcmNvYWwtYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XG59XG5cbi53aGl0ZS1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubS10b3AtMCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnBhZC0wIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYmx1ZS1ib3JkZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMEE4RTA7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



// Bringing in The Socket


let WelcomeComponent = class WelcomeComponent {
    constructor(_httpService, _router, _socket) {
        this._httpService = _httpService;
        this._router = _router;
        this._socket = _socket;
        this.roomName = "";
    }
    ngOnInit() {
        this._socket.emit("getId");
        this._socket.on("hereBro", data => {
            this.socketId = data.id;
            console.log(data);
        });
    }
    joinRoom() {
        this._httpService.getPlaylist(this.roomName)
            .subscribe((data) => {
            if (data[0] == {} && data[0].users.length > 0) {
                const PL = data[0];
                PL.users.push(this.socketId);
                this._httpService.updatePlaylist(PL)
                    .subscribe((playlist) => {
                    this._router.navigate([`/${this.roomName}/`, 'playing', `${this.socketId}`]);
                });
            }
            else {
                this._httpService.createPlaylist({ id: this.roomName, users: [this.socketId] })
                    .subscribe((playlist) => {
                    console.log(playlist);
                    this._router.navigate([`/${this.roomName}/`, 'playing', `${this.socketId}`]);
                });
            }
        });
        // this._router.navigate([`/${this.roomName}/`, "playing"])
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    })
], WelcomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jameydogom/Documents/codingdojo/share-E-oke/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
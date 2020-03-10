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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/main-menu/main-menu.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/main-menu/main-menu.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>Main Menu</div>\n\n\n<div class=\"tab_header\">\n  <div class=\"cell\">\n    <div [innerText]=\"localization.CurrentTime\"></div>\n  </div>\n  <div class=\"cell\">\n    <div *ngIf=\"vmCurrentTime\" [innerText]=\"vmCurrentTime\"></div>\n  </div>\n  <div class=\"cell\"></div>\n  <div class=\"cell\"></div>\n</div>\n\n<div class=\"tab_header\">\n  <div class=\"cell\">\n    <div [innerText]=\"localization.TotalUsageTime\"></div>\n  </div>\n  <div class=\"cell\">\n    <div *ngIf=\"totalUsageTime\">\n      <span [innerText]=\"totalUsageTime.days\"></span> days,\n      <span [innerText]=\"totalUsageTime.hours\"></span>:\n      <span [innerText]=\"totalUsageTime.minutes\"></span>:\n      <span [innerText]=\"totalUsageTime.seconds\"></span>\n    </div>\n  </div>\n  <div class=\"cell\"></div>\n  <div class=\"cell\"></div>\n</div>\n\n<div class=\"tab_header\">\n  <div class=\"cell\">\n    <div [innerText]=\"localization.Id\"\n         class=\"label\"></div>\n  </div>\n  <div class=\"cell\">\n    <div [innerText]=\"localization.CreateTime\"\n         class=\"label\"></div>\n  </div>\n  <div class=\"cell\">\n    <div [innerText]=\"localization.RemovedTime\"\n         class=\"label\"></div>\n  </div>\n  <div class=\"cell\">\n    <div [innerText]=\"localization.IsSelectedForRemove\"\n         class=\"label\"></div>\n  </div>\n</div>\n\n<server-item *ngFor=\"let item of serverList\"\n             [server]=\"item\"></server-item>\n\n<div class=\"button_wrapper\">\n  <div (click)=\"addServer()\"\n       [innerText]=\"localization.AddServer\"\n        class=\"button button_add\"></div>\n  <ng-container>\n    <div (click)=\"removeAll()\"\n         [innerText]=\"localization.RemoveServer\"\n         class=\"button button_remove_active\"></div>\n    <div  *ngIf=\"false\" [innerText]=\"localization.RemoveServer\"\n         class=\"button button_remove_inactive\"></div>\n  </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/server-item/server-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/server-item/server-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"server\"\n     class=\"wrapper\">\n  <div class=\"cell\">\n    <div [innerText]=\"server.id\"></div>\n  </div>\n  <div class=\"cell\">\n    <div [innerText]=\"server.vmCreateTime\"></div>\n  </div>\n  <div class=\"cell\">\n    <div *ngIf=\"server.removedTime\"\n         [innerText]=\"server.vmRemoveTime\"></div>\n  </div>\n  <div *ngIf=\"server.isRemoved\"\n       class=\"cell removed\">\n    Removed\n  </div>\n  <div *ngIf=\"!server.isRemoved\"\n       class=\"cell remove_mess_wrapper\"\n    (mouseenter)=\"isRemoveMessShown = true\"\n    (mouseleave)=\"isRemoveMessShown = false\"\n    (click)=\"removeItem()\">\n    <div [innerText]='server.isSelectedForRemove? \"+\" : \"\"'\n      *ngIf=\"!isRemoveMessShown\"></div>\n    <div *ngIf=\"isRemoveMessShown\"\n      class=\"remove_mess\">Remove from list</div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Components/main-menu/main-menu.component.less":
/*!***************************************************************!*\
  !*** ./src/app/Components/main-menu/main-menu.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab_header {\n  display: -webkit-box;\n  display: flex;\n  max-width: 1200px;\n  width: 100%;\n}\n.cell {\n  display: -webkit-box;\n  display: flex;\n  border: 1px solid;\n  padding: 5px;\n  min-width: 25%;\n  box-sizing: border-box;\n}\n.label {\n  padding-right: 10px;\n}\n.button_wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 20px;\n}\n.button {\n  border: 1px solid;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 5px;\n  cursor: pointer;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.button_add:hover {\n  background: green;\n  color: white;\n}\n.button_remove_active:hover {\n  background: red;\n  color: white;\n}\n.button_remove_inactive {\n  background: grey;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJ0aXRza2kvQVNQLk5FVCBDb3JlL1ZpcnR1YWxTZXJ2ZXIvVmlydHVhbFNlcnZlci9WaXJ0dWFsU2VydmVyL0Zyb250ZW5kL3ZpcnR1YWwtc2VydmVyLWFwcC9zcmMvYXBwL0NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtBQ0RGO0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0hGO0FETUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xuICBtaW4td2lkdGg6IDI1JTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmJ1dHRvbl93cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYnV0dG9uX2FkZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b25fcmVtb3ZlX2FjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uX3JlbW92ZV9pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi50YWJfaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xuICBtaW4td2lkdGg6IDI1JTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uYnV0dG9uX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmJ1dHRvbl9hZGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbl9yZW1vdmVfYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uX3JlbW92ZV9pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/Components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/app/constants/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Models_UsageTimeStruct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/UsageTimeStruct */ "./src/app/Models/UsageTimeStruct.ts");





let MainMenuComponent = class MainMenuComponent {
    constructor(http) {
        this.http = http;
        this.serverList = [];
        this.apiUrl = `${_constants__WEBPACK_IMPORTED_MODULE_2__["GLobalConstants"].apiPortUrl}/api`;
        this.localization = {
            Id: "VirtualServerId",
            CreateTime: "CreateDateTime",
            RemovedTime: "RemoveDateTime",
            IsSelectedForRemove: "SelectedForRemove",
            TotalUsageTime: "Totla usage time: ",
            CurrentTime: "Current time: ",
            AddServer: "Add",
            RemoveServer: "Remove (selected for remove)",
        };
        this.setServers();
        this.setTimes();
    }
    setTimes() {
        this.getTotalUsageTime()
            .subscribe(p => {
            this.totalUsageTime = new _Models_UsageTimeStruct__WEBPACK_IMPORTED_MODULE_4__["UsageTimeStruct"](p.seconds, p.minutes, p.hours, p.days);
        });
        this.getCurrentTime()
            .subscribe(p => {
            this.currentTime = p;
            this.vmCurrentTime = this.getServerVmDate(new Date(p));
        });
    }
    setServers() {
        const serversSubscriber = this.getServers()
            .subscribe(p => {
            this.serverList = [];
            if (!p || !p.length) {
                return;
            }
            p.forEach(item => {
                this.serverList.push({
                    id: item.id ? item.id : 0,
                    createTime: item.createTime ? new Date(item.createTime) : null,
                    isRemoved: item.isRemoved,
                    removedTime: item.removedTime ? new Date(item.removedTime) : undefined,
                    isSelectedForRemove: false,
                    vmCreateTime: this.getServerVmDate(new Date(item.createTime)),
                    vmRemoveTime: this.getServerVmDate(new Date(item.removedTime))
                });
            });
        });
    }
    getServerVmDate(time) {
        if (!time) {
            return "";
        }
        // const d = new Date('2010-08-05')
        const dtf = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        const [{ value: mo }, , { value: da }, , { value: ye }, , { value: HH }, , { value: MM }, , { value: SS }] = dtf.formatToParts(time);
        console.log(`${ye}-${mo}-${da}`);
        return `${ye}-${mo}-${da} ${HH}:${MM}:${SS}`;
    }
    getServers() {
        const methodUrl = '';
        return this.http
            .get(`${this.apiUrl}/${methodUrl}`);
    }
    addServer() {
        this.doAddServer()
            .subscribe(p => {
            this.setServers();
            this.setTimes();
        });
    }
    doAddServer() {
        const methodUrl = 'add';
        return this.http
            .get(`${this.apiUrl}/${methodUrl}`);
    }
    removeAll() {
        let idForRemoveList = [];
        this.serverList.forEach(p => {
            if (p.isSelectedForRemove) {
                idForRemoveList.push(p.id);
            }
        });
        this.doRemoveAll(idForRemoveList)
            .subscribe(p => {
            this.setServers();
            this.setTimes();
        });
    }
    doRemoveAll(idList) {
        const methodUrl = 'removeall';
        return this.http
            .post(`${this.apiUrl}/${methodUrl}`, idList);
    }
    getTotalUsageTime() {
        const methodUrl = 'gettotalusetime';
        return this.http
            .get(`${this.apiUrl}/${methodUrl}`);
    }
    getCurrentTime() {
        const methodUrl = 'getcurrenttime';
        return this.http
            .get(`${this.apiUrl}/${methodUrl}`);
    }
};
MainMenuComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/main-menu/main-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-menu.component.less */ "./src/app/Components/main-menu/main-menu.component.less")).default]
    })
], MainMenuComponent);



/***/ }),

/***/ "./src/app/Components/server-item/server-item.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/Components/server-item/server-item.component.less ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: -webkit-box;\n  display: flex;\n  max-width: 1200px;\n  width: 100%;\n}\n.cell {\n  display: -webkit-box;\n  display: flex;\n  border: 1px solid;\n  padding: 5px;\n  min-width: 25%;\n  box-sizing: border-box;\n}\n.removed {\n  background: gray;\n  color: white;\n}\n.remove_mess_wrapper {\n  cursor: pointer;\n}\n.remove_mess {\n  background: red;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXJ0aXRza2kvQVNQLk5FVCBDb3JlL1ZpcnR1YWxTZXJ2ZXIvVmlydHVhbFNlcnZlci9WaXJ0dWFsU2VydmVyL0Zyb250ZW5kL3ZpcnR1YWwtc2VydmVyLWFwcC9zcmMvYXBwL0NvbXBvbmVudHMvc2VydmVyLWl0ZW0vc2VydmVyLWl0ZW0uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvc2VydmVyLWl0ZW0vc2VydmVyLWl0ZW0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3NlcnZlci1pdGVtL3NlcnZlci1pdGVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAyNSU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yZW1vdmVkIHtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVtb3ZlX21lc3Nfd3JhcHBlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZV9tZXNzIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWluLXdpZHRoOiAyNSU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucmVtb3ZlZCB7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZW1vdmVfbWVzc193cmFwcGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlbW92ZV9tZXNzIHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/Components/server-item/server-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/server-item/server-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerItemComponent", function() { return ServerItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerItemComponent = class ServerItemComponent {
    constructor() {
        this.isRemoveMessShown = false;
    }
    removeItem() {
        this.server.isSelectedForRemove = !this.server.isSelectedForRemove;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServerItemComponent.prototype, "server", void 0);
ServerItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'server-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./server-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/server-item/server-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./server-item.component.less */ "./src/app/Components/server-item/server-item.component.less")).default]
    })
], ServerItemComponent);



/***/ }),

/***/ "./src/app/Models/UsageTimeStruct.ts":
/*!*******************************************!*\
  !*** ./src/app/Models/UsageTimeStruct.ts ***!
  \*******************************************/
/*! exports provided: UsageTimeStruct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageTimeStruct", function() { return UsageTimeStruct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UsageTimeStruct {
    constructor(seconds, minutes, hours, days) {
        this.seconds = seconds ? seconds : 0;
        this.minutes = minutes ? minutes : 0;
        this.hours = hours ? hours : 0;
        this.days = days ? days : 0;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'virtual-server-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_server_item_server_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/server-item/server-item.component */ "./src/app/Components/server-item/server-item.component.ts");
/* harmony import */ var _Components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/main-menu/main-menu.component */ "./src/app/Components/main-menu/main-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _Components_server_item_server_item_component__WEBPACK_IMPORTED_MODULE_5__["ServerItemComponent"],
            _Components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                { path: '', component: _Components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/constants/global-constants.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/global-constants.ts ***!
  \***********************************************/
/*! exports provided: GLobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLobalConstants", function() { return GLobalConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GLobalConstants {
}
GLobalConstants.apiPortUrl = 'http://localhost:5001';


/***/ }),

/***/ "./src/app/constants/index.ts":
/*!************************************!*\
  !*** ./src/app/constants/index.ts ***!
  \************************************/
/*! exports provided: GLobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-constants */ "./src/app/constants/global-constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLobalConstants", function() { return _global_constants__WEBPACK_IMPORTED_MODULE_1__["GLobalConstants"]; });





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/partitski/ASP.NET Core/VirtualServer/VirtualServer/VirtualServer/Frontend/virtual-server-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
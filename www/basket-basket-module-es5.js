(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basket-basket-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/basket/basket.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/basket/basket.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color = \"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n              <ion-button [routerLink]=\"['/menu/basket']\">\n                <ion-icon slot=\"icon-only\" name=\"basket\" color = \"light\" large></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons  slot=\"primary\">\n                <ion-button [routerLink]=\"['/menu/search']\" class=\"ion-icon\">\n                  <ion-icon slot=\"icon-only\" name=\"search\" color=\"light\" ></ion-icon>\n                </ion-button>\n              </ion-buttons>\n        <ion-title color = \"light\" size=\"medium\" text-start>Me&Me</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-text color=\"secondary\">\n        <h1>Basket</h1>\n      </ion-text>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/basket/basket.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/basket/basket.module.ts ***!
  \***********************************************/
/*! exports provided: BasketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPageModule", function() { return BasketPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basket.page */ "./src/app/pages/basket/basket.page.ts");







var routes = [
    {
        path: '',
        component: _basket_page__WEBPACK_IMPORTED_MODULE_6__["BasketPage"]
    }
];
var BasketPageModule = /** @class */ (function () {
    function BasketPageModule() {
    }
    BasketPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_basket_page__WEBPACK_IMPORTED_MODULE_6__["BasketPage"]]
        })
    ], BasketPageModule);
    return BasketPageModule;
}());



/***/ }),

/***/ "./src/app/pages/basket/basket.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/basket/basket.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-icon {\n  zoom: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvcGFnZXMvYmFza2V0L2Jhc2tldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jhc2tldC9iYXNrZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksU0FBQTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFza2V0L2Jhc2tldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWljb24geyB6b29tOiAxLjUgfSIsIi5pb24taWNvbiB7XG4gIHpvb206IDEuNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/basket/basket.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/basket/basket.page.ts ***!
  \*********************************************/
/*! exports provided: BasketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketPage", function() { return BasketPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasketPage = /** @class */ (function () {
    function BasketPage() {
    }
    BasketPage.prototype.ngOnInit = function () {
    };
    BasketPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basket',
            template: __webpack_require__(/*! raw-loader!./basket.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/basket/basket.page.html"),
            styles: [__webpack_require__(/*! ./basket.page.scss */ "./src/app/pages/basket/basket.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasketPage);
    return BasketPage;
}());



/***/ })

}]);
//# sourceMappingURL=basket-basket-module-es5.js.map
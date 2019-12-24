(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color = \"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n              <ion-button [routerLink]=\"['/menu/basket']\">\n                <ion-icon slot=\"icon-only\" name=\"basket\" color = \"light\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons  slot=\"primary\">\n                <ion-button [routerLink]=\"['/menu/search']\">\n                  <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n        <ion-title color = \"light\" size=\"medium\" text-start>Me&Me</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class=\"padding\">\n    <ion-text > <h2>Shop</h2> </ion-text>      \n      <div>\n      <ion-toolbar  *ngIf=\"hideToolBar\" color = \"light\"  text-center>\n      <ion-text color=\"secondary\" text-center>\n        Create a shop\n      </ion-text>\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/create-shop']\">\n          <ion-icon color = \"danger\" slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/shop/shop.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/pages/shop/shop.page.ts");







const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
    }
];
let ShopPageModule = class ShopPageModule {
};
ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
    })
], ShopPageModule);



/***/ }),

/***/ "./src/app/pages/shop/shop.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3Avc2hvcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/shop/shop.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShopPage = class ShopPage {
    constructor() {
        this.hideToolBar = true;
    }
    ngOnInit() {
        this.hideToolBar = true;
    }
};
ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.page.scss */ "./src/app/pages/shop/shop.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShopPage);



/***/ })

}]);
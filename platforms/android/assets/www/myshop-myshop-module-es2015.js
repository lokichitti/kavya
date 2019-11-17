(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myshop-myshop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/myshop/myshop.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myshop/myshop.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>myshop</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/myshop/myshop.module.ts":
/*!*****************************************!*\
  !*** ./src/app/myshop/myshop.module.ts ***!
  \*****************************************/
/*! exports provided: MyshopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyshopPageModule", function() { return MyshopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myshop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myshop.page */ "./src/app/myshop/myshop.page.ts");







const routes = [
    {
        path: '',
        component: _myshop_page__WEBPACK_IMPORTED_MODULE_6__["MyshopPage"]
    }
];
let MyshopPageModule = class MyshopPageModule {
};
MyshopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_myshop_page__WEBPACK_IMPORTED_MODULE_6__["MyshopPage"]]
    })
], MyshopPageModule);



/***/ }),

/***/ "./src/app/myshop/myshop.page.scss":
/*!*****************************************!*\
  !*** ./src/app/myshop/myshop.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215c2hvcC9teXNob3AucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/myshop/myshop.page.ts":
/*!***************************************!*\
  !*** ./src/app/myshop/myshop.page.ts ***!
  \***************************************/
/*! exports provided: MyshopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyshopPage", function() { return MyshopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyshopPage = class MyshopPage {
    constructor() { }
    ngOnInit() {
    }
};
MyshopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myshop',
        template: __webpack_require__(/*! raw-loader!./myshop.page.html */ "./node_modules/raw-loader/index.js!./src/app/myshop/myshop.page.html"),
        styles: [__webpack_require__(/*! ./myshop.page.scss */ "./src/app/myshop/myshop.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyshopPage);



/***/ })

}]);
//# sourceMappingURL=myshop-myshop-module-es2015.js.map
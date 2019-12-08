(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginMethod-facebook-facebook-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/facebook/facebook.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/loginMethod/facebook/facebook.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>facebook</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/loginMethod/facebook/facebook.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/loginMethod/facebook/facebook.module.ts ***!
  \***************************************************************/
/*! exports provided: FacebookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookPageModule", function() { return FacebookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _facebook_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facebook.page */ "./src/app/pages/loginMethod/facebook/facebook.page.ts");







var routes = [
    {
        path: '',
        component: _facebook_page__WEBPACK_IMPORTED_MODULE_6__["FacebookPage"]
    }
];
var FacebookPageModule = /** @class */ (function () {
    function FacebookPageModule() {
    }
    FacebookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_facebook_page__WEBPACK_IMPORTED_MODULE_6__["FacebookPage"]]
        })
    ], FacebookPageModule);
    return FacebookPageModule;
}());



/***/ }),

/***/ "./src/app/pages/loginMethod/facebook/facebook.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/loginMethod/facebook/facebook.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luTWV0aG9kL2ZhY2Vib29rL2ZhY2Vib29rLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/loginMethod/facebook/facebook.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/loginMethod/facebook/facebook.page.ts ***!
  \*************************************************************/
/*! exports provided: FacebookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookPage", function() { return FacebookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FacebookPage = /** @class */ (function () {
    function FacebookPage() {
    }
    FacebookPage.prototype.ngOnInit = function () {
    };
    FacebookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facebook',
            template: __webpack_require__(/*! raw-loader!./facebook.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/facebook/facebook.page.html"),
            styles: [__webpack_require__(/*! ./facebook.page.scss */ "./src/app/pages/loginMethod/facebook/facebook.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FacebookPage);
    return FacebookPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loginMethod-facebook-facebook-module-es5.js.map
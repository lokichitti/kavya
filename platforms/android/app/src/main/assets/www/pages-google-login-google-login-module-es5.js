(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-google-login-google-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/google-login/google-login.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/google-login/google-login.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>GoogleLogin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/google-login/google-login.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/google-login/google-login.module.ts ***!
  \***********************************************************/
/*! exports provided: GoogleLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPageModule", function() { return GoogleLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-login.page */ "./src/app/pages/google-login/google-login.page.ts");







var routes = [
    {
        path: '',
        component: _google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginPage"]
    }
];
var GoogleLoginPageModule = /** @class */ (function () {
    function GoogleLoginPageModule() {
    }
    GoogleLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginPage"]]
        })
    ], GoogleLoginPageModule);
    return GoogleLoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/google-login/google-login.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/google-login/google-login.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dvb2dsZS1sb2dpbi9nb29nbGUtbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/google-login/google-login.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/google-login/google-login.page.ts ***!
  \*********************************************************/
/*! exports provided: GoogleLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPage", function() { return GoogleLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleLoginPage = /** @class */ (function () {
    function GoogleLoginPage() {
    }
    GoogleLoginPage.prototype.ngOnInit = function () {
    };
    GoogleLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-login',
            template: __webpack_require__(/*! raw-loader!./google-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/google-login/google-login.page.html"),
            styles: [__webpack_require__(/*! ./google-login.page.scss */ "./src/app/pages/google-login/google-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleLoginPage);
    return GoogleLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-google-login-google-login-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-google-login-google-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-login/google-login.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-login/google-login.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>GoogleLogin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-login.page */ "./src/app/pages/google-login/google-login.page.ts");







const routes = [
    {
        path: '',
        component: _google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginPage"]
    }
];
let GoogleLoginPageModule = class GoogleLoginPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/google-login/google-login.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/google-login/google-login.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dvb2dsZS1sb2dpbi9nb29nbGUtbG9naW4ucGFnZS5zY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoogleLoginPage = class GoogleLoginPage {
    constructor() { }
    ngOnInit() {
    }
};
GoogleLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-login/google-login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-login.page.scss */ "./src/app/pages/google-login/google-login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GoogleLoginPage);



/***/ })

}]);
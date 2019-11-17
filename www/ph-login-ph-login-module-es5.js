(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ph-login-ph-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ph-login/ph-login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ph-login/ph-login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>PhLogin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ph-login/ph-login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ph-login/ph-login.module.ts ***!
  \*********************************************/
/*! exports provided: PhLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhLoginPageModule", function() { return PhLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ph_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ph-login.page */ "./src/app/ph-login/ph-login.page.ts");







var routes = [
    {
        path: '',
        component: _ph_login_page__WEBPACK_IMPORTED_MODULE_6__["PhLoginPage"]
    }
];
var PhLoginPageModule = /** @class */ (function () {
    function PhLoginPageModule() {
    }
    PhLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ph_login_page__WEBPACK_IMPORTED_MODULE_6__["PhLoginPage"]]
        })
    ], PhLoginPageModule);
    return PhLoginPageModule;
}());



/***/ }),

/***/ "./src/app/ph-login/ph-login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/ph-login/ph-login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoLWxvZ2luL3BoLWxvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ph-login/ph-login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/ph-login/ph-login.page.ts ***!
  \*******************************************/
/*! exports provided: PhLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhLoginPage", function() { return PhLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhLoginPage = /** @class */ (function () {
    function PhLoginPage() {
    }
    PhLoginPage.prototype.ngOnInit = function () {
    };
    PhLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ph-login',
            template: __webpack_require__(/*! raw-loader!./ph-login.page.html */ "./node_modules/raw-loader/index.js!./src/app/ph-login/ph-login.page.html"),
            styles: [__webpack_require__(/*! ./ph-login.page.scss */ "./src/app/ph-login/ph-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhLoginPage);
    return PhLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=ph-login-ph-login-module-es5.js.map
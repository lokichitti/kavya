(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sign-in/sign-in.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sign-in/sign-in.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header align=\"center\">\n    <ion-toolbar >\n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/sign-in']\">\n              <ion-icon slot=\"icon-only\" name=\"log-in\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-buttons slot=\"start\">\n              <ion-button [routerLink]=\"['/info']\">\n                <ion-icon slot=\"icon-only\" name=\"information-circle\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n        <ion-title size=\"large\" text-center>Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n      \n      <div>\n          <ion-card color=\"secondary\">\n      <button [routerLink]=\"['/google-login']\" align=\"center\"  class=\"login-margin\">\n        <img src=\"assets/image/continue-with-phone.png\">\n    </button>\n      <button [routerLink]=\"['/sign-in']\" align=\"center\"  class=\"login-margin\">\n        <img src=\"assets/image/continue-with-email.png\">\n      </button>\n    <button [routerLink]=\"['/google-login']\" align=\"center\"  class=\"login-margin\">\n      <img src=\"assets/image/continue-with-google.png\">\n  </button>\n  <button [routerLink]=\"['/register']\" align=\"center\" class=\"register-margin\">\n    <img src=\"assets/image/register.png\">\n  </button>\n  </ion-card>\n  </div>\n  <div text-center color=\"tertiary\"> Welcome to Me&MyShop </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");







const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]
    }
];
let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 100px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ob21lLXN0eWxlXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwMHB4O1xufVxuXG4ubG9naW4tbWFyZ2luXG57XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZWdpc3Rlci1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4iLCIuaG9tZS1zdHlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwMHB4O1xufVxuXG4ubG9naW4tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignInPage = class SignInPage {
    constructor() { }
    ngOnInit() {
    }
};
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sign-in/sign-in.page.html"),
        styles: [__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/pages/sign-in/sign-in.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es2015.js.map
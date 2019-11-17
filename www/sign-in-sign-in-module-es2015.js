(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Sign In</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item>\n    <ion-label position=\"floating\" color=\"primary\"> Registered Email</ion-label>\n    <ion-input type=\"text\"[(ngModel)]=\"user.email\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\" color=\"primary\"> Password</ion-label>\n    <ion-input type=\"password\"[(ngModel)]=\"user.password\"></ion-input>\n  </ion-item>\n\n   <ion-item> \n  <button align=\"center\" ion-button (click)=\"tryLogin(user)\">Login</button>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\" color=\"primary\">Registered mobile</ion-label>\n    <ion-input type=\"number\"[(ngModel)]=\"user.phone\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n  <button ion-button (click)=\"goToRegisterPage()\">Not have an account? Register</button>\n</ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
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
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");








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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".require {\n  color: #f10101;\n}\n\n.error-message {\n  font-size: smaller;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9JT05JQy9sb2thcHBhL2thdnlhL3NyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZSB7XG4gICAgY29sb3I6IHJnYigyNDEsIDEsIDEpO1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfSIsIi5yZXF1aXJlIHtcbiAgY29sb3I6ICNmMTAxMDE7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);




let SignInPage = class SignInPage {
    constructor(router, angularFireAuth) {
        this.router = router;
        this.angularFireAuth = angularFireAuth;
        this.user = {};
    }
    ngOnInit() {
    }
    tryLogin(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const result = yield this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                console.log(result);
                this.router.navigate(["/main-page"]);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    goToRegisterPage() {
        this.router.navigate(["/register"]);
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html"),
        styles: [__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map
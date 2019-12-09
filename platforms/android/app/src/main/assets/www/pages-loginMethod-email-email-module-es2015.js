(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginMethod-email-email-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/email/email.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/loginMethod/email/email.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-list>\n\n\t\t<ion-item>\n\t\t  <ion-label position=\"floating\">Email</ion-label>\n\t\t  <ion-input placeholder= \"Enter registered email\" type=\"text\" [(ngModel)]=\"username\"></ion-input>\n\t\t</ion-item>\n\t  \n\t\t<ion-item>\n\t\t  <ion-label position=\"floating\">Password</ion-label>\n\t\t  <ion-input placeholder= \"Enter valid password\"  type=\"password\" [(ngModel)]=\"password\"></ion-input>\n\t\t</ion-item>\n\t  \n\t  </ion-list>\n\n\t  <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"loginUser(username, password)\">Login</ion-button>\n    <div>\n      <button [routerLink]=\"['/register']\" align=\"center\" class=\"register-margin\">\n        <img src=\"assets/image/register.png\">\n      </button>\n    \n      <button [routerLink]=\"['/reset-password']\" align=\"center\" class=\"register-margin\">\n        <img src=\"assets/image/forgot-password.png\">\n      </button>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/loginMethod/email/email.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginMethod/email/email.module.ts ***!
  \*********************************************************/
/*! exports provided: EmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageModule", function() { return EmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.page */ "./src/app/pages/loginMethod/email/email.page.ts");







const routes = [
    {
        path: '',
        component: _email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"]
    }
];
let EmailPageModule = class EmailPageModule {
};
EmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"]]
    })
], EmailPageModule);



/***/ }),

/***/ "./src/app/pages/loginMethod/email/email.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginMethod/email/email.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9sb2dpbk1ldGhvZC9lbWFpbC9lbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luTWV0aG9kL2VtYWlsL2VtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURJQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbk1ldGhvZC9lbWFpbC9lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZVxue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLmhvbWUtc3R5bGVcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpblxue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIiwiLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5ob21lLXN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/loginMethod/email/email.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/loginMethod/email/email.page.ts ***!
  \*******************************************************/
/*! exports provided: EmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPage", function() { return EmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth-form/auth-form.component */ "./src/app/components/auth-form/auth-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/alert */ "./src/app/services/alert.ts");






let EmailPage = class EmailPage {
    constructor(authService, router, alert) {
        this.authService = authService;
        this.router = router;
        this.alert = alert;
    }
    ngOnInit() { }
    loginUser(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const userCredential = yield this.authService.login(email, password);
                this.authService.userId = userCredential.user.uid;
                this.alert.presentAlert('Success', 'You are logged in!');
                this.router.navigate(["/home"]);
            }
            catch (error) {
                this.alert.presentAlert('Error', 'Invalid email or password!');
            }
        });
    }
};
EmailPage.ctorParameters = () => [
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthFormComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthFormComponent"])
], EmailPage.prototype, "loginForm", void 0);
EmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email',
        template: __webpack_require__(/*! raw-loader!./email.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/email/email.page.html"),
        styles: [__webpack_require__(/*! ./email.page.scss */ "./src/app/pages/loginMethod/email/email.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], EmailPage);



/***/ })

}]);
//# sourceMappingURL=pages-loginMethod-email-email-module-es2015.js.map
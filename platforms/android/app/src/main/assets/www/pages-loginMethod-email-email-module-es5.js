(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginMethod-email-email-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/email/email.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/loginMethod/email/email.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"primary\">\n  <ion-toolbar>\n    <ion-title color=\"light\">Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-list>\n\n\t\t<ion-item>\n\t\t  <ion-label position=\"floating\">Email</ion-label>\n\t\t  <ion-input placeholder= \"Enter registered email\" type=\"text\" [(ngModel)]=\"username\"></ion-input>\n\t\t</ion-item>\n\t  \n\t\t<ion-item>\n\t\t  <ion-label position=\"floating\">Password</ion-label>\n\t\t  <ion-input placeholder= \"Enter valid password\"  type=\"password\" [(ngModel)]=\"password\"></ion-input>\n\t\t</ion-item>\n\t  \n\t  </ion-list>\n\n\t  <ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"loginUser(username, password)\">Login</ion-button>\n    <div>\n      <button [routerLink]=\"['/register']\" align=\"center\" class=\"register-margin\">\n        <img src=\"assets/image/register.png\">\n      </button>\n    \n      <button [routerLink]=\"['/reset-password']\" align=\"center\" class=\"register-margin\">\n        <img src=\"assets/image/forgot-password.png\">\n      </button>\n    </div>\n  </ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.page */ "./src/app/pages/loginMethod/email/email.page.ts");







var routes = [
    {
        path: '',
        component: _email_page__WEBPACK_IMPORTED_MODULE_6__["EmailPage"]
    }
];
var EmailPageModule = /** @class */ (function () {
    function EmailPageModule() {
    }
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
    return EmailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/loginMethod/email/email.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginMethod/email/email.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvcGFnZXMvbG9naW5NZXRob2QvZW1haWwvZW1haWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbk1ldGhvZC9lbWFpbC9lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FESUE7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW5NZXRob2QvZW1haWwvZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2VcbntcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5cbi5ob21lLXN0eWxlXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwMHB4O1xufVxuXG4ubG9naW4tbWFyZ2luXG57XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZWdpc3Rlci1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaG9tZS1zdHlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwMHB4O1xufVxuXG4ubG9naW4tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var src_app_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth-form/auth-form.component */ "./src/app/components/auth-form/auth-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/alert */ "./src/app/services/alert.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var EmailPage = /** @class */ (function () {
    function EmailPage(authService, router, alert, storage) {
        this.authService = authService;
        this.router = router;
        this.alert = alert;
        this.storage = storage;
    }
    EmailPage.prototype.ngOnInit = function () { };
    EmailPage.prototype.loginUser = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userCredential, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 5]);
                        this.alert.showLoading();
                        return [4 /*yield*/, this.authService.login(email, password)];
                    case 1:
                        userCredential = _a.sent();
                        return [4 /*yield*/, this.alert.hideLoading()];
                    case 2:
                        _a.sent();
                        this.authService.userId = userCredential.user.uid;
                        this.storage.set('userCredential', userCredential);
                        //this.alert.presentAlert('Success', 'You are logged in!')
                        this.router.navigate(["/menu/home"]);
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.alert.hideLoading()];
                    case 4:
                        _a.sent();
                        this.alert.handleError(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EmailPage.ctorParameters = function () { return [
        { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
    ]; };
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
            _services_alert__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], EmailPage);
    return EmailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loginMethod-email-email-module-es5.js.map
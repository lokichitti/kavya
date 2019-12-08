(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-loginMethod-email-email-module~pages-reset-password-reset-pas~dbf27d2a"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth-form/auth-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth-form/auth-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"authForm\">\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input\n      formControlName=\"email\"\n      type=\"email\"\n      placeholder=\"Your email address\"\n      [class.invalid]=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n  >\n    <ion-label>Please enter a valid email address.</ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"!isPasswordResetPage\">\n    <ion-label position=\"stacked\">Password</ion-label>\n    <ion-input\n      formControlName=\"password\"\n      type=\"password\"\n      placeholder=\"Your password\"\n      [class.invalid]=\"!authForm.controls['password'].valid&& authForm.controls['password'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['password'].valid\n && authForm.controls['password'].touched && !isPasswordResetPage\"\n  >\n    <ion-label>Your password needs more than 6 characters.</ion-label>\n  </ion-item>\n\n  <ion-button\n    (click)=\"submitCredentials(authForm)\"\n    expand=\"block\"\n    [disabled]=\"!authForm.valid\"\n  >\n    {{ actionButtonText }}\n  </ion-button>\n</form>"

/***/ }),

/***/ "./src/app/components/auth-form/auth-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/auth-form/auth-form.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  padding: 12px;\n  margin-bottom: 32px;\n}\nform ion-button {\n  margin-top: 30px;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0UsZ0JBQUE7QUNFTjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7QUNDSjtBREVFO0VBQ0UsZ0NBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRU47QURBSTtFQUNFLGdCQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogI2QyZDJkMjtcbiAgfVxuICBcbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIFxuICBpb24taW5wdXQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgLmludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICBjb2xvcjogI2ZmNjE1MztcbiAgICB9XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gIH0iLCJmb3JtIHtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbmZvcm0gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbn1cbi5lcnJvci1tZXNzYWdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBjb2xvcjogI2ZmNjE1Mztcbn1cbi5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/auth-form/auth-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth-form/auth-form.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AuthFormComponent = /** @class */ (function () {
    function AuthFormComponent(formBuilder, loadingCtrl, alertCtrl) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isPasswordResetPage = false;
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.authForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
        });
    }
    AuthFormComponent.prototype.ngOnInit = function () { };
    AuthFormComponent.prototype.showLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthFormComponent.prototype.hideLoading = function () {
        return this.loading.dismiss();
    };
    AuthFormComponent.prototype.handleError = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthFormComponent.prototype.submitCredentials = function (authForm) {
        if (!authForm.valid) {
            console.log('Form is not valid yet, current value:', authForm.value);
        }
        else {
            this.showLoading();
            var credentials = {
                email: authForm.value.email,
                password: authForm.value.password
            };
            this.formSubmitted.emit(credentials);
        }
    };
    AuthFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuthFormComponent.prototype, "actionButtonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthFormComponent.prototype, "isPasswordResetPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthFormComponent.prototype, "formSubmitted", void 0);
    AuthFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-form',
            template: __webpack_require__(/*! raw-loader!./auth-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth-form/auth-form.component.html"),
            styles: [__webpack_require__(/*! ./auth-form.component.scss */ "./src/app/components/auth-form/auth-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], AuthFormComponent);
    return AuthFormComponent;
}());



/***/ }),

/***/ "./src/app/services/user/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, firestore, loadingCtrl, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
    }
    AuthService.prototype.createProfile = function (uId, values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, email, fName, lName, password;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        email = values.email;
                        fName = values.name;
                        lName = values.lastname;
                        password = values.matching_passwords.password;
                        this.createUser(uId, email, fName, lName, password)
                            .then(function () {
                            loading.dismiss().then(function () {
                            });
                        }, function (error) {
                            console.error(error);
                        });
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.createUser = function (uId, email, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestore.doc("userProfile/" + uId).set({
                            uId: uId,
                            email: email,
                            fName: fName,
                            lName: lName,
                            password: password
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getUser = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
    };
    AuthService.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signup = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newUserCredential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(values.email, values.matching_passwords.password)];
                    case 1:
                        newUserCredential = _a.sent();
                        /* const email = values.email;
                         const password = values.matching_passwords.password;
                         const firstName = values.fName;
                         const lastName = values.lName;
                         await this.firestore
                         .doc(`userProfile/${newUserCredential.user.uid}`)
                         .set({
                           email,
                           password,
                           firstName,
                           lastName
                         });*/
                        return [2 /*return*/, newUserCredential];
                }
            });
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-login-login-module~pages-loginMethod-email-email-module~pages-reset-password-reset-pas~dbf27d2a-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registerMethod-r-phone-r-phone-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/registerMethod/r-phone/r-phone.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/registerMethod/r-phone/r-phone.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Register</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding class=\"form-content\">\n    <form [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmit(validations_form)\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">First name</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n      \n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Last name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.lastname\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('lastname').hasError(validation.type) && (validations_form.get('lastname').dirty || validations_form.get('lastname').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>      \n      \n          <div formGroupName=\"country_phone\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Country</ion-label>\n              <ion-select formControlName=\"country\" cancelText=\"Cancel\" okText=\"OK\">\n                <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\">{{item.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Phone</ion-label>\n              <ion-input placeholder=\"Enter 10 digit mobile number\" type=\"text\" formControlName=\"phone\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.phone\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('country_phone').get('phone').hasError(validation.type) && (validations_form.get('country_phone').get('phone').dirty || validations_form.get('country_phone').get('phone').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </div>\n      \n      \n          <div formGroupName=\"matching_passwords\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('password').hasError(validation.type) && (validations_form.get('matching_passwords').get('password').dirty || validations_form.get('matching_passwords').get('password').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n      \n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\n              <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.confirm_password\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('confirm_password').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <!-- These validations are for the form group -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n      \n          <ion-item>\n            <ion-label color=\"primary\">I accept terms and conditions</ion-label>\n            <ion-checkbox color=\"primary\" formControlName=\"terms\"></ion-checkbox>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.terms\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('terms').hasError(validation.type) && (validations_form.get('terms').dirty || validations_form.get('terms').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\" [disabled]=\"disableGetOTPButton\">Submit</ion-button>\n    </form>\n    <ion-item>\n        <ion-label position=\"floating\">OTP</ion-label>\n        <ion-input color = \"primary\" type=\"text\" placeholder=\"Enter code\" [(ngModel)]=\"OTPcode\"></ion-input>\n      </ion-item>\n      \n    <ion-button expand=\"full\" (click)=\"verify(validations_form)\" [disabled]=\"disableVerifyButton\">Verify OTP</ion-button>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/registerMethod/r-phone/r-phone.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/registerMethod/r-phone/r-phone.module.ts ***!
  \****************************************************************/
/*! exports provided: RPhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPhonePageModule", function() { return RPhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _r_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./r-phone.page */ "./src/app/pages/registerMethod/r-phone/r-phone.page.ts");








var routes = [
    {
        path: '',
        component: _r_phone_page__WEBPACK_IMPORTED_MODULE_6__["RPhonePage"]
    }
];
var RPhonePageModule = /** @class */ (function () {
    function RPhonePageModule() {
    }
    RPhonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_r_phone_page__WEBPACK_IMPORTED_MODULE_6__["RPhonePage"]]
        })
    ], RPhonePageModule);
    return RPhonePageModule;
}());



/***/ }),

/***/ "./src/app/pages/registerMethod/r-phone/r-phone.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/registerMethod/r-phone/r-phone.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlck1ldGhvZC9yLXBob25lL3ItcGhvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlck1ldGhvZC9yLXBob25lL3ItcGhvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXJNZXRob2Qvci1waG9uZS9yLXBob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXG57XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/registerMethod/r-phone/r-phone.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/registerMethod/r-phone/r-phone.page.ts ***!
  \**************************************************************/
/*! exports provided: RPhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPhonePage", function() { return RPhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/country-phone.model */ "./src/app/models/country-phone.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
/* harmony import */ var _models_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/validators */ "./src/app/models/validators.ts");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/alert */ "./src/app/services/alert.ts");












var phoneSignInWithVerificationId;
var phoneNumber;
//{{ validations_form.value.country_phone.country.code }}
var RPhonePage = /** @class */ (function () {
    function RPhonePage(formBuilder, router, authService, firebaseAuthentication, alertCtrl, toastCtrl, alert) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.firebaseAuthentication = firebaseAuthentication;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.OTP = '';
        this.showOTPInput = false;
        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
        this.disableVerifyButton = true;
        this.disableGetOTPButton = false;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required.' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch.' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions.' }
            ],
        };
    }
    RPhonePage.prototype.ngOnInit = function () {
        this.countries = [
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('IN', 'India'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('US', 'United States'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('BR', 'Brasil')
        ];
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, function (formGroup) {
            return _models_validators__WEBPACK_IMPORTED_MODULE_7__["PasswordValidator"].areEqual(formGroup);
        });
        var country = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.countries[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        var phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _models_validators__WEBPACK_IMPORTED_MODULE_7__["PhoneValidator"].validCountryPhone(country)
        ]));
        this.country_phone_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            country: country,
            phone: phone
        });
        this.validations_form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            country_phone: this.country_phone_group,
            matching_passwords: this.matching_passwords_group,
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('true'))
        });
    };
    RPhonePage.prototype.createProfile = function (values) {
        /*this.angularFireAuth.authState.subscribe(auth=>{
          this.angularFireDatabase.list(`profile/${auth.uid}`).push
        });*/
    };
    RPhonePage.prototype.onSubmit = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                phoneNumber = values.value.country_phone.country.code + values.value.country_phone.phone;
                console.log("Get OTP called " + phoneNumber);
                this.disableGetOTPButton = true;
                this.disableVerifyButton = false;
                this.presentAlertPrompt(values);
                this.firebaseAuthentication.verifyPhoneNumber(phoneNumber, 3000).then(function (verificationId) {
                    phoneSignInWithVerificationId = verificationId;
                    this.presentAlertPrompt(values);
                }).catch(function (e) {
                    console.log(e);
                });
                return [2 /*return*/];
            });
        });
    };
    RPhonePage.prototype.register = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userCredential, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.signupWithPhone(values)];
                    case 1:
                        userCredential = _a.sent();
                        this.authService.userId = userCredential.user.uid;
                        this.alert.presentAlert('Success', 'You are registered!');
                        this.authService.createPhoneUserProfile(this.authService.userId, values);
                        this.router.navigate(["/home"]);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.alert.presentAlert('Error', 'Something went wrong, please try again!');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RPhonePage.prototype.verify = function (values) {
        console.log("verify called Entered OTP is " + this.OTPcode);
        this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId, this.OTPcode)
            .then(function (result) {
            this.register(values);
            // ...
        }).catch(function (error) {
            this.alert.presentAlert('Error', 'Something went wrong, please try again!');
        });
    };
    RPhonePage.prototype.presentAlertPrompt = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("presentAlertPrompt called");
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'OTP Sent Successfully',
                                inputs: [
                                    {
                                        name: 'OTP',
                                        type: 'text',
                                        placeholder: 'Enter OTP'
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'primary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function (data) {
                                            _this.OTPcode = data.OTP;
                                            _this.verify(values);
                                            console.log('Confirm Ok');
                                        }
                                    }
                                ],
                                backdropDismiss: false
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        setTimeout(function () {
                            alert.dismiss();
                        }, 60000);
                        return [2 /*return*/];
                }
            });
        });
    };
    RPhonePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
    ]; };
    RPhonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-r-phone',
            template: __webpack_require__(/*! raw-loader!./r-phone.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/registerMethod/r-phone/r-phone.page.html"),
            styles: [__webpack_require__(/*! ./r-phone.page.scss */ "./src/app/pages/registerMethod/r-phone/r-phone.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
    ], RPhonePage);
    return RPhonePage;
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
    AuthService.prototype.createPhoneUserProfile = function (uId, values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, phone, fName, lName, password;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        phone = values.value.country_phone.country.code + values.value.country_phone.phone;
                        fName = values.value.name;
                        lName = values.value.lastname;
                        password = values.value.matching_passwords.password;
                        this.createPhoneUser(uId, phone, fName, lName, password)
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
    AuthService.prototype.createPhoneUser = function (uId, phone, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestore.doc("PhoneUserProfile/" + phone).set({
                            uId: uId,
                            phone: phone,
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
                        return [2 /*return*/, newUserCredential];
                }
            });
        });
    };
    AuthService.prototype.signupWithPhone = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newUserCredential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(values.value.country_phone.country.code + values.value.country_phone.phone + "@meandmyshop.com", values.value.matching_passwords.password)];
                    case 1:
                        newUserCredential = _a.sent();
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
//# sourceMappingURL=pages-registerMethod-r-phone-r-phone-module-es5.js.map
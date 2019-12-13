(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registerMethod-r-phone-r-phone-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/registerMethod/r-phone/r-phone.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/registerMethod/r-phone/r-phone.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Register</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding class=\"form-content\">\n    <form [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmit(validations_form)\">\n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">First name</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n      \n          <ion-item>\n            <ion-label position=\"floating\" color=\"primary\">Last name</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.lastname\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('lastname').hasError(validation.type) && (validations_form.get('lastname').dirty || validations_form.get('lastname').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>      \n      \n          <div formGroupName=\"country_phone\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Country</ion-label>\n              <ion-select formControlName=\"country\" cancelText=\"Cancel\" okText=\"OK\">\n                <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\">{{item.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Phone</ion-label>\n              <ion-input placeholder=\"Enter 10 digit mobile number\" type=\"text\" formControlName=\"phone\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.phone\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('country_phone').get('phone').hasError(validation.type) && (validations_form.get('country_phone').get('phone').dirty || validations_form.get('country_phone').get('phone').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </div>\n      \n      \n          <div formGroupName=\"matching_passwords\">\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('password').hasError(validation.type) && (validations_form.get('matching_passwords').get('password').dirty || validations_form.get('matching_passwords').get('password').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n      \n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\n              <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n            </ion-item>\n            <div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.confirm_password\">\n                <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('confirm_password').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <!-- These validations are for the form group -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n      \n          <ion-item>\n            <ion-label color=\"primary\">I accept terms and conditions</ion-label>\n            <ion-checkbox color=\"primary\" formControlName=\"terms\"></ion-checkbox>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.terms\">\n              <div class=\"error-message\" *ngIf=\"validations_form.get('terms').hasError(validation.type) && (validations_form.get('terms').dirty || validations_form.get('terms').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-button color=\"primary\" class=\"login-margin\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\" [disabled]=\"disableGetOTPButton\">Submit</ion-button>\n    </form>\n    <ion-item>\n        <ion-label position=\"floating\">OTP</ion-label>\n        <ion-input color = \"primary\" type=\"text\" placeholder=\"Enter code\" [(ngModel)]=\"OTPcode\"></ion-input>\n      </ion-item>\n      \n    <ion-button class=\"login-margin\" expand=\"full\" (click)=\"verify(validations_form)\" [disabled]=\"disableVerifyButton\">Verify OTP</ion-button>\n  \n    <div>\n      <button [routerLink]=\"['/first']\" align=\"center\" class=\"login-margin\">\n        <img src=\"assets/image/login.png\">\n      </button>\n    </div>\n  </ion-content>"

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

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlck1ldGhvZC9yLXBob25lL3ItcGhvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlck1ldGhvZC9yLXBob25lL3ItcGhvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBRElBO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyTWV0aG9kL3ItcGhvbmUvci1waG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZVxue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLmhvbWUtc3R5bGVcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpblxue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIiwiLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5ob21lLXN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

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
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");














var phoneSignInWithVerificationId;
var phoneNumber;
//{{ validations_form.value.country_phone.country.code }}
var RPhonePage = /** @class */ (function () {
    function RPhonePage(formBuilder, router, authService, firebaseAuthentication, alertCtrl, toastCtrl, alert, storage, afAuth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.firebaseAuthentication = firebaseAuthentication;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.storage = storage;
        this.afAuth = afAuth;
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
        //console.log("your UID is "+this.afAuth.auth.currentUser.uid);
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
    RPhonePage.prototype.onSubmit = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("your UID is " + this.afAuth.auth.currentUser.uid);
                phoneNumber = values.value.country_phone.country.code + values.value.country_phone.phone;
                console.log("Get OTP called " + phoneNumber);
                this.disableGetOTPButton = true;
                this.disableVerifyButton = false;
                this.presentAlertPrompt(values);
                this.firebaseAuthentication.verifyPhoneNumber(phoneNumber, 3000).then(function (verificationId) {
                    phoneSignInWithVerificationId = verificationId.verificationId;
                    console.log("OTP Successfully Sent " + verificationId);
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
            var error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.alert.hideLoading()];
                    case 1:
                        _a.sent();
                        this.alert.presentAlert('Success', 'You are registered!');
                        //this.afAuth.auth.currentUser.uid = phoneSignInWithVerificationId;
                        this.authService.createPhoneUserProfile(this.afAuth.auth.currentUser.uid, values)
                            .then(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                //await this.alert.hideLoading();
                                this.router.navigate(["/menu/home"]);
                                console.log("your UID is " + this.afAuth.auth.currentUser.uid);
                                //await this.alert.hideLoading();
                                console.log("your UID is " + this.afAuth.auth.currentUser.uid);
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.alert.hideLoading()];
                    case 3:
                        _a.sent();
                        this.alert.handleError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RPhonePage.prototype.verify = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //this.alert.showLoading();
                console.log("verify called Entered OTP is " + this.OTPcode);
                this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId, this.OTPcode);
                console.log("OTP Successfully Sent " + phoneSignInWithVerificationId);
                this.alert.presentAlert('Success', 'You are registered!');
                //await this.alert.hideLoading();
                this.register(values);
                return [2 /*return*/];
            });
        });
    };
    /* console.log("verify called Entered OTP is "+ this.OTPcode);
     try{
       this.alert.showLoading();
       this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId ,this.OTPcode)
       .then (async (res) =>{
         console.log("signInWithVerificationId called");
         await this.alert.hideLoading();
         this.storage.set('userCredential', res);
         this.register(values);
         this.router.navigate(["/menu/home"]);
       });
     }catch (error) {
       console.log("signInWithVerificationId error");
       await this.alert.hideLoading();
       this.alert.handleError(error);
       this.alert.presentAlert('Error', 'Phone number exist, try login!')
     }
     
     
   }*/
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
                                            //this.alert.showLoading(); 
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
                            //this.alert.hideLoading();
                            //this.alert.presentAlert('Try again', 'Thanks for your patience'); 
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
        { type: _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"] }
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
            _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"]])
    ], RPhonePage);
    return RPhonePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registerMethod-r-phone-r-phone-module-es5.js.map
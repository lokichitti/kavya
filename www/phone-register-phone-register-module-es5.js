(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["phone-register-phone-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/phone-register/phone-register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/phone-register/phone-register.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"form-content\">\n  <form [formGroup]=\"validations_form\"  (ngSubmit)=\"getOTP(validations_form)\">\n     <div formGroupName=\"country_phone\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Country</ion-label>\n        <ion-select formControlName=\"country\" cancelText=\"Cancel\" okText=\"OK\">\n          <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Phone</ion-label>\n        <ion-input placeholder=\"{{ validations_form.value.country_phone.country.code }}\" type=\"text\" formControlName=\"phone\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.phone\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('country_phone').get('phone').hasError(validation.type) && (validations_form.get('country_phone').get('phone').dirty || validations_form.get('country_phone').get('phone').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n        <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\" [disabled]=\"disableGetOTPButton\">Get OTP</ion-button>\n  </form>\n  <ion-item>\n      <ion-label position=\"floating\">OTP</ion-label>\n      <ion-input color = \"primary\" type=\"text\" placeholder=\"Enter code\" [(ngModel)]=\"OTPcode1\"></ion-input>\n    </ion-item>\n  <ion-button expand=\"full\" (click)=\"verify()\" [disabled]=\"disableVerifyButton\">Verify OTP</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/models/country-phone.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/country-phone.model.ts ***!
  \***********************************************/
/*! exports provided: CountryPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPhone", function() { return CountryPhone; });
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-libphonenumber */ "./node_modules/google-libphonenumber/dist/libphonenumber.js");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__);

var CountryPhone = /** @class */ (function () {
    function CountryPhone(iso, name) {
        this.iso = iso;
        this.name = name;
        var phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberUtil.getInstance(), PNF = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberFormat, PNT = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberType, country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE), 
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo (https://github.com/googlei18n/libphonenumber/blob/f9e9424769964ce1970c6ed2bd60b25b976dfe6f/javascript/i18n/phonenumbers/phonenumberutil.js#L913)
        example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
        // We need to define how are we going to format the phone number
        // You can choose between many formats including:
        //    - NATIONAL
        //    - INTERNATIONAL
        //    - E164
        //    - RFC3966
        this.sample_phone = example_number_formatted;
        this.code = "+" + country_example_number.getCountryCode();
    }
    CountryPhone.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return CountryPhone;
}());



/***/ }),

/***/ "./src/app/phone-register/phone-register.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/phone-register/phone-register.module.ts ***!
  \*********************************************************/
/*! exports provided: PhoneRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneRegisterPageModule", function() { return PhoneRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phone_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phone-register.page */ "./src/app/phone-register/phone-register.page.ts");








var routes = [
    {
        path: '',
        component: _phone_register_page__WEBPACK_IMPORTED_MODULE_6__["PhoneRegisterPage"]
    }
];
var PhoneRegisterPageModule = /** @class */ (function () {
    function PhoneRegisterPageModule() {
    }
    PhoneRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_phone_register_page__WEBPACK_IMPORTED_MODULE_6__["PhoneRegisterPage"]]
        })
    ], PhoneRegisterPageModule);
    return PhoneRegisterPageModule;
}());



/***/ }),

/***/ "./src/app/phone-register/phone-register.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/phone-register/phone-register.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9waG9uZS1yZWdpc3Rlci9waG9uZS1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bob25lLXJlZ2lzdGVyL3Bob25lLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3Bob25lLXJlZ2lzdGVyL3Bob25lLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXG57XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/phone-register/phone-register.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/phone-register/phone-register.page.ts ***!
  \*******************************************************/
/*! exports provided: PhoneRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneRegisterPage", function() { return PhoneRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/country-phone.model */ "./src/app/models/country-phone.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
/* harmony import */ var _models_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/validators */ "./src/app/models/validators.ts");











var phoneSignInWithVerificationId;
var OTPcode;
var phoneNumber;
var PhoneRegisterPage = /** @class */ (function () {
    function PhoneRegisterPage(formBuilder, router, firebaseX, firebaseAuthentication, alertCtrl, toastCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.firebaseX = firebaseX;
        this.firebaseAuthentication = firebaseAuthentication;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.OTP = '';
        this.showOTPInput = false;
        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
        this.disableVerifyButton = true;
        this.disableGetOTPButton = false;
        this.validation_messages = {
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
            ],
        };
    }
    PhoneRegisterPage.prototype.ngOnInit = function () {
        //  We just use a few random countries, however, you can use the countries you need by just adding them to this list.
        // also you can use a library to get all the countries from the world.
        this.countries = [
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('IN', 'India'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('US', 'United States'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('BR', 'Brasil')
        ];
        var country = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.countries[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        var phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _models_validators__WEBPACK_IMPORTED_MODULE_8__["PhoneValidator"].validCountryPhone(country)
        ]));
        this.country_phone_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            country: country,
            phone: phone
        });
        this.validations_form = this.formBuilder.group({
            country_phone: this.country_phone_group
        });
    };
    PhoneRegisterPage.prototype.createProfile = function (values) {
        /*this.angularFireAuth.authState.subscribe(auth=>{
          this.angularFireDatabase.list(`profile/${auth.uid}`).push
        });*/
    };
    PhoneRegisterPage.prototype.getOTP = function (values) {
        phoneNumber = values.value.country_phone.country.code + values.value.country_phone.phone;
        console.log("Get OTP called " + phoneNumber);
        this.disableGetOTPButton = true;
        this.disableVerifyButton = false;
        this.presentAlertPrompt();
        this.firebaseAuthentication.verifyPhoneNumber(phoneNumber, 3000).then(function (verificationId) {
            phoneSignInWithVerificationId = verificationId;
            console.log("OTP Successfully Sent " + verificationId);
            this.presentAlertPrompt();
        }).catch(function (e) {
            console.log(e);
        });
    };
    PhoneRegisterPage.prototype.verify = function () {
        console.log("verify called Entered OTP is " + this.OTPcode1);
        this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId, this.OTPcode1);
        console.log("OTP Successfully Sent " + phoneSignInWithVerificationId);
    };
    PhoneRegisterPage.prototype.presentAlertPrompt = function () {
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
                                            _this.OTPcode1 = data.OTP;
                                            _this.verify();
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
    PhoneRegisterPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseX"] },
        { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    PhoneRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phone-register',
            template: __webpack_require__(/*! raw-loader!./phone-register.page.html */ "./node_modules/raw-loader/index.js!./src/app/phone-register/phone-register.page.html"),
            styles: [__webpack_require__(/*! ./phone-register.page.scss */ "./src/app/phone-register/phone-register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseX"],
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], PhoneRegisterPage);
    return PhoneRegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=phone-register-phone-register-module-es5.js.map
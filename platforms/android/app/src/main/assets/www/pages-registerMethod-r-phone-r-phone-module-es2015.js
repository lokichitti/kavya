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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _r_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./r-phone.page */ "./src/app/pages/registerMethod/r-phone/r-phone.page.ts");








const routes = [
    {
        path: '',
        component: _r_phone_page__WEBPACK_IMPORTED_MODULE_6__["RPhonePage"]
    }
];
let RPhonePageModule = class RPhonePageModule {
};
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



/***/ }),

/***/ "./src/app/pages/registerMethod/r-phone/r-phone.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/registerMethod/r-phone/r-phone.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXJNZXRob2Qvci1waG9uZS9yLXBob25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXJNZXRob2Qvci1waG9uZS9yLXBob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURJQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlck1ldGhvZC9yLXBob25lL3ItcGhvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2VcbntcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5cbi5ob21lLXN0eWxlXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwMHB4O1xufVxuXG4ubG9naW4tbWFyZ2luXG57XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZWdpc3Rlci1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaG9tZS1zdHlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwMHB4O1xufVxuXG4ubG9naW4tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/country-phone.model */ "./src/app/models/country-phone.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
/* harmony import */ var _models_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/validators */ "./src/app/models/validators.ts");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/alert */ "./src/app/services/alert.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");













var phoneSignInWithVerificationId;
var phoneNumber;
//{{ validations_form.value.country_phone.country.code }}
let RPhonePage = class RPhonePage {
    constructor(formBuilder, router, authService, firebaseAuthentication, alertCtrl, toastCtrl, alert, storage) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.firebaseAuthentication = firebaseAuthentication;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.storage = storage;
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
                { type: 'minlength', message: 'Password must be at least 6 characters long.' },
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
    ngOnInit() {
        this.countries = [
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('IN', 'India'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('US', 'United States'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('BR', 'Brasil')
        ];
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, (formGroup) => {
            return _models_validators__WEBPACK_IMPORTED_MODULE_7__["PasswordValidator"].areEqual(formGroup);
        });
        let country = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.countries[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        let phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
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
    }
    onSubmit(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var globalErrorCheck = 0;
            phoneNumber = values.value.country_phone.country.code + values.value.country_phone.phone;
            console.log("Get OTP called " + phoneNumber);
            phoneSignInWithVerificationId = null;
            this.disableGetOTPButton = true;
            this.disableVerifyButton = false;
            this.firebaseAuthentication.verifyPhoneNumber(phoneNumber, 3000)
                .then(function (verificationId) {
                phoneSignInWithVerificationId = verificationId;
                globalErrorCheck = 1;
                console.log("OTP Sent successfully" + phoneNumber);
                //this.presentAlertPrompt(values);
            }).catch(e => {
                console.log("Get OTP failed ");
                console.log(e);
                this.disableGetOTPButton = false;
                this.disableVerifyButton = true;
                this.alert.handleError(e);
            }).finally(function () {
                console.log('This finally block');
                if (globalErrorCheck) {
                    console.log("Get OTP called ");
                    this.disableGetOTPButton = true;
                    this.disableVerifyButton = false;
                    this.alert.presentAlert('SMS Sent', 'Please enter 6 digit OTP below');
                }
            });
        });
    }
    register(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const email = "ph" + phoneNumber + "@meandmyshop.com";
            const password = values.value.matching_passwords.password;
            try {
                const userCredential = yield this.authService.signupPhone(email, password);
                yield this.alert.hideLoading();
                //this.storage.set('email', values.email);
                //this.storage.set('password', values.matching_passwords.password);
                this.authService.userId = userCredential.user.uid;
                //this.storage.set('userCredential', userCredential);    
                this.alert.presentAlert('Success', 'You are registered!');
                //this.authService.sendVerificationMail();
                this.authService.createPhoneUserProfile(this.authService.userId, values);
                //this.router.navigate(["/menu/home"]);
            }
            catch (error) {
                yield this.alert.hideLoading();
                this.alert.handleError(error);
                this.router.navigate(["/first"]);
                //this.alert.presentAlert('Error', 'Something went wrong, please try again!')
            }
        });
    }
    verify(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.OTPcode) {
                console.log("verify called Entered OTP is " + this.OTPcode);
                this.alert.showLoading();
                // try{    //
                this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId, this.OTPcode)
                    .then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log("Verify success" + phoneNumber);
                    //this.storage.set('userCredential', res);
                    this.register(values);
                    yield this.alert.hideLoading();
                    this.router.navigate(["/menu/home"]);
                })).catch((error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log("Verify failed" + phoneNumber);
                    yield this.alert.hideLoading();
                    this.alert.handleError(error);
                    //this.alert.presentAlert('Error', 'Phone number exist, try login!')
                })).finally(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.alert.hideLoading();
                }));
            }
            else {
                this.alert.presentAlert('Error', 'Please enter 6 digit OTP!');
            }
        });
    }
    presentAlertPrompt(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("presentAlertPrompt called");
            const alert = yield this.alertCtrl.create({
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
                        handler: () => {
                            console.log('Confirm Cancel');
                            //this.alert.showLoading(); 
                            this.disableGetOTPButton = false;
                            this.disableVerifyButton = true;
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            this.OTPcode = data.OTP;
                            this.verify(values);
                            console.log('Confirm Ok');
                            this.disableGetOTPButton = false;
                            this.disableVerifyButton = true;
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
            setTimeout(() => {
                //this.alert.hideLoading();
                //this.alert.presentAlert('Try again', 'Thanks for your patience'); 
                alert.dismiss();
            }, 60000);
        });
    }
};
RPhonePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
];
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
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
], RPhonePage);



/***/ })

}]);
//# sourceMappingURL=pages-registerMethod-r-phone-r-phone-module-es2015.js.map
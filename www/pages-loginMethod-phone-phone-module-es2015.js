(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginMethod-phone-phone-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/phone/phone.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/loginMethod/phone/phone.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding class=\"form-content\">\n    <form [formGroup]=\"validations_form\"  (ngSubmit)=\"loginUser(validations_form)\">\n       <div formGroupName=\"country_phone\">\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Country</ion-label>\n          <ion-select formControlName=\"country\" cancelText=\"Cancel\" okText=\"OK\">\n            <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\">{{item.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Phone</ion-label>\n          <ion-input placeholder=\"{{ validations_form.value.country_phone.country.code }}\" type=\"text\" formControlName=\"phone\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_messages.phone\">\n            <div class=\"error-message\" *ngIf=\"validations_form.get('country_phone').get('phone').hasError(validation.type) && (validations_form.get('country_phone').get('phone').dirty || validations_form.get('country_phone').get('phone').touched)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.name\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n          <ion-button color=\"primary\" class=\"login-margin\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\">Get OTP</ion-button>\n    </form>\n    <div>\n        <button [routerLink]=\"['/register']\" align=\"center\" class=\"register-margin\">\n          <img src=\"assets/image/register.png\">\n        </button>\n      \n        <button [routerLink]=\"['/reset-password']\" align=\"center\" class=\"register-margin\">\n          <img src=\"assets/image/forgot-password.png\">\n        </button>\n      </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/loginMethod/phone/phone.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginMethod/phone/phone.module.ts ***!
  \*********************************************************/
/*! exports provided: PhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePageModule", function() { return PhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phone.page */ "./src/app/pages/loginMethod/phone/phone.page.ts");







const routes = [
    {
        path: '',
        component: _phone_page__WEBPACK_IMPORTED_MODULE_6__["PhonePage"]
    }
];
let PhonePageModule = class PhonePageModule {
};
PhonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_phone_page__WEBPACK_IMPORTED_MODULE_6__["PhonePage"]]
    })
], PhonePageModule);



/***/ }),

/***/ "./src/app/pages/loginMethod/phone/phone.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginMethod/phone/phone.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9sb2dpbk1ldGhvZC9waG9uZS9waG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luTWV0aG9kL3Bob25lL3Bob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURJQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbk1ldGhvZC9waG9uZS9waG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZVxue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLmhvbWUtc3R5bGVcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpblxue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIiwiLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5ob21lLXN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/loginMethod/phone/phone.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/loginMethod/phone/phone.page.ts ***!
  \*******************************************************/
/*! exports provided: PhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePage", function() { return PhonePage; });
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












var phoneSignInWithVerificationId;
var phoneNumber;
let PhonePage = class PhonePage {
    constructor(formBuilder, router, authService, firebaseAuthentication, alertCtrl, toastCtrl, alert) {
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
            'phone': [
                { type: 'required', message: 'Phone is required.' },
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
            ],
        };
    }
    ngOnInit() {
        this.countries = [
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('IN', 'India'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('US', 'United States'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('BR', 'Brasil')
        ];
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
            country_phone: this.country_phone_group,
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    loginUser(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const userCredential = yield this.authService.login(values.value.country_phone.country.code + values.value.country_phone.phone + "@meandmyshop.com", values.value.password);
                this.authService.userId = userCredential.user.uid;
                this.alert.presentAlert('Success', 'You are logged in!');
                this.router.navigate(["/home"]);
            }
            catch (error) {
                this.alert.presentAlert('Error', 'Invalid phone or password!');
            }
        });
    }
};
PhonePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
PhonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phone',
        template: __webpack_require__(/*! raw-loader!./phone.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/phone/phone.page.html"),
        styles: [__webpack_require__(/*! ./phone.page.scss */ "./src/app/pages/loginMethod/phone/phone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
], PhonePage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let AuthService = class AuthService {
    constructor(afAuth, firestore, loadingCtrl, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
    }
    createProfile(uId, values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            const email = values.email;
            const fName = values.name;
            const lName = values.lastname;
            const password = values.matching_passwords.password;
            this.createUser(uId, email, fName, lName, password)
                .then(() => {
                loading.dismiss().then(() => {
                });
            }, error => {
                console.error(error);
            });
            return yield loading.present();
        });
    }
    createPhoneUserProfile(uId, values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            const phone = values.value.country_phone.country.code + values.value.country_phone.phone;
            const fName = values.value.name;
            const lName = values.value.lastname;
            const password = values.value.matching_passwords.password;
            this.createPhoneUser(uId, phone, fName, lName, password)
                .then(() => {
                loading.dismiss().then(() => {
                });
            }, error => {
                console.error(error);
            });
            return yield loading.present();
        });
    }
    createUser(uId, email, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firestore.doc(`userProfile/${uId}`).set({
                uId,
                email,
                fName,
                lName,
                password
            });
        });
    }
    createPhoneUser(uId, phone, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firestore.doc(`PhoneUserProfile/${phone}`).set({
                uId,
                phone,
                fName,
                lName,
                password
            });
        });
    }
    getUser() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
    }
    login(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    signup(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const newUserCredential = yield this.afAuth.auth.createUserWithEmailAndPassword(values.email, values.matching_passwords.password);
            return newUserCredential;
        });
    }
    signupWithPhone(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const newUserCredential = yield this.afAuth.auth.createUserWithEmailAndPassword(values.value.country_phone.country.code + values.value.country_phone.phone + "@meandmyshop.com", values.value.matching_passwords.password);
            return newUserCredential;
        });
    }
    resetPassword(email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }
    logout() {
        return this.afAuth.auth.signOut();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AuthService);



/***/ })

}]);
//# sourceMappingURL=pages-loginMethod-phone-phone-module-es2015.js.map
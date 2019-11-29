(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"form-content\">\n  <form [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmit(validations_form.value)\">\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Username</ion-label>\n      <ion-input type=\"text\" formControlName=\"username\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.username\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('username').hasError(validation.type) && (validations_form.get('username').dirty || validations_form.get('username').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.name\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Last name</ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.lastname\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('lastname').hasError(validation.type) && (validations_form.get('lastname').dirty || validations_form.get('lastname').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Gender</ion-label>\n      <ion-select formControlName=\"gender\" cancelText=\"Cancel\" okText=\"OK\">\n        <ion-select-option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <div formGroupName=\"country_phone\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Country</ion-label>\n        <ion-select formControlName=\"country\" cancelText=\"Cancel\" okText=\"OK\">\n          <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Phone</ion-label>\n        <ion-input placeholder=\"{{ validations_form.value.country_phone.country.sample_phone }}\" type=\"text\" formControlName=\"phone\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.phone\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('country_phone').get('phone').hasError(validation.type) && (validations_form.get('country_phone').get('phone').dirty || validations_form.get('country_phone').get('phone').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n\n    <div formGroupName=\"matching_passwords\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('password').hasError(validation.type) && (validations_form.get('matching_passwords').get('password').dirty || validations_form.get('matching_passwords').get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.confirm_password\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('confirm_password').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <!-- These validations are for the form group -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label color=\"primary\">I accept terms and conditions</ion-label>\n      <ion-checkbox color=\"primary\" formControlName=\"terms\"></ion-checkbox>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.terms\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('terms').hasError(validation.type) && (validations_form.get('terms').dirty || validations_form.get('terms').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\">Submit data</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/country-phone.model.ts":
/*!*************************************************!*\
  !*** ./src/app/register/country-phone.model.ts ***!
  \*************************************************/
/*! exports provided: CountryPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPhone", function() { return CountryPhone; });
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-libphonenumber */ "./node_modules/google-libphonenumber/dist/libphonenumber.js");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__);

class CountryPhone {
    constructor(iso, name) {
        this.iso = iso;
        this.name = name;
        let phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberUtil.getInstance(), PNF = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberFormat, PNT = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberType, country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE), 
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
}
CountryPhone.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlXG57XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _country_phone_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-phone.model */ "./src/app/register/country-phone.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _models_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/validators */ "./src/app/models/validators.ts");
/* harmony import */ var _services_user_user_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user/user.services */ "./src/app/services/user/user.services.ts");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/alert */ "./src/app/services/alert.ts");






//import { AngularFireAuth } from 'angularfire2/auth';






let RegisterPage = class RegisterPage {
    constructor(formBuilder, router, angularFireAuth, angularFireDatabase, user, alert, afstore) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.angularFireAuth = angularFireAuth;
        this.angularFireDatabase = angularFireDatabase;
        this.user = user;
        this.alert = alert;
        this.afstore = afstore;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please wnter a valid email.' }
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
        this.username = "";
    }
    ngOnInit() {
        //  We just use a few random countries, however, you can use the countries you need by just adding them to this list.
        // also you can use a library to get all the countries from the world.
        this.countries = [
            new _country_phone_model__WEBPACK_IMPORTED_MODULE_3__["CountryPhone"]('IN', 'India'),
            new _country_phone_model__WEBPACK_IMPORTED_MODULE_3__["CountryPhone"]('US', 'United States'),
            new _country_phone_model__WEBPACK_IMPORTED_MODULE_3__["CountryPhone"]('BR', 'Brasil')
        ];
        this.genders = [
            "Male",
            "Female"
        ];
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, (formGroup) => {
            return _models_validators__WEBPACK_IMPORTED_MODULE_8__["PasswordValidator"].areEqual(formGroup);
        });
        let country = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.countries[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        let phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _models_validators__WEBPACK_IMPORTED_MODULE_8__["PhoneValidator"].validCountryPhone(country)
        ]));
        this.country_phone_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            country: country,
            phone: phone
        });
        this.validations_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _models_validators__WEBPACK_IMPORTED_MODULE_8__["UsernameValidator"].validUsername,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.genders[0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            country_phone: this.country_phone_group,
            matching_passwords: this.matching_passwords_group,
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'))
        });
    }
    createProfile(values) {
        /*this.angularFireAuth.authState.subscribe(auth=>{
          this.angularFireDatabase.list(`profile/${auth.uid}`).push
        });*/
    }
    onSubmit(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { username } = this;
            this.username = values.username.toString();
            console.log(values);
            try {
                const res = yield this.angularFireAuth.auth.createUserWithEmailAndPassword(values.username + '@meandmyshop.com', values.matching_passwords.password);
                console.log(res);
                this.afstore.doc(`users/${res.user.uid}`).set({
                    username
                });
                this.user.setUser({
                    username,
                    uid: res.user.uid
                });
                this.alert.presentAlert('Success', 'You are registered!');
                this.router.navigate(["/profile"]);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _services_user_user_services__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _services_alert__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"],
        _services_user_user_services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        _services_alert__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registerMethod-r-email-r-email-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/registerMethod/r-email/r-email.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/registerMethod/r-email/r-email.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"form-content\">\n  <form [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmit(validations_form.value)\">\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.name\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('name').hasError(validation.type) && (validations_form.get('name').dirty || validations_form.get('name').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Last name</ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.lastname\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('lastname').hasError(validation.type) && (validations_form.get('lastname').dirty || validations_form.get('lastname').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <div formGroupName=\"matching_passwords\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('password').hasError(validation.type) && (validations_form.get('matching_passwords').get('password').dirty || validations_form.get('matching_passwords').get('password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.confirm_password\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').get('confirm_password').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <!-- These validations are for the form group -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('matching_passwords').hasError(validation.type) && (validations_form.get('matching_passwords').get('confirm_password').dirty || validations_form.get('matching_passwords').get('confirm_password').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label color=\"primary\">I accept terms and conditions</ion-label>\n      <ion-checkbox color=\"primary\" formControlName=\"terms\"></ion-checkbox>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.terms\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('terms').hasError(validation.type) && (validations_form.get('terms').dirty || validations_form.get('terms').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-button color=\"primary\" class=\"login-margin\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\">Submit</ion-button>\n  </form>\n  <div>\n      <button [routerLink]=\"['/first']\" align=\"center\" class=\"login-margin\">\n        <img src=\"assets/image/login.png\">\n      </button>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/registerMethod/r-email/r-email.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/registerMethod/r-email/r-email.module.ts ***!
  \****************************************************************/
/*! exports provided: REmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REmailPageModule", function() { return REmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _r_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./r-email.page */ "./src/app/pages/registerMethod/r-email/r-email.page.ts");








const routes = [
    {
        path: '',
        component: _r_email_page__WEBPACK_IMPORTED_MODULE_6__["REmailPage"]
    }
];
let REmailPageModule = class REmailPageModule {
};
REmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_r_email_page__WEBPACK_IMPORTED_MODULE_6__["REmailPage"]]
    })
], REmailPageModule);



/***/ }),

/***/ "./src/app/pages/registerMethod/r-email/r-email.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/registerMethod/r-email/r-email.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlck1ldGhvZC9yLWVtYWlsL3ItZW1haWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlck1ldGhvZC9yLWVtYWlsL3ItZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBRElBO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyTWV0aG9kL3ItZW1haWwvci1lbWFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZVxue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLmhvbWUtc3R5bGVcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpblxue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIiwiLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5ob21lLXN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/registerMethod/r-email/r-email.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/registerMethod/r-email/r-email.page.ts ***!
  \**************************************************************/
/*! exports provided: REmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REmailPage", function() { return REmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _models_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/validators */ "./src/app/models/validators.ts");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/alert */ "./src/app/services/alert.ts");









let REmailPage = class REmailPage {
    constructor(formBuilder, router, loadingCtrl, authService, alert) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alert = alert;
        this.validation_messages = {
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
    ngOnInit() {
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }, (formGroup) => {
            return _models_validators__WEBPACK_IMPORTED_MODULE_6__["PasswordValidator"].areEqual(formGroup);
        });
        this.validations_form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            matching_passwords: this.matching_passwords_group,
            terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('true'))
        });
    }
    onSubmit(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //const loading = await this.loadingCtrl.create(); 
                const userCredential = yield this.authService.signup(values);
                //return await loading.present();
                this.authService.userId = userCredential.user.uid;
                this.alert.presentAlert('Success', 'You are registered!');
                this.authService.createProfile(this.authService.userId, values);
                this.router.navigate(["/home"]);
            }
            catch (error) {
                this.alert.presentAlert('Error', 'Something went wrong, please try again!');
            }
        });
    }
};
REmailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
REmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-r-email',
        template: __webpack_require__(/*! raw-loader!./r-email.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/registerMethod/r-email/r-email.page.html"),
        styles: [__webpack_require__(/*! ./r-email.page.scss */ "./src/app/pages/registerMethod/r-email/r-email.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], REmailPage);



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
            yield this.firestore.doc(`userProfile/${uId}`).set({
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
//# sourceMappingURL=pages-registerMethod-r-email-r-email-module-es2015.js.map
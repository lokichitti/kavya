(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-create-shop-create-shop-module~pages-loginMethod-phone-phone-module~pages-registerMeth~8a9067a0"],{

/***/ "./src/app/models/validators.ts":
/*!**************************************!*\
  !*** ./src/app/models/validators.ts ***!
  \**************************************/
/*! exports provided: UsernameValidator, PhoneValidator, PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneValidator", function() { return PhoneValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-libphonenumber */ "./node_modules/google-libphonenumber/dist/libphonenumber.js");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__);

class UsernameValidator {
    static validUsername(fc) {
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return {
                validUsername: true
            };
        }
        else {
            return null;
        }
    }
}
class PhoneValidator {
}
// Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
PhoneValidator.validCountryPhone = (countryControl) => {
    let subscribe = false;
    return (phoneControl) => {
        if (!subscribe) {
            subscribe = true;
            countryControl.valueChanges.subscribe(() => {
                phoneControl.updateValueAndValidity();
            });
        }
        if (phoneControl.value !== "") {
            try {
                const phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberUtil.getInstance();
                let phoneNumber = "" + phoneControl.value + "", region = countryControl.value.iso, number = phoneUtil.parse(phoneNumber, region), isValidNumber = phoneUtil.isValidNumber(number);
                if (isValidNumber) {
                    return null;
                }
            }
            catch (e) {
                // console.log(e);
                return {
                    validCountryPhone: true
                };
            }
            return {
                validCountryPhone: true
            };
        }
        else {
            return null;
        }
    };
};
class PasswordValidator {
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    static areEqual(formGroup) {
        let val;
        let valid = true;
        for (let key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                let control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    }
}


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
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");









var currentUid = "";
let AuthService = class AuthService {
    constructor(afAuth, firestore, loadingCtrl, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
    }
    createShop(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getCurrentUser();
            const loading = yield this.loadingCtrl.create();
            const shopName = values.value.shopName;
            const shopCategory = "";
            const address = values.value.address;
            const area = values.value.area;
            const city = values.value.city;
            const state = values.value.state;
            const pinCode = values.value.pinCode;
            const langitude = "";
            const latitude = "";
            const shopPhoto = "";
            const isVisibleForPublic = values.value.visibility;
            this.createAShop(currentUid, isVisibleForPublic, shopName, shopCategory, address, area, city, state, pinCode)
                .then(() => {
                loading.dismiss().then(() => {
                });
            }, error => {
                console.error(error);
            });
            return yield loading.present();
        });
    }
    createAShop(uId, isVisibleForPublic, shopName, shopCategory, shopAddress, langitude, latitude, shopPhoto, pinCode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firestore.doc(`userShop/${uId}`).set({
                uId,
                isVisibleForPublic,
                shopName,
                shopCategory,
                shopAddress,
                langitude,
                latitude,
                shopPhoto
            });
        });
    }
    createProfile(uId, values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create();
            const email = values.email;
            const fName = values.name;
            const lName = values.lastname;
            const password = values.matching_passwords.password;
            const phone = "";
            this.createUser(uId, email, phone, fName, lName, password)
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
            const email = "";
            this.createPhoneUser(uId, email, phone, fName, lName, password)
                .then(() => {
                loading.dismiss().then(() => {
                });
            }, error => {
                console.error(error);
            });
            return yield loading.present();
        });
    }
    createUser(uId, email, phone, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firestore.doc(`userProfile/${uId}`).set({
                uId,
                email,
                phone,
                fName,
                lName,
                password
            });
        });
    }
    createPhoneUser(uId, email, phone, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firestore.doc(`userProfile/${uId}`).set({
                uId,
                email,
                phone,
                fName,
                lName,
                password
            });
            yield this.firestore.doc(`phoneUsers/${phone}`).set({
                uId,
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
    signupPhone(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const newUserCredential = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            return newUserCredential;
        });
    }
    signupWithPhone(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const newUserCredential = yield this.afAuth.auth.createUserWithEmailAndPassword(values.value.country_phone.country.code + values.value.country_phone.phone, values.value.matching_passwords.password);
            return newUserCredential;
        });
    }
    resetPassword(email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }
    logout() {
        return this.afAuth.auth.signOut();
    }
    sendVerificationMail() {
        var actionCodeSettings = {
            url: 'https://www.example.com/?email=' + this.afAuth.auth.currentUser.email,
            iOS: {
                bundleId: 'com.example.ios'
            },
            android: {
                packageName: 'com.example.android',
                installApp: true,
                minimumVersion: '12'
            },
            handleCodeInApp: true,
            // When multiple custom dynamic link domains are defined, specify which
            // one to use.
            dynamicLinkDomain: "example.page.link"
        };
        return this.afAuth.auth.currentUser.sendEmailVerification().then(function () {
            console.log("Verification email sent.");
        })
            .catch(function (error) {
            console.log("Error occurred. Inspect error.code.");
        });
    }
    signInWithUserCredentials(userCredential) {
        this.afAuth.auth.signInWithCredential(userCredential).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Email already associated with another account.');
                // Handle account linking here, if using.
            }
            else {
                console.error(error);
            }
        });
    }
    getCurrentUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().onAuthStateChanged((user) => {
                if (user) {
                    console.log('User is logged in now' + user.uid);
                    currentUid = user.uid;
                }
                else {
                    console.log('User is logged out now');
                    this.router.navigate(['/first']);
                }
            });
        });
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
//# sourceMappingURL=default~pages-create-shop-create-shop-module~pages-loginMethod-phone-phone-module~pages-registerMeth~8a9067a0-es2015.js.map
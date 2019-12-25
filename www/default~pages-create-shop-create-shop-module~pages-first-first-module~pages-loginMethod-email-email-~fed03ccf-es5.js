(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-create-shop-create-shop-module~pages-first-first-module~pages-loginMethod-email-email-~fed03ccf"],{

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
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");









var currentUid = "";
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, firestore, loadingCtrl, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
    }
    AuthService.prototype.createShop = function (values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, shopName, shopCategory, address, area, city, state, pinCode, langitude, latitude, shopPhoto, isVisibleForPublic;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getCurrentUser();
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        shopName = values.value.shopName;
                        shopCategory = "";
                        address = values.value.address;
                        area = values.value.area;
                        city = values.value.city;
                        state = values.value.state;
                        pinCode = values.value.pinCode;
                        langitude = "";
                        latitude = "";
                        shopPhoto = "";
                        isVisibleForPublic = values.value.visibility;
                        this.createAShop(currentUid, isVisibleForPublic, shopName, shopCategory, address, area, city, state, pinCode)
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
    AuthService.prototype.createAShop = function (uId, isVisibleForPublic, shopName, shopCategory, shopAddress, langitude, latitude, shopPhoto, pinCode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestore.doc("userShop/" + uId).set({
                            uId: uId,
                            isVisibleForPublic: isVisibleForPublic,
                            shopName: shopName,
                            shopCategory: shopCategory,
                            shopAddress: shopAddress,
                            langitude: langitude,
                            latitude: latitude,
                            shopPhoto: shopPhoto
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.createProfile = function (uId, values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, email, fName, lName, password, phone;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        email = values.email;
                        fName = values.name;
                        lName = values.lastname;
                        password = values.matching_passwords.password;
                        phone = "";
                        this.createUser(uId, email, phone, fName, lName, password)
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
            var loading, phone, fName, lName, password, email;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        phone = values.value.country_phone.country.code + values.value.country_phone.phone;
                        fName = values.value.name;
                        lName = values.value.lastname;
                        password = values.value.matching_passwords.password;
                        email = "";
                        this.createPhoneUser(uId, email, phone, fName, lName, password)
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
    AuthService.prototype.createUser = function (uId, email, phone, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestore.doc("userProfile/" + uId).set({
                            uId: uId,
                            email: email,
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
    AuthService.prototype.createPhoneUser = function (uId, email, phone, fName, lName, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestore.doc("userProfile/" + uId).set({
                            uId: uId,
                            email: email,
                            phone: phone,
                            fName: fName,
                            lName: lName,
                            password: password
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.firestore.doc("phoneUsers/" + phone).set({
                                uId: uId,
                                password: password
                            })];
                    case 2:
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
    AuthService.prototype.signupPhone = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newUserCredential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
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
                    case 0: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(values.value.country_phone.country.code + values.value.country_phone.phone, values.value.matching_passwords.password)];
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
    AuthService.prototype.sendVerificationMail = function () {
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
    };
    AuthService.prototype.signInWithUserCredentials = function (userCredential) {
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
    };
    AuthService.prototype.getCurrentUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().onAuthStateChanged(function (user) {
                            if (user) {
                                console.log('User is logged in now' + user.uid);
                                currentUid = user.uid;
                            }
                            else {
                                console.log('User is logged out now');
                                _this.router.navigate(['/first']);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
//# sourceMappingURL=default~pages-create-shop-create-shop-module~pages-first-first-module~pages-loginMethod-email-email-~fed03ccf-es5.js.map
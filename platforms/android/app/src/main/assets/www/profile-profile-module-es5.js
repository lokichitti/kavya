(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color = \"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n              <ion-button [routerLink]=\"['/menu/basket']\">\n                <ion-icon slot=\"icon-only\" name=\"basket\" color = \"light\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons  slot=\"primary\">\n                <ion-button [routerLink]=\"['/search']\">\n                  <ion-icon slot=\"icon-only\" name=\"search\" color=\"light\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n        <ion-title color = \"light\" size=\"medium\" text-start>Me&Me</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header> Hello {{userProfile?.fName}} {{userProfile?.lName}}\n    </ion-list-header>\n  </ion-list>\n  <ion-item (click)=\"updateName()\">\n    <ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-start\" size=\"5\"> First Name </ion-col>\n          <ion-col\n            size=\"7\"\n            *ngIf=\"userProfile?.fName\"\n          >\n            {{userProfile?.fName}}\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            class=\"placeholder-profile\"\n            *ngIf=\"!userProfile?.fName\"\n          >\n            <span> Enter your first name. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"updateName()\">\n    <ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-start\" size=\"5\"> Last Name </ion-col>\n          <ion-col\n            size=\"7\"\n            *ngIf=\"userProfile?.lName\"\n          >\n            {{userProfile?.lName}}\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            class=\"placeholder-profile\"\n            *ngIf=\"!userProfile?.lName\"\n          >\n            <span> Enter your last name. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"updateEmail()\">\n    <ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-start\" size=\"5\"> Email </ion-col>\n          <ion-col size=\"7\" *ngIf=\"userProfile?.email\">\n            {{userProfile?.email}}\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            class=\"placeholder-profile\"\n            *ngIf=\"!userProfile?.email\"\n          >\n            <span> Enter Email address. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"updateEmail()\">\n    <ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-start\" size=\"5\"> Phone</ion-col>\n          <ion-col size=\"7\" *ngIf=\"userProfile?.email\">\n            {{userProfile?.phone}}\n          </ion-col>\n          <ion-col\n            size=\"7\"\n            class=\"placeholder-profile\"\n            *ngIf=\"!userProfile?.email\"\n          >\n            <span> Enter phone number. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"updatePassword()\">\n    <ion-label>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-text-start\" size=\"5\"> Password </ion-col>\n          <ion-col class=\"placeholder-profile\" size=\"7\">\n            <span> Change password. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-label>\n  </ion-item>\n<ion-item>\n  <ion-button class=\"login-margin\" color=\"danger\" (click)=\"logOut()\" expand=\"full\" >Logout</ion-button>\n</ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  background-color: #ececec;\n}\n\n.placeholder-profile {\n  color: #cccccc;\n}\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUVBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURJQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICB9XG4gIFxuICAucGxhY2Vob2xkZXItcHJvZmlsZSB7XG4gICAgY29sb3I6ICNjY2NjY2M7XG4gIH1cblxuICAuZXJyb3ItbWVzc2FnZVxue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLmhvbWUtc3R5bGVcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpblxue1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIiwiaW9uLWxpc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cblxuLnBsYWNlaG9sZGVyLXByb2ZpbGUge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5ob21lLXN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/profile.service */ "./src/app/services/user/profile.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ProfilePage = /** @class */ (function () {
    function ProfilePage(authService, router, profileService, alertCtrl) {
        this.authService = authService;
        this.router = router;
        this.profileService = profileService;
        this.alertCtrl = alertCtrl;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getUserProfile().then(function (profile$) {
            profile$.subscribe(function (userProfile) {
                _this.userProfile = userProfile;
            });
        });
    };
    ProfilePage.prototype.logOut = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.logout()];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl('first');
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.updateName = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: 'Your name',
                            inputs: [
                                {
                                    type: 'text',
                                    name: 'first Name',
                                    placeholder: 'Your first name',
                                    value: this.userProfile.fName
                                }
                            ],
                            buttons: [
                                { text: 'Cancel' },
                                {
                                    text: 'Save',
                                    handler: function (data) {
                                        _this.profileService.updateName(data.fullName);
                                    }
                                }
                            ]
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
    ProfilePage.prototype.updateEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            inputs: [
                                { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
                                { name: 'password', placeholder: 'Your password', type: 'password' }
                            ],
                            buttons: [
                                { text: 'Cancel' },
                                {
                                    text: 'Save',
                                    handler: function (data) {
                                        _this.profileService
                                            .updateEmail(data.newEmail, data.password)
                                            .then(function () {
                                            console.log('Email Changed Successfully');
                                        })
                                            .catch(function (error) {
                                            console.log('ERROR: ' + error.message);
                                        });
                                    }
                                }
                            ]
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
    ProfilePage.prototype.updatePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            inputs: [
                                { name: 'newPassword', placeholder: 'New password', type: 'password' },
                                { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
                            ],
                            buttons: [
                                { text: 'Cancel' },
                                {
                                    text: 'Save',
                                    handler: function (data) {
                                        _this.profileService.updatePassword(data.newPassword, data.oldPassword);
                                    }
                                }
                            ]
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
    ProfilePage.ctorParameters = function () { return [
        { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/services/user/profile.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user/profile.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");






var ProfileService = /** @class */ (function () {
    function ProfileService(firestore, authService) {
        this.firestore = firestore;
        this.authService = authService;
    }
    ProfileService.prototype.getUserProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        user = _a.sent();
                        this.currentUser = user;
                        this.userProfile = this.firestore.doc("userProfile/" + user.uid);
                        return [2 /*return*/, this.userProfile.valueChanges()];
                }
            });
        });
    };
    ProfileService.prototype.updateName = function (fName) {
        return this.userProfile.update({ fName: fName });
    };
    ProfileService.prototype.updateEmail = function (newEmail, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credential, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].EmailAuthProvider.credential(this.currentUser.email, password);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.currentUser.reauthenticateWithCredential(credential)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.currentUser.updateEmail(newEmail)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.userProfile.update({ email: newEmail })];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProfileService.prototype.updatePassword = function (newPassword, oldPassword) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credential, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].EmailAuthProvider.credential(this.currentUser.email, oldPassword);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.currentUser.reauthenticateWithCredential(credential)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.currentUser.updatePassword(newPassword)];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProfileService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map
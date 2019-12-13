(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-first-first-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/first/first.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/first/first.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color = \"primary\" >\n      <ion-buttons slot=\"primary\">\n          <ion-button [routerLink]=\"['/menu/home']\" color=\"light\">Skip</ion-button>\n        </ion-buttons>\n      <ion-buttons slot=\"end\">\n          <ion-button [routerLink]=\"['/menu/home']\">\n            <ion-icon slot=\"icon-only\" name=\"arrow-forward\" color=\"light\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/info']\">\n              <ion-icon color = \"light\" slot=\"icon-only\" name=\"information-circle\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      <ion-title color = \"light\" size=\"large\" text-center>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n    \n    <div>\n        <ion-card color=\"secondary\">\n    <button [routerLink]=\"['/phone']\" align=\"center\"  class=\"login-margin\">\n      <img src=\"assets/image/continue-with-phone.png\">\n  </button>\n    <button [routerLink]=\"['/email']\" align=\"center\"  class=\"login-margin\">\n      <img src=\"assets/image/continue-with-email.png\">\n    </button>\n  <button [routerLink]=\"['/google']\" align=\"center\"  class=\"login-margin\">\n    <img src=\"assets/image/continue-with-google.png\">\n</button>\n<button [routerLink]=\"['/facebook']\" align=\"center\"  class=\"login-margin\">\n  <img src=\"assets/image/continue-with-facebook.png\">\n</button>\n<button [routerLink]=\"['/register']\" align=\"center\" class=\"register-margin\">\n  <img src=\"assets/image/register.png\">\n</button>\n<button [routerLink]=\"['/reset-password']\" align=\"center\" class=\"login-margin\">\n  <img src=\"assets/image/forgot-password.png\">\n</button>\n</ion-card>\n</div>\n\n<div text-center color=\"tertiary\"> Welcome to Me&MyShop </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/first/first.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/first/first.module.ts ***!
  \*********************************************/
/*! exports provided: FirstPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageModule", function() { return FirstPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first.page */ "./src/app/pages/first/first.page.ts");







var routes = [
    {
        path: '',
        component: _first_page__WEBPACK_IMPORTED_MODULE_6__["FirstPage"]
    }
];
var FirstPageModule = /** @class */ (function () {
    function FirstPageModule() {
    }
    FirstPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_first_page__WEBPACK_IMPORTED_MODULE_6__["FirstPage"]]
        })
    ], FirstPageModule);
    return FirstPageModule;
}());



/***/ }),

/***/ "./src/app/pages/first/first.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/first/first.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 100px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvcGFnZXMvZmlyc3QvZmlyc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9maXJzdC9maXJzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlyc3QvZmlyc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaG9tZS1zdHlsZVxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwMDBweDtcbn1cblxuLmxvZ2luLW1hcmdpblxue1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luXG57XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIiwiLmhvbWUtc3R5bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwMDBweDtcbn1cblxuLmxvZ2luLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZWdpc3Rlci1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/first/first.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/first/first.page.ts ***!
  \*******************************************/
/*! exports provided: FirstPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPage", function() { return FirstPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert */ "./src/app/services/alert.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");








var email;
var password;
var FirstPage = /** @class */ (function () {
    function FirstPage(authService, router, firebaseAuthentication, storage, alert, afAuth) {
        this.authService = authService;
        this.router = router;
        this.firebaseAuthentication = firebaseAuthentication;
        this.storage = storage;
        this.alert = alert;
        this.afAuth = afAuth;
    }
    FirstPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("your UID is " + this.afAuth.auth.currentUser.uid);
        this.storage.get('password').then(function (val) {
            password = val;
            console.log('Your password is', password);
        });
        this.storage.get('email').then(function (val) {
            //email = val;
            //this.loginUser(email, password);
            console.log('Your email is', email);
        });
        this.storage.get('userCredential').then(function (val) {
            _this.authService.signInWithUserCredentials(val);
            console.log('Your userCredential is', val);
        });
    };
    FirstPage.prototype.loginUser = function (email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userCredential, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authService.login(email, password)];
                    case 1:
                        userCredential = _a.sent();
                        //await this.alert.hideLoading();
                        this.authService.userId = userCredential.user.uid;
                        //this.alert.presentAlert('Success', 'You are logged in!')
                        this.router.navigate(["/menu/home"]);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        // await this.alert.hideLoading();
                        this.alert.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirstPage.ctorParameters = function () { return [
        { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthentication"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _services_alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
    ]; };
    FirstPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! raw-loader!./first.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/first/first.page.html"),
            styles: [__webpack_require__(/*! ./first.page.scss */ "./src/app/pages/first/first.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthentication"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
    ], FirstPage);
    return FirstPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-first-first-module-es5.js.map
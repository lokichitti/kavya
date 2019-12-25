(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/shop/shop.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/shop/shop.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color = \"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n              <ion-button [routerLink]=\"['/menu/basket']\">\n                <ion-icon slot=\"icon-only\" name=\"basket\" color = \"light\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons  slot=\"primary\">\n                <ion-button [routerLink]=\"['/menu/search']\">\n                  <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n        <ion-title color = \"light\" size=\"medium\" text-start>Me&Me</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class=\"padding\">\n    <ion-text > <h2>Shop</h2> </ion-text>      \n      <div   *ngIf=\"showToolBar\" >\n      <ion-toolbar color = \"light\"  text-center>\n      <ion-text color=\"secondary\" text-center>\n        Create a shop\n      </ion-text>\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/create-shop']\">\n          <ion-icon color = \"danger\" slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    </div>\n\n    <div   *ngIf=\"!showToolBar\">\n    <ion-list>\n      <ion-list-header> Shop name {{shopDetails?.shopName}}\n      </ion-list-header>\n    </ion-list>\n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Shop name </ion-col>\n            <ion-col\n              size=\"7\"\n              *ngIf=\"shopDetails?.shopName\"\n            >\n              {{shopDetails?.shopName}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.shopName\"\n            >\n              <span> Enter your shop name. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Shop Category </ion-col>\n            <ion-col\n              size=\"7\"\n              *ngIf=\"shopDetails?.shopCategory\"\n            >\n              {{shopDetails?.shopCategory}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.shopCategory\"\n            >\n              <span> Edit category. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Shop Address </ion-col>\n            <ion-col size=\"7\" *ngIf=\"shopDetails?.shopAddress\">\n              {{shopDetails?.shopAddress}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.shopAddress\"\n            >\n              <span> Edit address. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Phone</ion-col>\n            <ion-col size=\"7\" *ngIf=\"shopDetails?.phoneNumber\">\n              {{shopDetails?.phoneNumber}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.phoneNumber\"\n            >\n              <span> Enter phone number. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> isVisibleForPublic </ion-col>\n            <ion-col class=\"placeholder-profile\" size=\"7\">\n              <span> Change isVisibleForPublic. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  <ion-item>\n    <ion-button class=\"login-margin\" color=\"danger\" (click)=\"updateName()\" expand=\"full\" >Delete your shop</ion-button>\n  </ion-item>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/shop/shop.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/pages/shop/shop.page.ts");







const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
    }
];
let ShopPageModule = class ShopPageModule {
};
ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
    })
], ShopPageModule);



/***/ }),

/***/ "./src/app/pages/shop/shop.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-list-header {\n  background-color: #ececec;\n}\n\n.placeholder-profile {\n  color: #cccccc;\n}\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFFQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FESUE7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tbGlzdC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIH1cbiAgXG4gIC5wbGFjZWhvbGRlci1wcm9maWxlIHtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgfVxuXG4gIC5lcnJvci1tZXNzYWdlXG57XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuXG4uaG9tZS1zdHlsZVxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwMDBweDtcbn1cblxuLmxvZ2luLW1hcmdpblxue1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luXG57XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4iLCIuaW9uLWxpc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cblxuLnBsYWNlaG9sZGVyLXByb2ZpbGUge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5ob21lLXN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/shop/shop.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_shop_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shop/shop.service */ "./src/app/services/shop/shop.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");







let ShopPage = class ShopPage {
    constructor(authService, router, shopService, alertCtrl, firestore) {
        this.authService = authService;
        this.router = router;
        this.shopService = shopService;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.showToolBar = undefined;
    }
    ngOnInit() {
        this.checkIfDocExists("nothing");
    }
    getShopDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.shopService.getUserShop().then(shop$ => {
                shop$.subscribe(userShop => {
                    this.shopDetails = userShop;
                    this.showToolBar = false;
                });
            }).catch((error) => {
                this.showToolBar = true;
            });
        });
    }
    checkIfDocExists(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.getUser();
            this.currentUser = user.uid;
            this.firestore.doc(`userShop/${user.uid}`)
                .update({ data })
                .then(() => {
                console.log("shop exist");
                this.showToolBar = false;
                this.getShopDetails();
            })
                .catch((error) => {
                console.log("shop doesnt exist");
                this.showToolBar = true;
            });
        });
    }
    updateName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
};
ShopPage.ctorParameters = () => [
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_shop_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/shop/shop.page.html"),
        styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/pages/shop/shop.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_shop_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
], ShopPage);



/***/ }),

/***/ "./src/app/services/shop/shop.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/shop/shop.service.ts ***!
  \***********************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");





let ShopService = class ShopService {
    constructor(firestore, authService) {
        this.firestore = firestore;
        this.authService = authService;
    }
    checkIfDocExists(shopName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.getUser();
            this.currentUser = user;
            this.firestore.doc(`userShop/${user.uid}`)
                .update({ shopName })
                .then(() => {
                console.log("shop exist");
                return true;
            })
                .catch((error) => {
                console.log("shop doesnt exist");
                return false;
            });
        });
    }
    getUserShop() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.getUser();
            this.currentUser = user;
            this.shopDetails = this.firestore.doc(`userShop/${user.uid}`);
            return this.shopDetails.valueChanges();
        });
    }
    updateShopName(shopName) {
        return this.shopDetails.update({ shopName });
    }
    updatePhoneNumber(phoneNumber) {
        return this.shopDetails.update({ phoneNumber });
    }
    updateShopCategory(shopCategory) {
        return this.shopDetails.update({ shopCategory });
    }
    updateShopAddress(shopAddress) {
        return this.shopDetails.update({ shopAddress });
    }
    updateIsVisibleForPublic(isVisibleForPublic) {
        return this.shopDetails.update({ isVisibleForPublic });
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], ShopService);



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
            const user = yield this.getUser();
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
            this.createAShop(user.uid, isVisibleForPublic, shopName, shopCategory, address, area, city, state, pinCode)
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
//# sourceMappingURL=shop-shop-module-es2015.js.map
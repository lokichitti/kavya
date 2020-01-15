(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/shop/shop.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/shop/shop.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color = \"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n              <ion-button [routerLink]=\"['/menu/basket']\">\n                <ion-icon slot=\"icon-only\" name=\"basket\" color = \"light\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons  slot=\"primary\">\n                <ion-button [routerLink]=\"['/menu/search']\">\n                  <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n        <ion-title color = \"light\" size=\"medium\" text-start>Me&Me</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content class=\"padding\">\n      <div   *ngIf=\"!showShop\" >\n      <div text-center> looks like you doesn't have any shops, create one and enjoy selling </div>  \n      <ion-toolbar color = \"light\"  text-center>\n      <ion-text color=\"secondary\" text-center>\n        Create a shop\n      </ion-text>\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/create-shop']\">\n          <ion-icon color = \"danger\" slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    </div>\n    <ion-text > <h2>Shop</h2> </ion-text>  \n    <div   *ngIf=\"showShop\">\n    <ion-list>\n      <ion-list-header> Shop name {{shopDetails?.shopName}}\n      </ion-list-header>\n    </ion-list>\n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Shop name </ion-col>\n            <ion-col\n              size=\"7\"\n              *ngIf=\"shopDetails?.shopName\"\n            >\n              {{shopDetails?.shopName}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.shopName\"\n            >\n              <span> Enter your shop name. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Shop Category </ion-col>\n            <ion-col\n              size=\"7\"\n              *ngIf=\"shopDetails?.shopCategory\"\n            >\n              {{shopDetails?.shopCategory}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.shopCategory\"\n            >\n              <span> Edit category. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Shop Address </ion-col>\n            <ion-col size=\"7\" *ngIf=\"shopDetails?.shopAddress\">\n              {{shopDetails?.shopAddress}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.shopAddress\"\n            >\n              <span> Edit address. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\"> Phone</ion-col>\n            <ion-col size=\"7\" *ngIf=\"shopDetails?.phoneNumber\">\n              {{shopDetails?.phoneNumber}}\n            </ion-col>\n            <ion-col\n              size=\"7\"\n              class=\"placeholder-profile\"\n              *ngIf=\"!shopDetails?.phoneNumber\"\n            >\n              <span> Enter phone number. </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item (click)=\"updateName()\">\n      <ion-label>\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-text-start\" size=\"5\">Visibility</ion-col>\n            <ion-col class=\"placeholder-profile\" size=\"7\">\n              <span> Change visibility </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  <ion-item>\n    <ion-button class=\"login-margin\" color=\"danger\" (click)=\"updateName()\" expand=\"full\" >Delete your shop</ion-button>\n  </ion-item>\n</div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/pages/shop/shop.page.ts");







var routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
    }
];
var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
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
    return ShopPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_shop_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shop/shop.service */ "./src/app/services/shop/shop.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");







var ShopPage = /** @class */ (function () {
    function ShopPage(authService, router, shopService, alertCtrl, firestore) {
        this.authService = authService;
        this.router = router;
        this.shopService = shopService;
        this.alertCtrl = alertCtrl;
        this.firestore = firestore;
        this.showShop = true;
    }
    ShopPage.prototype.ngOnInit = function () {
        this.checkIfDocExists("nothing");
    };
    ShopPage.prototype.getShopDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.shopService.getUserShop().then(function (shop$) {
                    shop$.subscribe(function (userShop) {
                        _this.shopDetails = userShop;
                        _this.showShop = true;
                    });
                }).catch(function (error) {
                    _this.showShop = false;
                });
                return [2 /*return*/];
            });
        });
    };
    ShopPage.prototype.checkIfDocExists = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        user = _a.sent();
                        this.currentUser = user.uid;
                        this.firestore.doc("userShop/" + user.uid)
                            .update({ data: data })
                            .then(function () {
                            console.log("shop exist");
                            _this.showShop = true;
                            _this.getShopDetails();
                        })
                            .catch(function (error) {
                            console.log("shop doesnt exist");
                            _this.showShop = false;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopPage.prototype.updateName = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ShopPage.ctorParameters = function () { return [
        { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_shop_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
    ]; };
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
    return ShopPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");





var ShopService = /** @class */ (function () {
    function ShopService(firestore, authService) {
        this.firestore = firestore;
        this.authService = authService;
    }
    ShopService.prototype.getUserShop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        user = _a.sent();
                        this.currentUser = user;
                        this.shopDetails = this.firestore.doc("userShop/" + user.uid);
                        return [2 /*return*/, this.shopDetails.valueChanges()];
                }
            });
        });
    };
    ShopService.prototype.updateShopName = function (shopName) {
        return this.shopDetails.update({ shopName: shopName });
    };
    ShopService.prototype.updatePhoneNumber = function (phoneNumber) {
        return this.shopDetails.update({ phoneNumber: phoneNumber });
    };
    ShopService.prototype.updateShopCategory = function (shopCategory) {
        return this.shopDetails.update({ shopCategory: shopCategory });
    };
    ShopService.prototype.updateShopAddress = function (shopAddress) {
        return this.shopDetails.update({ shopAddress: shopAddress });
    };
    ShopService.prototype.updateIsVisibleForPublic = function (isVisibleForPublic) {
        return this.shopDetails.update({ isVisibleForPublic: isVisibleForPublic });
    };
    ShopService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ShopService);
    return ShopService;
}());



/***/ })

}]);
//# sourceMappingURL=shop-shop-module-es5.js.map
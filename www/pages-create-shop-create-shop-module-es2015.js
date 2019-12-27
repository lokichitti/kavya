(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-shop-create-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-shop/create-shop.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-shop/create-shop.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"light\">Create your shop</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  padding class=\"form-content\">\n  <form [formGroup]=\"validations_form\"  (ngSubmit)=\"createMyShop(validations_form)\">\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Name your shop</ion-label>\n      <ion-input type=\"text\" formControlName=\"shopName\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.shopName\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('shopName').hasError(validation.type) && (validations_form.get('shopName').dirty || validations_form.get('shopName').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Category</ion-label>\n      <ion-select formControlName=\"category\" cancelText=\"Cancel\" okText=\"OK\">\n        <ion-select-option *ngFor=\"let item of shopCategory\" [value]=\"item\">{{item}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Is your shop available for everyone</ion-label>\n      <ion-select formControlName=\"visibility\" cancelText=\"Cancel\" okText=\"OK\">\n        <ion-select-option *ngFor=\"let item of isVisibleForPublic\" [value]=\"item\">{{item}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Address</ion-label>\n      <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.address\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('address').hasError(validation.type) && (validations_form.get('address').dirty || validations_form.get('address').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div> \n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Area</ion-label>\n      <ion-input type=\"text\" formControlName=\"area\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.area\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('area').hasError(validation.type) && (validations_form.get('area').dirty || validations_form.get('area').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">City</ion-label>\n      <ion-input type=\"text\" formControlName=\"city\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.city\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('city').hasError(validation.type) && (validations_form.get('city').dirty || validations_form.get('city').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">State</ion-label>\n      <ion-input type=\"text\" formControlName=\"state\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.state\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('state').hasError(validation.type) && (validations_form.get('state').dirty || validations_form.get('state').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">pinCode</ion-label>\n      <ion-input type=\"text\" formControlName=\"pinCode\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.pinCode\">\n        <div class=\"error-message\" *ngIf=\"validations_form.get('pinCode').hasError(validation.type) && (validations_form.get('pinCode').dirty || validations_form.get('pinCode').touched)\">\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <div>\n      <ion-button class=\"locateme-margin\" (click)=\"locateMyShop()\">Locate my shop on map</ion-button>\n\n    </div>\n    <div formGroupName=\"country_phone\">\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Country</ion-label>\n        <ion-select formControlName=\"country\" cancelText=\"Cancel\" okText=\"OK\">\n          <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Contact phone</ion-label>\n        <ion-input placeholder=\"Enter 10 digit mobile number\" type=\"text\" formControlName=\"phone\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.phone\">\n          <div class=\"error-message\" *ngIf=\"validations_form.get('country_phone').get('phone').hasError(validation.type) && (validations_form.get('country_phone').get('phone').dirty || validations_form.get('country_phone').get('phone').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n    <ion-button color=\"primary\" class=\"login-margin\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\">Done</ion-button>\n</form>\n<ion-button class=\"login-margin\" expand=\"full\" (click)=\"locateMyShop()\">Locate my shop on map</ion-button>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/create-shop/create-shop.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-shop/create-shop.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShopPageModule", function() { return CreateShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-shop.page */ "./src/app/pages/create-shop/create-shop.page.ts");








const routes = [
    {
        path: '',
        component: _create_shop_page__WEBPACK_IMPORTED_MODULE_6__["CreateShopPage"]
    }
];
let CreateShopPageModule = class CreateShopPageModule {
};
CreateShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_create_shop_page__WEBPACK_IMPORTED_MODULE_6__["CreateShopPage"]]
    })
], CreateShopPageModule);



/***/ }),

/***/ "./src/app/pages/create-shop/create-shop.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/create-shop/create-shop.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin-top: 40px;\n}\n\n.home-style {\n  text-align: center;\n  margin-top: 2000px;\n}\n\n.login-margin {\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.locateme-margin {\n  font-size: 10px;\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.register-margin {\n  margin-top: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9jcmVhdGUtc2hvcC9jcmVhdGUtc2hvcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1zaG9wL2NyZWF0ZS1zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURJQTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGUtc2hvcC9jcmVhdGUtc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZVxue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cblxuLmhvbWUtc3R5bGVcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMDAwcHg7XG59XG5cbi5sb2dpbi1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmxvY2F0ZW1lLW1hcmdpblxue1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZWdpc3Rlci1tYXJnaW5cbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiIsIi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaG9tZS1zdHlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjAwMHB4O1xufVxuXG4ubG9naW4tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmxvY2F0ZW1lLW1hcmdpbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlZ2lzdGVyLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/create-shop/create-shop.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/create-shop/create-shop.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShopPage", function() { return CreateShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/country-phone.model */ "./src/app/models/country-phone.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
/* harmony import */ var _models_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/validators */ "./src/app/models/validators.ts");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user/auth.service */ "./src/app/services/user/auth.service.ts");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/alert */ "./src/app/services/alert.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");













let CreateShopPage = class CreateShopPage {
    constructor(formBuilder, router, authService, firebaseAuthentication, alertCtrl, toastCtrl, alert, storage) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.firebaseAuthentication = firebaseAuthentication;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.storage = storage;
        this.validation_messages = {
            'shopName': [
                { type: 'required', message: 'shopName is required.' }
            ],
            'address': [
                { type: 'required', message: 'address is required.' }
            ],
            //'street': [
            //  { type: 'required', message: 'street is required.' }
            //],
            'area': [
                { type: 'required', message: 'area Name is required.' }
            ],
            'city': [
                { type: 'required', message: 'city Name is required.' }
            ],
            'state': [
                { type: 'required', message: 'state Name is required.' }
            ],
            'pinCode': [
                { type: 'required', message: 'pinCode is required.' }
            ],
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
            ],
        };
    }
    ngOnInit() {
        this.countries = [
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('IN', 'India'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('US', 'United States'),
            new _models_country_phone_model__WEBPACK_IMPORTED_MODULE_4__["CountryPhone"]('BR', 'Brasil')
        ];
        this.shopCategory = [
            "vegetables",
            "dairy",
            "stationaries",
            "consumables",
            "bakery",
            "hotel",
        ];
        this.isVisibleForPublic = [
            "Visible to public",
            "Visible to selected members only"
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
            shopName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            visibility: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.isVisibleForPublic[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.shopCategory[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            //street: new FormControl('', Validators.required),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            pinCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            country_phone: this.country_phone_group,
        });
    }
    createMyShop(shopDetails) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.createShop(shopDetails);
            this.alert.presentAlert('Your shop created', 'Add items and start selling!');
            this.router.navigate(["/menu/shop"]);
        });
    }
    locateMyShop() {
    }
};
CreateShopPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
];
CreateShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-shop',
        template: __webpack_require__(/*! raw-loader!./create-shop.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-shop/create-shop.page.html"),
        styles: [__webpack_require__(/*! ./create-shop.page.scss */ "./src/app/pages/create-shop/create-shop.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_alert__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
], CreateShopPage);



/***/ })

}]);
//# sourceMappingURL=pages-create-shop-create-shop-module-es2015.js.map
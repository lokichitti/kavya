function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-loginMethod-email-email-module~pages-reset-password-reset-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-form/auth-form.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-form/auth-form.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthFormAuthFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"authForm\">\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input\n      formControlName=\"email\"\n      type=\"email\"\n      placeholder=\"Your email address\"\n      [class.invalid]=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n  >\n    <ion-label>Please enter a valid email address.</ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"!isPasswordResetPage\">\n    <ion-label position=\"stacked\">Password</ion-label>\n    <ion-input\n      formControlName=\"password\"\n      type=\"password\"\n      placeholder=\"Your password\"\n      [class.invalid]=\"!authForm.controls['password'].valid&& authForm.controls['password'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['password'].valid\n && authForm.controls['password'].touched && !isPasswordResetPage\"\n  >\n    <ion-label>Your password needs more than 6 characters.</ion-label>\n  </ion-item>\n\n  <ion-button\n    (click)=\"submitCredentials(authForm)\"\n    expand=\"block\"\n    [disabled]=\"!authForm.valid\"\n  >\n    {{ actionButtonText }}\n  </ion-button>\n</form>";
    /***/
  },

  /***/
  "./src/app/components/auth-form/auth-form.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/auth-form/auth-form.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthFormAuthFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  padding: 12px;\n  margin-bottom: 32px;\n}\nform ion-button {\n  margin-top: 30px;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0UsZ0JBQUE7QUNFTjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7QUNDSjtBREVFO0VBQ0UsZ0NBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRU47QURBSTtFQUNFLGdCQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogI2QyZDJkMjtcbiAgfVxuICBcbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIFxuICBpb24taW5wdXQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgLmludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICBjb2xvcjogI2ZmNjE1MztcbiAgICB9XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gIH0iLCJmb3JtIHtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbmZvcm0gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbn1cbi5lcnJvci1tZXNzYWdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBjb2xvcjogI2ZmNjE1Mztcbn1cbi5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/auth-form/auth-form.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/auth-form/auth-form.component.ts ***!
    \*************************************************************/

  /*! exports provided: AuthFormComponent */

  /***/
  function srcAppComponentsAuthFormAuthFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function () {
      return AuthFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AuthFormComponent =
    /*#__PURE__*/
    function () {
      function AuthFormComponent(formBuilder, loadingCtrl, alertCtrl) {
        _classCallCheck(this, AuthFormComponent);

        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isPasswordResetPage = false;
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.authForm = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
        });
      }

      _createClass(AuthFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showLoading",
        value: function showLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create();

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "hideLoading",
        value: function hideLoading() {
          return this.loading.dismiss();
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      message: error.message,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "submitCredentials",
        value: function submitCredentials(authForm) {
          if (!authForm.valid) {
            console.log('Form is not valid yet, current value:', authForm.value);
          } else {
            this.showLoading();
            var credentials = {
              email: authForm.value.email,
              password: authForm.value.password
            };
            this.formSubmitted.emit(credentials);
          }
        }
      }]);

      return AuthFormComponent;
    }();

    AuthFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AuthFormComponent.prototype, "actionButtonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthFormComponent.prototype, "isPasswordResetPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthFormComponent.prototype, "formSubmitted", void 0);
    AuthFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-form/auth-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-form.component.scss */
      "./src/app/components/auth-form/auth-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], AuthFormComponent);
    /***/
  },

  /***/
  "./src/app/services/user/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/user/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesUserAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");

    var currentUid = "";

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afAuth, firestore, loadingCtrl, router) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.firestore = firestore;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
      }

      _createClass(AuthService, [{
        key: "createShop",
        value: function createShop(values) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var loading, shopName, shopCategory, address, area, city, state, pinCode, langitude, latitude, shopPhoto, isVisibleForPublic;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.getCurrentUser();
                    _context3.next = 3;
                    return this.loadingCtrl.create();

                  case 3:
                    loading = _context3.sent;
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
                    this.createAShop(currentUid, isVisibleForPublic, shopName, shopCategory, address, area, city, state, pinCode).then(function () {
                      loading.dismiss().then(function () {});
                    }, function (error) {
                      console.error(error);
                    });
                    _context3.next = 18;
                    return loading.present();

                  case 18:
                    return _context3.abrupt("return", _context3.sent);

                  case 19:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "createAShop",
        value: function createAShop(uId, isVisibleForPublic, shopName, shopCategory, shopAddress, langitude, latitude, shopPhoto, pinCode) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.firestore.doc("userShop/".concat(uId)).set({
                      uId: uId,
                      isVisibleForPublic: isVisibleForPublic,
                      shopName: shopName,
                      shopCategory: shopCategory,
                      shopAddress: shopAddress,
                      langitude: langitude,
                      latitude: latitude,
                      shopPhoto: shopPhoto
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "createProfile",
        value: function createProfile(uId, values) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var loading, email, fName, lName, password, phone;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingCtrl.create();

                  case 2:
                    loading = _context5.sent;
                    email = values.email;
                    fName = values.name;
                    lName = values.lastname;
                    password = values.matching_passwords.password;
                    phone = "";
                    this.createUser(uId, email, phone, fName, lName, password).then(function () {
                      loading.dismiss().then(function () {});
                    }, function (error) {
                      console.error(error);
                    });
                    _context5.next = 11;
                    return loading.present();

                  case 11:
                    return _context5.abrupt("return", _context5.sent);

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "createPhoneUserProfile",
        value: function createPhoneUserProfile(uId, values) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var loading, phone, fName, lName, password, email;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingCtrl.create();

                  case 2:
                    loading = _context6.sent;
                    phone = values.value.country_phone.country.code + values.value.country_phone.phone;
                    fName = values.value.name;
                    lName = values.value.lastname;
                    password = values.value.matching_passwords.password;
                    email = "";
                    this.createPhoneUser(uId, email, phone, fName, lName, password).then(function () {
                      loading.dismiss().then(function () {});
                    }, function (error) {
                      console.error(error);
                    });
                    _context6.next = 11;
                    return loading.present();

                  case 11:
                    return _context6.abrupt("return", _context6.sent);

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(uId, email, phone, fName, lName, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.firestore.doc("userProfile/".concat(uId)).set({
                      uId: uId,
                      email: email,
                      phone: phone,
                      fName: fName,
                      lName: lName,
                      password: password
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "createPhoneUser",
        value: function createPhoneUser(uId, email, phone, fName, lName, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.firestore.doc("userProfile/".concat(uId)).set({
                      uId: uId,
                      email: email,
                      phone: phone,
                      fName: fName,
                      lName: lName,
                      password: password
                    });

                  case 2:
                    _context8.next = 4;
                    return this.firestore.doc("phoneUsers/".concat(phone)).set({
                      uId: uId,
                      password: password
                    });

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
        }
      }, {
        key: "login",
        value: function login(email, password) {
          return this.afAuth.auth.signInWithEmailAndPassword(email, password);
        }
      }, {
        key: "signup",
        value: function signup(values) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var newUserCredential;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.afAuth.auth.createUserWithEmailAndPassword(values.email, values.matching_passwords.password);

                  case 2:
                    newUserCredential = _context9.sent;
                    return _context9.abrupt("return", newUserCredential);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "signupPhone",
        value: function signupPhone(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var newUserCredential;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

                  case 2:
                    newUserCredential = _context10.sent;
                    return _context10.abrupt("return", newUserCredential);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "signupWithPhone",
        value: function signupWithPhone(values) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var newUserCredential;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.afAuth.auth.createUserWithEmailAndPassword(values.value.country_phone.country.code + values.value.country_phone.phone, values.value.matching_passwords.password);

                  case 2:
                    newUserCredential = _context11.sent;
                    return _context11.abrupt("return", newUserCredential);

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          return this.afAuth.auth.sendPasswordResetEmail(email);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.afAuth.auth.signOut();
        }
      }, {
        key: "sendVerificationMail",
        value: function sendVerificationMail() {
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
          }).catch(function (error) {
            console.log("Error occurred. Inspect error.code.");
          });
        }
      }, {
        key: "signInWithUserCredentials",
        value: function signInWithUserCredentials(userCredential) {
          this.afAuth.auth.signInWithCredential(userCredential).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message; // The email of the user's account used.

            var email = error.email; // The firebase.auth.AuthCredential type that was used.

            var credential = error.credential;

            if (errorCode === 'auth/account-exists-with-different-credential') {
              alert('Email already associated with another account.'); // Handle account linking here, if using.
            } else {
              console.error(error);
            }
          });
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().onAuthStateChanged(function (user) {
                      if (user) {
                        console.log('User is logged in now' + user.uid);
                        currentUid = user.uid;
                      } else {
                        console.log('User is logged out now');

                        _this.router.navigate(['/first']);
                      }
                    });

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AuthService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-loginMethod-email-email-module~pages-reset-password-reset-password-module-es5.js.map
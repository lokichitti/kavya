(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loginMethod-google-google-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/google/google.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/loginMethod/google/google.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>google</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/loginMethod/google/google.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/loginMethod/google/google.module.ts ***!
  \***********************************************************/
/*! exports provided: GooglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePageModule", function() { return GooglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _google_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google.page */ "./src/app/pages/loginMethod/google/google.page.ts");







var routes = [
    {
        path: '',
        component: _google_page__WEBPACK_IMPORTED_MODULE_6__["GooglePage"]
    }
];
var GooglePageModule = /** @class */ (function () {
    function GooglePageModule() {
    }
    GooglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_google_page__WEBPACK_IMPORTED_MODULE_6__["GooglePage"]]
        })
    ], GooglePageModule);
    return GooglePageModule;
}());



/***/ }),

/***/ "./src/app/pages/loginMethod/google/google.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/loginMethod/google/google.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luTWV0aG9kL2dvb2dsZS9nb29nbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/loginMethod/google/google.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/loginMethod/google/google.page.ts ***!
  \*********************************************************/
/*! exports provided: GooglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePage", function() { return GooglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GooglePage = /** @class */ (function () {
    function GooglePage() {
    }
    GooglePage.prototype.ngOnInit = function () {
    };
    GooglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google',
            template: __webpack_require__(/*! raw-loader!./google.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/loginMethod/google/google.page.html"),
            styles: [__webpack_require__(/*! ./google.page.scss */ "./src/app/pages/loginMethod/google/google.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GooglePage);
    return GooglePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loginMethod-google-google-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/info/info.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/info/info.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<div class = \"list\">\n    <label class = \"item item-input item-floating-label\">\n       <span class = \"input-label\">Label 1</span>\n       <input type = \"text\" placeholder = \"Placeholder 1\" />\n    </label>\n \n    <label class = \"item item-input item-floating-label\">\n       <span class = \"input-label\">Label 2</span>\n       <input type = \"text\" placeholder = \"Placeholder 2\" />\n    </label>\n </div>\n \n\n<ion-content\n[scrollEvents]=\"true\">\n<ion-menu [content]=\"mycontent\">\n  <ion-content>\n    <ion-list>\n      <p>some menu content, could be list items</p>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]=\"rootPage\"></ion-nav>\n<ion-list>\n<ion-item>\n    <ion-label>Toppings</ion-label>\n    <ion-select multiple=\"true\" cancelText=\"Nah\" okText=\"Okay!\">\n      <ion-select-option value=\"bacon\">Bacon</ion-select-option>\n      <ion-select-option value=\"olives\">Black Olives</ion-select-option>\n      <ion-select-option value=\"xcheese\">Extra Cheese</ion-select-option>\n      <ion-select-option value=\"peppers\">Green Peppers</ion-select-option>\n      <ion-select-option value=\"mushrooms\">Mushrooms</ion-select-option>\n      <ion-select-option value=\"onions\">Onions</ion-select-option>\n      <ion-select-option value=\"pepperoni\">Pepperoni</ion-select-option>\n      <ion-select-option value=\"pineapple\">Pineapple</ion-select-option>\n      <ion-select-option value=\"sausage\">Sausage</ion-select-option>\n      <ion-select-option value=\"Spinach\">Spinach</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Pets</ion-label>\n    <ion-select multiple=\"true\">\n      <ion-select-option value=\"bird\" selected>Bird</ion-select-option>\n      <ion-select-option value=\"cat\">Cat</ion-select-option>\n      <ion-select-option value=\"dog\" selected>Dog</ion-select-option>\n      <ion-select-option value=\"honeybadger\">Honey Badger</ion-select-option>\n    </ion-select>\n  </ion-item>\n    <ion-list-header>Single Selection</ion-list-header>\n  \n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Hair Color</ion-label>\n      <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"brown\">Brown</ion-select-option>\n        <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n        <ion-select-option value=\"black\">Black</ion-select-option>\n        <ion-select-option value=\"red\">Red</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n  </ion-list>\n\n\n<ion-text color=\"secondary\">\n  <h1>H1: The quick brown fox jumps over the lazy dog</h1>\n</ion-text>\n\n<ion-text color=\"primary\">\n  <h2>H2: The quick brown fox jumps over the lazy dog</h2>\n</ion-text>\n\n<ion-text color=\"light\">\n  <h3>H3: The quick brown fox jumps over the lazy dog</h3>\n</ion-text>\n\n<ion-text color=\"danger\">\n  <h4 >H4: The quick brown fox jumps over the lazy dog</h4>\n</ion-text>\n\n<ion-text color=\"dark\">\n  <h5>H5: The quick brown fox jumps over the lazy dog</h5>\n</ion-text>\n\n<p>\n  I saw a werewolf with a Chinese menu in his hand.\n  Walking through the <ion-text color=\"danger\"><sub>streets</sub></ion-text> of Soho in the rain.\n  He <ion-text color=\"primary\"><i>was</i></ion-text> looking for a place called Lee Ho Fook's.\n  Gonna get a <ion-text color=\"secondary\"><a>big dish of beef chow mein.</a></ion-text>\n  <ion-text color=\"danger\"><ion-icon name=\"cut\"></ion-icon></ion-text>\n</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");







var routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
    }
];
var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/info/info.page.scss":
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/info/info.page.ts":
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var InfoPage = /** @class */ (function () {
    function InfoPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    InfoPage.prototype.ngOnInit = function () {
    };
    InfoPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    InfoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/index.js!./src/app/info/info.page.html"),
            styles: [__webpack_require__(/*! ./info.page.scss */ "./src/app/info/info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=info-info-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-users-list-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list-users/list-users.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-users/list-users.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ListUsers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card\n    *ngFor=\"let user of userList | async\"\n    routerLink=\"/detail/{{User.id}}\"\n  >\n    <ion-card-header>\n      {{ User.userName }}\n    </ion-card-header>\n    <ion-card-content>\n      Artist Name: {{ User.email }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/list-users/list-users.module.ts":
/*!*************************************************!*\
  !*** ./src/app/list-users/list-users.module.ts ***!
  \*************************************************/
/*! exports provided: ListUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersPageModule", function() { return ListUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-users.page */ "./src/app/list-users/list-users.page.ts");







const routes = [
    {
        path: '',
        component: _list_users_page__WEBPACK_IMPORTED_MODULE_6__["ListUsersPage"]
    }
];
let ListUsersPageModule = class ListUsersPageModule {
};
ListUsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_list_users_page__WEBPACK_IMPORTED_MODULE_6__["ListUsersPage"]]
    })
], ListUsersPageModule);



/***/ }),

/***/ "./src/app/list-users/list-users.page.scss":
/*!*************************************************!*\
  !*** ./src/app/list-users/list-users.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdXNlcnMvbGlzdC11c2Vycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list-users/list-users.page.ts":
/*!***********************************************!*\
  !*** ./src/app/list-users/list-users.page.ts ***!
  \***********************************************/
/*! exports provided: ListUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersPage", function() { return ListUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data/firestore.service */ "./src/app/services/data/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ListUsersPage = class ListUsersPage {
    constructor(firestoreService, router) {
        this.firestoreService = firestoreService;
        this.router = router;
    }
    ngOnInit() {
        //this.songList = this.firestoreProvider.getSongList().valueChanges();
    }
};
ListUsersPage.ctorParameters = () => [
    { type: _services_data_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ListUsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-users',
        template: __webpack_require__(/*! raw-loader!./list-users.page.html */ "./node_modules/raw-loader/index.js!./src/app/list-users/list-users.page.html"),
        styles: [__webpack_require__(/*! ./list-users.page.scss */ "./src/app/list-users/list-users.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ListUsersPage);



/***/ })

}]);
//# sourceMappingURL=list-users-list-users-module-es2015.js.map
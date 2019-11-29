(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<app-loading *ngIf=\"!posts\"></app-loading>\n\n\t<div id=\"profile-info\" *ngIf=\"username\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"4\" class=\"user-image\">\n\t\t\t\t\t<ion-img src=\"https://ucarecdn.com/{{ profilePic }}/-/scale_crop/200x200/center/\"></ion-img>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t<p>{{ username }}</p>\n\t\t\t\t\t<ion-button shape=\"round\" color=\"primary\" routerLink=\"/tabs/edit-profile\">Edit Profile</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n\n\n\t<div id=\"images\" *ngIf=\"posts\">\n\t\t<div class=\"image\" *ngFor=\"let post of posts\">\n\t\t\t<img (click)=\"goTo(post)\" class=\"main-image\" src=\"https://ucarecdn.com/{{ post }}/-/scale_crop/200x200/center/\" />\n\t\t</div>\n\t</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
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



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#images {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  max-width: 100%;\n  width: 606px;\n}\n\n.image {\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.main-image, .user-image {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1hZ2VzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRtYXJnaW46IDAgYXV0bztcblx0bWF4LXdpZHRoOiAxMDAlO1xuXHR3aWR0aDogNjA2cHg7XG59XG5cbi5pbWFnZSB7XG5cdG1hcmdpbi1sZWZ0OiAxcHg7XG5cdG1hcmdpbi1yaWdodDogMXB4O1xufVxuXG4ubWFpbi1pbWFnZSwgLnVzZXItaW1hZ2Uge1xuXHR3aWR0aDogMjAwcHg7XG5cdGhlaWdodDogMjAwcHg7XG59IiwiI2ltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDYwNnB4O1xufVxuXG4uaW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbn1cblxuLm1haW4taW1hZ2UsIC51c2VyLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_user_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.services */ "./src/app/services/user/user.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProfilePage = class ProfilePage {
    constructor(afs, user, router) {
        this.afs = afs;
        this.user = user;
        this.router = router;
        this.mainuser = afs.doc(`users/${user.getUid()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.posts = event.posts;
            this.username = event.username;
            this.profilePic = event.profilePic;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goTo(postID) {
        this.router.navigate(['/main-page' + postID.split('/')[0]]);
    }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _services_user_user_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _services_user_user_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map
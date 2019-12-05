(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>EditProfile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t\t<div class=\"profile-info\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Username</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"username\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">New Password?</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"newpassword\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">Enter old password</ion-label>\n\t\t\t\t<ion-input [(ngModel)]=\"password\"></ion-input>\n\t\t\t</ion-item>\n\n\t\t\t<ion-button fill=\"solid\" expand=\"block\" color=\"dark\" (click)=\"updateDetails()\">Save</ion-button>\n\t\t</div>\n\n\t</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/edit-profile/edit-profile.page.ts");







const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filebtn {\n  opacity: 0;\n  position: absolute;\n  top: -100em;\n  left: -100em;\n}\n\n.profile-pic {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlYnRuIHtcblx0b3BhY2l0eTogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC0xMDBlbTtcblx0bGVmdDogLTEwMGVtO1xufVxuXG4ucHJvZmlsZS1waWMge1xuXHR3aWR0aDogMjAwcHg7XG5cdGhlaWdodDogMjAwcHg7XG59IiwiLmZpbGVidG4ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwMGVtO1xuICBsZWZ0OiAtMTAwZW07XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_user_user_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.services */ "./src/app/services/user/user.services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert */ "./src/app/services/alert.ts");







let EditProfilePage = class EditProfilePage {
    constructor(user, alert, afs, router, alertController) {
        this.user = user;
        this.alert = alert;
        this.afs = afs;
        this.router = router;
        this.alertController = alertController;
        this.busy = false;
        this.mainuser = afs.doc(`users/${user.getUid()}`);
        this.sub = this.mainuser.valueChanges().subscribe(event => {
            this.username = event.username;
            this.profilePic = event.profilePic;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    updateDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*	this.busy = true
        
                if(!this.password) {
                    this.busy = false
                    return this.presentAlert('Error!', 'You have to enter a password')
                }
        
                try {
                    await this.user.reAuth(this.user.getUsername(), this.password)
                } catch(error) {
                    this.busy = false
                    return this.presentAlert('Error!', 'Wrong password!')
                }
        
                if(this.newpassword) {
                    await this.user.updatePassword(this.newpassword)
                }
        
                if(this.username !== this.user.getUsername()) {
                    await this.user.updateEmail(this.username)
                    this.mainuser.update({
                        username: this.username
                    })
                }
        
                this.password = ""
                this.newpassword = ""
                this.busy = false
        
                await this.presentAlert('Done!', 'Your profile was updated!')
        
                this.router.navigate(['/tabs/feed'])*/
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _services_user_user_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_user_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _services_alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=edit-profile-edit-profile-module-es2015.js.map
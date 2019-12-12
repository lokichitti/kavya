(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu contentId = \"content\">\n    <ion-header>\n      <ion-toolbar  color = \"secondary\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button color = \"dark\"></ion-menu-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-button (click)=\"closeMenu()\">\n                    <ion-icon slot= \"icon-only\" name=\"arrow-dropleft\" color=\"dark\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n        <ion-title color = \"dark\" size=\"medium\" text-center>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content >\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-card color = \"tertiary\">\n          <ion-item color = \"light\" [routerLink] = \"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath === p.url\">\n              <ion-col class=\"ion-text-start\" size=\"5\">\n                  <ion-icon [name]=\"p.icon\" item-left></ion-icon>\n              </ion-col>\n              <ion-col class=\"ion-text-start\" size=\"5\"> {{p.title}} </ion-col>\n          </ion-item>\n        </ion-card>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"content\" main>\n\n  </ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");








var redirectToFirst = Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["redirectUnauthorizedTo"])(['first']);
var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"],
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["canActivate"])(redirectToFirst)),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ path: 'shop', loadChildren: '../shop/shop.module#ShopPageModule' }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["canActivate"])(redirectToFirst)),
            { path: 'basket', loadChildren: '../basket/basket.module#BasketPageModule' },
            { path: 'orders', loadChildren: '../orders/orders.module#OrdersPageModule' },
            { path: 'search', loadChildren: '../search/search.module#SearchPageModule' },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/home'
    },
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var --ion-color-primary;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWl0ZW17XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIgKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSIsIi5hY3RpdmUtaXRlbSB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyIC0taW9uLWNvbG9yLXByaW1hcnk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MenuPage = /** @class */ (function () {
    function MenuPage(menuCtrl, router) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.pages = [
            {
                icon: "home",
                title: "Home",
                url: "/menu/home"
            },
            {
                icon: "basket",
                title: "My shop",
                url: "/menu/shop"
            },
            {
                icon: "basket",
                title: "Orders",
                url: "/menu/orders"
            },
            {
                icon: "person",
                title: "Profile",
                url: "/menu/profile"
            },
        ];
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MenuPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map
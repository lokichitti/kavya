(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Geolocation App\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      User Current Location continuously upddating in background\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Latitude\n    </ion-col>\n    <ion-col>\n      {{userLocation.latitude}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Longitude\n    </ion-col>\n    <ion-col>\n      {{userLocation.longitude}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Country Code\n    </ion-col>\n    <ion-col>\n      {{userLocation.countryCode}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Country Name\n    </ion-col>\n    <ion-col>\n      {{userLocation.countryName}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Postal Code\n    </ion-col>\n    <ion-col>\n      {{userLocation.postalCode}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Administrative Area\n    </ion-col>\n    <ion-col>\n      {{userLocation.administrativeArea}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Sub Administrative Area\n    </ion-col>\n    <ion-col>\n      {{userLocation.subAdministrativeArea}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Locality\n    </ion-col>\n    <ion-col>\n      {{userLocation.locality}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Sub Locality\n    </ion-col>\n    <ion-col>\n      {{userLocation.subLocality}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Thoroughfare\n    </ion-col>\n    <ion-col>\n      {{userLocation.thoroughfare}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Sub Thoroughfare\n    </ion-col>\n    <ion-col>\n      {{userLocation.subThoroughfare}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocation\">\n    <ion-col>\n      Areas Of Interest\n    </ion-col>\n    <ion-col>\n      {{userLocation.areasOfInterest}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userCity\">\n    <ion-col>\n      Formatted address of user Current location which is continuously updating\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userCity\">\n    <ion-col>\n      {{userCity}}\n    </ion-col>\n  </ion-row>\n  <div class=\"line\"></div>\n  <ion-row>\n    <ion-col>\n      <ion-input clearInput type=\"text\" placeholder=\"Enter your location here for getting Latitude and Longitude\" [(ngModel)]=\"location\" class=\"input\"\n        padding-horizontal clear-input=\"true\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"block\" fill=\"outline\" color=\"undefined\" (click)=\"forwardGeocode(location)\" class=\"btn-color\">\n        <strong>Forward Geocode </strong>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"lat\">\n    <ion-col>\n        Latitude and Longitude for this location\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"lat\">\n    <ion-col>\n        Latitude : {{lat}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"lat\">\n    <ion-col>\n        Longitude : {{lng}}\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input clearInput type=\"text\" placeholder=\"Enter lat here\" [(ngModel)]=\"latEnter\" class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n    </ion-col>\n    <ion-col>\n      <ion-input clearInput type=\"text\" placeholder=\"Enter lng here\" [(ngModel)]=\"lngEnter\" class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"block\" fill=\"outline\" color=\"undefined\" (click)=\"reverseGeocode(latEnter,lngEnter)\" class=\"btn-color\">\n        <strong>Reverse Geocode </strong>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"latLngResult\">\n    <ion-col>\n      Location For this Latitude and Longitude\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"latLngResult\">\n    <ion-col>\n      {{this.latLngResult}}\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n          Location For this Latitude and Longitude\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Latitude\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.latitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Longitude\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.longitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Country Code\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.countryCode}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Country Name\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.countryName}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Postal Code\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.postalCode}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Administrative Area\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.administrativeArea}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Sub Administrative Area\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.subAdministrativeArea}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Locality\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.locality}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Sub Locality\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.subLocality}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Thoroughfare\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.thoroughfare}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Sub Thoroughfare\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.subThoroughfare}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"userLocationFromLatLng\">\n      <ion-col>\n        Areas Of Interest\n      </ion-col>\n      <ion-col>\n        {{userLocationFromLatLng.areasOfInterest}}\n      </ion-col>\n    </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");







const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
let MapPageModule = class MapPageModule {
};
MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })
], MapPageModule);



/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvbWFwL21hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufSIsIi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.page.ts":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let MapPage = class MapPage {
    constructor(zone, geolocation, nativeGeocoder, platform) {
        this.zone = zone;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.getUserLocation();
        });
    }
    getUserLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
            }
        }).catch((error) => {
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            data.coords.latitude;
            data.coords.longitude;
            let options = {
                useLocale: true,
                maxResults: 5
            };
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
                    .then((result) => {
                    console.log(result);
                    this.userLocation = result[0];
                    console.log(this.userLocation);
                })
                    .catch((error) => console.log(error));
            }
            else {
                console.log('not cordove');
                this.getGeoLocation(data.coords.latitude, data.coords.longitude);
            }
        });
    }
    getGeoLocation(lat, lng, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (navigator.geolocation) {
                let geocoder = yield new google.maps.Geocoder();
                let latlng = yield new google.maps.LatLng(lat, lng);
                let request = { latLng: latlng };
                yield geocoder.geocode(request, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                        let result = results[0];
                        this.zone.run(() => {
                            if (result != null) {
                                this.userCity = result.formatted_address;
                                if (type === 'reverseGeocode') {
                                    this.latLngResult = result.formatted_address;
                                }
                            }
                        });
                    }
                });
            }
        });
    }
    reverseGeocode(lat, lng) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lat, lng, options)
                .then((result) => this.userLocationFromLatLng = result[0])
                .catch((error) => console.log(error));
        }
        else {
            this.getGeoLocation(lat, lng, 'reverseGeocode');
        }
    }
    forwardGeocode(address) {
        if (this.platform.is('cordova')) {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.forwardGeocode(address, options)
                .then((result) => {
                this.zone.run(() => {
                    this.lat = result[0].latitude;
                    this.lng = result[0].longitude;
                });
            })
                .catch((error) => console.log(error));
        }
        else {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    this.zone.run(() => {
                        this.lat = results[0].geometry.location.lat();
                        this.lng = results[0].geometry.location.lng();
                    });
                }
                else {
                    alert('Error - ' + results + ' & Status - ' + status);
                }
            });
        }
    }
    ngOnInit() {
    }
};
MapPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.page.html"),
        styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], MapPage);



/***/ })

}]);
//# sourceMappingURL=map-map-module-es2015.js.map
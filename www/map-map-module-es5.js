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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/map/map.page.ts");







var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
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
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/map/map.page.scss":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2htZWNkMDAxNTIzL2lvbmljLWRvbnQtZGVsZXRlL2ZpcmViYXNlLXdvcmtpbmcvcHJvZ3Jlc3Mvc3JjL2FwcC9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59IiwiLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var MapPage = /** @class */ (function () {
    function MapPage(zone, geolocation, nativeGeocoder, platform) {
        this.zone = zone;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.platform = platform;
        this.initializeApp();
    }
    MapPage.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.getUserLocation();
        });
    };
    MapPage.prototype.getUserLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
            if (_this.platform.is('cordova')) {
                var options = {
                    useLocale: true,
                    maxResults: 5
                };
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                    .then(function (result) {
                    console.log(result);
                    _this.userLocation = result[0];
                    console.log(_this.userLocation);
                })
                    .catch(function (error) { return console.log(error); });
            }
            else {
                _this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
            }
        }).catch(function (error) {
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            data.coords.latitude;
            data.coords.longitude;
            var options = {
                useLocale: true,
                maxResults: 5
            };
            if (_this.platform.is('cordova')) {
                var options_1 = {
                    useLocale: true,
                    maxResults: 5
                };
                _this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options_1)
                    .then(function (result) {
                    console.log(result);
                    _this.userLocation = result[0];
                    console.log(_this.userLocation);
                })
                    .catch(function (error) { return console.log(error); });
            }
            else {
                console.log('not cordove');
                _this.getGeoLocation(data.coords.latitude, data.coords.longitude);
            }
        });
    };
    MapPage.prototype.getGeoLocation = function (lat, lng, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var geocoder, latlng, request;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.geolocation) return [3 /*break*/, 4];
                        return [4 /*yield*/, new google.maps.Geocoder()];
                    case 1:
                        geocoder = _a.sent();
                        return [4 /*yield*/, new google.maps.LatLng(lat, lng)];
                    case 2:
                        latlng = _a.sent();
                        request = { latLng: latlng };
                        return [4 /*yield*/, geocoder.geocode(request, function (results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    var result_1 = results[0];
                                    _this.zone.run(function () {
                                        if (result_1 != null) {
                                            _this.userCity = result_1.formatted_address;
                                            if (type === 'reverseGeocode') {
                                                _this.latLngResult = result_1.formatted_address;
                                            }
                                        }
                                    });
                                }
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.reverseGeocode = function (lat, lng) {
        var _this = this;
        if (this.platform.is('cordova')) {
            var options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lat, lng, options)
                .then(function (result) { return _this.userLocationFromLatLng = result[0]; })
                .catch(function (error) { return console.log(error); });
        }
        else {
            this.getGeoLocation(lat, lng, 'reverseGeocode');
        }
    };
    MapPage.prototype.forwardGeocode = function (address) {
        var _this = this;
        if (this.platform.is('cordova')) {
            var options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.forwardGeocode(address, options)
                .then(function (result) {
                _this.zone.run(function () {
                    _this.lat = result[0].latitude;
                    _this.lng = result[0].longitude;
                });
            })
                .catch(function (error) { return console.log(error); });
        }
        else {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    _this.zone.run(function () {
                        _this.lat = results[0].geometry.location.lat();
                        _this.lng = results[0].geometry.location.lng();
                    });
                }
                else {
                    alert('Error - ' + results + ' & Status - ' + status);
                }
            });
        }
    };
    MapPage.prototype.ngOnInit = function () {
    };
    MapPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=map-map-module-es5.js.map
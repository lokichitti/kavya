import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
let MapPage = class MapPage {
    constructor(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
    }
    ngOnInit() {
    }
    //Get current coordinates of device
    getGeolocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.geoLatitude = resp.coords.latitude;
            this.geoLongitude = resp.coords.longitude;
            this.geoAccuracy = resp.coords.accuracy;
            this.getGeoencoder(this.geoLatitude, this.geoLongitude);
        }).catch((error) => {
            alert('Error getting location' + JSON.stringify(error));
        });
    }
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude, longitude) {
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then((result) => {
            this.geoAddress = this.generateAddress(result[0]);
        })
            .catch((error) => {
            alert('Error getting location' + JSON.stringify(error));
        });
    }
    //Return Comma saperated address
    generateAddress(addressObj) {
        let obj = [];
        let address = "";
        for (let key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }
    //Start location update watch
    watchLocation() {
        this.isWatching = true;
        this.watchLocationUpdates = this.geolocation.watchPosition();
        this.watchLocationUpdates.subscribe((resp) => {
            this.geoLatitude = resp.coords.latitude;
            this.geoLongitude = resp.coords.longitude;
            this.getGeoencoder(this.geoLatitude, this.geoLongitude);
        });
    }
    //Stop location update watch
    stopLocationWatch() {
        this.isWatching = false;
        this.watchLocationUpdates.unsubscribe();
    }
};
MapPage = tslib_1.__decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.page.html',
        styleUrls: ['./map.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Geolocation,
        NativeGeocoder])
], MapPage);
export { MapPage };
//# sourceMappingURL=map.page.js.map
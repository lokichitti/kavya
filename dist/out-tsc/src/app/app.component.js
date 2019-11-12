import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            Environment.setEnv({
                // api key for server
                'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBHSK40wgWSOtksVfjDtxAAlIxyUiAFwME',
                // api key for local development
                'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBHSK40wgWSOtksVfjDtxAAlIxyUiAFwME'
            });
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
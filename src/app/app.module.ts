import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx'
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Validators, FormBuilder} from '@angular/forms';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { UserService } from './services/user/user.services';
import { AlertService } from './services/alert';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Geolocation,
    NativeGeocoder,
    FirebaseAuthentication,
    FirebaseX,
    FormBuilder,
    AlertController,
    UserService,
    AlertService,
    AngularFireAuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

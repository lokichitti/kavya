import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/user/profile.service';
import { LoadingController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';

var currentUid:string="";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId: string;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public loadingCtrl: LoadingController,
    private router: Router,    

  ) { }

  async createShop(values)
  {      
    const user: firebase.User = await this.getUser();
      const loading = await this.loadingCtrl.create();    
      const shopName = values.value.shopName;
      const shopCategory = values.value.shopCategory;
      const address = values.value.address;
      const area =  values.value.area;
      const city =  values.value.city;
      const state =  values.value.state;
      const pinCode =  values.value.pinCode;
      const longitude = "";
      const latitude ="";
      const shopPhoto = "";
      const isVisibleForPublic = values.value.visibility;
      this.createAShop(
        user.uid, isVisibleForPublic, shopName, shopCategory, address, 
        area, city, state, pinCode 
        )
        .then(
          () => {
            loading.dismiss().then(() => {
            });
          },
          error => {
            console.error(error);
          }
        );
    
      return await loading.present();
  }
  async createAShop( uId: string, isVisibleForPublic: string, shopName:string, shopCategory: string, shopAddress: string,
    langitude: string, latitude: string, shopPhoto: string, pinCode:string): Promise<void> {
    
      await this.firestore.doc(`userShop/${uId}`).set({
        uId,
        isVisibleForPublic,
        shopName,
        shopCategory,
        shopAddress,
        langitude,
        latitude,
        shopPhoto
      });
    }
    
  async createProfile(uId, values)
  {
      const loading = await this.loadingCtrl.create();    
      const email = values.email;
      const fName = values.name;
      const lName = values.lastname;
      const password = values.matching_passwords.password;
      const phone ="";
      this.createUser(uId,email, phone, fName, lName, password )
        .then(
          () => {
            loading.dismiss().then(() => {
            });
          },
          error => {
            console.error(error);
          }
        );
    
      return await loading.present();
  }

  async createPhoneUserProfile(uId, values)
  {
      const loading = await this.loadingCtrl.create();    
      const phone = values.value.country_phone.country.code + values.value.country_phone.phone;
      const fName = values.value.name;
      const lName = values.value.lastname;
      const password = values.value.matching_passwords.password;
      const email ="";
      this.createPhoneUser(uId, email, phone, fName, lName, password )
        .then(
          () => {
            loading.dismiss().then(() => {
            });
          },
          error => {
            console.error(error);
          }
        );
    
      return await loading.present();
  }

  async createUser( uId: string, email: string, phone: string, fName: string,
    lName: string, password: string): Promise<void> {
    
      await this.firestore.doc(`userProfile/${uId}`).set({
        uId,
        email,
        phone,
        fName,
        lName,
        password
      });
    }

    async createPhoneUser( uId: string,email: string, phone: string, fName: string,
      lName: string, password: string): Promise<void> {
  
        await this.firestore.doc(`userProfile/${uId}`).set({
          uId,
          email,
          phone,
          fName,
          lName,
          password
        });
        await this.firestore.doc(`phoneUsers/${phone}`).set({
          uId,
          password
        });
      }
  getUser(): Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
   }

   login(
    email: string,
    password: string
   ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
   }

   async signup(values): Promise<firebase.auth.UserCredential> {
    const newUserCredential: firebase.auth.UserCredential = await this.afAuth.auth.createUserWithEmailAndPassword(
      values.email,
      values.matching_passwords.password
    );    
    return newUserCredential;
   }
   async signupPhone(email:string, password:string): Promise<firebase.auth.UserCredential> {
    const newUserCredential: firebase.auth.UserCredential = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );    
    return newUserCredential;
   }
   
   async signupWithPhone(values): Promise<firebase.auth.UserCredential> {
    const newUserCredential: firebase.auth.UserCredential = await this.afAuth.auth.createUserWithEmailAndPassword(
      values.value.country_phone.country.code + values.value.country_phone.phone,
      values.value.matching_passwords.password
    );
    return newUserCredential;
   }

   resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
   }
   
   logout(): Promise<void> {
    return this.afAuth.auth.signOut();
   }

   sendVerificationMail()   {
    var actionCodeSettings = {
      url: 'https://www.example.com/?email=' + this.afAuth.auth.currentUser.email,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      handleCodeInApp: true,
      // When multiple custom dynamic link domains are defined, specify which
      // one to use.
      dynamicLinkDomain: "example.page.link"
    };
    return this.afAuth.auth.currentUser.sendEmailVerification().then(function() {
      console.log("Verification email sent.");
           })
           .catch(function(error) {
            console.log("Error occurred. Inspect error.code.");
           });
   }

   signInWithUserCredentials(userCredential){
    this.afAuth.auth.signInWithCredential(userCredential).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         if (errorCode === 'auth/account-exists-with-different-credential') {
           alert('Email already associated with another account.');
           // Handle account linking here, if using.
         } else {
           console.error(error);
         }
        });
   }
async getCurrentUser(): Promise<any> {
   await firebase.auth().onAuthStateChanged((user: firebase.User) => {
    if (user) {
      console.log('User is logged in now'+user.uid);
      currentUid= user.uid;
    } else {
      console.log('User is logged out now');
      this.router.navigate(['/first']);
    }
  });
}
}

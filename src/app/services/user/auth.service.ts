import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { LoadingController, AlertController } from '@ionic/angular';

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
    public alertCtrl:AlertController,

  ) { }

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

   signInWithPhoneNumber(phoneNumber: string, appVerifier){
    
    this.afAuth.auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then( async confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let prompt = await this.alertCtrl.create({
      header: 'Enter the Confirmation code',
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { console.log('Cancel clicked'); }
        },
        { text: 'Send',
          handler: data => {
            confirmationResult.confirm(data.confirmationCode)
            .then(function (result) {
              // User signed in successfully.
              console.log(result.user);
              // ...
            }).catch(function (error) {
              // User couldn't sign in (bad verification code?)
              // ...
            });
          }
        }
      ]
    });
    await prompt.present();
  })
  .catch(function (error) {
    console.error("SMS not sent", error);
  });
    
    }
}

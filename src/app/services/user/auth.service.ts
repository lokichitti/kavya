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

  ) { }

  async createProfile(uId, values)
  {
      const loading = await this.loadingCtrl.create();    
      const email = values.email;
      const fName = values.name;
      const lName = values.lastname;
      const password = values.matching_passwords.password;
      this.createUser(uId,email, fName, lName, password )
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

  async createUser( uId: string, email: string, fName: string,
    lName: string, password: string): Promise<void> {

      await this.firestore.doc(`userProfile/${uId}`).set({
        uId,
        email,
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
   /* const email = values.email;
    const password = values.matching_passwords.password;
    const firstName = values.fName;
    const lastName = values.lName;
    await this.firestore
    .doc(`userProfile/${newUserCredential.user.uid}`)
    .set({ 
      email,
      password,
      firstName,
      lastName
    });*/
    return newUserCredential;
   }

   resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
   }
   
   logout(): Promise<void> {
    return this.afAuth.auth.signOut();
   }
}

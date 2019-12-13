import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { EmailPage } from '../loginMethod/email/email.page';
import { AlertService } from '../../services/alert';
import { AngularFireAuth } from '@angular/fire/auth';

var email: string;
var password: string;
@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseAuthentication: FirebaseAuthentication,
    private storage: Storage,
    public alert: AlertService,
    private afAuth: AngularFireAuth,
    //private emailPage: EmailPage
  ) { }

  ngOnInit() {
    console.log("your UID is "+this.afAuth.auth.currentUser.uid);
    this.storage.get('password').then((val) => {  

      password = val;
      console.log('Your password is', password);
    });
    this.storage.get('email').then((val) => {
      //email = val;
      //this.loginUser(email, password);
      console.log('Your email is', email);
    });
    this.storage.get('userCredential').then((val) => {  
      this.authService.signInWithUserCredentials(val);
      console.log('Your userCredential is', val);
    });
    
  }

  async loginUser(email: string, password: string): Promise<void> {
    try {
      //this.alert.showLoading();
    const userCredential: firebase.auth.UserCredential = await this.authService.login(
    email,
    password
    );
    //await this.alert.hideLoading();
    this.authService.userId = userCredential.user.uid;
        //this.alert.presentAlert('Success', 'You are logged in!')
        this.router.navigate(["/menu/home"]);
      } catch (error) {
       // await this.alert.hideLoading();
        this.alert.handleError(error);
      //  this.alert.presentAlert('Error', 'Invalid email or password!')
      }
      
    }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-ph-register',
  templateUrl: './ph-register.page.html',
  styleUrls: ['./ph-register.page.scss'],
})
export class PhRegisterPage implements OnInit {

  constructor(
    private firebaseX: FirebaseX,
    private firebaseAuthentication: FirebaseAuthentication
  ) { }

  ngOnInit() {
    this.firebaseX.getToken()
  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));

this.firebaseX.onMessageReceived()
  .subscribe(data => console.log(`User opened a notification ${data}`));

this.firebaseX.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));
  
  this.firebaseAuthentication.createUserWithEmailAndPassword('test@gmail.com', '123')
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

  this.firebaseAuthentication.verifyPhoneNumber("+123456789", 30000).then(function(verificationId) {
    // pass verificationId to signInWithVerificationId
});

}
  
  

}

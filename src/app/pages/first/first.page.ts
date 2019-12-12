import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

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
  ) { }

  ngOnInit() {
    this.storage.get('email').then((val) => {
      console.log('Your email is', val);
    });
    this.storage.get('password').then((val) => {
      console.log('Your password is', val);
    });
  }

}

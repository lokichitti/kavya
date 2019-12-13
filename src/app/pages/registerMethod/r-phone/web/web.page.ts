import { Component, OnInit } from '@angular/core';
import {  NavController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.page.html',
  styleUrls: ['./web.page.scss'],
})
export class WebPage implements OnInit {

  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  constructor(
    public navCtrl:NavController, 
    public alertCtrl:AlertController,
    private authService: AuthService,
    ) {}

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  signIn(phoneNumber: string){

    this.authService.signInWithPhoneNumber(phoneNumber, this.recaptchaVerifier)
  }


}

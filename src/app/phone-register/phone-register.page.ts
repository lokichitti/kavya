import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
import { CountryPhone } from '../models/country-phone.model';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { 
  UsernameValidator, 
  PhoneValidator, 
  PasswordValidator } from '../models/validators';
  import * as firebase from 'firebase';
  import { AlertController } from '@ionic/angular';

  declare var SMSReceive: any;
  var phoneSignInWithVerificationId: any;
  var OTPcode: 123456;
@Component({
  selector: 'app-phone-register',
  templateUrl: './phone-register.page.html',
  styleUrls: ['./phone-register.page.scss'],
})
export class PhoneRegisterPage implements OnInit {

  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  verificationId1: any;
  code: number;
  OTPcode1: number;
  validations_form: FormGroup;
  country_phone_group: FormGroup;

  countries: Array<CountryPhone>;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private firebaseX: FirebaseX,
    private firebaseAuthentication: FirebaseAuthentication,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
     //  We just use a few random countries, however, you can use the countries you need by just adding them to this list.
    // also you can use a library to get all the countries from the world.
    this.countries = [
      new CountryPhone('IN', 'India'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('BR', 'Brasil')
    ];
    let country = new FormControl(this.countries[0], Validators.required);
    let phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.validCountryPhone(country)
    ]));
    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.validations_form = this.formBuilder.group({
      country_phone: this.country_phone_group
    });
}


validation_messages = {
  'phone': [
    { type: 'required', message: 'Phone is required.' },
    { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
  ],
}
createProfile(values)
  {
    /*this.angularFireAuth.authState.subscribe(auth=>{
      this.angularFireDatabase.list(`profile/${auth.uid}`).push
    });*/
  }
  getOTP(values){
    console.log("Get OTP called");
    //this.presentAlertPrompt();
    this.firebaseAuthentication.verifyPhoneNumber("+918073990063", 3000).then (function(verificationId) {
      phoneSignInWithVerificationId = verificationId;
    console.log("OTP Successfully Sent " + verificationId);
    this.presentAlertPrompt();
    }).catch(e => {
      console.log(e);
  }); 
}

  verify(){
    console.log("verify called Entered OTP is "+ this.OTPcode1);
    this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId ,this.OTPcode1);
    console.log("OTP Successfully Sent " + phoneSignInWithVerificationId);
  }
  async presentAlertPrompt() {
    console.log("presentAlertPrompt called");
    const alert = await this.alertCtrl.create({
      header: 'OTP Sent Successfully',
      inputs: [
        {
          name: 'OTP',
          type: 'text',
          placeholder: 'Enter OTP'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (angularFireDatabase) => {
            this.verify();
            console.log('Confirm Ok');
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
    setTimeout(()=>{
      alert.dismiss();
  }, 60000);
  }

}
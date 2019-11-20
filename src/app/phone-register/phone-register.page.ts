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
import { ToastMsg } from '../models/toast-msg'
  declare var SMSReceive: any;
  var self = this;
@Component({
  selector: 'app-phone-register',
  templateUrl: './phone-register.page.html',
  styleUrls: ['./phone-register.page.scss'],
})
export class PhoneRegisterPage implements OnInit {

  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  verificationId1: any;
  code: number;
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
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
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
  getOTP1(values){
    console.log("Get OTP called");
    this.register();
    self.firebaseAuthentication.verifyPhoneNumber("+918073990063", 60).then ((credential) => {
      self.verificationId1 = credential.verificationId;
    console.log(credential);
    this.presentAlertPrompt();
    }).catch(e => {
      console.log(e);
  }); 
}

  verify(){
    console.log("verify called");
    this.firebaseAuthentication.signInWithVerificationId(this.verificationId1 , this.code);
    
  }
  async presentAlertPrompt() {
    console.log("presentAlertPrompt called");
    const alert = await this.alertCtrl.create({
      header: 'Enter OTP',
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

  next() {
    this.showOTPInput = true;
    this.start();
  }

  start() {
    SMSReceive.startWatch(
      () => {
        console.log('watch started');
        document.addEventListener('onSMSArrive', (e: any) => {
          console.log('onSMSArrive()');
          var IncomingSMS = e.data;
          console.log('sms.address:' + IncomingSMS.address);
          console.log('sms.body:' + IncomingSMS.body);
          /* Debug received SMS content (JSON) */
          console.log(JSON.stringify(IncomingSMS));
          this.processSMS(IncomingSMS);
        });
      },
      () => { console.log('watch start failed') }
    )
  }

  stop() {
    SMSReceive.stopWatch(
      () => { console.log('watch stopped') },
      () => { console.log('watch stop failed') }
    )
  }

  processSMS(data) {
    // Check SMS for a specific string sequence to identify it is you SMS
    // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
    // In this case, I am keeping the first 6 letters as OTP
    const message = data.body;
    if (message && message.indexOf('enappd_starters') != -1) {
      this.OTP = data.body.slice(0, 6);
      console.log(this.OTP);
      this.OTPmessage = 'OTP received. Proceed to register'
      this.stop();
    }
  }
  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastCtrl.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }
  register() {
    if (this.OTP != '') {
      this.presentToast('You are successfully registered', false, 'top', 1500);
    }
    else {
      this.presentToast('Your OTP is not valid', false, 'top', 1500);
    }
  }

  //signIn(phoneNumber: number){
    getOTP(values){
    const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+918073990063";
    firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
      .then( async confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        const prompt = await this.alertCtrl.create({
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
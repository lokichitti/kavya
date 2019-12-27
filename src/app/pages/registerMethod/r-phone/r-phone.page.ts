import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
import { CountryPhone } from '../../../models/country-phone.model';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { 
  UsernameValidator, 
  PhoneValidator, 
  PasswordValidator } from '../../../models/validators';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/user/auth.service';
import { PlatformService } from 'src/app/services/platform/platform.service';
import { AlertService } from '../../../services/alert';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../home/home.page';

  var phoneSignInWithVerificationId: any;
  var phoneNumber: string;
//{{ validations_form.value.country_phone.country.code }}
@Component({
  selector: 'app-r-phone',
  templateUrl: './r-phone.page.html',
  styleUrls: ['./r-phone.page.scss'],
})
export class RPhonePage implements OnInit {

  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  verificationId1: any;
  code: number;
  OTPcode: number=undefined;
  validations_form: FormGroup;
  country_phone_group: FormGroup;
  disableVerifyButton: boolean = true;
  disableGetOTPButton: boolean = false;
  countries: Array<CountryPhone>;
  matching_passwords_group: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private firebaseAuthentication: FirebaseAuthentication,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public alert: AlertService,
    private storage: Storage,
    private platformService:PlatformService
  ) { }

  ngOnInit() {
    this.countries = [
      new CountryPhone('IN', 'India'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('BR', 'Brasil')
    ];

    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

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
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      country_phone: this.country_phone_group,
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };

  async onSubmit(values): Promise<void> {
    if(this.platformService.DEVICE_TYPE != "BROWSER"){
    var globalErrorCheck=0;
    phoneNumber = values.value.country_phone.country.code + values.value.country_phone.phone;
    console.log("Get OTP called " + phoneNumber);
    phoneSignInWithVerificationId = null;
    this.disableGetOTPButton = true;
    this.disableVerifyButton = false;
    
    this.alert.presentAlert('SMS Sent', 'Please enter 6 digit OTP below');
    this.firebaseAuthentication.verifyPhoneNumber(phoneNumber, 3000)
    .then (function(verificationId) {      
      phoneSignInWithVerificationId = verificationId;
      globalErrorCheck=1;
      console.log("OTP Sent successfully" + phoneNumber);
      //this.presentAlertPrompt(values);
    }).catch(e => {
      console.log("Get OTP failed ");
      console.log(e);
      this.disableGetOTPButton = false;
      this.disableVerifyButton = true;
      this.alert.handleError(e);
  }).finally(function() {
    console.log('This finally block');
    if(globalErrorCheck){
      console.log("Get OTP called ");
      this.disableGetOTPButton = true;
      this.disableVerifyButton = false;
      this.alert.presentAlert('SMS Sent', 'Please enter 6 digit OTP below');
    } 
  });   
}
else{
  this.alert.presentAlert('SMS not sent', "Try from mobile devices (browser doesn't support this feature)");
}
}

async register(values): Promise<void> {
    const email="ph"+phoneNumber+"@meandmyshop.com";
    const password=values.value.matching_passwords.password;
  try {    
    const userCredential: firebase.auth.UserCredential = await this.authService.signupPhone(
      email,
      password
    );
    await this.alert.hideLoading();
    //this.storage.set('email', values.email);
    //this.storage.set('password', values.matching_passwords.password);
    this.authService.userId = userCredential.user.uid;
    //this.storage.set('userCredential', userCredential);    
    this.alert.presentAlert('Success', 'You are registered!')
    //this.authService.sendVerificationMail();
    this.authService.createPhoneUserProfile(this.authService.userId, values);
    //this.router.navigate(["/menu/home"]);
  } catch (error) {
      await this.alert.hideLoading();
      this.alert.handleError(error);
      this.router.navigate(["/first"]);
    //this.alert.presentAlert('Error', 'Something went wrong, please try again!')
  }  
}

async verify(values){

    if(this.OTPcode && this.OTPcode<=999999 ){
      console.log("verify called Entered OTP is "+ this.OTPcode);
      this.alert.showLoading();
    // try{    //
      this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId ,this.OTPcode)
      .then ( async (res) =>{
        console.log("Verify success" + res.uid);
        //this.storage.set('userCredential', res);
        this.register(values);
        await this.alert.hideLoading();
        this.router.navigate(["/menu/home"]);      
      }).catch (async (error)=>{
        console.log("Verify failed" + phoneNumber);
        await this.alert.hideLoading();
        this.alert.handleError(error);
      }).finally(async()=>{
        await this.alert.hideLoading(); 
      }); 
    
    }
    else{
      this.alert.presentAlert('Check your sms', 'Please enter 6 digit OTP!')
    }
  }
}
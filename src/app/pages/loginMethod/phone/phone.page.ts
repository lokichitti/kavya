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
import { AlertService } from '../../../services/alert';
import { Storage } from '@ionic/storage';
//import { userInfo } from 'os';

  var phoneSignInWithVerificationId: any;
  var phoneNumber: string;

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {


  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  verificationId1: any;
  code: number;
  OTPcode: number;
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
    private storage: Storage
  ) { }

  ngOnInit() {
    this.countries = [
      new CountryPhone('IN', 'India'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('BR', 'Brasil'),
      new CountryPhone('AF', 'Afganistan'),
      new CountryPhone('AL', 'Albania'),
      new CountryPhone('DZ', 'Algeria'),
      new CountryPhone('AS', 'American Samoa'),
      new CountryPhone('AD', 'Andorra'),
      new CountryPhone('AO', 'Angola'),
      new CountryPhone('AI', 'Anguilla'),
      /*new CountryPhone('AQ', 'Antarctica'),
      new CountryPhone('AG', 'Antigua and Barbuda'),
      new CountryPhone('AR', 'Argentina'),
      new CountryPhone('AM', 'Armenia'),
      new CountryPhone('AW', 'Aruba'),
      new CountryPhone('AU', 'Australia'),
      new CountryPhone('AT', 'Austria'),
      new CountryPhone('AZ', 'Azerbaijan'),*/
    ];

    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
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
      country_phone: this.country_phone_group,
      password: new FormControl('', Validators.required)
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
    
    phoneNumber = values.value.country_phone.country.code + values.value.country_phone.phone;
    console.log("Get OTP called " + phoneNumber);
    this.disableGetOTPButton = true;
    this.disableVerifyButton = false;
    this.presentAlertPrompt(values);
    this.firebaseAuthentication.verifyPhoneNumber(phoneNumber, 60000).then (function(verificationId) {
      phoneSignInWithVerificationId = verificationId;
    this.presentAlertPrompt(values);
    }).catch(e => {
      console.log(e);
  }); 
}

async verify(values){
    await this.alert.showLoading();
    this.firebaseAuthentication.signInWithVerificationId(phoneSignInWithVerificationId ,this.OTPcode);
      console.log("signInWithVerificationId called");
      await this.alert.hideLoading();
      this.router.navigate(["/menu/home"]); 
}

async presentAlertPrompt(values) {
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
          //this.alert.showLoading(); 
          //this.alert.presentAlert('Please wait', 'Thanks for your patience');                
        }
      }, {
        text: 'Ok',
        handler: (data) => {
          this.OTPcode = data.OTP;
          this.verify(values);
          console.log('Confirm Ok');
        }
      }
    ],
    backdropDismiss: false
  });

  await alert.present();
  setTimeout(()=>{
    //this.alert.hideLoading();    
    alert.dismiss();
}, 60000);
}
  async loginUser(values): Promise<void> {
    try {
      this.alert.showLoading();
      const userCredential: firebase.auth.UserCredential = await this.authService.login(
      values.value.country_phone.country.code + values.value.country_phone.phone,
      values.value.password    
      );
        this.authService.userId = userCredential.user.uid;
        await this.alert.hideLoading();
        this.alert.presentAlert('Success', 'You are logged in!')
        this.router.navigate(["/menu/home"]);
      } catch (error) {
        await this.alert.hideLoading();
        this.alert.handleError(error);
        //this.alert.presentAlert('Error', 'Invalid phone or password!')
      }
      
    }
}

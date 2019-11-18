import { Component, OnInit } from '@angular/core';
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


@Component({
  selector: 'app-phone-register',
  templateUrl: './phone-register.page.html',
  styleUrls: ['./phone-register.page.scss'],
})
export class PhoneRegisterPage implements OnInit {

  signInWithVerificationId: string;
  verificationId: any;
  code: number;
  validations_form: FormGroup;
  country_phone_group: FormGroup;

  countries: Array<CountryPhone>;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private firebaseX: FirebaseX,
    private firebaseAuthentication: FirebaseAuthentication
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
    this.firebaseAuthentication.verifyPhoneNumber("+918073990063", 3000).then (function(verificationId) {
    this.verificationId = verificationId.verificationId;
    console.log("OTP Successfully Sent");
    }); 
}

  verify(){
    this.firebaseAuthentication.signInWithVerificationId(this.verificationId , this.code);
  
  }


}

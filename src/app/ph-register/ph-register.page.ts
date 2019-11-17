import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
import { CountryPhone } from '../models/country-phone.model';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { 
  UsernameValidator, 
  PhoneValidator, 
  PasswordValidator } from '../models/validators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-ph-register',
  templateUrl: './ph-register.page.html',
  styleUrls: ['./ph-register.page.scss'],
})
export class PhRegisterPage implements OnInit {
 
  verificationId: any;
  code = '';
  validations_form: FormGroup;
  country_phone_group: FormGroup;

  countries: Array<CountryPhone>;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase
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
  };

  createProfile(values)
  {
    /*this.angularFireAuth.authState.subscribe(auth=>{
      this.angularFireDatabase.list(`profile/${auth.uid}`).push
    });*/
  }
  async getOTP(values){
   // console.log(values);
   // (<any>window).FirebasePlugin.verfyPhoneNumber("+918073990063"/*values.country_phone.phone*/, 60, ( credential ) => {
     /* alert("OTP Sent Successfully");
      console.log(credential);
      this.verificationId = credential.verificationId;
    }, (error) =>{
      console.error(error);
    });*/
  }

  verify(){
   /*   let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
      firebase.auth().signInWithCredential(signInCredential).then((info) => { console.log(info);}, (error) => {
      console.log(error);
    })*/
  }

}
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

@Component({
  selector: 'app-phone-register',
  templateUrl: './phone-register.page.html',
  styleUrls: ['./phone-register.page.scss'],
})
export class PhoneRegisterPage implements OnInit {

  verificationId: any;
  code = '';
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
  onSubmit(values){
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

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
import { CountryPhone } from './country-phone.model';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FirestoreService } from '../services/data/firestore.service';
import { LoadingController, AlertController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { 
  UsernameValidator, 
  PhoneValidator, 
  PasswordValidator } from '../models/validators';
import { UserService } from '../services/user/user.services';
import { AlertService } from '../services/alert';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  countries: Array<CountryPhone>;
  genders: Array<string>;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private angularFireDatabase: AngularFireDatabase,
    public user: UserService,
    public alert: AlertService,
    public afstore: AngularFirestore,
    public firestoreService: FirestoreService,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    //  We just use a few random countries, however, you can use the countries you need by just adding them to this list.
    // also you can use a library to get all the countries from the world.
    this.countries = [
      new CountryPhone('IN', 'India'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('BR', 'Brasil')
    ];

    this.genders = [
      "Male",
      "Female"
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
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*)[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: new FormControl(this.genders[0], Validators.required),
      country_phone: this.country_phone_group,
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please wnter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
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

  async createProfile(values)
  {
      const loading = await this.loadingCtrl.create();    
      const userName = values.username;
      const email = values.email;
      const phone = values.country_phone.phone;
      const fName = values.name;
      const lName = values.lastname;
      const gender = values.gender;
    
      this.firestoreService
        .createUser(userName, email, phone, fName, lName, gender )
        .then(
          () => {
            loading.dismiss().then(() => {
              this.router.navigateByUrl('');
            });
          },
          error => {
            console.error(error);
          }
        );
    
      return await loading.present();
  }
  username: string = ""

  async onSubmit(values){
    const { username} = this
    this.username = values.username.toString();
    console.log(values);
    try{
      const res = await this.angularFireAuth.auth.createUserWithEmailAndPassword(values.email, values.matching_passwords.password);
      console.log(res);
      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      })
      this.user.setUser({
				username,
				uid: res.user.uid
      })
      this.alert.presentAlert('Success', 'You are registered!')
      this.createProfile(values);
      this.router.navigate(["/profile"]);

    }
    catch(e){
      console.error(e);
    }
  }
  

}
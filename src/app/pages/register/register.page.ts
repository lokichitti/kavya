import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  UsernameValidator, 
  PhoneValidator, 
  PasswordValidator } from '../../models/validators';
  import { FormControl, FormGroup } from '@angular/forms';
  import { AbstractControl, ValidatorFn } from '@angular/forms';
  import libphonenumber from 'google-libphonenumber';
  import { CountryPhone } from './country-phone.model';

  var phoneSignInWithVerificationId: any;
  var OTPcode: 123456;
  var phoneNumber: string;

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
  constructor() { }

  ngOnInit() {
    this.countries = [
      new CountryPhone('IN', 'India'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('BR', 'Brasil')
    ];
  }

}

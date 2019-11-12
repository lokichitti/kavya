import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  public myform: FormGroup;
  public errorMessage: string = '';

  form_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
    ],
    'confpass': [
      { type: 'required', message: 'Confirm password is required.' },
    ],
    'number': [
      { type: 'required', message: 'Mobile number is required.' },
    ]
  };

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myform = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confpass: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      add1: new FormControl(''),
      add2: new FormControl(''),
      postcode: new FormControl(''),
      state: new FormControl('')
    });
  }

  onSubmit(values: any) {
    console.log(values);
  }

}


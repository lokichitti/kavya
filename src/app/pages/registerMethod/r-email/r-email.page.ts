import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { FirestoreService } from '../../../services/data/firestore.service';
import { LoadingController, AlertController } from '@ionic/angular';

import { Observable } from 'rxjs';
import {
  PasswordValidator } from '../../../models/validators';
import { UserService } from '../../../services/user/user.services';
import { AlertService } from '../../../services/alert';

@Component({
  selector: 'app-r-email',
  templateUrl: './r-email.page.html',
  styleUrls: ['./r-email.page.scss'],
})
export class REmailPage implements OnInit {

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    public alert: AlertService,
  ) { }

  ngOnInit() {
  
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

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
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
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please wnter a valid email.' }
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
  
  async onSubmit(values): Promise<void> {
    
    try {
      this.alert.showLoading();
      const userCredential: firebase.auth.UserCredential = await this.authService.signup(
        values
      );

      this.authService.userId = userCredential.user.uid;
      await this.alert.hideLoading();
      this.alert.presentAlert('Success', 'You are registered!')
      this.authService.createProfile(this.authService.userId, values);
      this.router.navigate(["/home"]);
    } catch (error) {
        await this.alert.hideLoading();
        this.alert.handleError(error);
      //this.alert.presentAlert('Error', 'Something went wrong, please try again!')
    }
    
  }

}

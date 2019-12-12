import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  @ViewChild(AuthFormComponent, { static: false }) loginForm: AuthFormComponent;
  constructor(
    private authService: AuthService, 
    private router: Router,
    public alert: AlertService,
    private storage: Storage
    ) {}
 
  ngOnInit() {}
 
  async loginUser(email: string, password: string): Promise<void> {
  try {
    this.alert.showLoading();
  const userCredential: firebase.auth.UserCredential = await this.authService.login(
  email,
  password
  );
  await this.alert.hideLoading();
  this.authService.userId = userCredential.user.uid;
  this.storage.set('userCredential', userCredential);
      //this.alert.presentAlert('Success', 'You are logged in!')
      this.router.navigate(["/menu/home"]);
    } catch (error) {
      await this.alert.hideLoading();
      this.alert.handleError(error);
    //  this.alert.presentAlert('Error', 'Invalid email or password!')
    }
    
  }
}
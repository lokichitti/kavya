import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert';

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
    ) {}
 
  ngOnInit() {}
 
  async loginUser(email: string, password: string): Promise<void> {
  try {
  const userCredential: firebase.auth.UserCredential = await this.authService.login(
  email,
  password
  );
  this.authService.userId = userCredential.user.uid;
      this.alert.presentAlert('Success', 'You are logged in!')
      this.router.navigate(["/home"]);
    } catch (error) {
      this.alert.presentAlert('Error', 'Invalid email or password!')
    }
    
  }
}
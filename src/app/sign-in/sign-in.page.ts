import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  user = {} as User;
  constructor(
  private router: Router,
  private angularFireAuth: AngularFireAuth,
) { }

ngOnInit() {
  
}

async tryLogin(user: User){
    try{
      const result= await this.angularFireAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      console.log(result);
      this.router.navigate(["/home"]);
    }
    catch(e){
      console.error(e);
    }
}

goToRegisterPage(){
  this.router.navigate(["/register"]);
}

}

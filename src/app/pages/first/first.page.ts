import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseAuthentication: FirebaseAuthentication,
  ) { }

  ngOnInit() {
    /*const currentUser = this.authService.getUser();
    console.log(currentUser);
    if(currentUser){
      this.router.navigate(["/menu/home"]);
    }*/
    const userInfo = this.firebaseAuthentication.onAuthStateChanged();
      if (userInfo) {
          this.router.navigate(["/menu/home"]);
      } else {
          // user was signed out
      }
  }

}

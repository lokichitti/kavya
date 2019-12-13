import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private firebaseAuthentication: FirebaseAuthentication,
    private fireAuth: AngularFireAuth
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.fireAuth.auth.onAuthStateChanged((user: firebase.User) => {
        if (user) {
          console.log('User is logged in now');
          resolve(true);
        } else {
          console.log('User is logged out now');
          this.router.navigate(['/first']);
          resolve(false);
        }
      });
    });
  }

  getCurrentUser(){
    //this.firebaseAuthentication.getCurrentUser().then(function(userInfo) {
      // user information or null if not logged in
 // })
  }
}
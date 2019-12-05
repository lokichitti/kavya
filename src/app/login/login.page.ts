import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
	password: string = ""
	public userData;
	email: string;
	constructor(
		public afAuth: AngularFireAuth, 
		public user: UserService, 
		public router: Router,
		public firestoreService: FirestoreService,
		public loadingCtrl: LoadingController,
		public alert: AlertService,
		) { }

	ngOnInit() {
	}

	async login() {
		
		const loading = await this.loadingCtrl.create();  
		const { username, password } = this
		this.userData = this.firestoreService.getUserData(username).valueChanges();
		this.userData.subscribe(result=>{
			console.log(result.email);
			this.email = result.email;
		});
		if(this.userData != null)
		{
		try {
			
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(this.email, password)
			
			if(res.user) {
				this.user.setUser({
					username,
					uid: res.user.uid
				})
				this.router.navigate(['/profile'])
			}
		
		} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				console.log("User not found")
			}
		}
	}
	else{
		this.alert.presentAlert('Error', 'Invalid username/password!')
		
	}
	return await loading.present();
	}

}
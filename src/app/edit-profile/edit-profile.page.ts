import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../services/user/user.services';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  mainuser: AngularFirestoreDocument
	sub
	username: string
	profilePic: string

	password: string
	newpassword: string

	busy: boolean = false
  constructor(
    public user: UserService,
    public alert: AlertService,
    private afs: AngularFirestore,
		private router: Router,
		private alertController: AlertController,
  ) {
    this.mainuser = afs.doc(`users/${user.getUid()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.username = event.username
			this.profilePic = event.profilePic
		})
   }
   
  ngOnInit() {
  }
  ngOnDestroy() {
		this.sub.unsubscribe()
	}
  async updateDetails() {
	/*	this.busy = true

		if(!this.password) {
			this.busy = false
			return this.presentAlert('Error!', 'You have to enter a password')
		}

		try {
			await this.user.reAuth(this.user.getUsername(), this.password)
		} catch(error) {
			this.busy = false
			return this.presentAlert('Error!', 'Wrong password!')
		}

		if(this.newpassword) {
			await this.user.updatePassword(this.newpassword)
		}

		if(this.username !== this.user.getUsername()) {
			await this.user.updateEmail(this.username)
			this.mainuser.update({
				username: this.username
			})
		}

		this.password = ""
		this.newpassword = ""
		this.busy = false

		await this.presentAlert('Done!', 'Your profile was updated!')

		this.router.navigate(['/tabs/feed'])*/
	}

}

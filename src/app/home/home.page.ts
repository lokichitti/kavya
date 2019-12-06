import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userList;
  user: Observable<User>;
  constructor(
  private firestoreService: FirestoreService,
  ) {}
  ngOnInit() {
    this.userList = this.firestoreService.getUserList().valueChanges();
    
  }
  getData()
  {
    this.userList = this.firestoreService.getUserList().valueChanges();
    this.userList.subscribe(result=>{
			console.log(result.email);
		});
  }
  signupUser(credentials){
   // try {
   /*   const user: firebase.User = await this.authService.createAdminUser(
        credentials.email,
        credentials.password
      );
      this.authService.userId = user.uid;
      await this.signupForm.hideLoading();
      this.router.navigateByUrl('');
    } catch (error) {
      await this.signupForm.hideLoading();
     // this.signupForm.handleError(error);*/
    //}
  }

}

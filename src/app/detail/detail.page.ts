import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.interface';
import { FirestoreService } from '../services/data/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public user: Observable<User>;
  constructor(
    private firestoreService: FirestoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const userId: string = this.route.snapshot.paramMap.get('id');
    this.user = this.firestoreService.getUserDetail(userId).valueChanges();
  }

  async deleteUser() {    
     // this.firestoreService.deleteUser(this.userId).then(() => {
     //   this.router.navigateByUrl('');
     // });                 
  }

}

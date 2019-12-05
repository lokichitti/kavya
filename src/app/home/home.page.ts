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

  constructor(
  private firestoreService: FirestoreService,
  ) {}
  ngOnInit() {
    this.userList = this.firestoreService.getUserList().valueChanges();
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { FirestoreService } from '../services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {

  public songList;
constructor(
  private firestoreService: FirestoreService,
  private router: Router
) {}

  ngOnInit() {
    //this.songList = this.firestoreProvider.getSongList().valueChanges();
  }

}

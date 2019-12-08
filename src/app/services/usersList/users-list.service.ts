import { Injectable } from '@angular/core';
import { AngularFirestore, 
  AngularFirestoreCollection,
  AngularFirestoreDocument
 } from '@angular/fire/firestore';
import { UsersList } from '../../models/user.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor() { }
}

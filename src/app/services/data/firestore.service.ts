import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public firestore: AngularFirestore
    ) { }

    createUser( userName: string, email: string,phone: string,fName: string,
    lName: string,gender: string): Promise<void> {
      const id = this.firestore.createId();
    
      return this.firestore.doc(`userList/${id}`).set({
        id,
        userName,
        email,
        phone,
        fName,
        lName,
        gender
      });
    }
}

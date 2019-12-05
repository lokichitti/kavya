import { Injectable } from '@angular/core';
import { AngularFirestore, 
  AngularFirestoreCollection,
  AngularFirestoreDocument
 } from '@angular/fire/firestore';
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

    getUserList(): AngularFirestoreCollection<User> {
      return this.firestore.collection(`userList`);
    }
    getUserDetail(userId: string): AngularFirestoreDocument<User> {
      return this.firestore.collection('userList').doc(userId);
    }

    deleteUser(userId: string): Promise<void> {
      return this.firestore.doc(`userList/${userId}`).delete();
    }
    
}

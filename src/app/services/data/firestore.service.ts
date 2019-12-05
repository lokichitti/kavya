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
    
      return this.firestore.doc(`${userName}/${id}`).set({
        id,
        userName,
        email,
        phone,
        fName,
        lName,
        gender
      });
    }
//Added for purpose
    getUserData( userName: string ): AngularFirestoreCollection<User> {
      return this.firestore.collection(`${userName}`);
    }

    getUserInfo(userName: string , userId: string): AngularFirestoreDocument<User> {
      return this.firestore.collection(`${userName}`).doc(userId);
    }

    thrashUser(userName: string, userId: string): Promise<void> {
      return this.firestore.doc(`${userName}/${userId}`).delete();
    }

  //Extras
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

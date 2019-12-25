import { Injectable } from '@angular/core';
import {
 AngularFirestore,
 AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../user/auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { ShopDetails } from '../../models/shop';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopDetails: AngularFirestoreDocument<ShopDetails>;
  private currentUser: firebase.User;
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  async checkIfDocExists(shopName:string): Promise<void>{
    const user: firebase.User = await this.authService.getUser();
    this.currentUser = user;
    this.firestore.doc(`userShop/${user.uid}`)
    .update({shopName})
    .then(() => {
      console.log("shop exist");
      return true;
    })
    .catch((error) => {
      console.log("shop doesnt exist");
      return false;
  });
  }
  async getUserShop(): Promise<Observable<ShopDetails>> {
    const user: firebase.User = await this.authService.getUser();
    this.currentUser = user;
    this.shopDetails = this.firestore.doc(`userShop/${user.uid}`);
    return this.shopDetails.valueChanges();
   }

   updateShopName(shopName: string): Promise<void> {
    return this.shopDetails.update({ shopName });
   }

   updatePhoneNumber(phoneNumber: string): Promise<void> {
    return this.shopDetails.update({ phoneNumber });
   }

   updateShopCategory(shopCategory: string): Promise<void> {
    return this.shopDetails.update({ shopCategory });
   }

   updateShopAddress(shopAddress: string): Promise<void> {
    return this.shopDetails.update({ shopAddress });
   }

   updateIsVisibleForPublic(isVisibleForPublic: string): Promise<void> {
    return this.shopDetails.update({ isVisibleForPublic });
   }
}

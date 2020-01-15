import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/user/profile.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { ShopService } from 'src/app/services/shop/shop.service';
import { ShopDetails } from 'src/app/models/shop';
import {
  AngularFirestore,
  AngularFirestoreDocument
 } from '@angular/fire/firestore';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})

export class ShopPage implements OnInit {
  showShop: boolean = true;
  public shopDetails: ShopDetails;
  currentUser: string ;
  isShopExists: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private shopService: ShopService,
    private alertCtrl: AlertController,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.checkIfDocExists("nothing");      
  }

  async getShopDetails(){
    this.shopService.getUserShop().then(shop$ => {
      shop$.subscribe(userShop => {
        this.shopDetails = userShop;
        this.showShop = true;
      });
    }).catch((error)=>{
      
      this.showShop = false;
    }) 
  }

  async checkIfDocExists(data:string): Promise<void> {
    const user: firebase.User = await this.authService.getUser();
    this.currentUser = user.uid;
    this.firestore.doc(`userShop/${user.uid}`)
    .update({data})
    .then(() => {
      console.log("shop exist");
      this.showShop = true;
      this.getShopDetails();
    })
    .catch((error) => {
      console.log("shop doesnt exist");
      this.showShop = false;
    });
  }

  async updateName(): Promise<void> {
  
  }
  

}

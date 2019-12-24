import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
import { CountryPhone } from '../../models/country-phone.model';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { 
  UsernameValidator, 
  PhoneValidator, 
  PasswordValidator } from '../../models/validators';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/user/auth.service';
import { AlertService } from '../../services/alert';
import { Storage } from '@ionic/storage';
import { ShopDetails } from 'src/app/models/user';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
//import { Geolocation } from '@ionic-native/geolocation';

var Latitude = undefined;
var Longitude = undefined;
@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.page.html',
  styleUrls: ['./create-shop.page.scss'],
})
export class CreateShopPage implements OnInit {
  shopDetails:ShopDetails;
  validations_form: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;
  shopCategory: Array<string>;
  isVisibleForPublic: Array<string>;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private firebaseAuthentication: FirebaseAuthentication,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public alert: AlertService,
    private storage: Storage,
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.countries = [
      new CountryPhone('IN', 'India'),
      new CountryPhone('US', 'United States'),
      new CountryPhone('BR', 'Brasil')
    ];
    this.shopCategory = [
      "vegetables",
      "dairy",
      "stationaries",
      "consumables",
      "bakery",
      "hotel",
    ];
    this.isVisibleForPublic = [
        "Visible to public",
        "Visible to selected members only"
    ];

    
    let country = new FormControl(this.countries[0], Validators.required);
    let phone = new FormControl('', Validators.compose([
      Validators.required,
      PhoneValidator.validCountryPhone(country)
    ]));
    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.validations_form = this.formBuilder.group({
      shopName: new FormControl('', Validators.required),
      visibility: new FormControl(this.isVisibleForPublic[0], Validators.required),
      category: new FormControl(this.shopCategory[0], Validators.required),
      address: new FormControl('', Validators.required),
      //street: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pinCode: new FormControl('', Validators.required),
      country_phone: this.country_phone_group,
    });
  }

  validation_messages = {
    'shopName': [
      { type: 'required', message: 'shopName is required.' }
    ],
    'address': [
      { type: 'required', message: 'address is required.' }
    ],
    //'street': [
    //  { type: 'required', message: 'street is required.' }
    //],
    'area': [
      { type: 'required', message: 'area Name is required.' }
    ],
    'city': [
      { type: 'required', message: 'city Name is required.' }
    ],
    'state': [
      { type: 'required', message: 'state Name is required.' }
    ],
    'pinCode': [
      { type: 'required', message: 'pinCode is required.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
    ],
  };

  async createMyShop(shopDetails): Promise<void> {

    this.authService.createShop(shopDetails);
    this.alert.presentAlert('Your shop created', 'Add items and start selling!');
    this.router.navigate(["/menu/shop"]); 
  }

  locateMyShop(){
 /*   this.geolocation.getCurrentPosition().then((resp) => {
       console.log(resp.coords.latitude);
       console.log(resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });*/
  } 


}

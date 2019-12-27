import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  DEVICE_TYPE:string=undefined;
  constructor(
    public plt: Platform
    ) {
      if (this.plt.is('ios')) {
        // This will only print when on iOS
        console.log('I am an iOS device!');
        this.DEVICE_TYPE = "iOS";
      }
      else if (this.plt.is('android')) {
        // This will only print when on iOS
        console.log('I am an Android device!');
        this.DEVICE_TYPE="ANDROID";
      }
      else {
        // This will only print when on iOS
        console.log('I am an web browser device!');
        this.DEVICE_TYPE = "BROWSER";
      }
     }

  ngOnInit() {
  }

}

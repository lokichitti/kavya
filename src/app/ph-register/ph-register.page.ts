import { Component, OnInit } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Component({
  selector: 'app-ph-register',
  templateUrl: './ph-register.page.html',
  styleUrls: ['./ph-register.page.scss'],
})
export class PhRegisterPage implements OnInit {

  constructor(private firebase: FirebaseX) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})

export class ShopPage implements OnInit {
  hideToolBar: boolean = true;
  constructor() { }

  ngOnInit() {
    this.hideToolBar = true;
  }

  

}

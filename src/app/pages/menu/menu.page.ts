import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages=[
    {
      title:"Shop",
      url:"/menu/shop"
    },
    {
      title:"Profile",
      url:"/menu/profile"
    },
  ];
  selectedPath='';

  constructor(
    //public menuCtrl: MenuController,
    private router: Router,
  ) 
  {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}

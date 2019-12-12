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
      icon:"home",
      title:"Home",
      url:"/menu/home"
    },
    {
      icon:"basket",
      title:"My shop",
      url:"/menu/shop"
    },
    {
      icon:"basket",
      title:"Orders",
      url:"/menu/orders"
    },
    {
      icon:"person",
      title:"Profile",
      url:"/menu/profile"
    },
  ];
  selectedPath='';

  constructor(
    public menuCtrl: MenuController,
    private router: Router,
  ) 
  {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }
  closeMenu(){
    this.menuCtrl.close();
  }

}

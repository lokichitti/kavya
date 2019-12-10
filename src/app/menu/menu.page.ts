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
      title:"First Page",
      url:"/menu/first"
    },
    {
      title:"Second Page",
      url:"/menu/second"
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

}

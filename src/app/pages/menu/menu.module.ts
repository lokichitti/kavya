import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'',
    component: MenuPage,
    children:[
      { path: 'home', loadChildren: '../home/home.module#HomePageModule'},
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule'},
      { path: 'shop', loadChildren: '../shop/shop.module#ShopPageModule'},
      { path: 'basket', loadChildren: '../basket/basket.module#BasketPageModule' },
      { path: 'orders', loadChildren: '../orders/orders.module#OrdersPageModule' },
      { path: 'search', loadChildren: '../search/search.module#SearchPageModule' },
    ]

  },
  {
    path: '', 
    redirectTo: '/menu/home'

  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}

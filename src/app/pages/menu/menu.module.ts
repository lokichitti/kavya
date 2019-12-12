import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { AuthGuard } from '../../services/user/auth.guard';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const redirectToFirst = redirectUnauthorizedTo(['first']);
const routes: Routes = [
  {
    path:'',
    component: MenuPage,
    children:[
      { path: 'home', loadChildren: '../home/home.module#HomePageModule'},
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule',...canActivate(redirectToFirst)},
      { path: 'shop', loadChildren: '../shop/shop.module#ShopPageModule',...canActivate(redirectToFirst)},
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

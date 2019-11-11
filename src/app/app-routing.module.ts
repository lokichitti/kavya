import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'myshop', loadChildren: './myshop/myshop.module#MyshopPageModule' },
  { path: 'public-shop', loadChildren: './public-shop/public-shop.module#PublicShopPageModule' },
  { path: 'private-shop', loadChildren: './private-shop/private-shop.module#PrivateShopPageModule' },
  { path: 'main-page', loadChildren: './main-page/main-page.module#MainPagePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

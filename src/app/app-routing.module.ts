import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'myshop', loadChildren: './myshop/myshop.module#MyshopPageModule',
    canActivate: [AuthGuard]  },
  { path: 'public-shop', loadChildren: './public-shop/public-shop.module#PublicShopPageModule' },
  { path: 'private-shop', loadChildren: './private-shop/private-shop.module#PrivateShopPageModule',
    canActivate: [AuthGuard]  },
  { path: 'main-page', loadChildren: './main-page/main-page.module#MainPagePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' ,
    canActivate: [AuthGuard]  },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' ,
    canActivate: [AuthGuard]  },
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' ,
    canActivate: [AuthGuard]  },
  { path: 'phone-login', loadChildren: './phone-login/phone-login.module#PhoneLoginPageModule' },
  { path: 'google-maps', loadChildren: './google-maps/google-maps.module#GoogleMapsPageModule' ,
    canActivate: [AuthGuard]  },
  { path: 'phone-register', loadChildren: './phone-register/phone-register.module#PhoneRegisterPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' ,
    canActivate: [AuthGuard]  },
  { path: 'list-users', loadChildren: './list-users/list-users.module#ListUsersPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' ,
  canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

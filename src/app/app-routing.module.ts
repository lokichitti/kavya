import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { AuthGuard } from './services/user/auth.guard';

//keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
const redirectToFirst = redirectUnauthorizedTo(['first']);
const routes: Routes = [
  { path: '', redirectTo: 'menu/home', pathMatch: 'full',},
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  //{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'first', loadChildren: './pages/first/first.module#FirstPageModule' },
  { path: 'google-login', loadChildren: './pages/google-login/google-login.module#GoogleLoginPageModule' },
  { path: 'email', loadChildren: './pages/loginMethod/email/email.module#EmailPageModule' },
  { path: 'google', loadChildren: './pages/loginMethod/google/google.module#GooglePageModule' },
  { path: 'facebook', loadChildren: './pages/loginMethod/facebook/facebook.module#FacebookPageModule' },
  { path: 'phone', loadChildren: './pages/loginMethod/phone/phone.module#PhonePageModule' },
  { path: 'r-phone', loadChildren: './pages/registerMethod/r-phone/r-phone.module#RPhonePageModule' },
  { path: 'r-email', loadChildren: './pages/registerMethod/r-email/r-email.module#REmailPageModule' },
  { path: 'r-google', loadChildren: './pages/registerMethod/r-google/r-google.module#RGooglePageModule' },
  { path: 'r-facebook', loadChildren: './pages/registerMethod/r-facebook/r-facebook.module#RFacebookPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule',},
  { path: 'create-shop', loadChildren: './pages/create-shop/create-shop.module#CreateShopPageModule',...canActivate(redirectToFirst) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
